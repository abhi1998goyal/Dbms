from rest_framework import viewsets
from articles.models import Organizer,Events,Student,Registration
from .serializers import OrganizerSerializer,EventsSerializer,StudentSerializer,RegistrationSerializer
# class ArticleListView(ListAPIView):
#     queryset=Article.objects.all()
#     serializer_class=ArticleSerializer

# class ArticleDetailView(RetrieveAPIView):
#     queryset=Article.objects.all()
#     serializer_class=ArticleSerializer


class OrganizerViewSet(viewsets.ModelViewSet):
    queryset=Organizer.objects.all()
    serializer_class=OrganizerSerializer

class EventsViewSet(viewsets.ModelViewSet):
    queryset=Events.objects.all()
    serializer_class=EventsSerializer
class StudentViewSet(viewsets.ModelViewSet):
    queryset=Student.objects.all()
    serializer_class=StudentSerializer
class RegistrationViewSet(viewsets.ModelViewSet):
    queryset=Registration.objects.all()
    serializer_class=RegistrationSerializer
