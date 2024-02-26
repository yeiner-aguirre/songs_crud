const { getAll, create, getOne, remove, update } = require('../controllers/cancion.controllers');
const express = require('express');

const cancionRouter = express.Router();

cancionRouter.route("/canciones")
    .get(getAll)
    .post(create);

cancionRouter.route("/canciones/:id")
    .get(getOne)
    .delete(remove)
    .put(update)

module.exports = cancionRouter;