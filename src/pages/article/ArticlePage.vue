<template>
  <main class="article-wrapper">
    <h1>{{ article.title }}</h1>
    <img :src="article.image" alt="" width="1216" height="700">
    <div class=" text-block">
      <small class="text-block__small">About</small>
      <p class="text-block__descr">{{ article.description }}</p>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../../types/Card'


export default defineComponent({
  data() {
    return {
      id: this.$route.params['id'] as string,
      article: {} as Card
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      fetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${this.id}`)
        .then((respond) => {
          if (!respond.ok) {
            throw new Error('Ошибка сети');
          }
          return respond.json()
        })
        .then(data => {
          this.article = data
          console.log(data)
        }).catch((err) => { console.log(err) })
    },

  }
})
</script>

<style scoped>
.article-wrapper {
  min-height: 90rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7.3rem;
  color: var(--Style, var(--Style, #101010));
  padding: 11.9rem 7.77vw 8rem;
  font-size: 5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  height: auto;
}

.text-block {
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
}

.text-block__small {
  font-size: 1.6rem;
  line-height: 100%;
}

.text-block__descr {
  font-size: 3.6rem;
  color: #101010;
  font-style: normal;
  font-weight: 400;
  line-height: 124%;
  width: 60%;
}
</style>