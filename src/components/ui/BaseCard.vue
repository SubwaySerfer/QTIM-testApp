<template>
  <div class="card" :id="article.id" @mouseover="mouseOver" @mouseout="mouseOut" @click="pickArticle(article.id)">
    <!-- <img :src="article.image" width="280" height="280"> -->
    <img src="" width="280" height="280">
    <p class="card__descrp">{{ article.preview }}</p>
    <router-link v-if="isHover" to="">Read more</router-link>
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
  // TODO: поменять наведение, а то скачет
  methods: {
    mouseOver() {
      this.isHover = true
    },
    mouseOut() {
      this.isHover = false
    },
    pickArticle(id: string) {
      this.$router.push(`/article/${id}`);
    }
  }

  // data() {
  //   return {
  //     article
  // id: '',
  // title: '',
  // description: '',
  // image: '',
  // preview: '',
  //   }
  // }
})
</script>

<style scoped>
.card {
  width: 28rem;
  height: 39.6rem;
  gap: 2.4rem;
  display: flex;
  flex-direction: column;
}

.card__descrp {
  width: 100%;
  text-align: start;
}
</style>