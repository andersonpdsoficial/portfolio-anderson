import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';

// Transpila apenas o módulo de dados para permitir testar o conteúdo
// sem iniciar o Next.js nem executar os componentes de interface.
function loadPortfolioData(env = {}) {
  const filename = resolve('src/data/portfolioData.ts');
  const source = readFileSync(filename, 'utf8');
  const { outputText, diagnostics } = ts.transpileModule(source, {
    fileName: filename,
    reportDiagnostics: true,
    compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.CommonJS },
  });
  assert.equal(diagnostics?.length ?? 0, 0, 'O arquivo de dados deve ser TypeScript válido');
  const mockModule = { exports: {} };
  const context = vm.createContext({
    module: mockModule,
    exports: mockModule.exports,
    process: { env },
    require: (specifier) => {
      if (specifier === '@/data/contactData') return { contactData: { recipientEmail: 'andersonengsoft@gmail.com' } };
      throw new Error(`Import não esperado: ${specifier}`);
    },
  });
  vm.runInContext(outputText, context, { filename });
  return mockModule.exports.portfolioData;
}

test('projetos têm slug único e rotas URL-safe', () => {
  const { projects } = loadPortfolioData();
  const slugs = projects.map((p) => p.slug);
  assert.equal(new Set(slugs).size, slugs.length);
  for (const slug of slugs) assert.match(slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
});

test('os cases possuem conteúdo mínimo e imagem local existente', () => {
  const { projects } = loadPortfolioData();
  assert.ok(projects.length >= 3);
  for (const project of projects) {
    assert.ok(project.title && project.summary && project.challenge && project.solution);
    assert.ok(project.engineeringDecisions.length > 0);
    assert.ok(project.stack.length > 0);
    assert.ok(existsSync(resolve('public', project.thumbnail.replace(/^\//, ''))));
  }
});

test('as rotas da navegação apontam para seções existentes na home', () => {
  const { navigation } = loadPortfolioData();
  const sections = ['sobre', 'projetos', 'experiencia', 'stack', 'contato'];
  for (const item of navigation) {
    assert.ok(item.href.startsWith('/#'));
    assert.ok(sections.includes(item.href.substring(2)));
  }
});

test('e-mail profissional permanece ativo sem variáveis, mas redes sociais não são inventadas', () => {
  const { identity } = loadPortfolioData();
  assert.equal(identity.links.length, 1);
  assert.equal(identity.email, 'andersonengsoft@gmail.com');
  assert.equal(identity.links[0].href, 'mailto:andersonengsoft@gmail.com');
});

test('links de contato reais são gerados a partir do ambiente', () => {
  const { identity } = loadPortfolioData({
    NEXT_PUBLIC_CONTACT_EMAIL: 'profissional@example.com',
    NEXT_PUBLIC_GITHUB_URL: 'https://github.com/example',
    NEXT_PUBLIC_LINKEDIN_URL: 'https://www.linkedin.com/in/example',
  });
  assert.equal(identity.links.length, 3);
  assert.ok(identity.links.some((link) => link.href === 'mailto:profissional@example.com'));
});

test('galerias possuem imagens locais existentes e links externos quando publicados são seguros', () => {
  const { projects } = loadPortfolioData();
  for (const project of projects) {
    assert.ok(project.gallery?.length >= 1, `Galeria vazia: ${project.slug}`);
    for (const photo of project.gallery) {
      assert.ok(photo.src.startsWith('/projects/'), `Imagem inesperada: ${photo.src}`);
      assert.ok(photo.alt.length > 8);
      assert.ok(existsSync(resolve('public', photo.src.slice(1))));
    }
    for (const href of Object.values(project.links ?? {})) {
      assert.match(href, /^https:\/\//, `Link público requer HTTPS: ${href}`);
    }
  }
});
