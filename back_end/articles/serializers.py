# articles/serializers.py

from rest_framework import serializers
from .models import Article, Comment

# 게시글 리스트
class ArticleListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id','title','content')

# 코맨트
class CommentSerializer(serializers.ModelSerializer):
    # 게시글 제목 가져오기
    class ArticleTitleSerializer(serializers.ModelSerializer):
        class Meta:
            model = Article
            fields = ('title',)
    article = ArticleTitleSerializer(read_only=True)
    
    class Meta:
        model = Comment
        fields = '__all__'
        # 유효성 검사에서 제외, 데이터 조회는 가능
        read_only_fields = ('article',)

# 단일 게시글
class ArticleSerializer(serializers.ModelSerializer):
    # 역참조
    comment_set = CommentSerializer(many=True, read_only=True)
    # 댓글 수
    comment_count = serializers.IntegerField(source='comment_set.count', read_only=True)

    class Meta:
        model = Article
        fields = '__all__'
    # override 혹은 추가한 경우 read_only_fields 동작 안함
        # read_only_fields = ('comment_set', 'comment_count',)