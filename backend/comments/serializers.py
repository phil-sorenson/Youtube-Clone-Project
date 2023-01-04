from rest_framework import serializers
from .models import Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model= Comment
        fields= ['video_id','text', 'likes', 'dislikes', 'user_id']
        depth= 1