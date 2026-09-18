# 👓 QÓculos Outlet São Vicente - Landing Page Institucional

Website institucional moderno, altamente responsivo e focado em **alta conversão local (CRO)** para a unidade física da **QÓculos Outlet São Vicente**.

---

## 🌐 Links do Projeto Online
- **Repositório GitHub:** [https://github.com/cecatobaep/qoculos-outlet-sao-vicente](https://github.com/cecatobaep/qoculos-outlet-sao-vicente)
- **Deploy no Netlify:** [https://beautiful-daifuku-4cb80d.netlify.app](https://beautiful-daifuku-4cb80d.netlify.app)
  - *Senha de visualização temporária:* `My-Drop-Site`
  - *Link para vincular à sua conta Netlify (Claim):* [Vincular Site no Netlify](https://app.netlify.com/drop/beautiful-daifuku-4cb80d#drop_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3ODk3NTIwMjEsImV4cCI6MTc4OTc1NTYyMSwiaXNzIjoiTmV0bGlmeSIsInNlc3Npb25faWQiOiIyYWIzMDc5NC02ZjlmLTRjN2UtOTVlNC04NTdjMjg5MWFiMDUifQ.XgjcpfckhWY4gAyal_7x6GZYrbNtJr7_VpHtKvosOUs)

---

## 📍 Informações Oficiais Integradas
- **Unidade:** QÓculos Outlet São Vicente
- **Endereço:** Rua Jacob Emmerich, 380 - Loja 02, Centro, São Vicente - SP, CEP 11310-070
- **Horário de Funcionamento:**
  - Segunda a Sexta: 09h00 às 18h30
  - Sábado: 09h00 às 15h00
  - Domingo: Fechado
- **Telefone / WhatsApp Oficial:** [(13) 99711-3701](https://wa.me/5513997113701)
- **Instagram:** [@qoculosoutletsaovicente](https://www.instagram.com/qoculosoutletsaovicente)
- **Proposta de Valor:** Marcas consagradas nacionais e importadas (Ray-Ban, Oakley, Vogue, Armani, HB) com até 70% de desconto real de outlet, garantia de procedência, laboratório digital de montagem rápida e agendamento prático de exame de vista.

---

## 🚀 Tecnologias & Engenharia de Frontend Aplicadas

1. **HTML5 Semântico Avançado:**
   - Estruturação semântica com `<header>`, `<main>`, `<section>`, `<article>`, `<details>`, `<footer>`.
   - Microdados estruturados **Schema.org (Optician / LocalBusiness)** para indexação prioritária no Google e no Google Maps.
   - Metatags Open Graph completas para pré-visualização refinada ao compartilhar o link no WhatsApp e redes sociais.

2. **UI/UX & Design Tokens (Tailwind CSS + Custom CSS):**
   - Paleta de cores inspirada em óticas de alto padrão: tons neutros sofisticados (`#0b1329`, `#162447`), dourado champanhe (`#c99738`) e detalhes em verde oficial WhatsApp (`#25d366`).
   - Tipografia refinada via Google Fonts: **Plus Jakarta Sans** (legibilidade e elegância) e **Outfit** (impacto visual nos títulos).
   - Ícones SVG ultraleves e acessíveis com a biblioteca **Lucide Icons**.

3. **Performance & Prevenção de CLS (Core Web Vitals):**
   - Imagens responsivas com `srcset`, tamanhos pré-definidos (`sizes`), `aspect-ratio` fixo em CSS (evita Cumulative Layout Shift).
   - Carregamento assíncrono e preguiçoso (`loading="lazy"`, `decoding="async"`) nas seções secundárias e prioridade alta (`fetchpriority="high"`) na imagem principal do Hero.

4. **Arquitetura Modular (Clean Code):**
   - `index.html`: Layout e estrutura semântica.
   - `assets/css/custom.css`: Design tokens, animações suaves de entrada, efeitos de glassmorphism e scrollbar.
   - `assets/js/catalog-data.js`: Dados dinâmicos de produtos (fácil para adicionar novos modelos, fotos e preços sem tocar na marcação).
   - `assets/js/main.js`: Lógica de renderização dos produtos, filtros por categoria, modal de agendamento acessível e integração inteligente com o WhatsApp.

5. **Mecanismos de Alta Conversão:**
   - **Hero Section Dupla:** CTAs orientadas para o agendamento do exame e catálogo.
   - **Modal Interativo:** Formulário simplificado de agendamento que gera uma mensagem personalizada e direciona para o WhatsApp da unidade em 2 cliques.
   - **Botão Flutuante de WhatsApp:** Pulsante e visível em todas as telas.
   - **Barra de Ação Rápida Mobile:** Fixada no rodapé em smartphones (Ligar, Como Chegar, Agendar Exame, WhatsApp).
   - **Mapa Local Integrado:** Embed do Google Maps exato da R. Jacob Emmerich, 380 com rota em 1 clique.

---

## 💻 Como Visualizar e Testar

### Opção 1: Visualização Imediata (Sem Instalação)
Basta dar um duplo clique no arquivo `index.html` ou abri-lo diretamente em qualquer navegador (Google Chrome, Edge, Safari, Firefox).

### Opção 2: Servidor Local de Desenvolvimento
Caso queira rodar um servidor local com live-reload ou suporte a rede:
```bash
npm start
# ou
npx serve . -p 3000
```
Acesse em: `http://localhost:3000`

---

## 📱 Visualização Responsiva Testada
- **Mobile Pequeno / Médio:** 375px a 428px (iPhone SE, iPhone 14/15, Samsung Galaxy)
- **Tablets:** 768px a 1024px (iPad Mini, iPad Air)
- **Desktop / Widescreen:** 1280px a 1920px+
