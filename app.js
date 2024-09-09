const express = require('express')
const { getBodyArrayOrDefault, validateArray, validateQuery } = require('./utils')
const app = express()

// To access the payload of an HTTP POST request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
    var name = req.query.name ?? "World"
    res.send(`Hello ${name}!`)
})

app.post('/extract', (req, res, next) => {

    if (!validateQuery(req.query, "property", next)) {
        return
    }

    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }

    const content = body.map(x => x[req.query.property]);

    res.json(content)
})

app.post('/addRow', (req, res, next) => {

    if (!validateQuery(req.query, "value", next)) {
        return
    }

    const value = JSON.parse(req.query.value)

    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }

    body.push(value)

    res.json(body)
})


app.post('/split', (req, res, next) => {

    if (!validateQuery(req.query, "property", next)) {
        return
    }

    if (!validateQuery(req.query, "separator", next)) {
        return
    }

    let result = []
    if (req.body) {
        result = req.body[req.query.property]?.split(req.query.separator) ?? []
    }

    res.send(result)
})

module.exports = app;
