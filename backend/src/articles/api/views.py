from rest_framework import viewsets
from articles.models import Organizer,Events,Student,Registration,Transactions,PaymentSuccess
from .serializers import OrganizerSerializer,EventsSerializer,StudentSerializer,RegistrationSerializer,TransactionSerializer,PaymentSuccessSerializer
from django.core.mail import send_mail
from djreact import settings
from django.http import HttpResponse

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
#     @action(detail=True)

class TransactionViewSet(viewsets.ModelViewSet):
    queryset=Transactions.objects.all()
    serializer_class=TransactionSerializer

class PaymentSuccessViewSet(viewsets.ModelViewSet):
    queryset=PaymentSuccess.objects.all()
    serializer_class=PaymentSuccessSerializer
#     @action(detail=True)

    
def subscribe(request,email):
    send_mail(
     'Subject here',
        'Here is the message.',
     settings.DEFAULT_FROM_EMAIL,
     ['agoyal5_be16@thapar.edu'],
     fail_silently=False,)
    return HttpResponse("<h1>Thanks for Registering<h1>")
