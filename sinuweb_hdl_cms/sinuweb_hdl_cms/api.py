from wagtail.api.v2.views import PagesAPIViewSet
from wagtail.images.api.v2.views import ImagesAPIViewSet
from wagtail.api.v2.router import WagtailAPIRouter
from snippets.endpoints import (
    FooterAPIEndpoint,
    HeaderAPIEndpoint,
)


# Create the router. "wagtailapi" is the URL namespace
api_router = WagtailAPIRouter('wagtailapi')

# The first parameter is the name of the endpoint (eg. pages, images). This
# is used in the URL of the endpoint\
# The second parameter is the endpoint class that handles the requests
api_router.register_endpoint('pages', PagesAPIViewSet)
api_router.register_endpoint('images', ImagesAPIViewSet)
api_router.register_endpoint('footer', FooterAPIEndpoint)
api_router.register_endpoint('header', HeaderAPIEndpoint)
