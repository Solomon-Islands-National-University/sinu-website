from django.db import models
from wagtail.models import Orderable
from modelcluster.fields import ParentalKey
from modelcluster.models import ClusterableModel
from wagtail.fields import StreamField
from streams.blocks import (
    LinkBlock,
    ListMenuBlock,
    NestedListMenuBlock,
)


class Footer(ClusterableModel):
    """Footer model for storing the footer information"""
    
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title
        

class LinkGroupOrderable(Orderable):
    """ A group of links in the footer."""
    
    parent = ParentalKey("snippets.Footer",  related_name="link_groups")
    
    title = models.CharField(
        max_length=200,
        help_text='Add title (i.e. this would be the header title of the specified links)',
        verbose_name="Title"
    )
    
    content = StreamField([
            ('link', LinkBlock()), 
        ],
        help_text='Add links (i.e. links under this group)',
        verbose_name="Links",
        null=True,
        blank=True,
    )
    
    def __str__(self):
        return self.title
    
    


class Header(ClusterableModel):
    """Header model"""
    
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title
    
    
class NavItemOrderable(Orderable):
    """ Nav Item Orderable """
    
    parent = ParentalKey("snippets.Header",  related_name="nav_items")
    
    title = models.CharField(
        max_length=255,
        help_text='Name of the top navbar menu item. (e.g. About Us)',
        verbose_name='Title'
    )
    
    subtitle = models.CharField(
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
        return self.title