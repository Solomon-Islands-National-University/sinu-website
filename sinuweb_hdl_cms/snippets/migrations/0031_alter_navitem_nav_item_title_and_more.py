# Generated by Django 5.0.2 on 2024-05-01 02:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('snippets', '0030_remove_navitem_nav_title_navitem_nav_item_title_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='navitem',
            name='nav_item_title',
            field=models.CharField(help_text='Name of the top navbar menu item. (e.g. About Us)', max_length=255, verbose_name='Name of menu item'),
        ),
        migrations.AlterField(
            model_name='navitem',
            name='nav_subtitle',
            field=models.CharField(blank=True, help_text='add a short sentence that expands on the title (e.g. discover what we are about)', max_length=255, null=True, verbose_name='Short brief of the menu item'),
        ),
    ]
