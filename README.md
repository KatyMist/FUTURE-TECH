<div align="center">

# ⚡ FutureTech

**Многостраничный адаптивный сайт об искусственном интеллекте и технологиях**<br>
**A multi-page responsive website about AI and technology**

<a href="https://katymist.github.io/FUTURE-TECH/"><img src="https://img.shields.io/badge/Открыть_сайт-FutureTech-1f3a2b?style=for-the-badge&logo=googlechrome&logoColor=white&labelColor=0f1f17" alt="Открыть сайт"></a>

<br><br>

<img src="https://skillicons.dev/icons?i=html,css,figma" alt="HTML5, CSS3, Figma">


<a href="#-русский"><img src="https://img.shields.io/badge/RU-Русский-1f3a2b?style=flat-square&labelColor=0f1f17" alt="Русский"></a>
<a href="#-english"><img src="https://img.shields.io/badge/EN-English-1f3a2b?style=flat-square&labelColor=0f1f17" alt="English"></a>

<img src="ССЫЛКА_НА_FUTURETECH_MOCKUP" alt="FutureTech — главная страница" width="100%">

</div>

---

## 🇷🇺 Русский

### О проекте

**FutureTech** — учебный проект по вёрстке: сайт об ИИ-новостях, блоге, подкастах и ресурсах в тёмной теме с жёлтыми акцентами. В нём шесть страниц, и все они адаптированы под десктоп, планшет и смартфон.

> 📺 Сайт сделан по видеоуроку на YouTube: **[смотреть урок](https://www.youtube.com/watch?v=hkYzqTKnSIg)**

### Страницы

| Страница | Файл |
|---|---|
| Главная | `index.html` |
| Новости | `news.html` |
| Подкасты | `podcasts.html` |
| Ресурсы | `resources.html` |
| Блог (статья) | `blog.html` |
| Контакты | `contacts.html` |

### Что реализовано

- **Адаптивная вёрстка** — от широких мониторов до смартфонов, размеры в `rem` и «резиновые» значения через SCSS-функции `rem()` и `fluid()`
- **Мобильное меню** — бургер-кнопка с оверлеем
- **Табы** — переключение категорий на главной, в новостях и ресурсах
- **Видеоплеер** — собственные кнопки воспроизведения для карточек с видео
- **Раскрывающийся контент** — кнопка «Read Full Blog» в статье блога
- **Кастомный селект** — выбор кода страны в форме
- **Маска ввода телефона** — в форме обратной связи
- **БЭМ и компонентный подход** — каждый блок в отдельном SCSS-файле, каждый JS-компонент в отдельном классе

### Технологии

- **HTML5** — семантическая разметка, атрибуты доступности (`aria-*`)
- **SCSS** — переменные, миксины, функции, модульная структура (`styles/blocks/`)
- **JavaScript (ES-модули)** — классы `Header`, `Tabs`, `VideoPlayer`, `Select`, `InputMask`, `ExpandableContent`

### Запуск

```bash
git clone https://github.com/KatyMist/future-tech.git
cd future-tech
npm install           # установить Sass
npm run sass-watch    # компиляция SCSS → CSS в режиме наблюдения
```

Откройте `index.html` через локальный сервер (например, расширение **Live Server** в VS Code). JS подключён как ES-модуль, поэтому при открытии файла напрямую (`file://`) скрипты работать не будут.

---

## 🇬🇧 English

### About

**FutureTech** is a front-end layout study project: a dark-themed website with yellow accents about AI news, blog posts, podcasts and resources. It has six pages, and all of them adapt to desktop, tablet and mobile screens.

> 📺 The website was built following a YouTube video tutorial: **[watch the tutorial](https://www.youtube.com/watch?v=hkYzqTKnSIg)**

### Pages

| Page | File |
|---|---|
| Home | `index.html` |
| News | `news.html` |
| Podcasts | `podcasts.html` |
| Resources | `resources.html` |
| Blog (article) | `blog.html` |
| Contacts | `contacts.html` |

### Features

- **Responsive layout** — from wide monitors down to phones, `rem` units and fluid sizes via the `rem()` and `fluid()` SCSS functions
- **Mobile menu** — burger button with an overlay
- **Tabs** — category switching on the Home, News and Resources pages
- **Video player** — custom play controls for video cards
- **Expandable content** — a "Read Full Blog" button in the blog article
- **Custom select** — country code picker in the form
- **Phone input mask** — in the feedback form
- **BEM and components** — every block has its own SCSS file, every JS component is a separate class

### Tech stack

- **HTML5** — semantic markup, accessibility attributes (`aria-*`)
- **SCSS** — variables, mixins, functions, modular structure (`styles/blocks/`)
- **JavaScript (ES modules)** — `Header`, `Tabs`, `VideoPlayer`, `Select`, `InputMask`, `ExpandableContent` classes

### Getting started

```bash
git clone https://github.com/KatyMist/future-tech.git
cd future-tech
npm install           # install Sass
npm run sass-watch    # compile SCSS → CSS in watch mode
```

Open `index.html` through a local server (for example, the **Live Server** extension in VS Code). The JS is loaded as an ES module, so the scripts won't run if you open the file directly (`file://`).

---

## 📸 Скриншоты · Screenshots

<table>
  <tr>
    <td align="center"><b>Новости · News</b><br><img src="https://github.com/user-attachments/assets/b9afd43d-e908-4ad4-9968-e68a105d48dd" alt="News"></td>
    <td align="center"><b>Подкасты · Podcasts</b><br><img src="https://github.com/user-attachments/assets/89ed27dc-8c54-4b4a-bc50-5e5d0b99e549" alt="Podcasts"></td>
  </tr>
  <tr>
    <td align="center"><b>Ресурсы · Resources</b><br><img src="https://github.com/user-attachments/assets/c3dada4b-d846-488f-9333-d7f8a90b4982" alt="Resources"></td>
    <td align="center"><b>Блог · Blog</b><br><img src="https://github.com/user-attachments/assets/abc1de2f-022d-4e88-a2e0-67b0217a550d" alt="Blog"></td>
  </tr>
  <tr>
    <td align="center"><b>Контакты · Contacts</b><br><img src="https://github.com/user-attachments/assets/6f1ce948-2739-4a0c-9e09-6a9a44782848" alt="Contacts"></td>
    <td align="center"><b>Мобильная версия · Mobile</b><br><img src="https://github.com/user-attachments/assets/71bd711d-bb1c-4f3c-b0fc-ce29ff6fc03e" alt="Mobile" width="200"></td>
  </tr>
</table>

---

<div align="center">

Сделано с 💛 · Made with 💛 by [KatyMist](https://github.com/KatyMist)

</div>
