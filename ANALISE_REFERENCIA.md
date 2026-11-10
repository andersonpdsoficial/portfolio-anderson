# Análise do ZIP de referência

**Arquivo examinado:** `matheusmisumoto.dev.zip` (659 entradas, aproximadamente 52 MB descompactados).

O material é um **espelhamento estático** de um site WordPress (tema `evolution`), gerado por extensão de download de páginas; **não contém o repositório original do tema ou a árvore de código-fonte React/Next.js**. Há centenas de HTMLs e ativos (CSS/JS, fontes e imagens), incluindo material de blog e páginas externas baixadas.

## Elementos encontrados

| Referência | Características observadas | Implementação nova |
|---|---|---|
| `index.html` | Hero/apresentação, Skills & Tools, projetos, contato | `sections/Hero`, `About`, `Skills`, `FeaturedProjects`, `Contact` |
| `resume.html` | Experiência, formação e competências | `ExperienceTimeline`, `education` e `experiences` no arquivo de dados |
| `projetos.html` | Catálogo e links dos projetos | Cards tipados e `/projetos/[slug]` com SEO individual |
| `about.html` | Versão em inglês da apresentação | Estrutura pronta para futura internacionalização (não inventada agora) |
| `blog.html` | Publicações sobre tecnologia | Possível módulo futuro de artigos com MDX; fora do MVP para evitar posts fictícios |
| `talks.html` | Palestras e participações | Possível extensão futura se houver palestras próprias verificadas |
| `contato.html` | Formulário e redes sociais | Links profissionais configuráveis sem formulário fictício |

## Decisões de modernização

1. Abandonar dependência do WordPress estático para o portfólio e construir o produto no **Next.js App Router** com TypeScript.
2. Criar linguagem visual original: **tipografia editorial, painéis de arquitetura, cards de cases, superfícies translúcidas e contraste alto**, com light/dark.
3. Tornar toda informação pública editável em **`src/data/portfolioData.ts`**, com contratos em `src/types/portfolio.ts`.
4. Adicionar páginas de projetos com narrativa técnica (contexto, desafio, solução, decisões, escopo), que interessam a recrutadores e tech leads.
5. Preservar acesso e performance: imagens vetoriais locais, `next/image`, microinterações discretas e `prefers-reduced-motion`.
6. Implementar SEO integrado: OpenGraph, metadados por rota, JSON-LD, `robots.txt`, `sitemap.xml`.
7. **Não reutilizar imagens pessoais, textos ou código de terceiros** extraídos do ZIP. As capas dos cases são ilustrações originais, identificadas como conceituais.

## A confirmar antes da publicação

- Links verdadeiros de GitHub, LinkedIn e e-mail de contato.
- URLs de demos e repositórios que possam ser divulgados.
- Instituições/anos da graduação e pós-graduação, se desejar detalhar.
- Autorização para mostrar imagens ou detalhes de sistemas institucionais.
- Fotos próprias, currículo em PDF e métricas verificadas para enriquecer o portfólio.
