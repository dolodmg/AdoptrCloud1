# Generated by Django 4.2.4 on 2023-09-09 20:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pagina_perros', '0002_publicacion_fotoperro_publicacion_imagenperro_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='publicacion',
            name='imagenPerro',
        ),
    ]
