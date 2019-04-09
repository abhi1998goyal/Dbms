from rest_framework import viewsets
from articles.models import Article
from .serializers import ArticleSerializer
# class ArticleListView(ListAPIView):
#     queryset=Article.objects.all()
#     serializer_class=ArticleSerializer

# class ArticleDetailView(RetrieveAPIView):
#     queryset=Article.objects.all()
#     serializer_class=ArticleSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    queryset=Article.objects.all()
    serializer_class=ArticleSerializer
