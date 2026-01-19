<script setup>
  import { ref } from 'vue'
  import FoodItem from './FoodItem.vue'

  const foods = ref([
    { id: 1, name: 'Cookies', desc: 'I love cookies' },
    { id: 2, name: 'Apples', desc: 'I like apples' },
    { id: 3, name: 'Bread', desc: 'I like breads ' }
  ])
</script>

<template>
  <h1>Food</h1>
  <FoodItem 
    v-for="x in foods" 
    :key="x.id" 
    :name="x.name" 
    :desc="x.desc"
  />
</template>

<style scoped>
</style>
