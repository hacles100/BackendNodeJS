const { request, response } = require('express')
const express = require('express')

const app = express()

app.get('/', (request, response) => {

    return response.send('Ola Mundo')
})

app.listen(3333)
