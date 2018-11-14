var app = require('../app');
var request = require('supertest');

describe('GET /index', () => {
    it('should return 200 status code', (done) => {
        request(app)
            .get('/index')
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                done();
            });
    });
});
