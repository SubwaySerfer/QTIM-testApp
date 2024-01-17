<template>
  <header class="header">
    <router-link to="/">
      <img class="header__logo" src="/assets/icons/logo.svg" alt="QTIM logo." width="82" height='25'>
    </router-link>
    <nav class="nav">
      <ul class="nav-bar">
        <li><router-link to="">Works</router-link> </li>
        <li><router-link to="">About</router-link> </li>
        <li class="nav-btns">
          <figure class="lang-el"><img src="/assets/icons/uk-icon.svg" alt="" class="lang-el__img" width="24" height="24">
          </figure>
          <button class="nav-bar__btn-work">Let’s work</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({})

</script>

<style scoped>
.header {
  height: 12.1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

.header__logo {
  width: 8.4rem;
  height: 2.5rem;
}

.nav-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5.8rem;
  margin-top: 2px;
}

.nav-bar__btn-work {
  display: flex;
  padding: 1.6rem 3.2rem;
  align-items: flex-start;
  border-radius: 99.9rem;
  background: #101010;
  color: #fff;
  height: 5.1rem;
}


.lang-el {
  border-radius: 99.9rem;
  border: 2px solid rgba(0, 0, 0, 0.10);
  padding: 1rem;
  display: flex;
  width: 5.2rem;
  height: 5.2rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
}

.nav-btns {
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
  align-items: center;
  margin-left: 3.35rem;
}

.lang-el__img {
  width: 2.4rem;
  height: 2.4rem;
}
</style>