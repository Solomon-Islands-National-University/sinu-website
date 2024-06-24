import graphene
from blocks.graph_types import MenuBlockType


class FooterType(graphene.ObjectType):
    """ GraphQL Type for Footer """
    
    title = graphene.String()
    link_groups = graphene.List(MenuBlockType)

    def resolve_link_groups(self, info):
        return resolve_links(self.__dict__['link_groups'])
        
    
    
class NavItemOrderableType(graphene.ObjectType):
    """
    GraphQL Type for NavItemOrderable
    """
    
    title = graphene.String()
    subtitle = graphene.String()
    menus = graphene.List(MenuBlockType)

    def resolve_menus(self, info):
        return resolve_links(self.__dict__['menus'])
       


class HeaderType(graphene.ObjectType):
    """ GraphQL Type for Footer """
    
    nav_items = graphene.List(NavItemOrderableType)

    def resolve_nav_items(self, info):
        return self.nav_items.all()
    



### 
### A Resolver and a regex helper. Move someplace and refactor later.

def regex_path_up_or_return_none(path):
    """ 
    Refactor This Later
    """
    
    page_path = None
    if path:
        import re
        page_path = '{}'.format(path.__dict__['url_path'])
        pattern = r'^/[^/]*'
        page_path = re.sub(pattern, '', page_path)
    return page_path
    
    
def resolve_links(menublock_list):
    """
    Resolves MenuLinkBlocks. Needs Refactoring.
    """
    menus = []
    
    for menu_block in menublock_list:

        title = menu_block.__dict__['value']['menu_title']
        menu = {'menu_title': title}
        
        link_blocks = menu_block.__dict__['value']['links']
       
        links = []
        print(type(link_blocks))
        for link_block in link_blocks:
            link = {k: v for k, v in link_block.items()}
            link['page'] = regex_path_up_or_return_none(link_block['page'])
            links.append(link)
        
        menu['links'] = links
        menus.append(menu)

    return menus