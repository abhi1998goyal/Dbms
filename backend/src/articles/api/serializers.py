from rest_framework import serializers
from articles.models import Organizer,Events,Student,Registration,Transactions,PaymentSuccess
class OrganizerSerializer(serializers.ModelSerializer):
    class Meta:
        model=Organizer
        fields=['name','ident_no','society','phone_no','email_id','userType']
class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Events
        fields=['event_id','event_name','organizer_id','reg_fee','poster_img','event_type','event_div','event_date','event_desc']
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Student
        fields=['name','roll_no','event_part','phone_no','email_id','userType']
class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Registration
        fields=['part_id','event_id','registration_id','email_alerts']

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model=Transactions
        fields=['student_id','event_id','transaction_id','reg_fee']

class PaymentSuccessSerializer(serializers.ModelSerializer):
    class Meta:
        model=PaymentSuccess
        fields=['transaction_id','dateOfPayment','registration_id']

