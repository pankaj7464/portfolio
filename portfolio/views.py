from django.shortcuts import render
from django.conf.urls.static import static
from .models import contact
from django.core.mail import send_mail

# Create your views here.


def home(request):
    if request.method == "POST":
        name = request.POST['name']
        email = request.POST['email']
        subject = request.POST['subject']
        message = request.POST['message']
        content = contact(name=name,email=email,subject=subject, message=message)                            
        content.save()
        
    return render(request, 'index.html')
