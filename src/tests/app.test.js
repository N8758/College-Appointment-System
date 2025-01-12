const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('College Appointment System', () => {
  let studentToken;
  let professorToken;

  test('Register and login users', async () => {
    const professor = await request(app).post('/api/auth/register').send({
      name: 'Professor P1',
      email: 'professor1@example.com',
      password: 'password',
      role: 'professor',
    });

    const student = await request(app).post('/api/auth/register').send({
      name: 'Student A1',
      email: 'student1@example.com',
      password: 'password',
      role: 'student',
    });

    const professorLogin = await request(app).post('/api/auth/login').send({
      email: 'professor1@example.com',
      password: 'password',
    });
    professorToken = professorLogin.body.token;

    const studentLogin = await request(app).post('/api/auth/login').send({
      email: 'student1@example.com',
      password: 'password',
    });
    studentToken = studentLogin.body.token;

    expect(professorLogin.status).toBe(200);
    expect(studentLogin.status).toBe(200);
  });

  // Add tests for availability, booking, canceling, etc.
});
