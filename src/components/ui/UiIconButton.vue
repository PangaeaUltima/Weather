<script setup lang="ts">
withDefaults(defineProps<{
  size?: number | string
}>(), {
  size: 16
})
</script>
<template>
  <button
    class="ui-icon-button"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <slot />
  </button>  
</template>

<style>
.ui-icon-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 4px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ui-icon-button:hover {
  background-color: rgba(0, 0, 0, 0.08);
}

.ui-icon-button:active {
  background-color: rgba(0, 0, 0, 0.16);
}

.ui-icon-button svg {
  width: 100%;
  height: 100%;
}
</style>