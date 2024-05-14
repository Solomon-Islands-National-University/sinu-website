from django.db import models
from wagtail.models import Page
from wagtail.admin.panels import FieldPanel
from wagtail.api import APIField


class AboutPage(Page):
    """ lists all news detail pages """
    
    max_count = 1
    
    custom_title = models.CharField(
        max_length=100,
        blank=False,
        null=False,
        help_text='overwrites default title',
    )
    
    content_panels = Page.content_panels + [
        FieldPanel('custom_title')
    ]
    
    api_fields = [
        APIField('custom_title'),
    ]

