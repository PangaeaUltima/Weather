<script setup lang="ts">
import Overlay from './Overlay.vue'

const props = withDefaults(defineProps<{
  modelValue: boolean
  closeOnOverlay?: boolean
}>(), {
  closeOnOverlay: true,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const close = () => emit('update:modelValue', false)

const onOverlayClick = () => {
  if (props.closeOnOverlay) {
    close()
  }
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      class="modal"
    >
      <button
        class="overlay-button"
        type="button"
        aria-label="Close modal"
        @click="onOverlayClick"
      >
        <Overlay />
      </button>

      <div class="content">
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 16px;
}

.overlay-button {
  position: absolute;
  inset: 0;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: default;
}

.content {
  position: relative;
  z-index: 1;
  width: min(100%, 480px);
}
</style>
