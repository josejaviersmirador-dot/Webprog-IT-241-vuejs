<script setup>
  import { ref } from 'vue'

  const foods = ref([
  { id: 1, name: 'Pizza', desc: 'I love Pizza' }
  { id: 2, name: 'Apples', desc: 'I like apples' },
  { id: 3, name: 'Bread', desc: 'I like bread ' }
])
</script>

<template>
  <h1>Food</h1>
  <div v-for="food in foods" :key="food.id">
    <h2>{{ food.name }}</h2>
    <p>{{ food.desc }}</p>
  </div>
</template>

<style scoped>
</style>