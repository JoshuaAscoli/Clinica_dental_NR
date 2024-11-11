// modules/paciente/paciente.routes.js

const express = require('express');
const router = express.Router();
const pacienteController = require('./paciente.controller');

// Rutas para obtener, agregar, editar y eliminar pacientes
router.get('/pacientes', pacienteController.obtenerPacientes);
router.post('/pacientes', pacienteController.agregarPaciente);
router.put('/pacientes/:id', pacienteController.editarPaciente);
router.delete('/pacientes/:id', pacienteController.eliminarPaciente);

module.exports = router;