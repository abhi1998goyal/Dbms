from rest_framework import serializers
from articles.models import Organizer,Events,Student,Registration
class OrganizerSerializer(serializers.ModelSerializer):
    class Meta:
        model=Organizer
        fields=['name','ident_no','society','phone_no','email_id','user_type']
class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Events
        fields=['event_id','event_name','organizer_id','poster_img','event_type','event_div','event_date','user_type']
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Student
        fields=['name','roll_no','event_part','phone_no','email_id']
class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Registration
        fields=['part_id','event_id']
