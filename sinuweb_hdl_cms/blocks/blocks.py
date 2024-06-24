from wagtail import blocks
from django.core.exceptions import ValidationError


class LinkBlock(blocks.StructBlock):
    """ A link with a title and a url """
        
    title = blocks.CharBlock(
        required=True,
        help_text="name of the link",
        max_length=150,
    )
    
    external_url = blocks.URLBlock(
        help_text="An external destination when this link is clicked",
        required=False,
    )
    
    page = blocks.PageChooserBlock(
        help_text="Select page this link goes to",
        required=False,
    )
    
    open_new_tab = blocks.BooleanBlock(
        help_text="Check this if you want this link to open a new tab in the browser",
        required=False,
    )
    
    
    class Meta:
        icon = 'link'
        label = 'Link'
    
    def clean(self, value):
        
        cleaned_data = super().clean(value)
        
        external_url = cleaned_data.get('external_url')
        page = cleaned_data.get('page')
        
        if external_url and page:
            raise ValidationError('You can only provide either a URL or a Page, not both.')
        
        if not external_url and not page:
            raise ValidationError('You must provide either a URL or a Page.')

        return cleaned_data

    
class MenuBlock(blocks.StructBlock):
    """A menu with a title and a list of links """
    
    class Meta:
        icon = 'clipboard-list'
        label = 'List Menu'
    
    menu_title = blocks.CharBlock(
        required=True,
        help_text="The menu title",
        max_length=150,
    )
    
    links = blocks.ListBlock(LinkBlock)