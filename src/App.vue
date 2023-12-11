<script setup>
import Content from "./components/Content.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <div class="min-h-screen">
    <header>
      <Header />
    </header>

    <main>
      <Content />
    </main>
  </div>
</template>

<style scoped>
@import "animate.css";
</style>
