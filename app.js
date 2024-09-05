const express = require('express')
const app = express()

// To access the payload of an HTTP POST request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
    var name = req.query.name ?? "World"
    res.send(`Hello ${name}!`)
})

app.post('/extract', (req, res, next) => {

    if (!req.query.property) {
        const err = new Error('Required query "param" property missing');
        err.status = 400;
        next(err);
        return
    }

    const body = req.body ?? []
    if (!Array.isArray(body)) {
        const err = new Error('Body is not an array');
        err.status = 400;
        next(err);
        return
    }

    const content = body.map(x=> x[req.query.property]);

    res.json(content)
})

app.post('/addRow', (req, res, next) => {

    if (!req.query.value) {
        const err = new Error('Required query "value" property missing');
        err.status = 400;
        next(err);
        return
    }
    const value = JSON.parse(req.query.value)

    const body = req.body ?? []
    if (!Array.isArray(body)) {
        const err = new Error('Body is not an array');
        err.status = 400;
        next(err);
        return
    }

    body.push(value)

    res.json(body)
})

module.exports = app;
