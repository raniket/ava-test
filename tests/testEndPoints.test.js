import test from 'ava';
const app = require('../app');
const request = require('supertest');


test(`check status endpoint`, async (t) => {
    const response = await request(app).get('/status');

    t.is(response.status, 200);
    t.deepEqual(response.body, {
        status: 'Ok',
    });
});

test(`check greet endpoint`, async (t) => {
    const name = "Raniket";
    const food = "apple";
    const response = await request(app).get('/greet').query({name, food});

    t.is(response.status, 200)
    t.is(response.body.message, `hello ${name} would you like an ${food}`);
});

test(`check resgister without username`, async (t) => {
    const payload = {
        password: 'password',
    };
    const response = await request(app).post('/register').send(payload);

    t.is(response.status, 400);
    t.is(response.body.message, `username is missing`);
});

test(`check register without password`, async (t) => {
    const payload = {
        username: 'raniket',
    };
    const response = await request(app).post('/register').send(payload);

    t.is(response.status, 400);
    t.is(response.body.message, `password is missing`);
});

test(`register new user`, async (t) => {
    const payload = {
        username: 'raniket',
        password: 'password'
    };
    const response = await request(app).post('/register').send(payload);

    t.is(response.status, 200);
    t.deepEqual(response.body, {
        message: 'new user created'
    });
});