import graphene
from snippets.models import Footer, Header
from snippets.graph_types import FooterType, HeaderType

class Query(graphene.ObjectType):
    footer = graphene.Field(FooterType)
    header = graphene.Field(HeaderType)
    
    def resolve_footer(self, info):
        return Footer.objects.first()  
    
    def resolve_header(self, info):
        return Header.objects.first() 

schema = graphene.Schema(query=Query)