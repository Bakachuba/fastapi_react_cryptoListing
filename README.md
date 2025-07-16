Основная цель:

Отображение топ 100 крипто валют с бесплатонго API

https://coinmarketcap.com/api/pricing/


Инструкция для coinmarket:
1) Зарегистрироваться
2) Выбрать тариф (бесплатный 10к запросов в мес.)
3) Скопировать API key

Запуск локально:
1) Поднять бек: uvicorn src.main:app --reload
1.1) Если порт занят: npx kill-port 8000
2) Поднять фронт: npm run dev

vite/docs:
1) https://vite.dev/guide/
2) npm create vite@latest

tailwindcss docs:
1) https://tailwindcss.com/docs/installation/using-vite
2) npm install tailwindcss @tailwindcss/vite

ant design (components: btns, icons, pagination etc.):
1) https://ant.design/docs/react/use-with-vite
2) npm install antd --save


URLS:

1) http://127.0.0.1:8000/docs#/