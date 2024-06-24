# Generated by Django 5.0.2 on 2024-05-31 01:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('snippets', '0040_remove_footerlinkgroup_snippet_linkgrouporderable_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='linkgrouporderable',
            name='linkgroup_title',
            field=models.CharField(help_text='Add title (i.e. this would be the header title of the specified links)', max_length=200, verbose_name='Title'),
        ),
    ]
