// models/paciente.js

const mongoose = require('mongoose');

const historialMedicoSchema = new mongoose.Schema({
  condiciones_medicas: String,
  medicamentos: String,
  detalles_alergias: String,
  gravedad_alergias: String,
  alergias: String,
  ultima_visita: Date
});

const pacienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  numero_telefono: String,
  correo_electronico: String,
  edad: { type: Number, required: true },
  numero_seguro: String,
  ultima_visita: Date,
  historial_medico: historialMedicoSchema
});

const Paciente = mongoose.model('Paciente', pacienteSchema);
module.exports = Paciente;