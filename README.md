Основная цель:

Отображение топ 100 крипто валют с бесплатонго API

https://coinmarketcap.com/api/pricing/


Инструкция для coinmarket:
1) Зарегистрироваться
2) Выбрать тариф (бесплатный 10к запросов в мес.)
3) Скопировать API key

Запуск локально:
1) uvicorn main:app --reload
1.1) Если порт занят: npx kill-port 8000


URLS:

1) http://127.0.0.1:8000/docs#/