<template>
  <div class="resume-page page-container">
    <h1 class="page-title">// RESUME</h1>
    <div class="resume-actions">
      <PixelButton href="/Atai_Nogoibaev_CV.pdf" :external="true">
        Download PDF
      </PixelButton>
    </div>
    <div class="resume-preview">
      <iframe
        src="/Atai_Nogoibaev_CV.pdf"
        title="Atai Nogoibaev — CV"
        class="resume-iframe"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import PixelButton from '@/components/PixelButton/PixelButton.vue'
</script>

<style>
@import './style.css';
</style>
