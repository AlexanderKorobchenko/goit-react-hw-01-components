- установка React "npx create-react-app ."
- установка пакетов prettier и eslint "npm install --save-dev prettier eslint"
- добавление файла-настроек для prettier .prettierrc.yaml: printWidth: 80
  tabWidth: 2 useTabs: false semi: true singleQuote: true trailingComma: all
  bracketSpacing: true jsxBracketSameLine: false arrowParens: avoid proseWrap:
  always
- файл-настройка .huskyrc
  (https://github.com/luxplanjay/react-21-22/tree/02-%D1%81%D1%82%D0%B8%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82)
- файл-настройка .lintstagedrc
- инициализация lint-staged и huskynpx "mrm@2 lint-staged"
- настройка расширения файлов: "_.{js,jsx}": "eslint --cache --fix",
  "_.{js,jsx,css,scss}": "prettier --write"
- установить пакет npm install --save prop-types
- установить пакет
