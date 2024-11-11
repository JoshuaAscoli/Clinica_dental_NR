const express = require('express');
const Paciente = require('../models/paciente');
const router = express.Router();

// Ruta para agregar paciente
router.post('/', async (req, res) => {
  try {
    const { nombre, apellido, numero_telefono, correo_electronico, edad, numero_seguro, ultima_visita, historial_medico } = req.body;

    const nuevoPaciente = new Paciente({
      nombre,
      apellido,
      numero_telefono,
      correo_electronico,
      edad,
      numero_seguro,
      ultima_visita,
      historial_medico,
    });

    await nuevoPaciente.save();
    res.status(201).json(nuevoPaciente);
  } catch (error) {
    console.error('Error al guardar el paciente:', error);
    res.status(500).json({ message: 'Error al guardar el paciente' });
  }
});

module.exports = router;