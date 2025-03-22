# Atividade: Caso de Teste de Software - Criação de Aluno e Registro de Caso

## Objetivo do Repositório

Este repositório contém o conteúdo da ponderada de Caso de Teste de Software, que consiste em automatizar e documentar um Caso de Teste de Software relacionado ao projeto do módulo 5. O Caso de Teste escolhido foi o de Criação de Aluno e Registro de Caso Associado.	  
Assim, o foco desta atividade é demonstrar, por meio de testes automatizados, que ao criar um aluno via API, o sistema registra corretamente os dados do aluno e simultaneamente cria um registro de caso associado na tabela `caso`.

## O Caso de Teste

### Localização da Documentação do Caso de Teste

A documentação completa do caso de teste pode ser encontrada no arquivo [CASO_DE_TESTE.md](./CASO_DE_TESTE.md), que detalha o objetivo, pré-condições, procedimento, resultados esperados, resultados obtidos e pós-condição.

### Descrição Resumida do Caso de Teste

- **Título:** Criação de Aluno e Registro de Caso Associado
- **Objetivo:**  
  Validar que, ao enviar uma requisição para criar um novo aluno através do endpoint `POST /alunos`, o sistema:
  - Insere os dados do aluno na tabela `aluno`.
  - Cria automaticamente um registro na tabela `caso` associado ao aluno criado, com os dados informados (como data de abertura e status).

- **Procedimento:**  
  1. Inicializar o servidor da aplicação no ambiente de testes.
  2. Enviar uma requisição HTTP POST para o endpoint `/alunos` com um payload específico.
  3. Verificar se a resposta possui o status HTTP 201.
  4. Consultar a API (ou diretamente o banco de dados) para confirmar que o aluno foi criado e que o registro do caso está presente, associado ao aluno.

- **Resultado Esperado:**  
  - A API deve retornar status 201.
  - O registro do aluno e o registro do caso associado devem ser criados com os dados corretos.

## Como Executar a Atividade

Este repositório contém apenas os arquivos necessários para demonstrar o Caso de Teste proposto. Para executá-lo, siga os passos abaixo:

1. **Clonar o Repositório:**

   ```bash
   git clone https://github.com/calebe-matias/Ponderada-Caso-de-Teste-de-Software.git
   cd Ponderada-Caso-de-Teste-de-Software
   ```

2. **Instalar as Dependências:**

   ```bash
   npm install
   # ou, se preferir:
   yarn install
   ```

3. **Configuração das Variáveis de Ambiente:**

   Crie um arquivo `.env` na raiz do projeto com as configurações necessárias para conectar ao banco de dados de testes.

   ```env
    DB_USER=postgres.zqvnnnnpersqtlbziyts
    DB_HOST=aws-0-sa-east-1.pooler.supabase.com
    DB_NAME=postgres
    DB_PASS=1NT3GR43dU-
    DB_PORT=6543
    MONGO_URI=mongodb+srv://modulo5:i5t2iT4dY4aqJKIn@cluster0.bjdal.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   ```

4. **Executar os Testes Automatizados:**

   Os testes de ponta a ponta (e2e) foram implementados utilizando Jest e Supertest. Para executá-los, use o comando:

   ```bash
   npm run test:e2e
   # ou
   yarn test:e2e 
   ```


## Considerações Finais

Este repositório demonstra a execução de um Caso de Teste de Software específico, focado na criação de alunos e no registro de casos associados. A atividade visa evidenciar a correta integração entre a camada de API e o banco de dados, bem como a capacidade de automatizar a verificação desse fluxo.

Para quaisquer dúvidas ou melhorias, sinta-se à vontade para abrir uma issue ou entrar em contato.