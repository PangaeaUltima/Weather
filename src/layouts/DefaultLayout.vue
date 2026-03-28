<script setup lang="ts">
import AppHeader from '@/components/app/AppHeader.vue';
</script>

<template>
  <div class="default-layout">
    <AppHeader class="header" />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.default-layout {
  position: relative;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
}

.default-layout .content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  padding-bottom: 16px;
}

.header {
  margin-bottom: 20px;
}
</style>