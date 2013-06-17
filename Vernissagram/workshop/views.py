from django.http import HttpResponse

# Create your views here.
def create(request):
    return HttpResponse("Hello WS.")