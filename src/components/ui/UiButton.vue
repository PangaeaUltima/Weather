<script setup lang="ts"></script>

<template>
  <button class="ui-button">
    <slot />
  </button>
</template>

<style>
.ui-button {
  cursor: pointer;
  padding: 4px 12px;
  background-color: var(--primary);
  color: white;
  border-color: var(--border);
}
</style>