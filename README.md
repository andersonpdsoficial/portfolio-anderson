# Portfólio · Anderson Pereira

Portfólio profissional de Engenharia de Software desenvolvido com **Next.js App Router, React 19, TypeScript estrito e Material UI**.

O projeto apresenta minha trajetória profissional, formação acadêmica, competências técnicas, projetos e estudos de caso, com foco em qualidade de software, arquitetura, acessibilidade, experiência do usuário e organização de código.

A aplicação utiliza uma arquitetura baseada em componentes reutilizáveis, separação de responsabilidades e configuração centralizada de temas, dados e metadados.

## 1. Tecnologias utilizadas

### Stack principal

| Tecnologia | Finalidade |
|---|---|
| Next.js 15.5 | Framework, App Router, renderização e geração estática |
| React 19 | Construção da interface |
| TypeScript | Tipagem estática com `strict` |
| Material UI v5 | Componentes, sistema de temas e estilos |
| MUI Icons | Biblioteca de ícones |
| Emotion | Engine de estilização utilizada pelo Material UI |
| Zod | Validação dos dados do formulário |
| Formspree | Processamento externo das mensagens de contato |
| Vercel | Hospedagem e publicação |

### Características da interface

- Layout responsivo para dispositivos móveis, tablets e desktops.
- Alternância entre temas claro e escuro.
- Gradientes, efeitos visuais e microinterações.
- Navegação por âncoras e menu mobile com Drawer.
- Componentes organizados por responsabilidade.
- Animações que respeitam `prefers-reduced-motion`.
- Indicador visual de carregamento inicial.
- Componentes de acessibilidade e navegação por teclado.
- Páginas estáticas para estudos de caso.
- Metadados individuais para projetos.
- Página 404 personalizada.
- Formulário de contato com validação e tratamento de erros.

A apresentação visual é construída com o sistema de estilos `sx`, `ThemeProvider` e componentes Material UI.

Estilos globais específicos são centralizados em `PremiumGlobalStyles`, sem a necessidade de distribuir regras CSS por diversos componentes.

## 2. Requisitos para desenvolvimento

Antes de executar o projeto, instale:

- Node.js em uma versão compatível com Next.js 15.5.
- npm.
- Git, para controle de versão.
- Visual Studio Code ou outro editor compatível com TypeScript.

As versões efetivamente utilizadas devem ser consultadas em `package.json` e no arquivo de lock.

## 3. Instalação e execução

No Windows PowerShell, acesse a pasta do projeto:

```powershell
cd .\portfolio-anderson
```

Instale as dependências conforme o arquivo `package-lock.json`:

```powershell
npm ci
```

Execute o ambiente de desenvolvimento:

```powershell
npm run dev
```

Acesse:

**http://localhost:3000**

### Configuração inicial

Se o arquivo `.env.local` ainda não existir, crie-o a partir do exemplo:

```powershell
if (-not (Test-Path ".env.local")) {
    Copy-Item ".env.example" ".env.local"
}
```

Edite somente os valores necessários.

Nunca publique arquivos de ambiente contendo informações privadas, tokens ou credenciais.

## 4. Variáveis de ambiente

| Variável | Descrição |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Domínio público utilizado em SEO, URLs canônicas, sitemap e Open Graph |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Endereço público de contato |
| `NEXT_PUBLIC_GITHUB_URL` | Perfil público do GitHub |
| `NEXT_PUBLIC_LINKEDIN_URL` | Perfil público do LinkedIn |
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | Identificador do formulário configurado no Formspree |

Exemplo de configuração:

```dotenv
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br
NEXT_PUBLIC_CONTACT_EMAIL=contato@exemplo.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/seu-usuario
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/seu-perfil
NEXT_PUBLIC_FORMSPREE_FORM_ID=seu_form_id
```

**Observação:** valores com o prefixo `NEXT_PUBLIC_` podem ser incorporados ao código entregue ao navegador. Portanto, essas variáveis não devem armazenar credenciais secretas.

O Formspree recebe as mensagens diretamente do navegador. Não são necessárias credenciais SMTP no frontend.

## 5. Arquitetura e organização do projeto

A aplicação adota componentização por funcionalidade e responsabilidade.

Estrutura de referência após as refatorações:

```text
portfolio-anderson/
├── public/
│   └── ...
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── page.styles.ts
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── projetos/
│   │       └── [slug]/
│   │           └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── providers/
│   │   │   │   ├── Providers.tsx
│   │   │   │   ├── MaterialThemeProvider.tsx
│   │   │   │   └── GlobalUI.tsx
│   │   │   ├── header/
│   │   │   ├── footer/
│   │   │   ├── SiteShell.tsx
│   │   │   ├── SkipToContent.tsx
│   │   │   └── PersonJsonLd.tsx
│   │   │
│   │   ├── portfolio/
│   │   │   ├── hero/
│   │   │   ├── about/
│   │   │   ├── featured-projects/
│   │   │   ├── experience/
│   │   │   ├── skills/
│   │   │   ├── contact/
│   │   │   └── not-found/
│   │   │
│   │   ├── projects/
│   │   │   └── project-detail/
│   │   │
│   │   └── ui/
│   │       ├── Reveal.tsx
│   │       ├── EntryLoader.tsx
│   │       └── BackToTop.tsx
│   │
│   ├── config/
│   │   └── seo/
│   │       ├── metadata.ts
│   │       ├── viewport.ts
│   │       ├── structuredData.ts
│   │       └── index.ts
│   │
│   ├── data/
│   │   └── portfolioData.ts
│   │
│   ├── functions/
│   │   └── getSiteUrl.ts
│   │
│   ├── hooks/
│   │   └── useColorMode.tsx
│   │
│   ├── lib/
│   │   └── projects/
│   │       ├── project.queries.ts
│   │       ├── project.metadata.ts
│   │       ├── project.types.ts
│   │       └── index.ts
│   │
│   ├── schemas/
│   │   └── contactSchema.ts
│   │
│   ├── services/
│   │   └── contact/
│   │       ├── contact.service.ts
│   │       ├── contact.errors.ts
│   │       ├── contact.utils.ts
│   │       └── index.ts
│   │
│   ├── styles/
│   │   ├── theme.ts
│   │   └── PremiumGlobalStyles.tsx
│   │
│   └── types/
│       └── portfolio.ts
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

A estrutura acima representa a organização proposta nas componentizações. Os caminhos devem corresponder aos arquivos efetivamente existentes na versão atual do repositório.

## 6. Organização das seções

A página inicial é composta por seis seções principais.

| Seção | Componente | Responsabilidade |
|---|---|---|
| Apresentação | `Hero` | Introdução profissional, chamadas para ação e visual arquitetural |
| Sobre mim | `About` | Apresentação pessoal e trajetória |
| Projetos | `FeaturedProjects` | Projetos selecionados e links para estudos de caso |
| Experiência | `ExperienceTimeline` | Experiência profissional e formação |
| Competências | `Skills` | Tecnologias e ferramentas organizadas por categoria |
| Contato | `Contact` | Formulário, redes sociais e comunicação |

O arquivo `src/app/page.tsx` organiza a ordem de renderização dessas seções, enquanto cada componente mantém seus próprios elementos internos.

### Padrão de componentização

Os componentes maiores são divididos conforme suas responsabilidades.

Exemplo da seção Skills:

```text
skills/
├── Skills.tsx
├── SkillsBackground.tsx
├── SkillsHeader.tsx
├── SkillsIndicators.tsx
├── SkillsGrid.tsx
├── SkillCard.tsx
├── SkillCardHeader.tsx
├── SkillTags.tsx
├── SkillCardFooter.tsx
├── SkillsFooter.tsx
├── skills.styles.ts
├── skills.types.ts
├── skills.constants.ts
└── index.ts
```

Essa organização facilita a manutenção, a reutilização e a revisão isolada dos componentes.

## 7. Sistema de temas

O projeto oferece suporte aos modos claro e escuro utilizando Material UI.

A estrutura de providers é organizada em três responsabilidades:

**`Providers.tsx`**

Define a hierarquia dos providers globais.

**`MaterialThemeProvider.tsx`**

Seleciona e aplica o tema ativo usando `getPortfolioTheme(mode)`.

**`GlobalUI.tsx`**

Registra elementos globais da interface:

- `CssBaseline`
- `PremiumGlobalStyles`
- `EntryLoader`
- `BackToTop`

O hook `useColorMode` gerencia a alternância entre os modos.

A configuração visual central fica em `src/styles/theme.ts`.

### Estilos MUI

Os estilos específicos dos componentes são centralizados em arquivos como:

```text
hero.styles.ts
skills.styles.ts
footer.styles.ts
header.styles.ts
notFound.styles.ts
```

As funções de estilo que recebem o tema são passadas diretamente à propriedade `sx`.

Exemplo:

```tsx
<Box sx={heroStyles.section} />
```

Estilos parametrizados recebem somente os parâmetros exigidos pela própria função:

```tsx
<Paper sx={skillsStyles.card('primary')} />
```

Não se deve executar o objeto de estilos inteiro como uma função.

## 8. Projetos e estudos de caso

Os projetos são definidos em `portfolioData.ts`.

Cada projeto pode conter:

- Identificador e slug.
- Título e resumo.
- Categoria e ano.
- Tecnologias utilizadas.
- Desafio e solução.
- Decisões de engenharia.
- Funcionalidades implementadas.
- Imagem de capa.
- Galeria de imagens.
- Links para demonstração, website e repositório.

As páginas de estudos de caso são acessadas por:

```text
/projetos/[slug]
```

### Geração estática

O Next.js utiliza `generateStaticParams()` para gerar as rotas dos projetos cadastrados.

A opção:

```ts
export const dynamicParams = false;
```

restringe o acesso aos parâmetros previamente definidos.

### Consultas e metadados

A lógica foi separada em:

| Arquivo | Finalidade |
|---|---|
| `project.queries.ts` | Consulta de projetos e relacionados |
| `project.metadata.ts` | Geração de metadados de cada case |
| `project.types.ts` | Tipos da rota e projetos relacionados |
| `page.tsx` | Composição da página dinâmica |

O componente `ProjectDetailContent` permanece responsável pela apresentação do estudo de caso.

## 9. SEO e dados estruturados

O projeto utiliza a Metadata API do Next.js.

Os arquivos de configuração de SEO ficam em:

```text
src/config/seo/
```

### `metadata.ts`

Centraliza:

- Título e descrição do site.
- Palavras-chave.
- Informações de autoria.
- URL canônica.
- Open Graph.
- Twitter/X.
- Diretivas de indexação.

### `viewport.ts`

Define a configuração do viewport e as cores de tema utilizadas pelo navegador.

### `structuredData.ts`

Gera dados estruturados Schema.org do tipo `Person`, incluindo informações profissionais e links públicos válidos.

### `PersonJsonLd.tsx`

Renderiza os dados estruturados no HTML, com serialização segura para JSON-LD.

### Sitemap e robots

As rotas especiais `sitemap.ts` e `robots.ts` são utilizadas para descoberta e indexação do conteúdo, conforme sua configuração.

Em ambientes de preview da Vercel, a configuração de metadados utiliza `VERCEL_ENV` para impedir a indexação de páginas de pré-visualização.

## 10. Formulário de contato

O formulário utiliza Zod para validação e Formspree como serviço externo de recebimento.

### Fluxo

1. O visitante preenche o formulário.
2. Os dados são validados pelo schema.
3. O serviço de contato constrói a requisição HTTP.
4. O navegador envia a mensagem ao Formspree.
5. A aplicação interpreta a resposta.
6. Uma mensagem de sucesso ou erro é apresentada ao visitante.

### Organização do serviço

```text
src/services/contact/
├── contact.service.ts
├── contact.errors.ts
├── contact.utils.ts
└── index.ts
```

**`contact.service.ts`** realiza a comunicação HTTP e controla o tempo limite da requisição.

**`contact.errors.ts`** define a classe `ContactSubmissionError`.

**`contact.utils.ts`** valida o identificador do formulário e interpreta mensagens de erro.

**`contactSchema.ts`** mantém as regras de validação dos dados.

O envio ocorre diretamente ao Formspree, utilizando a configuração pública do formulário.

### Tratamento de erros

O serviço contempla:

- Respostas HTTP de erro.
- Falhas de conexão.
- Tempo limite de requisição.
- Identificador de formulário inválido.
- Mensagens retornadas pelo Formspree.

O formulário deve manter um canal de contato alternativo quando o serviço estiver indisponível ou não configurado.

## 11. Navegação global

O cabeçalho e o rodapé são organizados em componentes independentes.

### Header

Inclui:

- Identidade visual e monograma.
- Navegação desktop.
- Alternância de tema.
- Botão de contato.
- Menu mobile com Drawer.
- Fechamento do menu após navegação.

### Footer

Inclui:

- Identidade profissional.
- Links de navegação.
- GitHub, LinkedIn e e-mail.
- Localização.
- Copyright.
- Botão para retornar ao topo.

O layout global utiliza `SiteShell` para compor:

```text
SkipToContent
Header
Conteúdo da rota atual
Footer
```

## 12. Acessibilidade

O projeto incorpora práticas de acessibilidade na interface.

Entre elas:

- Estrutura semântica de títulos.
- Identificação do conteúdo principal.
- Labels para controles interativos.
- Navegação por teclado.
- Indicação visual de foco.
- Botões com nomes acessíveis.
- Links de navegação identificáveis.
- Respeito à preferência de movimento reduzido.
- Tratamento de elementos puramente decorativos com `aria-hidden`.

O componente `SkipToContent` permite acessar diretamente o elemento:

```html
<main id="conteudo">
```

As páginas devem evitar duplicações desnecessárias do elemento `<main>`.

## 13. Página 404 personalizada

O projeto possui uma página de erro com identidade visual consistente com o restante da aplicação.

A entrada permanece em:

```text
src/app/not-found.tsx
```

A apresentação visual é organizada em componentes independentes, incluindo:

- Fundo decorativo.
- Identificação do erro.
- Ilustração 404.
- Mensagem explicativa.
- Botões de navegação.
- Informação técnica HTTP 404.
- Assinatura visual.

As rotas inexistentes exibem a página personalizada, respeitando o funcionamento do App Router.

## 14. Imagens e recursos estáticos

As imagens do projeto ficam em `public/`, com caminhos referenciados pelos dados dos projetos.

O projeto utiliza `next/image` nos componentes que exigem tratamento e otimização de imagens.

Recomendações:

- Utilizar nomes de arquivo descritivos.
- Informar textos alternativos relevantes.
- Definir dimensões ou contêineres compatíveis com o layout.
- Evitar imagens excessivamente pesadas.
- Manter galerias responsivas.
- Não incluir credenciais ou dados sensíveis nos arquivos públicos.

## 15. Qualidade e validação

O TypeScript deve permanecer configurado em modo estrito.

### Verificação de tipos

```powershell
npx tsc --noEmit
```

### Lint

```powershell
npx eslint .
```

### Testes

Caso o projeto possua o script `test` configurado:

```powershell
npm run test
```

### Build de produção

```powershell
npm run build
```

### Execução de produção

Após gerar o build:

```powershell
npm run start
```

Os comandos `npm run typecheck` e `npm run test` também podem ser utilizados quando estiverem definidos no `package.json`.

A existência e a cobertura dos testes automatizados devem ser confirmadas no repositório.

### Verificações recomendadas

- Ausência de erros TypeScript.
- Ausência de erros de lint.
- Compilação de produção.
- Navegação entre as seções.
- Funcionamento do modo claro/escuro.
- Abertura e fechamento do Drawer.
- Renderização dos projetos.
- Navegação para estudos de caso.
- Exibição da página 404.
- Validação e envio do formulário.
- Responsividade.
- Integridade de imagens e links.
- Funcionamento dos elementos de acessibilidade.

## 16. Publicação na Vercel

O projeto foi estruturado para publicação em ambiente compatível com Next.js.

### Procedimento

1. Enviar o código-fonte ao repositório Git.
2. Importar o repositório na Vercel.
3. Configurar as variáveis de ambiente.
4. Confirmar os comandos de instalação e build.
5. Realizar o deploy.
6. Configurar o domínio definitivo.
7. Verificar o site publicado.

Após a publicação, validar:

- URLs canônicas.
- Open Graph.
- Twitter/X.
- Sitemap.
- Robots.
- Links de projetos.
- Imagens.
- Formulário Formspree.
- Tema claro/escuro.
- Exibição da página 404.

A variável `NEXT_PUBLIC_SITE_URL` deve refletir o domínio público utilizado na produção.

## 17. Controle de versão

Os seguintes arquivos e diretórios normalmente não devem ser versionados:

```gitignore
node_modules/
.next/
out/
*.tsbuildinfo

.env.local
.env.*.local
```

O `.gitignore` também deve contemplar outros arquivos temporários produzidos pelas ferramentas instaladas.

Não é necessário manter múltiplas cópias de backup do frontend a cada refatoração. O histórico do Git pode ser utilizado para registrar alterações e recuperar versões anteriores.

Antes de remover arquivos antigos, confirme que todas as importações foram atualizadas e que o projeto compila corretamente.

## 18. Princípios de organização

O desenvolvimento do portfólio segue os seguintes princípios:

**Componentização por responsabilidade**

Componentes visuais devem possuir responsabilidades claras, evitando arquivos excessivamente extensos.

**Separação entre dados e apresentação**

Os textos, projetos e links permanecem centralizados em `portfolioData`, enquanto os componentes cuidam da interface.

**Tipagem estrita**

Props, modelos de dados, serviços e retornos de funções devem utilizar tipos explícitos ou inferidos com segurança.

**Estilização consistente**

O tema global e os estilos `sx` devem ser priorizados para garantir coerência visual.

**Server Components quando possível**

Rotas, layouts e operações de composição que não exigem interação no navegador podem permanecer como Server Components.

**Client Components quando necessário**

Estado interativo, eventos do navegador, controles de tema e formulários devem utilizar Client Components.

**Manutenibilidade**

O código deve facilitar futuras melhorias sem exigir alterações em arquivos não relacionados.

**Acessibilidade e responsividade**

Os componentes devem funcionar adequadamente em diferentes tamanhos de tela e modalidades de interação.

---

## Autor

**Anderson Pereira da Silva**

Engenheiro de Software · Desenvolvedor Full Stack

Porto Velho, Rondônia — Brasil

Projetando software com intenção, qualidade e atenção aos detalhes.

---

## Licença

O código-fonte, os conteúdos e os recursos visuais deste portfólio não possuem uma licença de reutilização explicitamente definida neste documento. Consulte o repositório antes de reutilizá-los.