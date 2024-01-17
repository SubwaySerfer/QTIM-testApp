<template>
  <section class="aritles-wrapper">
    <h1 class="aritles-wrapper__label">Articles</h1>
    <div class="articles-list">
      <base-card v-for="article in list" :article="article" :key="article.id"></base-card>
    </div>
    <list-buttons :pageCounter=pageCounter @update-page="updatePage($event)"></list-buttons>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListButtons from './ListButtons.vue'


export default defineComponent({
  components: {
    ListButtons
  },
  data() {
    return {
      list: [] as any,
      allList: [] as Object[],
      pageCounter: 0 as number,
      currentPg: 1 as number
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      fetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/')
        .then((respond) => {
          if (!respond.ok) {
            throw new Error('Ошибка сети');
          }
          return respond.json()
        })
        .then(data => {
          this.list = data.slice(0, 8)
          this.allList = data
          this.pageCounter = Math.ceil(data.length / 8)
        }).catch((err) => { console.log(err) })
    },
    updatePage(num: number) {
      this.currentPg = num
    }
  },
  watch: {
    currentPg(_, _2) {
      this.list = this.allList.slice((this.currentPg - 1) * 8, (this.currentPg - 1) * 8 + 8)

    }
  }
})
</script>

<style scoped>
.aritles-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12rem 7.70vw 14rem;
}

.aritles-wrapper__label {
  font-size: 8.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  align-self: start;
}

.articles-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 3.2rem;
  row-gap: 4.2rem;
  margin-top: 5.9rem;
  min-height: 70rem;
}
</style>