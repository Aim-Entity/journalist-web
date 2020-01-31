from django.db import models


class contactInfo(models.Model):
    gmail = models.CharField(max_length=100)
    fullName = models.CharField(max_length=200)
