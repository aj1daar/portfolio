<template>
  <NavBar />
  <main class="min-h-screen">
    <RouterView />
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'
import AppFooter from '@/components/Footer/Footer.vue'
</script>
