# Generated by Django 4.2.7 on 2023-12-12 05:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('questionId', models.IntegerField(primary_key=True, serialize=False)),
                ('text', models.TextField()),
            ],
        ),
    ]
