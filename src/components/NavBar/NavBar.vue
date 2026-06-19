<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <RouterLink to="/" class="logo" aria-label="Home">A</RouterLink>
      <ul class="nav-links">
        <li v-for="link in links" :key="link.to">
          <RouterLink :to="link.to" class="nav-link" active-class="nav-link--active" :exact="link.to === '/'">
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/certifications', label: 'Certs' },
  { to: '/resume', label: 'Resume' },
]
</script>

<style>
@import './style.css';
</style>
