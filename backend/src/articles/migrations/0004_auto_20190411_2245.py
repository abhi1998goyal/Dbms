# Generated by Django 2.1.5 on 2019-04-11 17:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0003_events_poster_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='events',
            name='poster_img',
            field=models.ImageField(upload_to=None),
        ),
    ]