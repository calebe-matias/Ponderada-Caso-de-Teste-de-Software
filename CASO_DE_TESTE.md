## Caso de Teste: Criação de Aluno com Registro de Caso

### Objetivo
Verificar se, ao criar um novo aluno através do endpoint **POST /alunos**, o sistema insere corretamente os dados na tabela `aluno` e também cria um registro correspondente na tabela `caso` com os dados informados.

### Pré-condição
- O banco de dados está configurado e rodando (pode ser um ambiente de testes ou um banco em memória).
- As migrations/schema foram executadas para garantir que as tabelas `aluno` e `caso` existem.
- O servidor da aplicação NestJS está em execução ou o ambiente de testes está preparado para testes de integração.

### Procedimento de Teste
1. Preparar um payload JSON contendo os dados obrigatórios para a criação de um aluno, incluindo os campos para o registro do caso (ex.: `data_abertura`, `status`, `descricao`, etc.).
2. Enviar uma requisição **POST** para o endpoint `/alunos` com o payload.
3. Após a execução, consultar o banco de dados para confirmar:
   - Se um registro foi criado na tabela `aluno` com os dados corretos.
   - Se um registro relacionado foi inserido na tabela `caso`, onde o campo `aluno_id` corresponde ao novo aluno.

### Resultado Esperado
- A resposta da API deve indicar sucesso (por exemplo, código HTTP 201 ou 200, conforme sua implementação).
- No banco de dados, deve existir um registro em `aluno` com os dados enviados.
- Imediatamente, um registro em `caso` deve existir e ter o campo `aluno_id` apontando para o novo aluno, além de conter os dados de `data_abertura`, `status`, `descricao` e `historico_modificacoes` (quando aplicável).

### Resultado Obtido
*(Este campo deverá ser preenchido com os resultados reais após a execução do teste. Se o teste passar, relatar “Teste executado com sucesso; os dados foram inseridos conforme esperado.” Se houver discrepâncias, descrever as diferenças.)*

### Pós-condição
- Os registros de teste (aluno e caso) podem ser removidos para não interferir em outros testes (ou o ambiente de testes é reiniciado a cada execução).

---