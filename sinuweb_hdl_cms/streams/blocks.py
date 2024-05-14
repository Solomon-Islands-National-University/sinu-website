from wagtail import blocks

class LinkBlock(blocks.StructBlock):
    """ A custom link block """
    
    class Meta:
        icon = 'link'
        label = 'Link'
        
    link_text = blocks.CharBlock(
        required=True,
        help_text="The text the user sees on the link",
        max_length=150,
    )
    
    destination = blocks.StructBlock([
        (
            'page', blocks.PageChooserBlock(
            help_text="The destination page when this link is clicked",
            max_length=150,
            required=False,
            )
        ),
        (
            'external_url', blocks.URLBlock(
            help_text="An external destination when this link is clicked",
            max_length=150,
            required=False,
            )
        ),
    ], 
    required=False,
    max_num=1,
    help_text="Choose either a page or an external URL as the destination."
    )
    
    
class ListMenuBlock(blocks.StructBlock):
    """A block for a list menu"""
    
    class Meta:
        icon = 'clipboard-list'
        label = 'List Menu'
    
    menu_title = blocks.CharBlock(
        required=True,
        help_text="The menu title",
        max_length=150,
    )
    
    links = blocks.ListBlock(LinkBlock)
    


class NestedListMenuBlock(blocks.StructBlock):
    """ A block for nested list menus with a title """

    class Meta:
        icon = 'clipboard-list'
        label = 'Nested List Menu'
    
    menu_title = blocks.CharBlock(
        required=True,
        help_text="Top level menu title",
        max_length=150,
    )
    
    sub_menus = blocks.ListBlock(ListMenuBlock)
    
