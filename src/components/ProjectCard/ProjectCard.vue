<template>
  <article class="project-card">
    <div class="card-body">
      <div class="card-header">
        <img v-if="imageUrl" :src="imageUrl" :alt="title" class="card-icon" :class="{ 'img--pixel': pixelArt }" />
        <div v-else class="card-icon-placeholder">?</div>
        <h3 class="card-title">{{ title }}</h3>
      </div>
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
withDefaults(defineProps<{
  title: string
  description: string
  tags: string[]
  url: string
  imageUrl?: string
  pixelArt?: boolean
}>(), { pixelArt: false })
</script>

<style>
@import './style.css';
</style>
