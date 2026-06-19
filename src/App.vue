<template>
  <div class="app-layout">
    <NavBar />
    <main>
      <Transition name="page" mode="out-in">
        <RouterView />
      </Transition>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'
import AppFooter from '@/components/Footer/Footer.vue'
</script>
