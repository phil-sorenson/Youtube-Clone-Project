from django.urls import path
from . import views

urlpatterns = [
    path('<str:video_id>/', views.get_comments),
    path('', views.create_comments)
]