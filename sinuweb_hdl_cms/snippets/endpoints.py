from wagtail.api.v2.views import BaseAPIViewSet
from .models import (
    Footer,
    Header,
)

class FooterAPIEndpoint(BaseAPIViewSet):

    model = Footer

    body_fields = BaseAPIViewSet.body_fields + [
        'link_groups',
    ]

    listing_default_fields = BaseAPIViewSet.listing_default_fields = [
        'link_groups',
    ]
    
class HeaderAPIEndpoint(BaseAPIViewSet):

    model = Header

    max_count = 1    