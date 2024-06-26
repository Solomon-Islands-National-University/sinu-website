# Generated by Django 5.0.2 on 2024-04-30 00:08

import wagtail.blocks
import wagtail.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('snippets', '0011_alter_footerlink_link_content'),
    ]

    operations = [
        migrations.AlterField(
            model_name='footerlink',
            name='link_content',
            field=wagtail.fields.StreamField([('page_chooser', wagtail.blocks.StructBlock([('page', wagtail.blocks.PageChooserBlock(help_text='Select a page'))])), ('external_link', wagtail.blocks.StructBlock([('page', wagtail.blocks.URLBlock(help_text='insert an external url link'))]))], blank=True, null=True),
        ),
    ]
