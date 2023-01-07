from django.db import models
from authentication.models import User
# Create your models here.
# Text= Body of the comment
# video_id is a string and how we track specific comments along
# user will have there own array of different log in info including a user_id
    # Set up to where you're getting ALL user info upon a POST request
class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    video_id = models.CharField(max_length=30)
    text = models.CharField(max_length=100)
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)
        # Default = 0 allows you to not have to include this in Postman as an object value