const request = require('supertest');
const app = require('../app');
const { connectDB, disconnectDB } = require('../config/db');

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await disconnectDB();
});

describe('Appointment API', () => {
  it('should book an appointment', async () => {
    const studentToken = 'valid_jwt_token';  // Replace with actual JWT token generated from your login endpoint
    const professorId = 'professor_id';  // Replace with valid professor ID
    const timeSlot = '2025-01-14T10:00:00Z'; // Replace with a valid time slot

    const response = await request(app)
      .post('/api/book')
      .set('Authorization', `Bearer ${studentToken}`)
      .send({
        professorId: professorId,
        timeSlot: timeSlot,
      });

    console.log('Response:', response.body);
    console.log('Response status:', response.status);

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Appointment booked successfully');
  });
});
