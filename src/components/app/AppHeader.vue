<script setup lang="ts">
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="wrapper">
        <div class="logo">
          <img src="/logo.png" alt="">
        </div>

        <div class="navigation">
          <nav class="navigation-links">
            <RouterLink :to="{ name: 'Home' }">
              Головна
            </RouterLink>
            <RouterLink :to="{ name: 'Home' }">
              Вибране
            </RouterLink>
          </nav>

          <div class="lang">
            <span>
              UA
            </span>
            <span>|</span>
            <span>
              EN
            </span>
          </div>
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