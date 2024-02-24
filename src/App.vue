<script setup lang="ts">
import { ref } from 'vue'

import TheHeader from './components/TheHeader.vue'
import TheNavbar from './components/TheNavbar.vue'

import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import TheTimeline from './pages/TheTimeline.vue'

import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './consts/navigation'


const currentPage = ref<string>(normalizePageHash())

function normalizePageHash() {
  const hash = window.location.hash.slice(1)
  if([PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE].includes(hash)) return hash
  window.location.hash = PAGE_TIMELINE
  return PAGE_TIMELINE
}
</script>

<template>
  <div class="flex flex-col min-h-screen justify-between">
    <TheHeader />

    <main class="flex flex-grow flex-col">
      <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
      <TheProgress v-show="currentPage === PAGE_PROGRESS" />
      <TheTimeline v-show="currentPage === PAGE_TIMELINE" />
    </main>

    <TheNavbar :current-page="currentPage" @navigate="currentPage = $event" />
  </div>
</template>