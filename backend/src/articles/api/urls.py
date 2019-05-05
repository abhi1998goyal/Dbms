from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import OrganizerViewSet,EventsViewSet,StudentViewSet, RegistrationViewSet,TransactionViewSet,PaymentSuccessViewSet
from .import views
# urlpatterns=[
#      path('',ArticleListView.as_view()),
#      path('<pk>',ArticleDetailView.as_view()),



# ]
urlpatterns=[
    path('subscribe/<slug:email>',views.subscribe,name='subscribe')    

]

router = DefaultRouter()
router.register(r'Organizer', OrganizerViewSet, basename='Organizer')
router.register(r'Event', EventsViewSet, basename='Event')
router.register(r'Student', StudentViewSet, basename='Student')
router.register(r'Registration', RegistrationViewSet, basename='Registration')
router.register(r'Transaction', TransactionViewSet, basename='Transaction')
router.register(r'PaymentSuccess', PaymentSuccessViewSet, basename='PaymentSuccess')

urlpatterns += router.urls
