import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import ts from 'typescript';

const cache = new Map();
const packageRequire = createRequire(import.meta.url);
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

/** Executa módulos TS puros nos testes, sem precisar de um servidor Next.js. */
function loadTs(relativeFile) {
  const absolute = resolve(root, relativeFile);
  if (cache.has(absolute)) return cache.get(absolute);
  const source = readFileSync(absolute, 'utf8');
  const js = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
    fileName: absolute,
  }).outputText;
  const mod = { exports: {} };
  cache.set(absolute, mod.exports);
  const localRequire = (specifier) => {
    if (specifier.startsWith('@/')) return loadTs(`src/${specifier.slice(2)}.ts`);
    if (specifier.startsWith('.')) return loadTs(resolve(dirname(absolute), specifier + '.ts').slice(root.length + 1));
    return packageRequire(specifier);
  };
  // Os arquivos carregados aqui são apenas os módulos internos do projeto.
  const executable = new Function('require', 'module', 'exports', js);
  executable(localRequire, mod, mod.exports);
  return mod.exports;
}

const { contactSubjects, contactData } = loadTs('src/data/contactData.ts');
const { validateContactMessage } = loadTs('src/functions/contactValidation.ts');

const validMessage = {
  name: 'Maria Recruiter',
  email: 'maria@empresa.com.br',
  company: 'Empresa Exemplo',
  subject: contactSubjects[0],
  message: 'Olá! Temos uma oportunidade para Engenharia de Software e gostaria de conversar.',
};

test('destinatário configurado é o e-mail profissional solicitado', () => {
  assert.equal(contactData.recipientEmail, 'andersonengsoft@gmail.com');
});

test('formulário recebe nome, e-mail, empresa, assunto e mensagem válidos', () => {
  const result = validateContactMessage(validMessage);
  assert.equal(result.success, true);
  assert.equal(result.data.email, validMessage.email);
});

test('empresa é opcional, mas campos necessários são validados', () => {
  assert.equal(validateContactMessage({ ...validMessage, company: '' }).success, true);
  const invalid = validateContactMessage({ ...validMessage, name: 'x', email: 'invalido', subject: 'hack', message: 'curta' });
  assert.equal(invalid.success, false);
  assert.deepEqual(Object.keys(invalid.errors).sort(), ['email', 'message', 'name', 'subject']);
});

test('validação remove espaços e rejeita cabeçalhos com quebra de linha', () => {
  assert.equal(validateContactMessage({ ...validMessage, email: ' maria@empresa.com.br ' }).data.email, validMessage.email);
  assert.equal(validateContactMessage({ ...validMessage, name: 'Maria\nBcc: outra@empresa.com' }).success, false);
});

test('envio do contato está configurado para Formspree sem credenciais de Gmail', () => {
  const source = readFileSync(resolve(root, 'src/functions/submitContactForm.ts'), 'utf8');
  const env = readFileSync(resolve(root, '.env.example'), 'utf8');
  assert.match(source, /https:\/\/formspree\.io\/f\/\$\{formId\}/);
  const contactSource = readFileSync(resolve(root, 'src/components/sections/Contact.tsx'), 'utf8');
  assert.match(contactSource, /NEXT_PUBLIC_FORMSPREE_FORM_ID/);
  assert.match(env, /NEXT_PUBLIC_FORMSPREE_FORM_ID=/);
  assert.ok(!existsSync(resolve(root, 'src/app/api/contact/route.ts')));
});
