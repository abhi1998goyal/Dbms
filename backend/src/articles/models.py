from django.db import models
# class Member(models.Model):
#     name =models.CharField(max_length=120)
#     email_id=models.EmailField(default='')
#     phone_no=models.IntegerField(default=9999999999)

#     class Meta:
#         abstract=True

#     def __str__(self):
#         return self.name
class Organizer(models.Model):
    societies=(('TNT','thapr nautanki team'),('scim','Scimatics'),('IETE','Indian Institute of technical Eng'))
    # organizer_name=model.CharField(max_length=30)
    name =models.CharField(max_length=120)
    email_id=models.CharField(max_length=50)
    phone_no=models.IntegerField(null=False,default=9999999999)
    society=models.CharField(max_length=20,choices=societies)
    ident_no=models.IntegerField(primary_key=True)
    
    def __str__(self):
        return str(self.ident_no)
class Events(models.Model):
    events_type=(('s','Sports'),('t','Technical'),('c','Cultural'))
    events_div=(('w','workshop'),('com','competition'),('con','conference'))
    event_date=models.DateField()
    event_type=models.CharField(max_length=20,choices=events_type)
    event_div=models.CharField(max_length=20,choices=events_div)
    event_name=models.CharField(max_length=20)
    organizer_id=models.OneToOneField(Organizer,on_delete=models.CASCADE,primary_key=True)
    #organizer_id=models.ForeignKey(Organizer,on_delete=models.CASCADE)
    poster_img=models.ImageField()
    def __str__(self):
        return self.event_name
class Student(models.Model):
    name =models.CharField(max_length=120)
    email_id=models.CharField(max_length=50)
    phone_no=models.IntegerField(null=False,default=9999999999)
    roll_no=models.IntegerField(primary_key=True)
    event_part=models.ManyToManyField(Events,through='Registration')
    
    def __int__(self):
        return self.roll_no
class Registration(models.Model):
    part_id=models.ForeignKey(Student,on_delete=models.CASCADE)
    event_id=models.ForeignKey(Events,on_delete=models.CASCADE)
    def __str__(self):
        return str(self.part_id) + " "+str(self.event_id)


    
