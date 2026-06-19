<template>
  <div class="pixel-atai-wrap">
    <!--
      Minecraft skin rendered at 5× scale in an 80×160 viewBox (16×32 MC units × 5).
      Body parts assembled via <image> + <clipPath>. Face expressions are dynamic
      SVG rects overlaid on top of the skin texture so blink/emotions still work.

      Skin region → display region at 5× scale:
        image_x = display_x − skin_x × 5
        image_y = display_y − skin_y × 5
        image w/h = 320 × 320  (64 × 5)
    -->
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

      <!-- ── ARMS (behind body) ───────────────────── -->
      <!-- Right arm base  skin(44,20) → display(0,40) -->
      <image href="/images/atai-skin.png" x="-220" y="-60"  width="320" height="320" clip-path="url(#pk-rarm)" image-rendering="pixelated" preserveAspectRatio="none"/>
      <!-- Right arm overlay  skin(44,36) -->
      <image href="/images/atai-skin.png" x="-220" y="-140" width="320" height="320" clip-path="url(#pk-rarm)" image-rendering="pixelated" preserveAspectRatio="none"/>
      <!-- Left arm base  skin(36,52) → display(60,40) -->
      <image href="/images/atai-skin.png" x="-120" y="-220" width="320" height="320" clip-path="url(#pk-larm)" image-rendering="pixelated" preserveAspectRatio="none"/>
      <!-- Left arm overlay  skin(52,52) -->
      <image href="/images/atai-skin.png" x="-200" y="-220" width="320" height="320" clip-path="url(#pk-larm)" image-rendering="pixelated" preserveAspectRatio="none"/>

      <!-- ── BODY ────────────────────────────────── -->
      <!-- Body base  skin(20,20) → display(20,40) -->
      <image href="/images/atai-skin.png" x="-80"  y="-60"  width="320" height="320" clip-path="url(#pk-body)" image-rendering="pixelated" preserveAspectRatio="none"/>
      <!-- Body overlay  skin(20,36) -->
      <image href="/images/atai-skin.png" x="-80"  y="-140" width="320" height="320" clip-path="url(#pk-body)" image-rendering="pixelated" preserveAspectRatio="none"/>

      <!-- ── HEAD ────────────────────────────────── -->
      <!-- Head base  skin(8,8) → display(20,0) -->
      <image href="/images/atai-skin.png" x="-20"  y="-40"  width="320" height="320" clip-path="url(#pk-head)" image-rendering="pixelated" preserveAspectRatio="none"/>
      <!-- Head overlay (hat / hair layer)  skin(40,8) -->
      <image href="/images/atai-skin.png" x="-180" y="-40"  width="320" height="320" clip-path="url(#pk-head)" image-rendering="pixelated" preserveAspectRatio="none"/>

      <!-- ── FACE MASK — erases skin's static eyes & mouth ── -->
      <!-- Covers face rows 3–7 (SVG y 15–38), leaving forehead & chin from texture -->
      <rect x="22" y="15" width="36" height="23" fill="#D98950"/>

      <!-- ── EYEBROWS ──────────────────────────────── -->
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

      <!-- ── LEFT EYE (always in DOM for stable blink) ── -->
      <g class="eye-left">
        <rect v-if="['excited','surprised'].includes(emotion)"
              x="25" y="15" width="10" height="3" fill="#42695D"/>
        <!-- white (outer) + teal iris (inner) matching skin -->
        <rect x="25" y="18" width="5"  height="7" fill="#F5E9E9"/>
        <rect x="30" y="18" width="5"  height="7" fill="#42695D"/>
        <rect x="31" y="20" width="3"  height="3" fill="#1a1010"/>
        <rect v-if="['happy','confident'].includes(emotion)"
              x="25" y="18" width="10" height="3" fill="#D98950"/>
      </g>

      <!-- ── RIGHT EYE (always in DOM; wink disables blink) ── -->
      <g class="eye-right" :class="{ 'eye-wink': emotion === 'winking' }">
        <template v-if="emotion !== 'winking'">
          <rect v-if="['excited','surprised'].includes(emotion)"
                x="45" y="15" width="10" height="3" fill="#42695D"/>
          <!-- teal iris (inner) + white (outer) matching skin -->
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

      <!-- ── MOUTH ─────────────────────────────────── -->
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

      <!-- ── LEGS ───────────────────────────────────── -->
      <!-- Right leg base  skin(4,20) → display(20,100) -->
      <image href="/images/atai-skin.png" x="0"   y="0"    width="320" height="320" clip-path="url(#pk-rleg)" image-rendering="pixelated" preserveAspectRatio="none"/>
      <!-- Right leg overlay  skin(4,36) -->
      <image href="/images/atai-skin.png" x="0"   y="-80"  width="320" height="320" clip-path="url(#pk-rleg)" image-rendering="pixelated" preserveAspectRatio="none"/>
      <!-- Left leg base  skin(20,52) → display(40,100) -->
      <image href="/images/atai-skin.png" x="-60" y="-160" width="320" height="320" clip-path="url(#pk-lleg)" image-rendering="pixelated" preserveAspectRatio="none"/>
      <!-- Left leg overlay  skin(4,52) -->
      <image href="/images/atai-skin.png" x="20"  y="-160" width="320" height="320" clip-path="url(#pk-lleg)" image-rendering="pixelated" preserveAspectRatio="none"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { useCharacterEmotion } from '@/composables/useCharacterEmotion'
const { emotion } = useCharacterEmotion()
</script>

<style>
@import './style.css';
</style>
