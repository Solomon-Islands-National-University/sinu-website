# Generated by Django 5.0.2 on 2024-06-01 09:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('snippets', '0043_alter_linkgrouporderable_content_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='linkgrouporderable',
            old_name='content',
            new_name='links',
        ),
    ]
