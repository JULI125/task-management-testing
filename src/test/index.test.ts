import app from '../index.js'
import Request from 'supertest'

describe('GET registro', ()=>{
  test('should return all registered', async () => {
    const response = await Request(app).get('/api/registro');
    expect(response.status).toBe(200);  
  });
});

describe('POST registro', ()=>{
  test("Sube un nuevo registro", async () => {
      const response = await Request(app).post('/api/registro');
      expect(response.statusCode).toBe(200)
  });
});

describe('PUT registro', ()=>{
  test("Actualiza un registro", async () => {
      const response = await Request(app).put('/api/registro/:id');
      expect(response.statusCode).toBe(200)
  });
});

describe('DELETE registro', ()=>{
  test("Elimina un registro", async () => {
      const response = await Request(app).delete('/api/registro/:id');
      expect(response.statusCode).toBe(200)
  });
});

describe('GET task', ()=>{
  test('whacht task', async () => {
    const response = await Request(app).get('/task');
    expect(response.status).toBe(200);  
  });
});

describe('POST task', ()=>{
  test("Sube una nueva tarea", async () => {
      const response = await Request(app).post('/task');
      expect(response.statusCode).toBe(200)
  });
});

describe('PUT task', ()=>{
  test("Actualiza una tarea", async () => {
      const response = await Request(app).put('/task/:id');
      expect(response.statusCode).toBe(200)
  });
});

describe('DELETE task', ()=>{
  test("Elimina una tarea", async () => {
      const response = await Request(app).delete('/task/:id');
      expect(response.statusCode).toBe(200)
  });
});

