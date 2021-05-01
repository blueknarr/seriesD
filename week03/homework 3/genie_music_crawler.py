import requests
from bs4 import BeautifulSoup
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
url = 'https://www.genie.co.kr/chart/top200?ditc=D&rtm=N&ymd=20200713'
response = requests.get(url, headers=headers)
soup = BeautifulSoup(response.text, 'html.parser')
selector = '#body-content > div.newest-list > div > table > tbody > tr'
music_chart = soup.select(selector)
for music in music_chart:
    rank = music.select_one('td.number')
    title = music.select_one('td.info > a.title.ellipsis')
    artist = music.select_one('td.info > a.artist.ellipsis')
    if title:
        print(rank.text[0:2].strip(), title.text.strip(), artist.text)