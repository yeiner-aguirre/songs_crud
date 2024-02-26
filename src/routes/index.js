const express = require('express');
const cancionRouter = require('./cancion.router');
const router = express.Router();

router.use(cancionRouter);


module.exports = router;