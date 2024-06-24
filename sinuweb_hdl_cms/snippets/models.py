from django.db import models
from wagtail.models import Orderable
from modelcluster.fields import ParentalKey
from modelcluster.models import ClusterableModel
from wagtail.fields import StreamField
from blocks.blocks import MenuBlock


class Footer(ClusterableModel):
    """Footer model for storing the footer information"""
    
    title = models.CharField(max_length=255)
    
    link_groups = StreamField([
            ('links', MenuBlock()),
        ],
        help_text='Build the dropdown menu',
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
    
    menus = StreamField([
            ('list_menu', MenuBlock()),
        ],
        help_text='Build the dropdown menu',
        null=True,
        blank=True,
    )

    def __str__(self):
        return self.title