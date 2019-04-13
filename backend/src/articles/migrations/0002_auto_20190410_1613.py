# Generated by Django 2.1.5 on 2019-04-10 20:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Organizer',
            fields=[
                ('name', models.CharField(max_length=120)),
                ('email_id', models.EmailField(max_length=254)),
                ('phone_no', models.IntegerField()),
                ('society', models.CharField(choices=[('TNT', 'thapr nautanki team'), ('scim', 'Scimatics'), ('IETE', 'Indian Institute of technical Eng')], max_length=20)),
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
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('name', models.CharField(max_length=120)),
                ('email_id', models.EmailField(max_length=254)),
                ('phone_no', models.IntegerField()),
                ('roll_no', models.IntegerField(primary_key=True, serialize=False)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.DeleteModel(
            name='Article',
        ),
        migrations.CreateModel(
            name='Events',
            fields=[
                ('event_date', models.DateField()),
                ('event_type', models.CharField(choices=[('s', 'Sports'), ('t', 'Technical'), ('c', 'Cultural')], max_length=20)),
                ('event_div', models.CharField(choices=[('w', 'workshop'), ('com', 'competition'), ('con', 'conference')], max_length=20)),
                ('event_name', models.CharField(max_length=20)),
                ('organizer_id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='articles.Organizer')),
            ],
        ),
        migrations.AddField(
            model_name='registration',
            name='part_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='articles.Student'),
        ),
        migrations.AddField(
            model_name='student',
            name='event_part',
            field=models.ManyToManyField(through='articles.Registration', to='articles.Events'),
        ),
        migrations.AddField(
            model_name='registration',
            name='event_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='articles.Events'),
        ),
    ]
