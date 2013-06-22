from django.http import HttpResponse
from django.shortcuts import render

from workshop.models import Media

# Create your views here.
def create(request):
    media = Media.objects.all()
    return render(request, 'workshop/index.html', {"media_list":media})