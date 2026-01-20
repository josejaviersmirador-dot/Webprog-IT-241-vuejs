<script setup>
import { ref } from 'vue'

const profileSections = ref([
  'About Me',
  'Education',
  'Course',
  'IT Experience',
  'Hobbies & Interests',
  'Goals',
  'Picture Gallery'
])

const foods = ref([
  { 
    id: 1, 
    name: 'Frontend', 
    desc: 'Vue.js, HTML, CSS',
    class: 'box-pink'
  },
  { 
    id: 2, 
    name: 'Backend', 
    desc: 'Node.js, SQL',
    class: 'box-yellow' 
  }
])
</script>

<template>
  <div class="container">
    <h1>Profile</h1>

    <div class="menu">
      <div v-for="(item, index) in profileSections" :key="index" class="menu-item">
        {{ item }}
      </div>
    </div>

    <hr />

    <h3>Skills</h3>
    <div class="card-container">
      <div 
        v-for="item in foods" 
        :key="item.id" 
        class="card" 
        :class="item.class"
      >
        <h4>{{ item.name }}</h4>
        <p>{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: sans-serif;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
}

h1, h3 {
  text-align: center;
}

.menu-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

.menu-item:hover {
  background-color: #f9f9f9;
}

.card-container {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.card {
  border: 1px solid #333;
  padding: 15px;
  width: 150px;
  text-align: center;
}

.box-pink {
  background-color: pink;
}

.box-yellow {
  background-color: yellow;
}
</style>