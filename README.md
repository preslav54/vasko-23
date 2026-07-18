# 🤘 ВАСКО НА 23 — Рок картичка за рожден ден

Луда рок картичка-сайт за 23-ия рожден ден на Василен Деков. React + Vite, без API — чист статичен сайт, готов за GitHub Pages.

## Локално пускане

```bash
npm install
npm run dev
```

Отваря се на http://localhost:5173

## Качване в GitHub Pages (стъпка по стъпка)

1. Направи нов repo в GitHub (напр. `vasko-23`).

2. В тази папка изпълни:

```bash
git init
git add .
git commit -m "Vasko na 23"
git branch -M main
git remote add origin https://github.com/ТВОЯ_ПРОФИЛ/vasko-23.git
git push -u origin main
```

3. Публикувай сайта с една команда:

```bash
npm run deploy
```

Това билдва проекта и качва `dist/` в branch `gh-pages`.

4. В GitHub: **Settings → Pages → Branch: `gh-pages`** (ако не се е избрал сам).

Сайтът ще е на адрес: `https://ТВОЯ_ПРОФИЛ.github.io/vasko-23/`

> ⚠️ Песента е защитена с авторски права (Metallica). В публично repo може да бъде свалена след жалба (DMCA). Ако това се случи — направи repo-то private е невъзможно за Pages на безплатен план, така че просто имай предвид риска.

## Структура

- `public/img/` — снимките
- `public/audio/` — Master of Puppets
- `src/components/` — Splash, Hero, Gallery, Greetings, AudioPlayer, Embers, FallingEmoji, Lightning, Marquee
