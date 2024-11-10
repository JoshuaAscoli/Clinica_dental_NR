# pacientes/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.lista_pacientes, name='lista_pacientes'),
    path('agregar/', views.agregar_paciente, name='agregar_paciente'),
]
