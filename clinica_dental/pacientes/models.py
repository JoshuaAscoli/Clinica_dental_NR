# pacientes/models.py
from django.db import models

class Paciente(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    numero_telefonico = models.CharField(max_length=15)
    correo_electronico = models.EmailField()
    edad = models.IntegerField()
    numero_seguro = models.CharField(max_length=50)
    ultima_visita = models.DateField()

    def __str__(self):
        return f"{self.nombre} {self.apellido}"
