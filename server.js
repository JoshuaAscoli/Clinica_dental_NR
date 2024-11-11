// app.js

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const pacienteRoutes = require('./modules/paciente/paciente.routes');
require('dotenv').config(); // Cargar variables de entorno

// Middleware
app.use(express.json()); // Para parsear JSON en el body
app.use(express.static('public')); // Servir archivos estáticos

// Conectar a la base de datos
require('./config/db');

// Rutas
app.use('/api', pacienteRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});