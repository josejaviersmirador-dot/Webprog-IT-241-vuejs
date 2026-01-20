<script setup>
import { ref } from 'vue'

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
      <div 
        v-for="x in foods" 
        :key="x.id" 
        class="food-box" 
        :class="x.color"
      >
        <h2>{{ x.name }}</h2>
        <p>{{ x.desc }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Main Layout Styles */
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

/* Food Box Styles (Moved here from FoodItem.vue) */
.food-box {
  border: 2px dotted #333;
  padding: 20px;
  width: 250px;
  color: #000;
}

.food-box h2 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 10px;
}

.food-box p {
  margin: 0;
  font-size: 1rem;
}

/* Color Classes */
.pink {
  background-color: #ffc0cb;
}

.yellow {
  background-color: #ffff00;
}
</style>