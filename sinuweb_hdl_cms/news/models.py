""" News listing and news detail pages """

from django.db import models
from wagtail.models import Page
from wagtail.admin.panels import FieldPanel
from wagtail.search import index
from wagtail.fields import RichTextField
from wagtail.api import APIField
from rest_framework.fields import DateField
from bs4 import BeautifulSoup
from news.serializers import NewsIndexChildPagesSerializer
from grapple.models import (
    GraphQLString,
    GraphQLStreamfield,
)


class NewsIndexPage(Page):
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

    subpage_types = [
        'news.NewsPostPage',
    ]
    
    api_fields = [
        APIField('custom_title'),
        APIField('content', serializer=NewsIndexChildPagesSerializer(source='get_child_pages')),
    ]
    
    @property
    def get_child_pages(self):
        return self.get_children().type(NewsPostPage).public().live().order_by('-first_published_at')
    
    
class NewsPostPage(Page):
    """ News page """
    
    class Meta:
        ordering = ['-date']

    custom_title = models.CharField(
        max_length=100,
        blank=False,
        null=False,
        help_text='overwrites default title',
    )

    body = RichTextField(
        blank=False,
        null=False,
    )

    news_image = models.ForeignKey(
        "wagtailimages.Image",
        blank=False,
        null=True,
        related_name="+",
        on_delete=models.SET_NULL,
    )

    date = models.DateField(verbose_name="Post date")

    search_fields = Page.search_fields + [
        index.SearchField('custom_title'),
        index.SearchField('body'),
    ]

    content_panels = Page.content_panels + [
        FieldPanel('news_image'),
        FieldPanel('custom_title'),
        FieldPanel('body'),
        FieldPanel('date'),
    ]
    
    # Note these fields below:
    graphql_fields = [
        GraphQLString("custom_title"),
        GraphQLString("news_image"),
        GraphQLStreamfield("body"),
        GraphQLString("date"),
    ]

    parent_page_types = ['news.NewsIndexPage']

    api_fields = [
        APIField('custom_title'),
        APIField(
            'date',  
            serializer=DateField(format='%d %B %Y')
        ),
        APIField('news_image'),
        # APIField('thumbnail', serializer=ImageRenditionField('fill-100x100', source='news_image')),
        APIField('body'),
        APIField('paragraph'),
    ]
    
    @property
    def paragraph(self):
        brief_paragraph = self.body.split('</p>')[0] + '</p>'
        soup = BeautifulSoup(brief_paragraph, 'html.parser')
        return soup.get_text()