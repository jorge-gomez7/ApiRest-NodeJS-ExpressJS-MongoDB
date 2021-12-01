const { Schema, model } = require('mongoose');

const colaboradorSchema = Schema({
    nombres: {
        type: String,
        required: true
    },
    nacimiento: {
        type: String,
        required: true,
    },
    estadoCivil: {
        type: String,
        required: true,
    },
    gradoAcademico: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true
    },


});


//por defecto mongoDB pone plural el nombre y con minuscula
module.exports = model('Colaborador', colaboradorSchema);