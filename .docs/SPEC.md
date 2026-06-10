# Especificação de Projeto — Redesign Website Rasp Automação 2026

## Objetivo

Refatorar completamente o website da **Rasp Automação**, transformando-o em uma plataforma digital industrial premium alinhada às tendências de UX/UI de 2026, preservando integralmente a identidade visual da empresa, incluindo:

* Logotipo atual
* Vermelho institucional
* Laranja institucional
* Posicionamento no segmento industrial
* Reconhecimento visual da marca

O novo website deverá transmitir:

* Credibilidade
* Engenharia de alto padrão
* Inovação tecnológica
* Robustez industrial
* Confiança para geração de negócios

---

# Tecnologias Obrigatórias

## Front-end

* HTML5 Semântico
* Tailwind CSS
* CSS Puro (Custom CSS)
* JavaScript Vanilla (ES6+)

## Restrições

* Não utilizar frameworks pesados
* Não utilizar dependências desnecessárias
* Priorizar performance e manutenção

## Arquitetura

* Código modular
* Componentização visual
* Organização por responsabilidades
* Fácil escalabilidade

---

# Diretrizes de Design

## Preservar

### Branding

* Logo atual da empresa
* Vermelho institucional
* Laranja institucional

### Posicionamento

* Engenharia industrial
* Automação industrial
* Soluções elétricas
* Montagem de painéis

---

## Modernizar

### Layout

* Full Width
* Grid responsivo
* Espaçamento premium
* Hierarquia visual forte

### Aparência

* Design industrial premium
* Visual corporativo moderno
* Elementos minimalistas
* Acabamento sofisticado

### Interações

* Microinterações
* Hover effects avançados
* Animações suaves
* Feedback visual consistente

---

# Identidade Visual

## Paleta Principal

```css
--rasp-red: #c1121f;
--rasp-red-dark: #8f0e17;
--rasp-orange: #f28c28;

--gray-100: #f7f7f7;
--gray-200: #ececec;
--gray-700: #444444;
--gray-900: #1f1f1f;

--white: #ffffff;
```

---

# Tipografia

## Fontes Principais

### Inter

Uso:

* Textos
* Interfaces
* Navegação

### Poppins

Uso:

* Títulos
* Destaques

### Montserrat

Uso:

* Headings estratégicos
* CTAs
* Números e indicadores

---

# Estrutura da Home Page

---

## 1. Header Premium

### Componentes

* Logo à esquerda
* Menu centralizado
* Botão WhatsApp destacado
* Menu responsivo
* Header sticky

### Efeitos

* Glassmorphism discreto
* Blur suave
* Transição ao scroll

---

## 2. Hero Section

### Layout

Background:

* Imagem industrial real
* Equipamentos
* Painéis elétricos
* Automação industrial

### Overlay

* Escuro
* Gradiente premium

### Conteúdo

#### Headline

Exemplo:

> Soluções Inteligentes em Automação e Engenharia Industrial

#### Subheadline

Texto institucional focado em confiança e tecnologia.

### CTAs

Primário:

* Solicitar orçamento

Secundário:

* WhatsApp

---

## 3. Sobre a Empresa

### Conteúdo

* História
* Experiência
* Missão
* Visão
* Valores

### Diferenciais

* Equipe especializada
* Engenharia própria
* Atendimento consultivo
* Projetos personalizados

### Layout

* Duas colunas
* Imagem institucional
* Timeline moderna

---

## 4. Serviços

### Layout

Grid responsivo

### Cards Modernos

Cada card deve conter:

* Ícone SVG
* Título
* Descrição
* Hover premium

### Serviços

#### Instalações Elétricas

Projetos e execuções industriais.

#### Controle e Automação

Sistemas inteligentes para processos industriais.

#### Montagem de Painéis

Painéis elétricos e CCMs.

#### Projetos Elétricos

Desenvolvimento completo de engenharia.

#### Manutenção Industrial

Preventiva e corretiva.

#### Programação CLP e IHM

Integração e controle de processos.

---

## 5. Indicadores da Empresa

### Seção Números

Exibição animada.

Indicadores:

* Projetos realizados
* Painéis montados
* Anos de experiência
* Clientes atendidos

### Recursos

* Counter Animation
* Scroll Trigger

---

## 6. Tecnologias Utilizadas

### Logos dos Parceiros

Exibir em carrossel ou grid:

* Siemens
* WEG
* ABB
* Schneider Electric
* Allen Bradley
* Mitsubishi Electric

### Efeito

* Hover sofisticado
* Escala suave
* Tons monocromáticos com destaque ao passar o mouse

---

## 7. Cases de Sucesso

### Estrutura

Cards modernos contendo:

* Imagem
* Desafio
* Solução
* Resultado

### Recursos

* Lazy loading
* Imagens WebP

### Objetivo

Gerar prova social.

---

## 8. Diferenciais

### Cards Premium

#### Engenharia Especializada

Equipe altamente qualificada.

#### Atendimento Ágil

Resposta rápida e eficiente.

#### Soluções Personalizadas

Projetos sob medida.

#### Segurança Operacional

Conformidade com normas técnicas.

---

## 9. CTA Final

### Objetivo

Conversão.

### Visual

* Fundo vermelho institucional
* Alto contraste
* Headline impactante

### CTA

Solicite um orçamento agora.

---

## 10. Contato

### Formulário

Campos:

* Nome
* Empresa
* Telefone
* E-mail
* Mensagem

### Recursos

* Validação JavaScript
* Máscara de telefone
* Feedback visual
* Integração WhatsApp

### Informações

* Endereço
* Telefone
* WhatsApp
* E-mail

### Mapa

Google Maps incorporado.

---

# Funcionalidades UX

## Navegação

* Scroll suave
* Menu sticky
* Scrollspy
* Links âncora

## Conversão

* WhatsApp flutuante
* CTA persistente
* Formulário simplificado

## Utilidade

* Botão voltar ao topo
* Indicador de carregamento
* Feedback visual

---

# Responsividade

## Desktop

1440px+

### Características

* Máximo aproveitamento visual
* Grid amplo

---

## Notebook

1024px+

### Características

* Ajustes de espaçamento
* Navegação otimizada

---

## Tablet

768px+

### Características

* Layout híbrido
* Menus colapsáveis

---

## Mobile

320px+

### Características

* Mobile First
* Navegação simplificada
* CTAs acessíveis

---

# Performance

## Otimizações

### Imagens

* Formato WebP
* Compressão otimizada
* Lazy Loading

### CSS

* Tailwind compilado
* CSS minificado

### JavaScript

* Modular
* Carregamento deferido

### Metas

* Lighthouse ≥ 95
* CLS mínimo
* LCP otimizado

---

# SEO

## Estrutura

* HTML semântico
* Heading hierarchy correta

### Meta Tags

* Title otimizado
* Meta Description
* Keywords estratégicas

### Social

Open Graph:

* Facebook
* LinkedIn
* WhatsApp

Twitter Cards

---

## Arquivos

### Sitemap

```text
/sitemap.xml
```

### Robots

```text
/robots.txt
```

---

## Schema.org

Implementar:

### LocalBusiness

### Organization

### Service

### ContactPoint

---

# Acessibilidade

## Padrão

WCAG AA

### Implementações

* Contraste adequado
* Labels corretos
* Navegação por teclado
* Focus states
* ARIA Labels
* ARIA Roles
* Estrutura semântica

---

# Arquitetura de Componentes

```text
Header
├── Logo
├── Navigation
├── WhatsApp CTA

Hero
├── Background
├── Overlay
├── CTA Primary
├── CTA Secondary

About

Services
├── Service Card

Numbers
├── Counter

Technologies
├── Brand Grid

Cases
├── Case Card

Differentials
├── Feature Card

CTA Final

Contact
├── Form
├── Contact Info
├── Map

Footer
├── Navigation
├── Social Links
├── Copyright
```

---

# Estrutura de Arquivos

```text
/
│
├── index.html
│
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── custom.css
│   │
│   ├── js/
│   │   ├── main.js
│   │   ├── form.js
│   │   ├── counters.js
│   │   └── animations.js
│   │
│   ├── images/
│   │   ├── hero.webp
│   │   ├── services/
│   │   ├── cases/
│   │   └── brands/
│   │
│   └── icons/
│
├── sitemap.xml
├── robots.txt
└── manifest.json
```

---

# Configuração Tailwind

## Extensão de Cores

```javascript
theme: {
  extend: {
    colors: {
      rasp: {
        red: "#c1121f",
        dark: "#8f0e17",
        orange: "#f28c28"
      }
    }
  }
}
```

---

# Resultado Esperado

O website final deve apresentar aparência equivalente ou superior a empresas industriais premium globais em 2026, transmitindo:

* Engenharia
* Tecnologia
* Inovação
* Confiabilidade
* Autoridade de mercado

Com foco em:

* Conversão de leads
* Posicionamento de marca
* Performance
* Experiência do usuário
* Escalabilidade futura

Você pode salvar esse conteúdo como `especificacao-redesign-rasp-automacao-2026.md`.
