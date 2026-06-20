<template>
  <div class="projects-page page-container">
    <h1 class="page-title">// PROJECTS</h1>
    <p class="page-subtitle">Things I've built and shipped.</p>
    <div class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        v-bind="project"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard/ProjectCard.vue'

const projects = [
  {
    title: 'IK WIL WERK ZOEKEN',
    description:
      'Job-search tracker for Highly Skilled Migrants in the Netherlands. Browse IND-recognized sponsors, track your application pipeline and preferences.',
    tags: ['typescript', 'vue', 'c#', '.net', 'cloudflare pages'],
    url: 'https://iwwz.nogoibay.org/',
    imageUrl: '/images/projects/iwwz.svg',
    pixelArt: true,
  },
  {
    title: 'DOTA MATCH ANNOUNCER BOT',
    description:
      'Telegram bot announcing Dota 2 match results and stats in real time. Never miss a result from your favourite teams.',
    tags: ['typescript', 'telegram', 'hono', 'cloudflare workers'],
    url: 'https://t.me/dota_match_announcer_bot',
    imageUrl: '/images/projects/dota-bot.svg',
    pixelArt: true,
  },
]
</script>

<style>
@import './style.css';
</style>
