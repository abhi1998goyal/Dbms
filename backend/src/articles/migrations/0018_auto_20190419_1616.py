# Generated by Django 2.1.5 on 2019-04-19 10:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0017_auto_20190419_1609'),
    ]

    operations = [
        migrations.AlterField(
            model_name='organizer',
            name='email_id',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='organizer',
            name='phone_no',
            field=models.CharField(default='9999999999', max_length=10),
        ),
        migrations.AlterField(
            model_name='student',
            name='email_id',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='student',
            name='phone_no',
            field=models.CharField(default='9999999999', max_length=10),
        ),
    ]