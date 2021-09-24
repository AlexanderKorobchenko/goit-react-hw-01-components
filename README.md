- установка React "npx create-react-app ."
- установка пакетов prettier и eslint "npm install --save-dev prettier eslint"
- добавление файла-настроек для prettier .prettierrc.yaml: printWidth: 80
  tabWidth: 2 useTabs: false semi: true singleQuote: true trailingComma: all
  bracketSpacing: true jsxBracketSameLine: false arrowParens: avoid proseWrap:
  always
- инициализация lint-staged и huskynpx "mrm@2 lint-staged"
- настройка расширения файлов: "_.{js,jsx}": "eslint --cache --fix",
  "_.{js,jsx,css,scss}": "prettier --write"
- установить пакет npm install --save prop-types
- установить пакет
