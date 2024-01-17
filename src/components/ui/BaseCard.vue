<template>
  <div class="card" :id="article.id" @mouseover="mouseOver" @mouseleave="mouseOut" @click="pickArticle(article.id)">
    <img :src="article.image" width="280" height="280">
    <p class="card__descrp">{{ article.preview }}</p>
    <router-link v-if="isHover" :to='`/article/${article.id}`' class="card__btn">Read
      more</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Card from '../../types/Card'


export default defineComponent({
  props: {
    article: {
      required: true,
      type: Object as PropType<Card>
    }
  },
  data() {
    return {
      isHover: false
    }
  },
  methods: {
    mouseOver() {
      let target = event?.target as HTMLTextAreaElement
      target.closest('.card')?.classList.add('card__up')
      this.isHover = true

    },
    mouseOut() {
      let target = event?.target as HTMLTextAreaElement
      if (target.classList.value.includes('card')) {
        target.classList.remove('card__up')
      }
      this.isHover = false
    },
    pickArticle(id: string) {
      this.$router.push(`/article/${id}`);
    }
  },

})
</script>

<style scoped>
.card {
  width: 28rem;
  height: 39.6rem;
  gap: 2.4rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-align: start;
  align-items: start;
}

.card__descrp {
  width: 100%;
  text-align: start;
}

.card__btn {
  /* padding: 2rem 1rem; */
  color: #E2BEFF;
  font-family: TT Commons;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  position: absolute;
  width: 28rem;
  text-align: start;
  display: flex;
  justify-content: start;
  /* bottom: -180px; */
  bottom: -20px
}

.card__up {
  transform: translateY(-20px);
  transition: all .25s ease-in-out;
  position: relative;
}
</style>