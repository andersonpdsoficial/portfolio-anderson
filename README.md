# Portfólio · Anderson Pereira

Portfólio de Engenharia de Software com arquitetura Next.js App Router, TypeScript estrito e Material UI v5. Interface responsiva, modo claro/escuro e páginas de estudos de caso estáticas.

## Stack principal

- Next.js 15.5 (App Router) + React 19
- TypeScript (`strict`)
- Material UI v5, MUI Icons e a integração Emotion exigida pelo MUI
- Zod somente como biblioteca de validação do formulário (em `src/schemas/`)

Gradientes, transições e efeitos visuais usam o `sx`, `ThemeProvider` e componentes do MUI; não é necessário CSS global ou Framer Motion.

## Executar (PowerShell)

```powershell
cd .\portfolio-anderson
npm ci
npm run dev
```

Navegue para `http://localhost:3000`. Se for a primeira configuração e **ainda não existir** `.env.local`, copie o exemplo:

```powershell
Copy-Item .env.example .env.local
```

Edite `.env.local` somente com os valores reais. Nunca publique esse arquivo no Git, envie por ZIP ou cole chaves privadas em código.

## Variáveis de ambiente

| Chave | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Endereço público para SEO, sitemap e OpenGraph |
| `NEXT_PUBLIC_CONTACT_EMAIL` | E-mail mostrado no portfólio (há padrão em `contactData.ts`) |
| `NEXT_PUBLIC_GITHUB_URL` | Link real do GitHub (opcional) |
| `NEXT_PUBLIC_LINKEDIN_URL` | Link real do LinkedIn (opcional) |
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | ID de formulário configurado no Formspree |

O formulário envia diretamente ao Formspree; sem o ID, exibe uma mensagem de configuração e mantém o e-mail direto. O backend do Formspree é externo, portanto nunca informe credenciais SMTP na aplicação cliente.

## Organização do código

- `src/app/`: rotas, layout, metadados, sitemap e robots.
- `src/components/sections/`: seções da página inicial.
- `src/components/projects/`: cards, página visual de cases e galeria.
- `src/components/layout/`: cabeçalho, rodapé e providers.
- `src/components/ui/`: animação reutilizável, loader de entrada e seta flutuante.
- `src/functions/`: funções de validação, envio de contato, formatação e URLs.
- `src/schemas/`: schemas Zod.
- `src/data/`: textos, links e dados tipados, sem estilos visuais.
- `src/styles/`: tema e `GlobalStyles` do MUI.
- `src/types/`: interfaces e tipos TypeScript.
- `public/`: imagens e outros recursos estáticos usados pelo site.

As imagens usam `next/image`. Componentes visuais usam MUI e `sx`. A entrada/recarregamento completo mostra um indicador breve; **não há recarregamento forçado**.

## Validar

```powershell
npm run typecheck
npm run test
npm run build
```

O lint depende da versão do Next/eslint instalada; a validação recomendada é usar os comandos acima. Os testes verificam dados dos projetos, imagens, links e o formulário.

## Publicação

Configure as mesmas variáveis na Vercel. `node_modules/`, `.next/`, `*.tsbuildinfo` e `.env.local` não são código-fonte e não devem ser versionados. O arquivo `.gitignore` já contempla esses itens.

O relatório `AUDITORIA_E_LIMPEZA.md` documenta as alterações e os arquivos não necessários na versão atual.
