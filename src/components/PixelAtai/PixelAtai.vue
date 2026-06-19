<template>
  <div ref="wrapRef" class="pixel-atai-wrap">
    <canvas ref="canvasRef" class="pixel-atai-canvas" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { SkinViewer, IdleAnimation } from 'skinview3d'

const wrapRef  = ref<HTMLElement>()
const canvasRef = ref<HTMLCanvasElement>()
let viewer: SkinViewer | null = null

const BODY_TURN = 0.45   // rad (~26°), matches Bedrock main-menu pose
const MAX_HEAD_Y = Math.PI * 0.55  // ±99° horizontal
const MAX_HEAD_X = Math.PI * 0.28  // ±50° vertical

onMounted(() => {
  if (!canvasRef.value) return

  viewer = new SkinViewer({
    canvas:        canvasRef.value,
    width:         260,
    height:        390,
    skin:          '/images/atai-skin.png',
    enableControls: false,
    fov:           40,
    zoom:          0.85,
  })

  // Transparent background so the page bg shows through
  viewer.background = null

  // Soft idle breathing — keeps him alive without walking
  viewer.animation = new IdleAnimation()

  // Turn the body just like the Bedrock main-menu pose
  viewer.playerObject.rotation.y = BODY_TURN

  window.addEventListener('mousemove', onMouseMove, { passive: true })
})

function onMouseMove(e: MouseEvent) {
  if (!viewer) return

  // Normalise mouse to [-1, 1] across the viewport
  const nx = (e.clientX / window.innerWidth  - 0.5) * 2
  const ny = (e.clientY / window.innerHeight - 0.5) * 2

  // Head rotation is relative to the body (child of playerObject)
  // Subtract body turn so neutral mouse pos keeps head facing camera
  viewer.playerObject.skin.head.rotation.y = clamp(nx * MAX_HEAD_Y, -MAX_HEAD_Y, MAX_HEAD_Y) - BODY_TURN
  viewer.playerObject.skin.head.rotation.x = clamp(ny * MAX_HEAD_X, -MAX_HEAD_X, MAX_HEAD_X)
}

function clamp(v: number, lo: number, hi: number) {
  return v < lo ? lo : v > hi ? hi : v
}

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  viewer?.dispose()
  viewer = null
})
</script>

<style>
@import './style.css';
</style>
