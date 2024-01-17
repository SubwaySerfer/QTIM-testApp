# Проект: "QTIM-testApp"

---

## Описание:

Цель задания:

-Реализовать верстку шаблона блога по прикрепленному макету
-Реализовать в проекте взаимодействие с API (прикреплено ниже)
-Реализовать в проекте модуль блога:

1. Вывод списка статей блога
2. Пагинация на фронтовой части
3. Переход на детальную страницу

[Макет проекта](https://www.figma.com/file/YuLYXnZmLk1U5sKAYjQ0Qy/Test?type=design&node-id=0-1&mode=design&t=qUknJKzxfWOznHn0-0)

[Ссылка на деплой](https://celebrated-phoenix-c6a984.netlify.app/)

---

#### Стэк технологий:

Vue3, TS, CSS, Vite, Vue-router

---

## Установка

- `npm install` — установить зависимости
- `npm run dev` — запуск сервера разработки
- `npm run build` — сборка проекта

---

## Пример кода:

Vuex mutation example:

```
createButton(handle: boolean = false) {
   if (this.pageCounter >= this.currentPage + 4) {
        if (this.currentPage == 1 && !handle) {
          this.currentPage = 5
      }
        this.pages = [];
        for (let i = 1; i < 5; i++) {
          this.pages.push(this.currentPage + +i)
      }
        this.$nextTick(() => {
          !handle ? this.changePage(this.currentPage + +1, false) : this.changePage(this.currentPage, false)
        })
   } else if (this.pages[this.pages.length - 1] != this.pageCounter) {
        let difference: number = this.pageCounter - this.currentPage
        this.pages = this.pages.slice(4 - difference)
        for (let i = this.currentPage + 1; i <= this.pageCounter; i++) {
       this.pages.push(i)
     }
   }
},
```
