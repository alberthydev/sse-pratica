# Simulator de Mercado Financeiro (SSE)

Um simulador de mercado financeiro minimalista desenvolvido para demonstrar a utilização de **Server-Sent Events (SSE)** em uma arquitetura cliente/servidor.

## Tecnologias Utilizadas

- **Servidor:** Node.js.
- **Cliente:** HTML, CSS e JS.
- **Protocolo de Comunicação:** Server-Sent Events.

## Estrutura do Projeto

O projeto é composto por apenas **dois arquivos**:

```bash
├── server.js    # Código do servidor HTTP e lógica do stream SSE
└── index.html   # Interface
```

## Como Executar o Projeto

### Pré-requisitos

Você precisará apenas do **Node.js** instalado em sua máquina.

### Passo a Passo

1. Garanta que ambos os arquivos (`server.js` e `index.html`) estejam no mesmo diretório.
   
2. Abra o seu terminal na pasta do projeto e inicie o servidor:
```bash
node server.js
```

3. O terminal exibirá a mensagem: `Servidor rodando em http://localhost:3000`.

4. Abra o seu navegador de preferência e acesse: `http://localhost:3000`
