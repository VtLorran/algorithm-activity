const conteudo = `
==============================
TESTES DE INTEGRAÇÃO EM NODE.JS
==============================

O que são?
----------
Testes de integração verificam se múltiplos módulos da aplicação
funcionam juntos corretamente, como:
- API + banco de dados
- Rotas + controllers
- Middlewares + serviços externos


Ferramentas principais
----------------------
Jest:
- Test runner completo
- Assertions
- Mocking
- Relatório de cobertura

Supertest:
- Testa APIs HTTP (Express, Fastify, etc.)
- Permite simular requisições reais

Mocha + Chai:
- Mocha: executor de testes
- Chai: biblioteca de assertions

Sinon / Nock:
- Mockam serviços externos e funções


Boas práticas
-------------
1. Cada teste deve ser independente
2. Usar beforeAll, afterEach e afterAll para setup/cleanup
3. Usar banco de dados separado para testes
4. Mockar serviços externos
5. Não testar bibliotecas de terceiros
6. Integrar testes ao CI/CD


Onde usar testes de integração
------------------------------
- APIs REST
- Conexões com banco de dados
- Comunicação entre módulos
- Autenticação e autorização


Resumo rápido
-------------
Ferramentas:
- Jest
- Supertest
- Mocha + Chai
- Sinon / Nock

Práticas:
- Testes isolados
- Ambiente limpo
- Mocks quando necessário
- CI/CD
`;

console.log(conteudo);
