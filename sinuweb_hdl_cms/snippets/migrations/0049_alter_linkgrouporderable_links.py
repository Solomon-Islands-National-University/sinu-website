# Generated by Django 5.0.2 on 2024-06-02 01:12

import wagtail.blocks
import wagtail.blocks.field_block
import wagtail.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('snippets', '0048_alter_linkgrouporderable_links'),
    ]

    operations = [
        migrations.AlterField(
            model_name='linkgrouporderable',
            name='links',
            field=wagtail.fields.StreamField([('link', wagtail.blocks.StructBlock([('link_title', wagtail.blocks.CharBlock(help_text='name of the link', max_length=150, required=True)), ('external_url', wagtail.blocks.URLBlock(help_text='An external destination when this link is clicked', required=False)), ('goes_to', wagtail.blocks.ChoiceBlock(choices=[wagtail.blocks.field_block.URLBlock, wagtail.blocks.field_block.CharBlock], help_text='An external destination when this link is clicked', required=False))]))], blank=True, help_text='Add links (i.e. links under this group)', null=True, verbose_name='Links'),
        ),
    ]