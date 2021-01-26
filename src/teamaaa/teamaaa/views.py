from django.shortcuts import render, redirect
from django.http import HttpResponse

def home_page(request):
    return render(request, 'home_page.html', {})

def contact_page(request):
    return render(request, 'contact_page.html', {})

def about_page(request):
    return render(request, 'about_page.html', {})

def riders_page(request):
    return render(request, 'riders_page.html', {})