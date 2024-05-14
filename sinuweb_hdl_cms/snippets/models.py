from django.db import models
from wagtail.models import Orderable
from modelcluster.fields import ParentalKey
from modelcluster.models import ClusterableModel
from wagtail.api import APIField
from wagtail.admin.panels import (
    MultiFieldPanel,
    InlinePanel, 
    FieldPanel,
)
from django.core.exceptions import ValidationError
from wagtail import blocks
from wagtail.fields import StreamField
from streams.blocks import (
    LinkBlock,
    ListMenuBlock,
    NestedListMenuBlock,
)


class Footer(ClusterableModel):
    """Footer model for storing the footer information"""
    
    text = models.CharField(max_length=255)

    def __str__(self):
        return self.text


class FooterLinkGroup(ClusterableModel, Orderable):
    """ A group of links in the footer."""
    
    snippet = ParentalKey("snippets.Footer",  related_name="link_groups")
    title = models.CharField(
        max_length=200,
        help_text='Add a title for this group of links'
    )
    
    panels = [
        FieldPanel('title'),
         MultiFieldPanel([
            InlinePanel(
                relation_name="footer_links", 
                max_num=8, 
                label="link", 
                heading=" ",
            )],
            heading="links under this group",
        ),
    ]
    
    api_fields = [
        APIField('title'),
        APIField('footer_links'),
    ]
    
    def __str__(self):
        return self.title
    
    
class FooterLink(Orderable):
    """ A single link in the footer """
    
    link_group = ParentalKey("snippets.FooterLinkGroup",  related_name="footer_links")
    link_title = models.CharField(
        max_length=255,
        help_text='add name of the link',
    )
    
    page_link = models.ForeignKey(
        'wagtailcore.Page', 
        null=True, 
        blank=True, 
        on_delete=models.SET_NULL, 
        related_name='+', 
        help_text='Choose a page'
    )
    
    external_url = models.URLField(
        null=True, 
        blank=True, 
        help_text='insert an external url'
    )
    
    api_fields = [
        APIField('link_title'),
        APIField('page_link'),
        APIField('external_url'),
    ]

    def __str__(self):
        return self.link_title
    
    def full_clean(self, *args, **kwargs):
        super().full_clean(*args, **kwargs)
        
        if self.page_link and self.external_url:
            raise ValidationError('Please select either an internal page or an external URL, not both.')
        elif not self.page_link and not self.external_url:
            raise ValidationError("The link must be mapped to a page or an external URL")



class Header(ClusterableModel):

    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    
class NavItemOrderable(Orderable):
    """ Nav Item Orderable """
    
    header = ParentalKey("snippets.Header",  related_name="nav_items")
    nav_item_title = models.CharField(
        max_length=255,
        help_text='Name of the top navbar menu item. (e.g. About Us)',
        verbose_name='Title'
    )
    nav_subtitle = models.CharField(
        max_length=255,
        help_text='add a short sentence that expands on the title (e.g. discover what we are about)',
        verbose_name='Subtitle',
        null=True,
        blank=True,
    )
    
    content = StreamField([
            ('list_menu', ListMenuBlock()),
            ('nested_list_menu', NestedListMenuBlock()),
            ('link', LinkBlock()), 
        ],
        help_text='Build the dropdown menu',
        null=True,
        blank=True,
    )
    
    def __str__(self):
        return self.nav_item_title