<script setup lang="ts">
import { ref } from 'vue'

import TheHeader from './components/TheHeader.vue'
import TheNavbar from './components/TheNavbar.vue'

import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import TheTimeline from './pages/TheTimeline.vue'

import { generateTimelineItems, normalizePageHash } from './assets/helpers/functions'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './consts/navigation'

const currentPage = ref<string>(normalizePageHash())

const timelineItems = generateTimelineItems()

function goTo(page: string): void { currentPage.value = page }
</script>

<template>
  <div class="flex flex-col min-h-screen justify-between">

    <TheHeader 
      @go-to-timeline="goTo(PAGE_TIMELINE)" 
      @go-to-progress="goTo(PAGE_PROGRESS)"
    />

    <main class="flex flex-grow flex-col">
      <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
      <TheProgress v-show="currentPage === PAGE_PROGRESS" />
      <TheTimeline v-show="currentPage === PAGE_TIMELINE" :timeline-items="timelineItems" />
    </main>

    <TheNavbar 
      :current-page="currentPage" 
      @navigate="goTo($event)" 
    />

  </div>
</template>