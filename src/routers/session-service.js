const express = require('express');
const router = express.Router();
const apiAdapter = require('./api-adapter');

const BASE_URL = 'http://localhost:3300';
const api = apiAdapter(BASE_URL);

router.get('/sessions/:id', (req, res) => {
    api.get(req.path).then(
        response => {
            res.send(response.data);
        }
    )
})



module.exports = router
