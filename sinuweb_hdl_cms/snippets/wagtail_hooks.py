from wagtail.snippets.models import register_snippet
from wagtail.snippets.views.snippets import SnippetViewSet
from wagtail.snippets.views.snippets import CreateView
from django.contrib import messages
from wagtail.admin.panels import (
    MultiFieldPanel,
    InlinePanel, 
    FieldPanel
)
from .models import (
    Footer,
    Header,
) 


class FooterCreateView(CreateView):
    model = Footer
    
    def form_valid(self, form):
        if Footer.objects.exists():
            messages.error(self.request, "You already have a Footer. There can only be one instance.")
            return self.render_to_response(self.get_context_data(form=form))
        
        return super().form_valid(form)


class FooterViewSet(SnippetViewSet):
    """Footer snippet"""
    
    model = Footer
    add_view_class = FooterCreateView
    
    panels = [
        FieldPanel("title"),
        FieldPanel("link_groups"),
        # MultiFieldPanel([
            # InlinePanel(
            #     relation_name="link_groups", 
            #     max_num=4, 
            #     label="link group", 
            #     heading=" ",
            # )]#,
        #     heading="Link Groups",
        # ),
    ]
    

register_snippet(FooterViewSet)


class HeaderCreateView(CreateView):
    def form_valid(self, form):
        if Header.objects.exists():
            messages.error(self.request, "You already have a Header. There can only be one instance.")
            return self.render_to_response(self.get_context_data(form=form))
        
        return super().form_valid(form)


class HeaderViewSet(SnippetViewSet):
    """Header snippet"""
    
    model = Header
    add_view_class = HeaderCreateView
    
    panels = [
        FieldPanel("title"),
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

  
