from rest_framework import serializers
from .models import Publicacion, User, Perfil, Favorito
from django.contrib.auth.hashers import make_password

class PublicacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publicacion
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'password', 'perfil']
        extra_kwargs = {
            'password': {'write_only': True}
        }
        
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
    
class PerfilSerializer(serializers.ModelSerializer):
    class Meta:
        model = Perfil
        fields = ['id', 'nombrePerfil', 'apellidoPerfil', 'telefono', 'localidad', 'biografia', 'fotoPerfil']
        
    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance

class FavoritoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorito
        fields = '__all__'
