from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response


from .programsData import programsData

# Create your views here.


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/products/',
        '/api/products/create',

        '/api/products/upload',

        '/api/products/<id>/reviews',

        '/api/products/top',
        '/api/products/<id>',

        '/api/products/delete/<id>',
        '/api/products/update/<id>',
    ]
    return Response(routes)


@api_view(['GET'])
def getPrograms(request):
    return Response(programsData)


@api_view(['GET'])
def getProgram(request, pk):
    program = None
    for i in programsData:
        if i["id"] == pk:
            program = i
            break

    return Response(program)







