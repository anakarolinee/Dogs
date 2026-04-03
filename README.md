# 🐾 Dogs - Rede Social para Cães

> 🌐 **Projeto ao vivo:** [https://vercel.app](https://vercel.app)

Este projeto foi desenvolvido durante o curso completo de **React.js da Origamid**, ministrado por André Rafael. É uma aplicação SPA (Single Page Application) que simula uma rede social onde os utilizadores podem publicar fotos dos seus cães, visualizar o feed, comentar e acompanhar estatísticas.

## 🛠️ Tecnologias e Conceitos

O foco deste projeto foi o domínio do ecossistema React e a integração real com uma API REST:

- **React.js**: Hooks (useState, useEffect, useContext, useMemo, useCallback).
- **CSS Modules**: Estilização isolada para evitar conflitos de classes.
- **React Router**: Gestão de rotas complexas, incluindo rotas protegidas para utilizadores logados.
- **Victory**: Biblioteca para exibição de gráficos estatísticos de acessos.
- **Autenticação JWT**: Login seguro e manutenção da sessão via LocalStorage.
- **Custom Hooks**: Criação de hooks personalizados como `useForm`, `useFetch` e `useMedia`.

## 🎨 Funcionalidades

- **Feed Infinito**: Carregamento dinâmico de fotos conforme o scroll.
- **Gestão de Perfil**: O utilizador pode postar, eliminar e visualizar as suas próprias fotos.
- **Estatísticas de Utilizador**: Gráficos dinâmicos mostrando o desempenho das publicações.
- **Acessibilidade & UX**: Feedback visual de loading (Skeletons), validação de formulários em tempo real e foco em acessibilidade.

## 📖 O que aprendi?

Este projeto foi fundamental para consolidar:
1. A estrutura de uma aplicação React profissional.
2. Como lidar com **Promises** e consumo de APIs externas de forma eficiente.
3. A importância do **Context API** para gerir o estado global (dados do utilizador e login).
4. Otimização de performance com limpeza de efeitos e memorização.

---
    
## ⚙️ Como rodar o projeto

1. Clone o repositório.
2. Execute `npm install` para instalar as dependências.
3. Execute `npm start` para iniciar o projeto em modo de desenvolvimento.

---
*Projeto desenvolvido com fins educativos sob orientação da [Origamid](https://origamid.com).*
