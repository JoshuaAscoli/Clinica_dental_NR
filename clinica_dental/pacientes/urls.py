from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('pacientes/', include('pacientes.urls')),  # Incluye las URLs de pacientes
]
