<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const sports = ref([])

async function getSports() {
  const { data, error } = await supabase
    .from('Sport')
    .select('Name')
  
  if (data) {
    sports.value = data
  }
}

onMounted(() => {
  getSports()
})
</script>

<template>
  <div class="output-container">
    <ul>
      <li v-for="sport in sports" :key="sport.Name">
        {{ sport.Name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.output-container {
  padding: 40px;
  font-family: sans-serif;
}
</style>