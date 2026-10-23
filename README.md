# Про гильдию фронтендеров в Магните

Презентация на Slidev: https://nz-web.github.io/holy-open-mic-guild/

## Локально

Node.js 24 и pnpm 10.33.2 (версия закреплена в `package.json`).

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Публикация

Каждый push в `main` запускает `.github/workflows/deploy.yml`: установку зависимостей, сборку Slidev с базовым путём `/holy-open-mic-guild/` и публикацию в GitHub Pages.

Workflow также можно запустить вручную через вкладку Actions. Источник в Settings → Pages должен быть **GitHub Actions**.

Проверка такой же сборки локально:

```sh
pnpm run build --base /holy-open-mic-guild/
```
