import graphene

class LinkBlockType(graphene.ObjectType):
    """
    GraphQL Type for LinkBlock
    """
    
    title = graphene.String()
    url = graphene.String()
    open_new_tab = graphene.Boolean()
    
    def resolve_url(self, info):
        if 'external_url' in self and self['external_url']:
            return self['external_url']
        elif 'page' in self and self['page']:
            return self['page']
        return None
    
    
class MenuBlockType(graphene.ObjectType):
    """
    GraphQL Type for MenuBlock
    """
    
    menu_title = graphene.String()
    links = graphene.List(LinkBlockType)