# Novi Sensi

Landing page em português para os serviços de Free Fire da Novi: sensi de
emulador, painel de sensi e otimização mobile para Android/iOS e otimização
de emulador via AnyDesk.

## Desenvolvimento

Requisitos: Node.js 22.12 ou superior e npm. Ambiente validado com Node.js
24.19.0 e npm 11.9.0.

```bash
cd /workspace/landingpage97
npm ci
npm run dev -- --port 5173 --strictPort
```

O servidor de desenvolvimento usa a porta 5173. Utilize o checkout existente;
cada tarefa na nuvem já tem seu próprio ambiente isolado, sem necessidade de
criar um worktree.

## Build de produção

```bash
npm run build
```

Os arquivos estáticos são gerados em `dist/`. Para testar o build:

```bash
npm run preview -- --port 4173 --strictPort
```

O build pode ser hospedado em um serviço de sites estáticos. Nenhum deploy,
publicação ou envio ao GitHub é executado por estes comandos.

## Arquivo independente para visualizar

```bash
npm run build:standalone
```

O arquivo `exports/novi-sensi.html` reúne a página, o JavaScript, o CSS,
as fontes e o ícone em um único HTML. Baixe o arquivo e abra em um navegador
atual. Ele não precisa de Node.js nem de arquivos auxiliares para renderizar;
o acesso ao Discord continua exigindo internet. O arquivo `index.html` da raiz
é a entrada de desenvolvimento e deve ser usado com o servidor Vite.

O build padrão usa caminhos relativos, permitindo hospedar `dist/` também em
uma subpasta. Após mudar o conteúdo, gere o HTML novamente para atualizar a
cópia independente.

## Conteúdo e compra

- `src/content.js`: convite do Discord, descrições, modalidades de entrega e FAQ.
- `src/main.jsx`: seções, navegação mobile e detalhes de cada serviço.
- `src/styles.css`: identidade grafite com verde-lima, tipografia japonesa
  decorativa fosca e layout responsivo.
- `src/assets/fonts/`: subconjunto local Noto Sans JP, licença e origem da fonte.
- `index.html`: título e descrição para mecanismos de busca.
- `public/favicon.svg`: ícone da marca.

O convite público do Discord já está configurado. Todos os botões de compra
e agendamento levam ao servidor; os cards primeiro abrem os detalhes do serviço.
Valores e pagamentos são tratados no Discord. Não há checkout, cobrança,
liberação automática ou integração com o AnyDesk neste site.

A sensi de emulador e o painel mobile são apresentados como liberados na hora
após confirmação do pagamento. A otimização de emulador exige agendamento.
As condições e a compatibilidade são confirmadas no Discord.

O projeto não contém telefone, link de WhatsApp, formulário de coleta,
analytics ou banco de dados. Não adicione o telefone do responsável ao código,
às URLs ou a variáveis públicas de build. As fontes são hospedadas pelo próprio
site. O painel ilustrado no topo é uma arte conceitual da Novi; não representa
captura do produto nem reproduz os painéis de outra marca.

Todas as seções têm fundo escuro, incluindo os blocos de apresentação e
comunidade. Os caracteres japoneses são apenas decoração: não capturam cliques
e ficam fora da leitura por tecnologias assistivas. A fonte japonesa é local e
também está incluída no HTML independente.

As animações incluem entrada das seções ao rolar, flutuação da arte e movimentos
nos botões e cards. O rodapé contém o controle **Pausar animações**. O site
respeita a preferência de movimento reduzido do sistema e mantém o conteúdo
visível quando o navegador não oferece `IntersectionObserver`.

## Validação realizada

- Instalação reproduzível com `npm ci` e build de produção concluídos.
- Carregamento no Chromium sem erros JavaScript ou requisições externas para fontes.
- Layout verificado em 320, 375, 390, 640, 768, 850, 1024, 1440 e 1920 pixels.
- Detalhes dos três serviços, regras de entrega e destino dos links do Discord.
- Menu mobile, FAQ, fechamento dos modais por Escape e retorno de foco.
- Ausência de telefone, WhatsApp e identificação da marca anterior na página.
- HTML independente renderizado offline, com fontes e interações, e build
  servido em subpasta sem erros de carregamento de recursos.
- Novos fundos escuros e contraste dos textos principais, animações em execução,
  pausa/retomada e movimento reduzido antes e depois do carregamento.
- Fonte japonesa incluída na exportação, sem requisições externas.

Esses testes verificam a página e seus links. Não verificam validade/expiração
do convite no Discord, pagamentos, acesso aos produtos ou atendimentos externos.
