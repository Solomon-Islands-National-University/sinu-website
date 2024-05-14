from django.db import models
from wagtail.models import Page
from wagtail.admin.panels import FieldPanel
from wagtail.api import APIField


class HomePage(Page):
    """The home page of the website."""

    max_count = 1
    
    hero_text = models.TextField(blank=False, null=True)
    hero_paragraph = models.TextField(blank=False, null=True)

    content_panels = Page.content_panels + [
        FieldPanel('hero_text'),
        FieldPanel('hero_paragraph'),
    ]

    api_fields = [
        APIField('hero_text'),
        APIField('hero_paragraph'),
    ]
