import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('List')

    response.json([
        'Glauber',
        'Rogério'
    ])
});

app.listen(3333);