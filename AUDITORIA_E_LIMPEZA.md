# Auditoria e limpeza — Portfólio Anderson

## Escopo e preservação

A revisão partiu do arquivo ZIP recebido. Conteúdo profissional, projetos, experiências, dados de contato e a estrutura das rotas foram preservados. As alterações foram limitadas ao escopo solicitado: apresentação, responsividade, acessibilidade, navegação, animações, reutilização de componentes, organização de funções/validações, dependências e remoção de arquivos ociosos.

**Stack mantida:** Next.js 15 (App Router), TypeScript estrito, Material UI v5. React, Emotion e MUI Icons são dependências de funcionamento. O Zod permanece exclusivamente para validação. O Framer Motion foi removido: efeitos de entrada e hover usam Material UI/CSS-in-JS.

## Pontos corrigidos

| Área | Problema encontrado | Tratamento aplicado |
| --- | --- | --- |
| Página inicial | Espaços verticais grandes entre seções | Padding e gaps reduzidos, sem reordenar conteúdo |
| Sobre mim | Vários parágrafos mostrados como bloco único | Renderização em parágrafos, largura e tipografia ajustadas |
| Experiência | Spread da **função** de plano de fundo em vez do resultado | Background aplicado com `sx={(theme) => ({...sectionBackground(theme)})}` |
| Projetos | Hover duplicado e thumbnails com corte | Hover unificado, miniaturas `contain`, cantos arredondados e gradientes reforçados |
| Galeria | Molduras pouco integradas | Bordas e sombras com o tom do tema, zoom reduzido e `prefers-reduced-motion` |
| Case | Seções excessivamente separadas | Espaçamentos e molduras ajustados |
| Contato | Formulário com `async/await` e helper de erros dentro do componente | Envio tipado em `functions/submitContactForm.ts` com Promises; Zod mantido em `schemas/` |
| Navegação | Ausência de botão flutuante contextual | `BackToTop.tsx` com MUI `Fab`, teclado, tooltip e movimento reduzido |
| Entrada/recarregamento | Ausência de sinal visual de entrada | `EntryLoader.tsx`, feedback breve; **sem forçar recarga** |
| Animações | Dependência de `framer-motion` fora da stack definida | `Reveal.tsx` reutilizável via IntersectionObserver + MUI `sx` |
| Projeto Next.js 15 | Rotas com `async` apesar da preferência por funções tipadas sem `async/await` | `use(params)` com React 19 e `params.then` nos metadados |
| CSS antigo | Dois arquivos CSS não importados no layout | Removidos do código-fonte entregue; a estilização ativa permanece em MUI `sx`/GlobalStyles |
| Testes | Loader de testes não resolvia `@/` e pacote Zod | Loader corrigido, testes de validação funcionando |
| Configuração de contato | `.env.example` e README documentavam SMTP/Resend já removidos | Atualizados para o Formspree realmente utilizado |

## Arquivos e pastas a excluir na sua cópia local

**Arquivos de código/recurso legado confirmadamente dispensáveis:**

- `src/app/globals.css` — não era importado; estilo global migrado para MUI.
- `src/styles/premium.css` — CSS legado não importado; estilos migrados para os componentes.
- `src/components/ui/SectionHeading.tsx` — nenhum componente o importa; usava HTML e classes legadas.
- `src/types/contactMessage.ts` — interface duplicada, não importada; o tipo agora é inferido do Zod.
- `public/projects/reservas.svg` — imagem não referenciada.
- `ANALISE_REFERENCIA.md` — material comparativo antigo, sem uso na aplicação.
- `src/lib/contactValidation.ts` — **substituído** por `src/functions/contactValidation.ts`.
- `src/lib/site.ts` — **substituído** por `src/functions/getSiteUrl.ts`.

**Arquivos/pastas de build que NÃO devem estar dentro do ZIP/repositório:**

- `.next/` — cache/saída de build; reconstruído pelo Next.js.
- `node_modules/` — pacotes instalados; recriados com `npm ci`.
- `tsconfig.tsbuildinfo` e `*.tsbuildinfo` — caches de checagem.

**Não exclua** `.env.local` da sua instalação funcional. Ele pode conter configurações suas; foi simplesmente **omitido do ZIP de entrega** para evitar vazamento de dados.

Não foram criadas pastas de backup ou versões paralelas no projeto.

## Componentização e tipagem

- `src/components/ui/Reveal.tsx`: animações de entrada compartilhadas.
- `src/components/ui/EntryLoader.tsx`: sinalização inicial de carregamento.
- `src/components/ui/BackToTop.tsx`: retorno acessível ao topo.
- `src/functions/projectVisuals.ts`: cores de projeto e formatação de índices reutilizadas nos cards, cases e galerias.
- `src/functions/isPublicUrl.ts`: validação de URL externa de cases.
- `src/functions/contactValidation.ts`: mapeamento tipado do Zod para campos de formulário.
- `src/functions/submitContactForm.ts`: transporte Formspree e tratamento dos erros.
- `src/functions/getSiteUrl.ts`: URL de metadados, sitemap e robots.

## Verificações executadas

- `tsc --noEmit --incremental false`: **aprovado**, sem erros.
- `node --test tests/*.test.mjs`: **11/11 testes aprovados**.
- Verificação de referências: nenhum import ativo de `framer-motion`, `nodemailer`, `globals.css`, `premium.css` ou funções `async`/`await` no código `src/`.
- **Build de produção NÃO concluído neste ambiente**: compilação tentou baixar `@next/swc-linux-x64-gnu` e o acesso ao registro NPM estava indisponível (`getaddrinfo EAI_AGAIN`). O compilador nativo de Windows incluído no ZIP original não funciona no Linux. Isso não é uma falha observada no código TypeScript; o build precisa ser verificado em seu PC.

### Executar no PowerShell (pasta atual do projeto)

```powershell
npm ci
npm run typecheck
npm run test
npm run build
npm run dev
```

Os testes e a checagem de tipos não substituem uma revisão visual no navegador. Verifique em especial mobile (360–430px), tablet (768px), desktop (1280px), alternância Light/Dark, links por âncoras e a galeria com teclado.
