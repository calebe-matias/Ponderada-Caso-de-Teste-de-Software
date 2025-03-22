```markdown
# Plataforma de Gestão de Alunos

## Introdução

A Plataforma de Gestão de Alunos é uma aplicação desenvolvida com [NestJS](https://nestjs.com/) que tem como objetivo gerenciar os dados dos alunos e das escolas, bem como registrar e acompanhar casos associados a cada aluno. O projeto utiliza o Module Pattern para organizar as funcionalidades em módulos independentes, facilitando a manutenção e a escalabilidade da aplicação.

## Funcionalidades

- **Gestão de Alunos:**  
  - Criação, listagem, atualização e remoção de alunos.
  - Associação automática de um registro na tabela `caso` ao criar um novo aluno.
- **Gestão de Escolas:**  
  - Consulta de informações de escolas, profissionais e equipamentos.
- **Integração com API Externa:**  
  - Consumo de endpoints externos para buscar dados adicionais dos alunos.
- **Documentação e Testes:**  
  - API documentada via Swagger.
  - Testes automatizados (e2e) utilizando Jest e Supertest.

## Tecnologias Utilizadas

- **Backend:** NodeJS, NestJS
- **Banco de Dados:** PostgreSQL
- **Testes:** Jest, Supertest
- **Documentação:** Swagger

## Requisitos

- Node.js (>= 14.x)
- npm ou yarn
- PostgreSQL (ou banco de dados compatível)

## Configuração do Ambiente

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-projeto.git
   cd nome-do-projeto
   ```

2. **Instale as Dependências:**

   ```bash
   npm install
   # ou, se preferir:
   yarn install
   ```

3. **Configuração das Variáveis de Ambiente:**

   Crie um arquivo `.env` na raiz do projeto com as configurações necessárias. Exemplo:

   ```env
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USER=seu_usuario
   DATABASE_PASSWORD=sua_senha
   DATABASE_NAME=nome_do_banco
   PORT=3000
   ```

4. **Configuração do Banco de Dados:**

   - Certifique-se de que o PostgreSQL está instalado e rodando.
   - Crie o banco de dados conforme definido na variável `DATABASE_NAME`.
   - Execute as migrations (se houver) para criar as tabelas necessárias.

## Executando a Aplicação

Para iniciar a aplicação em modo de desenvolvimento, execute:

```bash
npm run start:dev
# ou
yarn start:dev
```

A API estará disponível em [http://localhost:3000](http://localhost:3000).

## Documentação da API

A documentação interativa da API é gerada pelo Swagger. Após iniciar a aplicação, acesse:

```
http://localhost:3000/api
```

## Testes Automatizados

### Teste de Integração (e2e)

O projeto inclui testes de ponta a ponta (e2e) para garantir que os principais fluxos da aplicação funcionem conforme o esperado.

#### Caso de Teste: Criação de Aluno e Registro de Caso Associado

**Objetivo:**  
Validar que, ao enviar uma requisição para criar um novo aluno, o sistema insere corretamente os dados na tabela `aluno` e, simultaneamente, cria um registro associado na tabela `caso`.

**Pré-condição:**  
- O ambiente de teste está configurado com um banco de dados isolado.
- As tabelas `aluno` e `caso` estão criadas e em estado limpo.

**Procedimento de Teste:**  
1. Inicialize o servidor da aplicação no ambiente de testes.
2. Envie uma requisição HTTP POST para o endpoint `/alunos` com o seguinte payload:

   ```json
   {
     "escola_id": 1,
     "nome": "Teste Aluno",
     "tipo_deficiencia": "Visual",
     "necessidades": "Apoio para leitura",
     "data_abertura": "2025-03-22",
     "status": "Ativo",
     "descricao": "Aluno em teste",
     "historico_modificacoes": "Nenhuma"
   }
   ```

3. Verifique se a resposta possui status HTTP **201 (Created)**.
4. Realize uma requisição para o endpoint `/alunos` e confirme que o novo aluno foi criado com os dados corretos.
5. Opcionalmente, verifique diretamente no banco de dados se o registro na tabela `caso` foi criado e está corretamente associado ao aluno.

**Resultado Esperado:**  
- A requisição retorna status **201**.
- O aluno é inserido na tabela `aluno` com os dados informados.
- Um registro é criado na tabela `caso` com os dados de abertura e status, associando corretamente o `aluno_id` gerado.

**Pós-condição:**  
- O ambiente de testes é limpo (os registros inseridos são removidos ou o banco de dados é restaurado para seu estado original) para evitar interferências em outros testes.

#### Como Executar os Testes

Utilize o seguinte comando para rodar os testes e2e:

```bash
npm run test:e2e
# ou
yarn test:e2e
```

Os testes se encontram no diretório `test/` e incluem, por exemplo, o arquivo `test/aluno.e2e.spec.ts`.

## Histórico de Commits

Para garantir uma boa organização e rastreabilidade, foram realizados os seguintes commits:

1. **Commit 1:**  
   *Mensagem:* `docs: adiciona documentação do caso de teste para criação de aluno e registro de caso associado`  
   *Descrição:* Adiciona o arquivo `TEST_CASE.md` com toda a documentação do caso de teste.

2. **Commit 2:**  
   *Mensagem:* `test: adiciona teste e2e para criação de aluno e registro de caso`  
   *Descrição:* Implementa o teste automatizado em `test/aluno.e2e.spec.ts` utilizando Jest e Supertest.

3. **Commit 3:**  
   *Mensagem:* `chore: atualiza README e scripts de testes para execução de testes e2e`  
   *Descrição:* Atualiza o `README.md` com as instruções de instalação, configuração e execução dos testes, além de ajustar os scripts no `package.json`.