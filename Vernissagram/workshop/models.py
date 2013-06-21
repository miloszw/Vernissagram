from django.db import models
from django.forms import ModelForm

# Create your models here.
class Author(models.Model):
    name = models.CharField(max_length=30)
    
    @staticmethod
    def get_guest():
        return Author.objects.get_or_create(name='Guest')[0]
        
    
class Tag(models.Model):
    name = models.CharField(max_length=10)

class Media(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='%Y/%m')
    pub_date = models.DateTimeField('date published', auto_now_add=True)
    author = models.ForeignKey(Author, default=Author.get_guest)
    tags = models.ManyToManyField(Tag, blank=True)
    likes = models.IntegerField(default=0)