const express = require('express');
const router = express.Router();
const sessionsRouter = require('./session-service');

router.use((req, res, next) => {
    console.log('forwarded request with ', req.path);
    next();
})

router.use(sessionsRouter)

module.exports = router
