<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient' 

const sports = ref([])

async function getSports() {
  // This matches your 'Sport' table Name column
  const { data } = await supabase.from('Sport').select('Name')
  if (data) {
    sports.value = data
  }
}

onMounted(() => {
  getSports()
})
</script>

<template>
  <div style="padding: 40px;">
    <h1>Sport List</h1>
    <ul>
      <li v-for="sport in sports" :key="sport.Name">
        {{ sport.Name }}
      </li>
    </ul>
  </div>
</template>