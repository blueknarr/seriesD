import pprint
import requests
import secret

text = '안녕하세요'
papago_url = 'https://openapi.naver.com/v1/papago/n2mt'

headers = {
    'X-Naver-Client-Id': secret.client_id,
    'X-Naver-Client-Secret': secret.client_secret,
}

data = {
    'source': 'ko',
    'target': 'en',
    'text': text
}

response = requests.post(papago_url, headers=headers, data=data)
result = response.json()
print(result['message']['result']['translatedText'])