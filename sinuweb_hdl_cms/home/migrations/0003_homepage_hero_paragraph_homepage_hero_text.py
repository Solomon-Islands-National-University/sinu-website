# Generated by Django 5.0.2 on 2024-02-08 08:18

import wagtail.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_create_homepage'),
    ]

    operations = [
        migrations.AddField(
            model_name='homepage',
            name='hero_paragraph',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='homepage',
            name='hero_text',
            field=wagtail.fields.RichTextField(null=True),
        ),
    ]
