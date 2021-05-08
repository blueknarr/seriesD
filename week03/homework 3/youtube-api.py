import os
import googleapiclient.discovery
from week03 import secret

os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"
api_service_name = "youtube"
api_version = "v3"
DEVELOPER_KEY = secret.youtube_api_key
youtube = googleapiclient.discovery.build(
    api_service_name, api_version, developerKey=DEVELOPER_KEY)
request = youtube.commentThreads().list(
    part="snippet,replies",
    videoId="wDfqXR_5yyQ"
)
response = request.execute()
items = response['items']
# 아이유 유튜브 동영상 댓글 가져오기
for i in items:
    print(i['snippet']['topLevelComment']['snippet']['textOriginal'])