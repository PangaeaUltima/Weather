<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n()
</script>
<template>
  <div class="lang-switch">
    <span
      class="locale"
      :class="{ 'active' : locale === 'ua' }"
      @click="locale = 'ua'"
    >
      UA
    </span>
    <span>|</span>
    <span
      class="locale"
      :class="{ 'active' : locale === 'en' }"
      @click="locale = 'en'"
    >
      EN
    </span>
  </div>
</template>

<style scoped>
.lang-switch .locale {
  cursor: pointer;
}

.lang-switch .locale.active {
  color: var(--primary);
}
</style>