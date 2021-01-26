from django.db import models

class Rider(models.Model):
    name            = models.CharField(max_length=100)
    slug            = models.SlugField(unique=True, max_length=255, blank=True)
    image           = models.ImageField(upload_to ='images/', blank=True) 
    # year_joined     = models.IntegerField(blank=True)
    specialism      = models.CharField(max_length=200, blank=True)
    cyclist         = models.BooleanField(default=True, blank=True)
