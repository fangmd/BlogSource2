from django.contrib.auth.models import User, Group
from rest_framework import serializers
from api.models import Article

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')

class ArticleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Article
        fields = ('url', 'id', 'title', 'body', 'abstract', 'last_modified_time')

