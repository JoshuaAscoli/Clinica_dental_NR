// modules/paciente/paciente.controller.js

const Paciente = require('../../models/paciente');

// Obtener todos los pacientes
exports.obtenerPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener pacientes', error });
  }
};

// Agregar un nuevo paciente
exports.agregarPaciente = async (req, res) => {
  const { nombre, apellido, numero_telefono, correo_electronico, edad, numero_seguro, ultima_visita, historial_medico } = req.body;
  console.log(req.body)
  try {
    const nuevoPaciente = new Paciente({
      nombre,
      apellido,
      numero_telefono,
      correo_electronico,
      edad,
      numero_seguro,
      ultima_visita,
      historial_medico
    });
    await nuevoPaciente.save();
    res.status(201).json(nuevoPaciente);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar paciente', error });
  }
};

// Editar un paciente
exports.editarPaciente = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, numero_telefono, correo_electronico, edad, numero_seguro, ultima_visita, historial_medico } = req.body;
  try {
    const paciente = await Paciente.findByIdAndUpdate(id, {
      nombre,
      apellido,
      numero_telefono,
      correo_electronico,
      edad,
      numero_seguro,
      ultima_visita,
      historial_medico
    }, { new: true });
    res.json(paciente);
  } catch (error) {
    res.status(500).json({ message: 'Error al editar paciente', error });
  }
};

// Eliminar un paciente
exports.eliminarPaciente = async (req, res) => {
  const { id } = req.params;
  try {
    await Paciente.findByIdAndDelete(id);
    res.status(200).json({ message: 'Paciente eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar paciente', error });
  }
};