# Generated by Django 2.1.5 on 2019-04-25 19:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Events',
            fields=[
                ('event_date', models.DateField()),
                ('event_type', models.CharField(choices=[('s', 'Sports'), ('t', 'Technical'), ('c', 'Cultural')], max_length=20)),
                ('event_div', models.CharField(choices=[('w', 'workshop'), ('comp', 'competition'), ('conf', 'conference')], max_length=20)),
                ('event_id', models.CharField(max_length=20, primary_key=True, serialize=False)),
                ('event_name', models.CharField(max_length=20)),
                ('poster_img', models.ImageField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='Organizer',
            fields=[
                ('name', models.CharField(max_length=120)),
                ('email_id', models.EmailField(max_length=254)),
                ('phone_no', models.IntegerField()),
                ('user_type', models.CharField(max_length=1)),
                ('society', models.CharField(choices=[('TNT', 'Thapar Nautanki Team'), ('SCIM', 'Scimatics'), ('IETE', 'The Institution of Electronics and Telecommunication Engineers'), ('CCS', 'Creative Computing Society'), ('LitSoc', 'Literary Society'), ('Mudra', 'Music and Drama Society'), ('FAPS', 'FINE ARTS AND PHOTOGRAPHY SOCIETY')], max_length=20)),
                ('ident_no', models.IntegerField(primary_key=True, serialize=False)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Registration',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='articles.Events')),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('name', models.CharField(max_length=120)),
                ('email_id', models.EmailField(max_length=254)),
                ('phone_no', models.IntegerField()),
                ('user_type', models.CharField(max_length=1)),
                ('roll_no', models.IntegerField(primary_key=True, serialize=False)),
                ('event_part', models.ManyToManyField(through='articles.Registration', to='articles.Events')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='registration',
            name='part_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='articles.Student'),
        ),
        migrations.AddField(
            model_name='events',
            name='organizer_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='articles.Organizer'),
        ),
        migrations.AlterUniqueTogether(
            name='registration',
            unique_together={('part_id', 'event_id')},
        ),
    ]
