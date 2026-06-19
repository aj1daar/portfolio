<template>
  <a
    v-if="href"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :class="['pixel-btn', `pixel-btn--${variant}`]"
  >
    <slot />
  </a>
  <RouterLink
    v-else-if="to"
    :to="to"
    :class="['pixel-btn', `pixel-btn--${variant}`]"
  >
    <slot />
  </RouterLink>
  <button
    v-else
    :class="['pixel-btn', `pixel-btn--${variant}`]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  href?: string
  to?: string
  variant?: 'primary' | 'secondary'
  external?: boolean
}>(), {
  variant: 'primary',
  external: false,
})
</script>

<style>
@import './style.css';
</style>
