<template>
  <main>
    <articles-list></articles-list>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ArticlesList from '../../components/home/ArticlesList.vue'

export default defineComponent({
  components: { ArticlesList }
})
</script>