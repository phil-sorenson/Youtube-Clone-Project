from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.shortcuts import get_object_or_404
from .models import Comment
from .serializers import CommentSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def get_comments(request,video_id):
    comments = Comment.objects.filter(video_id = video_id)
    serializer= CommentSerializer(comments, many=True)
    print(serializer.data)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_comments(request):
    print(
        'User', f"{request.user.id} {request.user.email} {request.user.username}"
    )