<template>
  <div class="pixel-atai-wrap" ref="wrapRef">
    <svg
      class="pixel-atai"
      viewBox="0 0 80 160"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Pixel Atai"
    >
      <defs>
        <clipPath id="pk-head">  <rect x="20" y="0"   width="40" height="40"/></clipPath>
        <clipPath id="pk-body">  <rect x="20" y="40"  width="40" height="60"/></clipPath>
        <clipPath id="pk-rarm">  <rect x="0"  y="40"  width="20" height="60"/></clipPath>
        <clipPath id="pk-larm">  <rect x="60" y="40"  width="20" height="60"/></clipPath>
        <clipPath id="pk-rleg">  <rect x="20" y="100" width="20" height="60"/></clipPath>
        <clipPath id="pk-lleg">  <rect x="40" y="100" width="20" height="60"/></clipPath>
      </defs>

      <!-- ── ARMS ─────────────────────────────────── -->
      <image href="/images/atai-skin.png" x="-220" y="-60"  width="320" height="320" clip-path="url(#pk-rarm)" image-rendering="pixelated" preserveAspectRatio="none"/>
      <image href="/images/atai-skin.png" x="-220" y="-140" width="320" height="320" clip-path="url(#pk-rarm)" image-rendering="pixelated" preserveAspectRatio="none"/>
      <image href="/images/atai-skin.png" x="-120" y="-220" width="320" height="320" clip-path="url(#pk-larm)" image-rendering="pixelated" preserveAspectRatio="none"/>
      <image href="/images/atai-skin.png" x="-200" y="-220" width="320" height="320" clip-path="url(#pk-larm)" image-rendering="pixelated" preserveAspectRatio="none"/>

      <!-- ── BODY ──────────────────────────────────── -->
      <image href="/images/atai-skin.png" x="-80"  y="-60"  width="320" height="320" clip-path="url(#pk-body)" image-rendering="pixelated" preserveAspectRatio="none"/>
      <image href="/images/atai-skin.png" x="-80"  y="-140" width="320" height="320" clip-path="url(#pk-body)" image-rendering="pixelated" preserveAspectRatio="none"/>

      <!-- ── LEGS ──────────────────────────────────── -->
      <image href="/images/atai-skin.png" x="0"   y="0"    width="320" height="320" clip-path="url(#pk-rleg)" image-rendering="pixelated" preserveAspectRatio="none"/>
      <image href="/images/atai-skin.png" x="0"   y="-80"  width="320" height="320" clip-path="url(#pk-rleg)" image-rendering="pixelated" preserveAspectRatio="none"/>
      <image href="/images/atai-skin.png" x="-60" y="-160" width="320" height="320" clip-path="url(#pk-lleg)" image-rendering="pixelated" preserveAspectRatio="none"/>
      <image href="/images/atai-skin.png" x="20"  y="-160" width="320" height="320" clip-path="url(#pk-lleg)" image-rendering="pixelated" preserveAspectRatio="none"/>

      <!-- ── HEAD — separate group so it rotates independently ── -->
      <g class="head-group" :style="headStyle">
        <!-- Head skin texture -->
        <image href="/images/atai-skin.png" x="-20"  y="-40"  width="320" height="320" clip-path="url(#pk-head)" image-rendering="pixelated" preserveAspectRatio="none"/>
        <!-- Hat / hair overlay -->
        <image href="/images/atai-skin.png" x="-180" y="-40"  width="320" height="320" clip-path="url(#pk-head)" image-rendering="pixelated" preserveAspectRatio="none"/>

        <!-- Face mask: covers skin's static eyes & mouth -->
        <rect x="22" y="15" width="36" height="23" fill="#D98950"/>

        <!-- EYEBROWS -->
        <template v-if="['neutral','happy','winking'].includes(emotion)">
          <rect x="26" y="11" width="9" height="2" fill="#363636"/>
          <rect x="45" y="11" width="9" height="2" fill="#363636"/>
        </template>
        <template v-else-if="['excited','surprised'].includes(emotion)">
          <rect x="26" y="6"  width="9" height="2" fill="#363636"/>
          <rect x="45" y="6"  width="9" height="2" fill="#363636"/>
        </template>
        <template v-else-if="emotion === 'confident'">
          <rect x="26" y="13" width="9" height="2" fill="#363636"/>
          <rect x="45" y="13" width="9" height="2" fill="#363636"/>
        </template>
        <template v-else-if="emotion === 'puzzled'">
          <rect x="26" y="6"  width="9" height="2" fill="#363636"/>
          <rect x="45" y="11" width="9" height="2" fill="#363636"/>
        </template>

        <!-- LEFT EYE — always in DOM for stable blink -->
        <g class="eye-left">
          <rect v-if="['excited','surprised'].includes(emotion)"
                x="25" y="15" width="10" height="3" fill="#42695D"/>
          <rect x="25" y="18" width="5"  height="7" fill="#F5E9E9"/>
          <rect x="30" y="18" width="5"  height="7" fill="#42695D"/>
          <rect x="31" y="20" width="3"  height="3" fill="#1a1010"/>
          <rect v-if="['happy','confident'].includes(emotion)"
                x="25" y="18" width="10" height="3" fill="#D98950"/>
        </g>

        <!-- RIGHT EYE — always in DOM; wink disables blink -->
        <g class="eye-right" :class="{ 'eye-wink': emotion === 'winking' }">
          <template v-if="emotion !== 'winking'">
            <rect v-if="['excited','surprised'].includes(emotion)"
                  x="45" y="15" width="10" height="3" fill="#42695D"/>
            <rect x="45" y="18" width="5"  height="7" fill="#42695D"/>
            <rect x="50" y="18" width="5"  height="7" fill="#F5E9E9"/>
            <rect x="46" y="20" width="3"  height="3" fill="#1a1010"/>
            <rect v-if="['happy','confident'].includes(emotion)"
                  x="45" y="18" width="10" height="3" fill="#D98950"/>
          </template>
          <template v-else>
            <rect x="45" y="18" width="10" height="7" fill="#D98950"/>
            <rect x="45" y="22" width="10" height="2" fill="#1a1010"/>
          </template>
        </g>

        <!-- MOUTH -->
        <template v-if="emotion === 'neutral'">
          <rect x="27" y="31" width="26" height="2" fill="#764320"/>
        </template>
        <template v-else-if="['happy','winking'].includes(emotion)">
          <rect x="30" y="31" width="20" height="2" fill="#764320"/>
          <rect x="27" y="29" width="4"  height="2" fill="#764320"/>
          <rect x="49" y="29" width="4"  height="2" fill="#764320"/>
        </template>
        <template v-else-if="emotion === 'excited'">
          <rect x="27" y="32" width="26" height="2" fill="#764320"/>
          <rect x="25" y="29" width="4"  height="3" fill="#764320"/>
          <rect x="51" y="29" width="4"  height="3" fill="#764320"/>
        </template>
        <template v-else-if="emotion === 'confident'">
          <rect x="30" y="31" width="20" height="2" fill="#764320"/>
          <rect x="49" y="29" width="4"  height="2" fill="#764320"/>
        </template>
        <template v-else-if="emotion === 'puzzled'">
          <rect x="30" y="31" width="20" height="2" fill="#764320"/>
          <rect x="27" y="33" width="4"  height="2" fill="#764320"/>
          <rect x="49" y="33" width="4"  height="2" fill="#764320"/>
        </template>
        <template v-else-if="emotion === 'surprised'">
          <rect x="32" y="28" width="16" height="2" fill="#764320"/>
          <rect x="30" y="30" width="4"  height="6" fill="#764320"/>
          <rect x="46" y="30" width="4"  height="6" fill="#764320"/>
          <rect x="32" y="36" width="16" height="2" fill="#764320"/>
        </template>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useCharacterEmotion } from '@/composables/useCharacterEmotion'

const { emotion } = useCharacterEmotion()

const wrapRef = ref<HTMLElement>()
const headRX = ref(0)
const headRY = ref(0)

// pivot at neck: SVG x=40 (horizontal center), y=40 (head/body junction)
const headStyle = computed(() => ({
  transformOrigin: '40px 40px',
  transform: `perspective(500px) rotateX(${-headRX.value}deg) rotateY(${headRY.value}deg)`,
  transition: 'transform 0.12s ease-out',
}))

function clamp(v: number, lo: number, hi: number) {
  return v < lo ? lo : v > hi ? hi : v
}

function onMouseMove(e: MouseEvent) {
  if (!wrapRef.value) return
  const rect = wrapRef.value.getBoundingClientRect()
  const cx = rect.left + rect.width  * 0.5
  const cy = rect.top  + rect.height * 0.14  // approximate head-center Y

  const dx = e.clientX - cx
  const dy = e.clientY - cy

  headRY.value = clamp((dx / (window.innerWidth  * 0.5)) * 45, -45, 45)
  headRX.value = clamp((dy / (window.innerHeight * 0.5)) * 25, -25, 25)
}

onMounted(()   => window.addEventListener('mousemove', onMouseMove, { passive: true }))
onUnmounted(() => window.removeEventListener('mousemove', onMouseMove))
</script>

<style>
@import './style.css';
</style>
