<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <p class="hero-greeting">Hello, I'm</p>
        <div class="hero-name-wrap">
          <h1 class="hero-name">
            <span class="name-first">Atai</span>
            <span class="name-last">Nogoibaev</span>
          </h1>
          <span class="hero-splash">{{ splash }}</span>
        </div>
        <p class="hero-role">Full-Stack Developer</p>
        <p class="hero-bio">
          BSc Software Engineering student at Saxion University, graduating July 2026.
          Looking for full-stack developer roles where I can build things that matter.
        </p>
        <div class="hero-cta">
          <PixelButton to="/projects">See My Work</PixelButton>
          <PixelButton href="/Atai_Nogoibaev_CV.pdf" :external="true" variant="secondary">
            Download CV
          </PixelButton>
        </div>
      </div>
      <div class="hero-sprite">
        <PixelAtai />
      </div>
    </section>

    <section class="stack-section">
      <h2 class="section-label">// STACK</h2>
      <div class="stack-grid">
        <div v-for="tech in stack" :key="tech.name" class="stack-item">
          <span class="stack-name">{{ tech.name }}</span>
          <span class="stack-detail">{{ tech.detail }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import PixelButton from '@/components/PixelButton/PixelButton.vue'
import PixelAtai from '@/components/PixelAtai/PixelAtai.vue'

const splashes = [
  'Hire me!',
  'I need visa...',
  'ik hou van Nederland',
  'nog steeds Nederlands leren',
  "Let's connect!",
  'from Kyrgyzstan',
  'Guess my favorite game',
  'Check my work!',
]
const splash = splashes[Math.floor(Math.random() * splashes.length)]

const stack = [
  { name: 'TypeScript', detail: 'Vue · Svelte · React · NestJS · Hono · Node.js' },
  { name: 'C#', detail: '.NET · Bicep · Azure Functions' },
  { name: 'Java', detail: 'Spring Boot · JPA' },
  { name: 'Databases', detail: 'MongoDB · PostgreSQL' },
  { name: 'DevOps', detail: 'Cloudflare · Azure · Docker · GitLab' },
]
</script>

<style>
@import './style.css';
</style>
