const catchError = require('../utils/catchError');
const Cancion = require('../models/Cancion');

const getAll = catchError(async(req, res) => {
    const cancion = await Cancion.findAll()
    return res.json(cancion)
});

const create = catchError(async(req, res) => {
    const { name ,artist, genre, releaseYear } = req.body;
    const cancion = await Cancion.create({
        name:name,
        artist:artist,
        genre:genre,
        releaseYear:releaseYear
    });
    return res.json(cancion)
})

const getOne = catchError(async(req,res) => {
    const { id } = req.params;
    const cancion = await Cancion.findByPk(id)
    return res.json(cancion)
})

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Cancion.destroy( { where: { id:id } } );
    return res.sendStatus(204);
});

const update = catchError(async(req,res) => {
    const { id } = req.params;
    const { name, artist, genre, releaseYear } = req.body;
    const cancion = await Cancion.update({
        name:name,
        artist:artist,
        genre:genre,
        releaseYear:releaseYear
    }, { where: {id:id},returning: true })
    return res.json(cancion)
})



module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}