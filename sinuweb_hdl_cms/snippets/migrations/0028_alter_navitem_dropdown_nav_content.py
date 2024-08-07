# Generated by Django 5.0.2 on 2024-05-01 02:34

import blocks.blocks
import wagtail.blocks
import wagtail.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('snippets', '0027_rename_nav_content_navitem_dropdown_nav_content'),
    ]

    operations = [
        migrations.AlterField(
            model_name='navitem',
            name='dropdown_nav_content',
            field=wagtail.fields.StreamField([('list_menu', wagtail.blocks.StructBlock([('menu_title', wagtail.blocks.CharBlock()), ('menu_links', wagtail.blocks.ListBlock(blocks.blocks.LinkBlock))]))], help_text='Build the Dropdown Menu'),
        ),
    ]
