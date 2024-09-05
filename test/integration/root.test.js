const request = require('supertest');
const app = require('../../app'); // Your Express app

describe('GET /', () => {
    it('should return hello world', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello World!');
    });

    it('should return hello foo', async () => {
        const response = await request(app).get('/?name=foo');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello foo!');
    });
});
