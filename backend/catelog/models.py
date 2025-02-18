from pyexpat import model
from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100, null=False)
    category = models.CharField(max_length=100, null=False)
    record_count = models.IntegerField(null=False)
    fields = models.CharField(max_length=200, null=False)
