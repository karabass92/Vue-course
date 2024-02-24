<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import TheNavbar from './components/TheNavbar.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen justify-between">
    <TheHeader />

    <main class="flex flex-grow flex-col">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae asperiores voluptate, nesciunt repellendus vel placeat sunt maxime? Non reprehenderit similique aliquid expedita voluptas hic, eum adipisci ipsa. Eius, eum necessitatibus!
    </main>

    <TheNavbar />
  </div>
</template>