<template>
  <div class="buttons-wrapper">
    <div class="btn-list btn-list__active" :key="1" @click="changePage(1)">1</div>
    <div class="btn-list" v-for="page in pages" :key="page" @click="changePage(page)" ref="btns">{{ page }}</div>
    <div class="btn-next btn-list__arrow"><img src="/assets/icons/arrow.svg" alt="arrow for next pages list."
        @click="nextButton"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// TODO: исправить, если дойти до 9 страницы, потом нажать на увеличить, но не получается посмотреть страницы дальше
export default defineComponent({
  emits: ['updatePage'],
  props: {
    pageCounter: {
      required: true,
      type: Number
    }
  },
  data() {
    return {
      currentPage: 1 as number,
      pages: [2, 3, 4, 5] as number[],
      allPages: [] as number[],
    }
  },
  watch: {
    pageCounter(_, _2) {
      this.createButtonsList()
    },
    currentPage(_, _2) {
      this.$emit('updatePage', this.currentPage as number)
      if (this.currentPage == 1) {
        this.createButton(true)
      }
    },

  },
  created() {
  },
  methods: {
    createButtonsList() {
      if (this.pageCounter > 5) {
        this.allPages = []
        for (let i: number = 2; i <= this.pageCounter; i++) {
          this.allPages.push(i)
        }
      }
    },
    changePage(num: number, automatic: boolean = true) {
      if (this.currentPage != num) {
        let listArr = document.querySelectorAll('.btn-list')
        listArr.forEach(el => { el.classList.remove('btn-list__active') })
        this.currentPage = num
        if (automatic) {
          let value = event?.target as HTMLInputElement
          value.classList.add('btn-list__active')
        } else {

          listArr.forEach(el => {
            if (el.textContent) {
              if (+el.textContent as number == num) {
                el.classList.add('btn-list__active')
              }
            }
          }
          )
        }
      }
    },
    nextButton() {
      if (this.pageCounter > this.currentPage) {
        this.createButton()
      }
    },
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
  }
})
</script>

<style scoped>
.buttons-wrapper {
  display: flex;
  flex-direction: row;
  gap: .8rem;
  align-self: start;
  margin-top: 5.1rem;
}

.btn-list,
.btn-next {
  display: flex;
  width: 4.4rem;
  height: 4.4rem;
  padding: 1.1rem 1.7rem;
  border-radius: 1.2rem;
  background: #F3F3F3;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 50%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.btn-list__arrow {
  background: #fff;
  border: 1px solid #F3F3F3;

}

.btn-list__active {
  color: #fff;
  background: #101010
}
</style>