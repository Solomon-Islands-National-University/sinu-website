# Generated by Django 5.0.2 on 2024-04-29 20:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('snippets', '0004_alter_footerlink_link_group_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='footer',
            name='url',
        ),
    ]
