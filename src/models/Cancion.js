const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const Cancion = sequelize.define('cancion', {
    // Definimos las columnas aquí
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    artist: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    releaseYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    } 
});

module.exports = Cancion;