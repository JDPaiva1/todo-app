<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/HeaderComponent.vue'
import Footer from './components/FooterComponent.vue'
</script>

<template>
  <div class="todoapp">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>
.hidden {
  display: none;
}
.todoapp {
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
    0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
</style>
