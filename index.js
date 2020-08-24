const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const microserviceRoutes = require('./src/routers/router');

const PORT = 3200;

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello from the gateway')
})

app.use(microserviceRoutes)

app.listen(PORT, () => {
    console.log(`Gateway running on http://localhost:${PORT}`)
})
