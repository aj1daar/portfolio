<template>
  <div class="pixel-atai-wrap">
    <svg
      class="pixel-atai"
      viewBox="0 0 80 160"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Pixel Atai"
    >
      <!-- HAIR -->
      <rect x="24" y="0"  width="32" height="4"  fill="#1a0e04"/>
      <rect x="20" y="4"  width="40" height="4"  fill="#1a0e04"/>
      <rect x="16" y="8"  width="48" height="8"  fill="#1a0e04"/>
      <rect x="16" y="16" width="8"  height="28" fill="#1a0e04"/>
      <rect x="56" y="16" width="8"  height="28" fill="#1a0e04"/>

      <!-- FACE -->
      <rect x="24" y="8"  width="32" height="44" fill="#f5ca8a"/>

      <!-- EYEBROWS -->
      <template v-if="['neutral','happy','winking'].includes(emotion)">
        <rect x="27" y="20" width="8" height="2" fill="#1a0e04"/>
        <rect x="45" y="20" width="8" height="2" fill="#1a0e04"/>
      </template>
      <template v-else-if="['excited','surprised'].includes(emotion)">
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

      <!-- LEFT EYE — group always in DOM so CSS blink animation never resets -->
      <g class="eye-left">
        <rect v-if="['excited','surprised'].includes(emotion)"
              x="27" y="24" width="8" height="2" fill="#3d6b8a"/>
        <rect x="27" y="26" width="8" height="6" fill="#3d6b8a"/>
        <rect x="29" y="27" width="4" height="4" fill="#0a0a14"/>
        <rect v-if="['happy','confident'].includes(emotion)"
              x="27" y="26" width="8" height="3" fill="#f5ca8a"/>
      </g>

      <!-- RIGHT EYE — group always in DOM; eye-wink class disables blink when winking -->
      <g class="eye-right" :class="{ 'eye-wink': emotion === 'winking' }">
        <template v-if="emotion !== 'winking'">
          <rect v-if="['excited','surprised'].includes(emotion)"
                x="45" y="24" width="8" height="2" fill="#3d6b8a"/>
          <rect x="45" y="26" width="8" height="6" fill="#3d6b8a"/>
          <rect x="47" y="27" width="4" height="4" fill="#0a0a14"/>
          <rect v-if="['happy','confident'].includes(emotion)"
                x="45" y="26" width="8" height="3" fill="#f5ca8a"/>
        </template>
        <template v-else>
          <rect x="45" y="26" width="8" height="6" fill="#f5ca8a"/>
          <rect x="45" y="29" width="8" height="2" fill="#1a0e04"/>
        </template>
      </g>

      <!-- MOUTH -->
      <template v-if="emotion === 'neutral'">
        <rect x="31" y="43" width="18" height="2" fill="#c97a4a"/>
      </template>
      <template v-else-if="['happy','winking'].includes(emotion)">
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

      <!-- NECK -->
      <rect x="32" y="52" width="16" height="8"  fill="#f5ca8a"/>

      <!-- SHIRT COLLAR (peeks above hoodie) -->
      <rect x="28" y="60" width="24" height="4"  fill="#d4c9a0"/>

      <!-- SLEEVES — rendered before body so body shoulder renders on top -->
      <rect x="2"  y="68" width="12" height="40" fill="#2a3d2c"/>
      <rect x="2"  y="68" width="4"  height="40" fill="#1f3023"/>
      <rect x="66" y="68" width="12" height="40" fill="#2a3d2c"/>
      <rect x="74" y="68" width="4"  height="40" fill="#1f3023"/>

      <!-- HOODIE BODY -->
      <rect x="12" y="64" width="56" height="52" fill="#2a3d2c"/>
      <rect x="24" y="66" width="32" height="50" fill="#344f38"/>
      <rect x="12" y="64" width="8"  height="52" fill="#1f3023"/>
      <rect x="60" y="64" width="8"  height="52" fill="#1f3023"/>
      <!-- zip crease -->
      <rect x="39" y="66" width="2"  height="30" fill="#1f3023"/>
      <!-- pocket -->
      <rect x="22" y="96" width="36" height="16" fill="#1f3023"/>
      <rect x="39" y="96" width="2"  height="16" fill="#162019"/>
      <!-- drawstring cords -->
      <rect x="35" y="64" width="2"  height="10" fill="#c8bc8e"/>
      <rect x="43" y="64" width="2"  height="10" fill="#c8bc8e"/>

      <!-- SLEEVE CUFFS (slightly lighter band at wrist) -->
      <rect x="2"  y="104" width="12" height="4"  fill="#344f38"/>
      <rect x="66" y="104" width="12" height="4"  fill="#344f38"/>

      <!-- HANDS -->
      <rect x="2"  y="108" width="12" height="8"  fill="#f5ca8a"/>
      <rect x="5"  y="112" width="1"  height="4"  fill="#e0a86a"/>
      <rect x="8"  y="112" width="1"  height="4"  fill="#e0a86a"/>
      <rect x="11" y="112" width="1"  height="4"  fill="#e0a86a"/>
      <rect x="66" y="108" width="12" height="8"  fill="#f5ca8a"/>
      <rect x="69" y="112" width="1"  height="4"  fill="#e0a86a"/>
      <rect x="72" y="112" width="1"  height="4"  fill="#e0a86a"/>
      <rect x="75" y="112" width="1"  height="4"  fill="#e0a86a"/>

      <!-- PANTS -->
      <rect x="14" y="116" width="24" height="36" fill="#1c2530"/>
      <rect x="42" y="116" width="24" height="36" fill="#1c2530"/>
      <rect x="38" y="116" width="4"  height="36" fill="#131d28"/>

      <!-- SHOES -->
      <rect x="10" y="152" width="28" height="6"  fill="#e8e4dc"/>
      <rect x="42" y="152" width="28" height="6"  fill="#e8e4dc"/>
      <rect x="10" y="158" width="28" height="2"  fill="#201c1c"/>
      <rect x="42" y="158" width="28" height="2"  fill="#201c1c"/>
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
