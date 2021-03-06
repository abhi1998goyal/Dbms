from django.db import models
from django.core.mail import send_mail
class Member(models.Model):
    name =models.CharField(max_length=120)
    email_id=models.EmailField()
    phone_no=models.IntegerField()
    userType=models.CharField(max_length=1,default='x')
    

    class Meta:
        abstract=True

    def __str__(self):
        return self.name
class Organizer(Member):
    # societies=(('TNT','thapr nautanki team'),('scim','Scimatics'),('IETE','Indian Institute of technical Eng'))
    societies=(('TNT','Thapar Nautanki Team'),
        ('SCIM','Scimatics'),
        ('IETE','The Institution of Electronics and Telecommunication Engineers'),
        ('CCS','Creative Computing Society'),
        ('LitSoc','Literary Society'),
        ('Mudra','Music and Drama Society'),
        ('FAPS','FINE ARTS AND PHOTOGRAPHY SOCIETY')
        )
    # organizer_name=model.CharField(max_length=30)
    
    society=models.CharField(max_length=20,choices=societies)
    ident_no=models.IntegerField(primary_key=True)
    def __str__(self):
        return str(self.ident_no)
class Events(models.Model):
    events_type=(('s','Sports'),('t','Technical'),('c','Cultural'))
    events_div=(('w','workshop'),('comp','competition'),('conf','conference'))
    event_date=models.DateField()
    event_type=models.CharField(max_length=20,choices=events_type)
    event_div=models.CharField(max_length=20,choices=events_div)
    event_id=models.CharField(max_length=120,primary_key=True)
    event_name=models.CharField(max_length=30)
    organizer_id=models.ForeignKey(Organizer,on_delete=models.CASCADE)
    poster_img=models.CharField(max_length=500)
    reg_fee=models.IntegerField(default=0)
    event_desc=models.CharField(max_length=20000)

    def __str__(self):
        return self.event_name
class Student(Member):
     
    roll_no=models.IntegerField(primary_key=True)
    event_part=models.ManyToManyField(Events,through='Registration')
    def __str__(self):
        return str(self.roll_no)
class Transactions(models.Model):
    student_id=models.CharField(max_length=100)
    event_id=models.CharField(max_length=100)
    transaction_id=models.CharField(max_length=100,primary_key=True)
    reg_fee=models.IntegerField(default=0)
    
    def __str__(self):
        return self.transaction_id

class Registration(models.Model):
    registration_id=models.CharField(max_length=100,default='')
    part_id=models.ForeignKey(Student,on_delete=models.CASCADE)
    event_id=models.ForeignKey(Events,on_delete=models.CASCADE)
    email_alerts = models.BooleanField(default=True)
    class Meta:
        unique_together=('part_id','event_id')
    def __str__(self):
        return str(self.part_id) + " "+str(self.event_id)

class PaymentSuccess(models.Model):
    transaction_id=models.CharField(max_length=100,primary_key=True)
    dateOfPayment=models.DateField()
    registration_id=models.CharField(max_length=100,default='')
    

    def __str__(self):
        return str(self.transaction_id)+""+str(self.dateOfPayment)

#     def save(self):
#         number=self.objects.all().count()
#         send_mail(
#      'Subject here',
#         'Here is the message.',
#      'abhi1998goyal@gmail.com',
#      ['agoyal5_be16@thapar.edu'],
#      fail_silently=False,
# ) 
#         super.save(self)



    
