<script setup lang="ts">
import NavItem from './NavItem.vue'
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'

const navItems = {
  timeline: ClockIcon,
  activities: ListBulletIcon,
  progress: ChartBarIcon
}
</script>

<template>
    <nav class="stiky bottom-0 z-10 bg-white">
        <ul class="flex items-center justify-around border-t">
          <NavItem  v-for="(icon, page) in navItems" :key="page" v-bind:href="`#${page}`">
            <component v-bind:is="icon" class="h-6 w-6" /> {{ page }}
          </NavItem>
        </ul>
      </nav>
</template>