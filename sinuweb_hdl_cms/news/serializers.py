from requests import Response
from rest_framework import serializers
from rest_framework.fields import Field
from rest_framework.pagination import (
    PageNumberPagination,
    BasePagination,
)
from wagtail.api import APIField
from wagtail.images.api.fields import ImageRenditionField
from rest_framework.fields import DateField
from wagtail.api import APIField


class CustomPagination(PageNumberPagination):
    page_size = 2  
    page_size_query_param = 'page_size'
    max_page_size = 100


class NewsIndexChildPagesSerializer(Field):
    
    class Meta:
        pagination_class = CustomPagination
        
    def get_paginated_link(self, page_number, request):
        
        if page_number is None:
            return None
        
        base_url = request.build_absolute_uri()
        if '?' in base_url:
            base_url = base_url.split('?')[0]
            
        if page_number == 1:
            return base_url
            
        return f"{base_url}?page={page_number}"
    
        
    def to_representation(self, child_pages):
        
        request = self.context['request']
        paginator = CustomPagination()
        paginated_data = paginator.paginate_queryset(child_pages, request)
        
        # DEBUG
        
        # data = []
        # for child in paginated_data:
        #     news_post_serializer = NewsPostPageSerializer(child)  # Create an instance of NewsPostPageSerializer for each child page
        #     serialized_data = news_post_serializer.data  # Get serialized data from NewsPostPageSerializer
        #     data.append({
        #         'id': serialized_data['id'],
        #         'title': serialized_data['title'],
        #         'custom_title': serialized_data['custom_title'],
        #         'date': serialized_data['date'],
        #         'image': serialized_data['thumbnail'],  # Use the 'thumbnail' field from NewsPostPageSerializer
        #         'paragraph': serialized_data['paragraph'],
        #         'slug': serialized_data['slug'],
        #         'url': serialized_data['url'],
        #     })
        
        # print(data)
        
        # DEBUG
        
        data = [
            {
                'id': child.id,
                'title': child.title,
                'custom_title': child.specific.custom_title,
                'date': child.specific.date,
                # 'image': child.specific.thumbnail, 
                'paragraph': child.specific.paragraph,

                'slug': child.slug,
                'url': child.url,
            } for child in paginated_data
        ]
        
        total_pages = paginator.page.paginator.num_pages
        
        current_page_index = int(request.query_params.get(paginator.page_query_param, 1))
        
        next_page_index = (current_page_index + 1) if current_page_index < total_pages else None
        next_page_url = self.get_paginated_link(next_page_index, request) 
        has_next_page = True if next_page_index is not None else False
        
        prev_page_index = (current_page_index) - 1 if current_page_index > 1 else None
        prev_page_url = self.get_paginated_link(prev_page_index, request) 
        has_prev_page = True if current_page_index != 1 else False
        
        pagination = {
            'total_pages': total_pages,
            'current_page_index': current_page_index,
            'next_page_index': next_page_index,
            'next_page_url': next_page_url,
            'has_next_page': has_next_page,
            'prev_page_index': prev_page_index,
            'prev_page_url': prev_page_url,
            'has_prev_page': has_prev_page,
        }

        return {
            'objects': data,
            'pagination': pagination,
        }





class NewsPostPageSerializer(serializers.ModelSerializer):
    thumbnail = serializers.ImageField(source='news_image')

    class Meta:
        model = 'NewsPostPage'
        fields = '__all__'


        

        