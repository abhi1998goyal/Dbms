from rest_framework import serializers
from articles.models import Organizer,Events,Student,Registration
class OrganizerSerializer(serializers.ModelSerializer):
    class Meta:
        model=Organizer
        fields=['name','ident_no']
class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Events
        fields=['event_name','organizer_id']
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Student
        fields=['name','roll_no']
class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Registration
        fields=['part_id','event_id']
