from django.contrib import admin

# Register your models here.
from.models import Organizer,Events,Student,Registration,Transactions,PaymentSuccess
admin.site.register(Organizer)
admin.site.register(Events)
admin.site.register(Student)
admin.site.register(Registration)
admin.site.register(Transactions)
admin.site.register(PaymentSuccess)