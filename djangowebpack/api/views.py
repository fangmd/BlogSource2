from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from django.contrib.auth.models import User
from api.serializers import UserSerializer, ArticleSerializer, ArticleArchivesSerializer
from api.models import Article

class UserViewSet(viewsets.ModelViewSet):
      queryset = User.objects.all()
      serializer_class =  UserSerializer

class ArticleViewSet(viewsets.ModelViewSet):
	queryset = Article.objects.all()
	serializer_class = ArticleSerializer

class ArticleArchivesViewSet(viewsets.ModelViewSet):
	queryset = Article.objects.all()
	serializer_class = ArticleArchivesSerializer