const request = require('supertest')
const app = require('../index')

describe('GET /clientes', () => {
  it('pegar a lista de clientes com sucesso', async () => {
    const res = await request(app).get('/clientes').send();
    expect(res.status).toBe(200);
  });
  it('verificar se a lista de clientes esta cheia', async () => {
    const res = await request(app).get('/clientes').send();
    expect(res.body).toBeDefined();
  });
})

describe('/clientes', () => {
  it('criar cliente com sucesso', async () => {
    var res = await request(app).post('/clientes').send(
      {
        nome: 'ramon teste',
        email: 'ramon@teste.com',
        senha: 'senhasupersegura'
      })
    expect(res.status).toBe(201)
  })
  it('criar cliente com erro esqueceu o nome', async () => {
    var res = await request(app).post('/clientes').send(
      {
        email: 'ramon@teste.com',
        senha: 'senhasupersegura'
      })
    expect(res.status).toBe(406)
  })

  it('atualizar cliente com sucesso', async () => {
    var res = await request(app).post('/clientes/' + _id).send(
      {
        nome: 'ramon update'
      })
    expect(res.status).toBe(200)

  })
  it('Deletar cliente com sucesso', async () => {
    const del = await request(app).delete('/clientes/' + _id).send()
    expect(del.status).toBe(200)
  })
})

