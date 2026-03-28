<script setup lang="ts">
import AppLangSwitch from '@/components/app/AppLangSwitch.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="wrapper">
        <div class="logo">
          <img
            src="/logo.png"
            alt=""
          >
        </div>

        <div class="navigation">
          <nav class="navigation-links">
            <RouterLink :to="{ name: 'Home' }">
              {{ t('main') }}
            </RouterLink>
            <RouterLink :to="{ name: 'Favorites' }">
              {{ t('favorite') }}
            </RouterLink>
          </nav>

          <AppLangSwitch />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 16px 0;
}

.header .logo {
  width: 64px;
  margin: 0 auto;
}

.header .logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.header .wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.header .navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header .navigation-links {
  display: flex;
  gap: 16px;
}
</style>