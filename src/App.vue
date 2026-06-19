<template>
  <NavBar />
  <main>
    <Transition name="page" mode="out-in">
      <RouterView />
    </Transition>
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'
import AppFooter from '@/components/Footer/Footer.vue'
</script>
