const Colaborador = require('../models/colaborador.model');
const { response } = require('express');


const addWorker = async (req, res = response) => {

    try {

        const colaborador = new Colaborador(req.body);


        //guarda al colaborador
        await colaborador.save();

        res.json({
            ok: true,
            msg: "se guardó al colaborador:",
            colaborador
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... revisar logs'
        });
    }
}



const getWorkers = async (req, res = response) => {

    const colaboradores = await Colaborador.find({});

    res.json({
        ok: true,
        colaboradores
    });
}


const getWorker = async (req, res = response) => {

    try {
        const id = req.params.id;
        const colaboradorDB = await Colaborador.findById(id);

        if (!colaboradorDB) {
            return res.status(404).json({
                ok: false,
                msg: "No existe un colaborador con el id proporcionado",
                colaboradorDB
            });
        }

        const colaborador = await Colaborador.findById(id);

        res.status(200).json({
            ok: true,
            colaborador
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: true,
            msg: "error inesperado revisaro los logs"
        })
    }
}





const updateWorker = async (req, res = response) => {

    const id = req.params.id;

    try {
        //verifica si el id de tipo mongo _id existe en la base de datos
        const colaboradorDB = await Colaborador.findById(id);

        if (!colaboradorDB) {
            return res.status(404).json({
                ok: false,
                msg: "No existe un colaborador con el id proporcionado",
                colaboradorDB
            });
        }


        const nuevoColaborador = req.body;



        const colaboradorActualizado = await Colaborador.findByIdAndUpdate(id, nuevoColaborador, { new: true });
        res.json({
            ok: true,
            msg: "Colaborador actualizado exitosamente",
            colaboradorActualizado
        });


    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error inesperado, resvisar los logs"
        })
    }
}


const deleteWorker = async (req, res = response) => {
    const id = req.params.id
    try {

        const colaboradorDB = await Colaborador.findById(id);
        if (!colaboradorDB) {
            return res.status(404).json({
                ok: false,
                msg: "No existe un colaborador con el id proporcionado"
            });
        }
        await Colaborador.findByIdAndDelete(id);
        res.status(200).json({
            ok: true,
            msg: "Colaborador eliminado!",

        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error inesperado"
        });
    }
}


module.exports = {
    addWorker,
    getWorkers,
    getWorker,
    updateWorker,
    deleteWorker
}