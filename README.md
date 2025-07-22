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
3) npm install -D @tailwindcss/postcss

ant design (components: btns, icons, pagination etc.):
1) https://ant.design/docs/react/use-with-vite
2) npm install antd --save

axios:
1) npm install axios


URLS:

1) http://127.0.0.1:8000/docs#/

Если .idea попал в коммит:
1) git rm -r --cached .idea
2) git rm -r --cached E:/PyCharm_projects/react_fastapi_crypto/.idea
3) git rm -r --cached ./.idea
4) git commit -m "chore: remove .idea from repo"

Исп. Технологии:
1) fastapi
2) react, vite, tailwind css
3) .env
3) async-lru cash