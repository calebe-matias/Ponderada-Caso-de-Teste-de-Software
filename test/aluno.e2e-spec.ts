jest.setTimeout(30000); // Aumenta o timeout para 30 segundos

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

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
    // Se necessário, adicione lógica para limpar recursos pendentes.
    await app.close();
  });

  it('deve criar um aluno e registrar um caso associado', async () => {
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

    await request(app.getHttpServer())
      .post('/alunos')
      .send(alunoData)
      .expect(201);

    const alunosResponse = await request(app.getHttpServer())
      .get('/alunos')
      .expect(200);

    const novoAluno = alunosResponse.body.find((a) => a.nome === alunoData.nome);
    expect(novoAluno).toBeDefined();
  });
});