from wagtail.snippets.models import register_snippet
from wagtail.snippets.views.snippets import SnippetViewSet
from wagtail.admin.panels import (
    MultiFieldPanel,
    InlinePanel, 
)
from .models import (
    Footer,
    Header,
) 

class FooterViewSet(SnippetViewSet):
    model = Footer
    panels = [
        MultiFieldPanel([
            InlinePanel(
                relation_name="link_groups", 
                max_num=4, 
                label="link group", 
                heading=" ",
            )],
            heading="Link Groups",
        ),
    ]

register_snippet(FooterViewSet)


class HeaderViewSet(SnippetViewSet):
    model = Header
    panels = [
        MultiFieldPanel([
            InlinePanel(
                relation_name="nav_items", 
                max_num=5, 
                label="navbar item", 
                heading=" ",
            )],
            heading="Navbar Items",
        ),
    ]

register_snippet(HeaderViewSet)

  
