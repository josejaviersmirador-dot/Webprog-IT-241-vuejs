<script setup>
import { ref } from 'vue'
import FoodItem from './FoodItem.vue'
const profile = ref({
  name: 'Jose Javier S. Mirador',
  image: 'image/okada.jpg',
  avatar: 'https://placehold.co/400x400/1e293b/FFF?text=Jose'
})

const personalInfo = ref([
  { id: 1, label: 'FULL NAME', value: 'Jose Javier S. Mirador', icon: 'bi bi-person-fill' },
  { id: 2, label: 'BIRTHDAY', value: 'February 11, 2006', icon: 'bi bi-gift-fill' },
  { id: 3, label: 'AGE', value: '20', icon: 'bi bi-arrow-up-circle-fill' },
  { id: 4, label: 'HOME', value: 'Taguig City, Philippines', icon: 'bi bi-house-door-fill' },
  { id: 5, label: 'HOMETOWN', value: 'Manila', icon: 'bi bi-geo-alt-fill' }
])

const socials = ref([
  { id: 1, link: 'https://www.facebook.com/sirjosie/', icon: 'bi bi-facebook' },
  { id: 2, link: 'https://www.instagram.com/sirjosie/', icon: 'bi bi-instagram' },
  { id: 3, link: 'https://open.spotify.com/user/31mgjf4ea65lbj3y7m7peli3mdi4', icon: 'bi bi-spotify' },
  { id: 4, link: 'https://www.linkedin.com/in/jose-javier-mirador-52299a321/', icon: 'bi bi-linkedin' },
  { id: 5, link: 'https://github.com/josejaviersmirador-dot', icon: 'bi bi-github' }
])

const imageList = ref([
  { id: 1, src: 'https://placehold.co/150x150/06b6d4/FFF', alt: 'Gallery 1' },
  { id: 2, src: 'https://placehold.co/150x150/3b82f6/FFF', alt: 'Gallery 2' },
  { id: 3, src: 'https://placehold.co/150x150/6366f1/FFF', alt: 'Gallery 3' }
])

const emails = ref([
  { id: 1, address: 'jvjaviersmirador@gmail.com', icon: 'bi bi-google' },
  { id: 2, address: 'jsmirador@student.apc.edu.ph', icon: 'bi bi-envelope-fill' }
])

const foods = ref([
  { id: 1, name: 'Cookies', desc: 'I love cookies' },
  { id: 2, name: 'Apples', desc: 'I like apples' },
  { id: 3, name: 'Bread', desc: 'I like breads ' }
])
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
    name: 'I like dragon fruit', 
    desc: 'its sweet and juicy',
    class: 'box-pink'
  },
  { 
    id: 2, 
    name: 'I like banana', 
    desc: 'healthy',
    class: 'box-yellow' 
  }
])
</script>

<template>
  <div class="profile-wrapper">
    
    <div class="profile-left">
      <div class="profile-image-container">
        <a href="index.html" class="home-btn">
          <i class="bi bi-house-door-fill"></i>
        </a>
        <img :src="profile.avatar" :alt="profile.name" class="profile-avatar">
      </div>
    </div>

    <div class="profile-right">
      
      <div v-for="info in personalInfo" :key="info.id" class="info-row">
        <div class="info-label">
          <i :class="info.icon"></i> <strong>{{ info.label }}:</strong> {{ info.value }}
        </div>
      </div>

      <div class="image-gallery" style="margin-top: 20px;">
        <h3>My Gallery</h3>
        <div class="gallery-grid" style="display: flex; gap: 10px; flex-wrap: wrap;">
           <div v-for="img in imageList" :key="img.id" class="image-card">
              <img :src="img.src" :alt="img.alt" style="width: 100px; height: 100px; object-fit: cover; border-radius: 8px;">
           </div>
        </div>
      </div>

      <div class="social-profile-bar" style="margin-top: 20px;">
        <a v-for="social in socials" :key="social.id" :href="social.link" target="_blank" style="margin-right: 15px; font-size: 1.5rem;">
          <i :class="social.icon"></i>
        </a>
      </div>

      <div class="email-container" style="margin-top: 20px;">
        <div v-for="email in emails" :key="email.id" class="email-profile-box">
          <i :class="email.icon"></i> {{ email.address }}
        </div>
      </div>

      <div class="food-section" style="margin-top: 30px; border-top: 1px solid #ccc; padding-top: 20px;">
        <h1>Food</h1>
        <FoodItem 
          v-for="x in foods" 
          :key="x.id" 
          :name="x.name" 
          :desc="x.desc"
        />
      </div>

    </div>
  </div>
  <div class="container">
    <h1>Profile</h1>

    <div class="menu">
      <div v-for="(item, index) in profileSections" :key="index" class="menu-item">
        {{ item }}
      </div>
    </div>

    <hr />

    <h3>Food</h3>
    
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
.profile-wrapper {
  display: flex;
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: sans-serif;
}
.container {
  font-family: sans-serif;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
}

.profile-left {
  flex: 1;
  max-width: 300px;
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.profile-avatar {
  width: 100%;
  border-radius: 50%;
  margin-top: 10px;
}

.profile-right {
  flex: 2;
  background-color: #ffffff;
  padding: 20px;
}

.info-row {
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.home-btn {
  display: block;
  text-align: left;
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
}
</style>
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
