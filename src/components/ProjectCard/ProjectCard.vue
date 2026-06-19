<template>
  <article class="project-card">
    <div class="card-image">
      <img v-if="imageUrl" :src="imageUrl" :alt="title" />
      <div v-else class="card-image-placeholder">
        <span class="placeholder-label">IMG</span>
        <span class="placeholder-sub">COMING SOON</span>
      </div>
    </div>
    <div class="card-body">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-desc">{{ description }}</p>
      <div class="card-tags">
        <span v-for="tag in tags" :key="tag" class="tag">#{{ tag }}</span>
      </div>
      <a :href="url" target="_blank" rel="noopener noreferrer" class="card-link">
        Visit Project →
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  tags: string[]
  url: string
  imageUrl?: string
}>()
</script>

<style>
@import './style.css';
</style>
