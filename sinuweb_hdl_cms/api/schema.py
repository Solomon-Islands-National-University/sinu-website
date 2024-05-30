import graphene
from graphene_django import DjangoObjectType
from news.models import NewsPostPage


class NewsPostType(DjangoObjectType):
    class Meta:
        model = NewsPostPage
        fields = '__all__'

class Query(graphene.ObjectType):
    all_news = graphene.List(NewsPostType)

    def resolve_all_news(self, info, **kwargs):
        return NewsPostPage.objects.all().live()

schema = graphene.Schema(query=Query)