from django.urls import path
from . import views


urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('programs/', views.getPrograms, name='programs'),
    path('programs/<str:pk>', views.getProgram, name='program'),
]
