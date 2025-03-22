import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module'; // ajuste conforme sua estrutura

describe('Teste de Criação de Aluno e Registro de Caso (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    // Aqui você pode inserir lógica para limpeza dos dados se necessário
    await app.close();
  });

  it('deve criar um aluno e registrar um caso associado', async () => {
    // Dados para criação de aluno e registro de caso
    const alunoData = {
      escola_id: 1,
      nome: 'Teste Aluno',
      tipo_deficiencia: 'Visual',
      necessidades: 'Apoio para leitura',
      data_abertura: '2025-03-22',
      status: 'Ativo',
      descricao: 'Aluno em teste',
      historico_modificacoes: 'Nenhuma'
    };

    // Envio da requisição de criação
    await request(app.getHttpServer())
      .post('/alunos')
      .send(alunoData)
      .expect(201);

    // Opcional: Realizar uma requisição para buscar o aluno criado e validar os dados
    const alunosResponse = await request(app.getHttpServer())
      .get('/alunos')
      .expect(200);

    const novoAluno = alunosResponse.body.find((a) => a.nome === alunoData.nome);
    expect(novoAluno).toBeDefined();

    // Se houver endpoint para buscar os casos ou se você preferir validar diretamente via repositório, adicione a verificação aqui
  });
});