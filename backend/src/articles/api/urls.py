from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import OrganizerViewSet,EventsViewSet,StudentViewSet, RegistrationViewSet

# urlpatterns=[
#      path('',ArticleListView.as_view()),
#      path('<pk>',ArticleDetailView.as_view()),



# ]


router = DefaultRouter()
router.register(r'Organizer', OrganizerViewSet, basename='Organizer')
router.register(r'Event', EventsViewSet, basename='Event')
router.register(r'Student', StudentViewSet, basename='Student')
router.register(r'Registration', RegistrationViewSet, basename='Registration')
urlpatterns = router.urls