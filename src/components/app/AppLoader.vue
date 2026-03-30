<script setup lang="ts">
withDefaults(defineProps<{
  overlay?: boolean
  strokeWidth?: number
  size?: number
}>(),
{
  strokeWidth: 3,
  size: 32
})
</script>

<template>
  <div :class="{ 'overlay' : overlay }">
    <div
      class="loader"
      :style="{
        width: `${size}px`,
        padding: `${strokeWidth}px`
      }"
    />
  </div>
</template>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(255 255 255 / 72%);
}

.loader {
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: var(--primary);
  --_m: 
  conic-gradient(#0000 10%,#000),
  linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: rotate 1s infinite linear;
}
@keyframes rotate {to{transform: rotate(1turn)}}
</style>