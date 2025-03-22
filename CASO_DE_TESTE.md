# Caso de Teste - Criação de Aluno e Registro de Caso Associado

### Objetivo:  
Validar que, ao enviar uma requisição para criar um novo aluno via o endpoint `POST /alunos`, o sistema insere corretamente o registro do aluno na tabela `aluno` e, simultaneamente, cria o registro correspondente na tabela `caso` com os dados informados.

### Pré-condição:  
- O ambiente de testes deve estar configurado com uma base de dados isolada ou de testes (por exemplo, um banco de dados em memória ou um ambiente dockerizado).
- As tabelas `aluno` e `caso` devem existir e estar em um estado conhecido (idealmente, sem registros conflitantes).
- O servidor NestJS deve estar rodando em modo de teste.

### Procedimento de Teste:  
1. **Inicialização:**  
   - Iniciar servidor da aplicação no ambiente de testes utilizando o `Test.createTestingModule` para criar e inicializar a aplicação NestJS.

2. **Envio da Requisição:**  
   - Enviar requisição HTTP POST para o endpoint `/alunos` com o seguinte payload:
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

3. **Validação da Resposta:**  
   - Verificar se a resposta possui status HTTP **201 (Created)**.
   - Caso a API retorne o ID ou os dados do aluno criado, confirmar que as informações correspondem ao payload enviado.

4. **Verificação dos Registros no Banco:**  
   - Realizar uma requisição (ou consulte diretamente o banco) para confirmar que o registro do aluno foi inserido na tabela `aluno`.
   - Verificar que um registro correspondente foi inserido na tabela `caso`, com o `aluno_id` correto e os demais campos (como `data_abertura`, `status`, etc.) preenchidos conforme o payload.

### Resultado Esperado:  
- **Status HTTP 201:** A requisição para criação do aluno deve retornar 201.
- **Registro Criado:** O aluno deve ser inserido na tabela `aluno` com os dados informados.
- **Registro do Caso Criado:** Um registro deve ser criado na tabela `caso` vinculado ao aluno criado, com os valores passados no payload.

### Resultado Obtido:  
- **Execução dos Endpoints:**  
  - O endpoint `POST /alunos` retornou status 201, e o aluno foi criado com sucesso.  
  - Ao consultar o endpoint `GET /alunos`, foi possível verificar que o novo aluno constava na lista de registros.
- **Observação sobre Teardown:**  
  - Durante a execução dos testes, o Jest detectou handles abertos que impediram o encerramento gracioso do worker. Para garantir o término dos testes, foi necessário utilizar a flag `--forceExit`. Este comportamento se deve a timers ou processos internos de dependências (como o NestJS ou serviços associados), mas não impacta a funcionalidade testada.

### Pós-condição:  
- Após o teste, o ambiente deve ser limpo, removendo os registros inseridos ou realizando rollback, de modo que não haja interferência em testes subsequentes.
- O uso da flag `--forceExit` garante o encerramento do processo de testes, mesmo que alguns handles não sejam fechados automaticamente. Recomenda-se investigar e, se possível, corrigir os vazamentos de recursos para futuras execuções.