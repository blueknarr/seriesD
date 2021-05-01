import requests
from bs4 import BeautifulSoup

# user-agent : web browser가 요청, 나는 크롬이다. 지정하지 않으면 requests로 요청을 보낸다.
headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
response = requests.get('https://movie.naver.com/movie/sdb/rank/rmovie.nhn?sel=pnt&date=20200716', headers=headers)
soup = BeautifulSoup(response.text, 'html.parser')

selector = '#old_content > table > tbody > tr'
title_selector = 'td.title > div > a'
titles = soup.select(selector)

rating_selector = 'td.point'
cnt = 1
for title in titles:
    title_tag = title.select_one(title_selector)
    rating_tag = title.select_one(rating_selector)

    if title_tag:
        print(f'{cnt}', title_tag.text, rating_tag.text)
        cnt+=1
