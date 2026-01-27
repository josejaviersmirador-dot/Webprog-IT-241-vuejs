<script setup>
import { ref } from 'vue'

// Data for the Profile Section
const profileSections = ref([
  'About Me',
  'Education',
  'Course',
  'IT Experience',
  'Hobbies & Interests',
  'Goals',
  'Picture Gallery'
])

// Data for the Food Section
const foods = ref([
  { 
    title: 'I like dragon fruit', 
    desc: 'its sweet and juicy', 
    color: 'pink' 
  },
  { 
    title: 'I like banana', 
    desc: 'healthy', 
    color: 'yellow' 
  }
])
</script>

<template>
  <div class="main-container">
    <h1 class="main-title">Profile</h1>
    
    <div class="profile-list">
      <div v-for="item in profileSections" :key="item" class="profile-item">
        {{ item }}
      </div>
    </div>

    <hr class="separator" />

    <h2 class="sub-title">Food</h2>

    <div class="food-container">
      <div 
        v-for="food in foods" 
        :key="food.title" 
        class="food-card"
        :style="{ backgroundColor: food.color }"
      >
        <div class="food-title">{{ food.title }}</div>
        <div class="food-desc">{{ food.desc }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif; /* Matches the clean font in the image */
}

.main-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.profile-item {
  padding: 12px 0;
  border-bottom: 1px solid #eee; /* Light line between items */
  font-size: 1.1rem;
}

.separator {
  margin: 30px 0;
  border: none;
  border-top: 1px solid #ccc;
}

.sub-title {
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
}

.food-container {
  display: flex;
  justify-content: center;
  gap: 20px; /* Space between the boxes */
}

.food-card {
  border: 1px solid #000; /* Thin black border seen in image */
  padding: 30px 20px;
  width: 200px;
  text-align: center;
}

.food-title {
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.food-desc {
  font-size: 1rem;
}
</style>