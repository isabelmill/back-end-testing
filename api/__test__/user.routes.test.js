const request = require('supertest');
const app = require('../../server');
const users = require('../../data/users.json')


describe('User Endpoints', () => {
    it('should get first user by id', async () => {
        const id = 'U101'
        const res = await request(app)
            .get(`/api/user/${id}`)
        expect(res.statusCode).toEqual(200)
        // console.log('res.body:',res.body);
        expect(res.body).toEqual({
            "id": "U101",
            "fullname": "Isabel Mill",
            "username": "Isabel77",
            "password": "1234"
        })
    })
    it('should get all the users', async () => {
        const res = await request(app)
            .get(`/api/user`)
        // expect(res.statusCode).toEqual(200)
        console.log('res.body:', res.body);
        expect(res.body).toEqual(users)
    })
})