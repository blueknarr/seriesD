from selenium import webdriver
from bs4 import BeautifulSoup
import time
import pprint

keyword = '강아지'
url = 'https://m.post.naver.com/search/post.nhn?keyword=' + keyword
chromedriver = 'C:\\Users\\nex\\Desktop\\chromedriver.exe'

# 웹 브라우저를 띄우지 않는 headlss chrome 옵션 적용
options = webdriver.ChromeOptions()
options.add_argument('headless')
driver = webdriver.Chrome(chromedriver, options=options)
driver.get(url)

# wait 1 sec for rendering
time.sleep(1)
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
post_list = soup.find_all('li', class_='_cds check_visible')

posts = []

for post in post_list:
    channel_name = post.find('span', class_='ell')
    post_date = post.find('time', class_='date_post')
    post_title = post.find('strong', class_='tit_feed ell')
    post_desc = post.find('p', class_='text_feed ell')
    img = post.find('img')['src']
    like = post.find('em', class_='u_cnt _cnt')
    posts.append([channel_name.text, post_date.text.strip(), post_title.text.strip(), post_desc.text, img, like.text])
pprint.pprint(posts)