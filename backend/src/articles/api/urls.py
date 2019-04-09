from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import ArticleViewSet

# urlpatterns=[
#      path('',ArticleListView.as_view()),
#      path('<pk>',ArticleDetailView.as_view()),



# ]


router = DefaultRouter()
router.register(r'', ArticleViewSet, basename='article')
urlpatterns = router.urls