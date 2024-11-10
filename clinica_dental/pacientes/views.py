# pacientes/views.py
from django.shortcuts import render
from django.http import JsonResponse
from .models import Paciente

def lista_pacientes(request):
    pacientes = Paciente.objects.all()
    return render(request, 'pacientes/lista_pacientes.html', {'pacientes': pacientes})

def agregar_paciente(request):
    if request.method == 'POST':
        # Aquí se recibe el formulario y se crea un nuevo paciente
        nombre = request.POST['nombre']
        apellido = request.POST['apellido']
        numero_telefonico = request.POST['numero_telefonico']
        correo_electronico = request.POST['correo_electronico']
        edad = request.POST['edad']
        numero_seguro = request.POST['numero_seguro']
        ultima_visita = request.POST['ultima_visita']

        paciente = Paciente(
            nombre=nombre,
            apellido=apellido,
            numero_telefonico=numero_telefonico,
            correo_electronico=correo_electronico,
            edad=edad,
            numero_seguro=numero_seguro,
            ultima_visita=ultima_visita
        )
        paciente.save()

        return JsonResponse({'success': True})
    return JsonResponse({'success': False})
