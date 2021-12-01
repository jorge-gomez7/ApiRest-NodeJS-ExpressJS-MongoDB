/*
    Ruta: /api/colaboradores
*/


const { Router } = require('express');
//para poder validar los campos
const { check } = require('express-validator');

//requerimos los controladores
const { addWorker, getWorkers, getWorker, updateWorker, deleteWorker } = require('../controllers/colaboradores.controllers');
// middleware que valida los campos
const { validarCampos } = require('../middlewares/validar-campos');

//inicializamos el router para trabajar las rutas
const router = Router();



//guardar al colaborador
router.post('/', [
    check('nombres', 'El nombre es obligatorio').not().isEmpty(),
    check('nacimiento', 'La fecha de nacimiento es obligatoria').not().isEmpty(),
    check('estadoCivil', 'El Estado civil es obligatorio').not().isEmpty(),
    check('gradoAcademico', 'El grado academico es obligatorio').not().isEmpty(),
    check('direccion', 'La dirección es obligatorio').not().isEmpty(),
    validarCampos,
],
    addWorker);



//obtener a los colaboradores
router.get('/', getWorkers);


//obtener a colaborador por id
router.get('/:id', getWorker);




//editar colaborador por id
router.put('/:id', [
    check('nombres', 'El nombre es obligatorio').not().isEmpty(),
    check('nacimiento', 'La fecha de nacimiento es obligatoria').not().isEmpty(),
    check('estadoCivil', 'El Estado civil es obligatorio').not().isEmpty(),
    check('gradoAcademico', 'El grado academico es obligatorio').not().isEmpty(),
    check('direccion', 'La dirección es obligatorio').not().isEmpty(),
    validarCampos,
],
    updateWorker);


//eliminar a colaborador por id
router.delete('/:id', deleteWorker);









module.exports = router;
