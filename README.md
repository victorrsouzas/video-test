# Projeto de Gerenciamento de Vídeos

Este repositório contém três projetos diferentes:

1. **Backend**: Um servidor Node.js/Express que fornece APIs REST para gerenciamento de vídeos.
2. **Frontend**: Uma aplicação Next.js para gerenciamento e exibição de vídeos.
3. **Mobile App**: Um aplicativo mobile feito em React Native utilizando Expo, que permite que usuários assistam e interajam com os vídeos.

## Requisitos
Para rodar os três projetos, você precisará ter instalado:
- [Node.js](https://nodejs.org/) (v14+)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (para o projeto mobile)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

---

## 1. Backend

### Descrição
O backend é uma API REST construída com Node.js e Express. Ela fornece endpoints para gerenciar e visualizar vídeos. A base de dados é simulada com dados fictícios.

### Configuração

1. **Instalar dependências:**
   ```bash
   cd backend-mocky-video
   npm install
   ```

2. **Rodar o servidor:**
   ```bash
   npm start
   ```
   O servidor será executado em `http://localhost:3000`.

### Endpoints Principais

- `GET /api/videos`: Retorna a lista de vídeos paginada.
- `GET /api/videos/:id`: Busca um vídeo específico por ID.
- `PATCH /api/videos/:id`: Atualiza um vídeo (ex. incrementa visualizações e likes).

### Testar com Postman
Você pode testar os endpoints utilizando o [Postman](https://www.postman.com/) com a URL base `http://localhost:3000`.

---

## 2. Frontend (Next.js)

### Descrição
A aplicação frontend foi construída utilizando **Next.js**. Ela é responsável por listar vídeos, exibir detalhes, e permitir que os usuários interajam com os vídeos (visualizações e likes).

### Configuração

1. **Instalar dependências:**
   ```bash
   cd video-app
   npm install
   ```

2. **Rodar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   O frontend será executado em `http://localhost:3001`.

### Funcionalidades

- **Página inicial**: Lista todos os vídeos.
- **Busca**: Filtra vídeos por título ou descrição.
- **Detalhes do vídeo**: Exibe detalhes de cada vídeo, com incrementos de visualizações e likes.

### Estrutura de Pastas

- `pages/`: Contém as páginas da aplicação.
- `components/`: Componentes reutilizáveis como `VideoCard` e `VideoList`.
- `services/`: Serviços de API para buscar e atualizar vídeos.
  
---

## 3. Mobile App (React Native + Expo)

### Descrição
O aplicativo mobile é uma versão nativa para visualizar os vídeos, construída em **React Native** utilizando **Expo**. Ele lista os vídeos, exibe detalhes e permite que os usuários interajam com os vídeos.

### Configuração

1. **Instalar dependências:**
   ```bash
   cd video-app-mobile
   npm install
   ```

2. **Rodar o Expo CLI:**
   ```bash
   expo start
   ```

3. **Conectar ao backend:**
   Verifique se o backend está rodando no mesmo IP que o seu dispositivo móvel pode acessar. No arquivo `services/VideoService.ts`, ajuste o `baseURL` conforme necessário:
   ```typescript
   const api = axios.create({
     baseURL: 'http://<seu-ip-local>:3000', // Ajuste o IP
     timeout: 10000,
   });
   ```

4. **Testar no dispositivo:**
   Escaneie o QR Code gerado no terminal usando o aplicativo Expo Go no seu dispositivo, ou use um emulador.

### Funcionalidades

- **Lista de vídeos**: Exibe todos os vídeos disponíveis, com rolagem infinita para carregar mais vídeos.
- **Busca**: Filtra vídeos por título ou descrição.
- **Detalhes do vídeo**: Exibe detalhes e permite assistir vídeos com incrementos de visualizações e likes.

### Estrutura de Pastas

- `components/`: Contém os componentes como `VideoList` e `VideoCard`.
- `controllers/`: Funções de controle que gerenciam a lógica de busca e estado.
- `services/`: Contém o `VideoService` que faz as requisições à API.
- `screens/`: Contém as telas principais como `HomeScreen` e `VideoDetailScreen`.

---

## Como Contribuir

1. Faça um fork do projeto.
2. Crie sua feature branch (`git checkout -b feature/sua-feature`).
3. Faça commit das suas mudanças (`git commit -m 'Adicionei uma nova feature'`).
4. Faça push para a branch (`git push origin feature/sua-feature`).
5. Abra um Pull Request.

---

## Problemas Conhecidos

1. **Erro de CORS**: Certifique-se de configurar os cabeçalhos de CORS corretamente no backend.
2. **Conexão Mobile**: Verifique se o dispositivo está conectado na mesma rede que o backend.
3. **Duplicidade de Vídeos**: Certifique-se de filtrar vídeos duplicados corretamente no frontend e mobile.

---

## Tecnologias Utilizadas

- **Backend**: Node.js, Express, Axios
- **Frontend**: Next.js, React, Axios, TypeScript
- **Mobile**: React Native, Expo, Axios, TypeScript
- **UI**: Styled-components, CSS modules, React Native Stylesheets

---

## Licença

Este projeto é licenciado sob os termos da licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

---

## Contato

Se tiver dúvidas ou sugestões, entre em contato:

- **Email**: victorrsouzas@gmail.com
- **LinkedIn**: [seu-linkedin](https://www.linkedin.com/in/victorrsouzas/)

---