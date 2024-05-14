# Generated by Django 5.0.2 on 2024-04-30 00:27

import wagtail.blocks
import wagtail.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('snippets', '0015_alter_footerlink_link_content'),
    ]

    operations = [
        migrations.AlterField(
            model_name='footerlink',
            name='link_content',
            field=wagtail.fields.StreamField([('link_content', wagtail.blocks.StructBlock([('link_type', wagtail.blocks.ChoiceBlock(choices=[('page', 'Internal Page'), ('external', 'External Link')], label='Link Type'))]))], blank=True, null=True),
        ),
    ]
