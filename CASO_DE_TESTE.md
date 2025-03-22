# Caso de Teste - Criação de Aluno e Registro de Caso Associado

### Objetivo:  
Validar que, ao enviar uma requisição para criar um novo aluno via o endpoint `POST /alunos`, o sistema insere corretamente o registro do aluno na tabela `aluno` e, simultaneamente, cria o registro correspondente na tabela `caso` com os dados informados.

### Pré-condição:  
- O ambiente de testes deve estar configurado com uma base de dados isolada ou de testes (por exemplo, um banco de dados em memória ou um ambiente dockerizado).
- As tabelas `aluno` e `caso` devem existir e estar em um estado conhecido (idealmente, sem registros conflitantes).
- O servidor NestJS deve estar rodando em modo de teste.

### Procedimento de Teste:  
1. **Inicialização:**  
   Inicie o servidor da aplicação no ambiente de testes (por exemplo, utilizando a configuração do NestJS para testes com `Test.createTestingModule`).

2. **Envio da Requisição:**  
   Envie uma requisição HTTP POST para o endpoint `/alunos` com um payload semelhante a:
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
   - Verifique se a resposta possui status HTTP **201 (Created)**.
   - Opcionalmente, se a API retornar o ID ou os dados do aluno criado, valide se as informações estão corretas.

4. **Verificação dos Registros no Banco:**  
   - Realize uma requisição (ou consulte diretamente o banco) para confirmar que o registro do aluno foi inserido na tabela `aluno`.
   - Verifique que um registro correspondente foi inserido na tabela `caso`, associando o `aluno_id` correto e os campos informados (como `data_abertura`, `status`, etc).

### Resultado Esperado:  
- **Status HTTP 201:** A requisição de criação deve retornar 201.
- **Registro Criado:** O aluno é inserido na tabela `aluno` com os dados corretos.
- **Registro do Caso Criado:** Um registro é criado na tabela `caso` vinculado ao aluno criado, com os valores passados no payload.

### Resultado Obtido:  
- Este campo deverá ser preenchido conforme os testes realizados, demonstrando que os registros foram criados como esperado.

### Pós-condição:  
- Após o teste, o ambiente deve ser limpo (por exemplo, removendo os registros inseridos ou realizando rollback) para que não haja interferência em outros testes.
