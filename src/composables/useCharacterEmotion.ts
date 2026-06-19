import { ref } from 'vue'

export type Emotion = 'neutral' | 'happy' | 'excited' | 'confident' | 'puzzled' | 'winking' | 'surprised'

const emotion = ref<Emotion>('neutral')

export function useCharacterEmotion() {
  function setEmotion(e: Emotion) {
    emotion.value = e
  }
  function resetEmotion() {
    emotion.value = 'neutral'
  }
  return { emotion, setEmotion, resetEmotion }
}
