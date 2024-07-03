import graphene
from snippets.models import Footer, Header
from snippets.graph_types import FooterType, HeaderType
from news.graph_types import NewsType
from news.models import NewsPostPage
from news.graph_types import NewsPostPaginatedType
from utils.utils import get_paginator


class Query(graphene.ObjectType):
    
    footer = graphene.Field(FooterType)
    header = graphene.Field(HeaderType)
    
    news = graphene.List(NewsType, count=graphene.Int())
    news_item = graphene.Field(NewsType, slug=graphene.String())
    paged_news_items = graphene.Field(NewsPostPaginatedType, page=graphene.Int(), items_per_page=graphene.Int())
    
    def resolve_paged_news_items(self, info, page=1, items_per_page=1):
        page_size = items_per_page
        qs = NewsPostPage.objects.live().public().order_by('-first_published_at')
        return get_paginator(qs, page_size, page, NewsPostPaginatedType)

    def resolve_footer(self, info):
        return Footer.objects.first()  
    
    def resolve_header(self, info):
        return Header.objects.first() 

    def resolve_news(self, info, count=None):
        if count is not None:
            return NewsPostPage.objects.live().public().order_by('-first_published_at')[:count]
        return NewsPostPage.objects.live().public()
    
    def resolve_news_item(self, info, slug):
        return NewsPostPage.objects.get(slug=slug)
    
schema = graphene.Schema(query=Query)