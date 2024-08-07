# Generated by Django 5.0.2 on 2024-04-30 06:03

import wagtail.blocks
import wagtail.fields
import wagtail.images.blocks
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('snippets', '0021_navitem'),
    ]

    operations = [
        migrations.AddField(
            model_name='navitem',
            name='nav_content',
            field=wagtail.fields.StreamField([('heading', wagtail.blocks.CharBlock(form_classname='title')), ('paragraph', wagtail.blocks.RichTextBlock()), ('image', wagtail.images.blocks.ImageChooserBlock())], default='1'),
            preserve_default=False,
        ),
    ]
