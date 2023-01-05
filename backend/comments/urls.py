from django.urls import path
from . import views

urlpatterns = [
    path('<video_id>/', views.get_comments)
]