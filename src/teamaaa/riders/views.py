from django.shortcuts import render
from .models import Rider

def rider_list_view(request):
    riders = Rider.objects.filter(cyclist=True)
    runners = Rider.objects.filter(cyclist=False)
    context = {
        "riders": riders,
        "runners": runners
    }
    return render(request, 'riders/list_view.html', context)
