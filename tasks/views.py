from rest_framework import viewsets
from .serializer import TaskSerializer

from .models import Task

# esto crea todo el crud
class TaskView(viewsets.ModelViewSet):
    
    queryset = Task.objects.all()
    
    serializer_class = TaskSerializer   # Se le pasa la clase donde se serializan los campos de la tabla de Task
    
    