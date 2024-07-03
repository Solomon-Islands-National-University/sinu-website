from graphene import ObjectType
from graphene_django import DjangoObjectType
import graphene
from .models import NewsPostPage

class NewsType(ObjectType):
    class Meta:
        model = NewsPostPage
        fields = ('page_ptr_id', 'custom_title', 'date', 'slug', 'body', 'paragraph')
        
    
    custom_title = graphene.String()
    id = graphene.Int()
    date = graphene.String()    
    slug = graphene.String()    
    body = graphene.String()    
    paragraph = graphene.String()


class NewsPostType(DjangoObjectType):
    class Meta:
        model = NewsPostPage
        fields = ["title", "date", "body", "slug"]
   
       
class NewsPostPaginatedType(graphene.ObjectType):
    page = graphene.Int()
    pages = graphene.Int()
    has_next = graphene.Boolean()
    has_prev = graphene.Boolean()
    objects = graphene.List(NewsPostType)
    


