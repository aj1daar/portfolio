<template>
  <div class="pixel-atai-wrap">
    <svg
      class="pixel-atai"
      viewBox="0 0 80 160"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Pixel Atai"
    >
      <!-- ── HAIR ───────────────────────────────── -->
      <rect x="24" y="0"  width="32" height="4"  fill="#1a0e04"/>
      <rect x="20" y="4"  width="40" height="4"  fill="#1a0e04"/>
      <rect x="16" y="8"  width="48" height="8"  fill="#1a0e04"/>
      <rect x="16" y="16" width="8"  height="28" fill="#1a0e04"/>
      <rect x="56" y="16" width="8"  height="28" fill="#1a0e04"/>

      <!-- ── FACE ───────────────────────────────── -->
      <rect x="24" y="8"  width="32" height="44" fill="#f5ca8a"/>

      <!-- ── NECK ───────────────────────────────── -->
      <rect x="32" y="52" width="16" height="8"  fill="#f5ca8a"/>

      <!-- ── COLLAR ─────────────────────────────── -->
      <rect x="28" y="60" width="24" height="4"  fill="#0a0a14"/>

      <!-- ── JACKET ─────────────────────────────── -->
      <rect x="10" y="64" width="60" height="52" fill="#2255cc"/>
      <rect x="18" y="64" width="12" height="52" fill="#4477ee"/>
      <rect x="50" y="64" width="12" height="52" fill="#4477ee"/>
      <rect x="30" y="64" width="20" height="52" fill="#0a0a14"/>

      <!-- ── PANTS ──────────────────────────────── -->
      <rect x="14" y="116" width="24" height="36" fill="#1a3d28"/>
      <rect x="42" y="116" width="24" height="36" fill="#1a3d28"/>
      <rect x="38" y="116" width="4"  height="36" fill="#0a0a14"/>

      <!-- ── SHOES ──────────────────────────────── -->
      <rect x="10" y="152" width="28" height="6" fill="#e8e4dc"/>
      <rect x="42" y="152" width="28" height="6" fill="#e8e4dc"/>
      <rect x="10" y="158" width="28" height="2" fill="#201c1c"/>
      <rect x="42" y="158" width="28" height="2" fill="#201c1c"/>

      <!-- ── EYEBROWS ────────────────────────────── -->
      <template v-if="['neutral', 'happy', 'winking'].includes(emotion)">
        <rect x="27" y="20" width="8" height="2" fill="#1a0e04"/>
        <rect x="45" y="20" width="8" height="2" fill="#1a0e04"/>
      </template>
      <template v-else-if="['excited', 'surprised'].includes(emotion)">
        <rect x="27" y="15" width="8" height="2" fill="#1a0e04"/>
        <rect x="45" y="15" width="8" height="2" fill="#1a0e04"/>
      </template>
      <template v-else-if="emotion === 'confident'">
        <rect x="27" y="22" width="8" height="2" fill="#1a0e04"/>
        <rect x="45" y="22" width="8" height="2" fill="#1a0e04"/>
      </template>
      <template v-else-if="emotion === 'puzzled'">
        <rect x="27" y="15" width="8" height="2" fill="#1a0e04"/>
        <rect x="45" y="20" width="8" height="2" fill="#1a0e04"/>
      </template>

      <!-- ── LEFT EYE (always blinks) ──────────── -->
      <g class="eye-left">
        <rect x="27" y="26" width="8" height="6" fill="#3d6b8a"/>
        <rect x="29" y="27" width="4" height="4" fill="#0a0a14"/>
        <rect v-if="['happy', 'confident'].includes(emotion)"
              x="27" y="26" width="8" height="3" fill="#f5ca8a"/>
      </g>
      <!-- excited/surprised: extend iris upward -->
      <rect v-if="['excited', 'surprised'].includes(emotion)"
            x="27" y="24" width="8" height="2" fill="#3d6b8a"/>

      <!-- ── RIGHT EYE (blinks or winks) ───────── -->
      <g v-if="emotion !== 'winking'" class="eye-right">
        <rect x="45" y="26" width="8" height="6" fill="#3d6b8a"/>
        <rect x="47" y="27" width="4" height="4" fill="#0a0a14"/>
        <rect v-if="['happy', 'confident'].includes(emotion)"
              x="45" y="26" width="8" height="3" fill="#f5ca8a"/>
      </g>
      <g v-else>
        <rect x="45" y="29" width="8" height="2" fill="#0a0a14"/>
      </g>
      <rect v-if="['excited', 'surprised'].includes(emotion)"
            x="45" y="24" width="8" height="2" fill="#3d6b8a"/>

      <!-- ── MOUTH ───────────────────────────────── -->
      <template v-if="emotion === 'neutral'">
        <rect x="31" y="43" width="18" height="2" fill="#c97a4a"/>
      </template>
      <template v-else-if="['happy', 'winking'].includes(emotion)">
        <rect x="33" y="43" width="14" height="2" fill="#c97a4a"/>
        <rect x="31" y="41" width="4"  height="2" fill="#c97a4a"/>
        <rect x="45" y="41" width="4"  height="2" fill="#c97a4a"/>
      </template>
      <template v-else-if="emotion === 'excited'">
        <rect x="31" y="44" width="18" height="2" fill="#c97a4a"/>
        <rect x="29" y="41" width="4"  height="3" fill="#c97a4a"/>
        <rect x="47" y="41" width="4"  height="3" fill="#c97a4a"/>
      </template>
      <template v-else-if="emotion === 'confident'">
        <rect x="33" y="43" width="14" height="2" fill="#c97a4a"/>
        <rect x="47" y="41" width="4"  height="2" fill="#c97a4a"/>
      </template>
      <template v-else-if="emotion === 'puzzled'">
        <rect x="33" y="43" width="14" height="2" fill="#c97a4a"/>
        <rect x="31" y="45" width="4"  height="2" fill="#c97a4a"/>
        <rect x="45" y="45" width="4"  height="2" fill="#c97a4a"/>
      </template>
      <template v-else-if="emotion === 'surprised'">
        <rect x="34" y="41" width="12" height="2" fill="#c97a4a"/>
        <rect x="32" y="43" width="4"  height="4" fill="#c97a4a"/>
        <rect x="44" y="43" width="4"  height="4" fill="#c97a4a"/>
        <rect x="34" y="47" width="12" height="2" fill="#c97a4a"/>
      </template>
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
