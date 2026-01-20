<script setup>
import { ref } from 'vue'
import FoodItem from './FoodItem.vue'

const profileSections = ref([
  '1 About Me',
  '2 Education / Achievements',
  '3 Course',
  '4 IT Experience',
  '5 Hobbies & Interests',
  '6 Goals In Life / Dream',
  '7 Picture Gallery'
])

const foods = ref([
  { 
    id: 1, 
    name: 'Mango and Strawberry', 
    desc: 'I like daisy',
    color: 'pink'
  },
  { 
    id: 2, 
    name: 'Mango and Strawberry', 
    desc: 'I like pineapple',
    color: 'yellow' 
  }
])
</script>

<template>
  <div class="main-container">
    <h1 class="main-title">Personal Profile Web page</h1>

    <div class="sections-list">
      <div v-for="(item, index) in profileSections" :key="index" class="section-item">
        {{ item }}
      </div>
    </div>

    <div class="divider-bar"></div>

    <div class="food-container">
      <FoodItem 
        v-for="x in foods" 
        :key="x.id" 
        :name="x.name" 
        :desc="x.desc"
        :color="x.color"
      />
    </div>
  </div>
</template>

<style scoped>
.main-container {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.main-title {
  text-align: center;
  font-weight: bold;
  margin-bottom: 30px;
  color: #000;
}

.sections-list {
  display: flex;
  flex-direction: column;
}

.section-item {
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  color: #333;
}

.divider-bar {
  height: 40px;
  background-color: #f5f5f5;
  margin: 30px 0;
}

.food-container {
  display: flex;
  gap: 20px;
}
</style>
