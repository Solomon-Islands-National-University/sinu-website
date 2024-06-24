# Generated by Django 5.0.2 on 2024-05-31 02:02

import wagtail.blocks
import wagtail.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('snippets', '0041_alter_linkgrouporderable_linkgroup_title'),
    ]

    operations = [
        migrations.RenameField(
            model_name='linkgrouporderable',
            old_name='linkgroup_title',
            new_name='title',
        ),
        migrations.RenameField(
            model_name='navitemorderable',
            old_name='navitem_content',
            new_name='content',
        ),
        migrations.RenameField(
            model_name='navitemorderable',
            old_name='navitem_subtitle',
            new_name='subtitle',
        ),
        migrations.RenameField(
            model_name='navitemorderable',
            old_name='navitem_title',
            new_name='title',
        ),
        migrations.RemoveField(
            model_name='linkgrouporderable',
            name='linkgroup_content',
        ),
        migrations.AddField(
            model_name='linkgrouporderable',
            name='content',
            field=wagtail.fields.StreamField([('link', wagtail.blocks.StructBlock([('link_text', wagtail.blocks.CharBlock(help_text='The text the user sees on the link', max_length=150, required=True)), ('destination', wagtail.blocks.StructBlock([('page', wagtail.blocks.PageChooserBlock(help_text='The destination page when this link is clicked', max_length=150, required=False)), ('external_url', wagtail.blocks.URLBlock(help_text='An external destination when this link is clicked', max_length=150, required=False))], help_text='Choose either a page or an external URL as the destination.', max_num=1, required=False))]))], blank=True, help_text='Add links (i.e. links under this group)', null=True, verbose_name='Links'),
        ),
    ]
