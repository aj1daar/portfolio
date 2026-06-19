<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <RouterLink
        to="/"
        class="logo"
        aria-label="Home"
        @mouseenter="setEmotion('surprised')"
        @mouseleave="resetEmotion"
      >A</RouterLink>
      <ul class="nav-links">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="nav-link"
            active-class="nav-link--active"
            :exact="link.to === '/'"
            @mouseenter="setEmotion(link.emotion)"
            @mouseleave="resetEmotion"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useCharacterEmotion, type Emotion } from '@/composables/useCharacterEmotion'

const { setEmotion, resetEmotion } = useCharacterEmotion()

const links: { to: string; label: string; emotion: Emotion }[] = [
  { to: '/',               label: 'Home',       emotion: 'neutral'   },
  { to: '/projects',       label: 'Projects',   emotion: 'excited'   },
  { to: '/experience',     label: 'Experience', emotion: 'confident' },
  { to: '/certifications', label: 'Certs',      emotion: 'puzzled'   },
  { to: '/resume',         label: 'Resume',     emotion: 'winking'   },
]
</script>

<style>
@import './style.css';
</style>
