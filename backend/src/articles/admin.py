from django.contrib import admin

# Register your models here.
from.models import Organizer,Events,Student,Registration
admin.site.register(Organizer)
admin.site.register(Events)
admin.site.register(Student)
admin.site.register(Registration)