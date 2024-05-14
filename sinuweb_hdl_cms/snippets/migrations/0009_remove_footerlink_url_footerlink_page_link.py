# Generated by Django 5.0.2 on 2024-04-29 22:59

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('snippets', '0008_footerlinkgroup_sort_order'),
        ('wagtailcore', '0091_remove_revision_submitted_for_moderation'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='footerlink',
            name='url',
        ),
        migrations.AddField(
            model_name='footerlink',
            name='page_link',
            field=models.ForeignKey(blank=True, help_text='Choose an internal page', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailcore.page'),
        ),
    ]
