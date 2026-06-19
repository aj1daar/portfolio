<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <RouterLink
        to="/"
        class="logo"
        aria-label="Home"
        @mouseenter="setEmotion('surprised')"
        @mouseleave="resetEmotion"
        @click="closeMenu"
      ><img src="/favicon.png" alt="Home" class="logo-img" /></RouterLink>

      <button class="hamburger" :class="{ open: menuOpen }" @click="toggleMenu" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul class="nav-links" :class="{ open: menuOpen }">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="nav-link"
            active-class="nav-link--active"
            :exact="link.to === '/'"
            @mouseenter="setEmotion(link.emotion)"
            @mouseleave="resetEmotion"
            @click="closeMenu"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCharacterEmotion, type Emotion } from '@/composables/useCharacterEmotion'

const { setEmotion, resetEmotion } = useCharacterEmotion()

const menuOpen = ref(false)
const toggleMenu = () => { menuOpen.value = !menuOpen.value }
const closeMenu  = () => { menuOpen.value = false }

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
