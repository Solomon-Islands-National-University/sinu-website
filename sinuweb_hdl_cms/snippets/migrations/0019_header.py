# Generated by Django 5.0.2 on 2024-04-30 05:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('snippets', '0018_remove_footerlink_link_content_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Header',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
