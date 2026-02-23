<template>
  <div>
    <SkipToMainContent />
    <AppHeader />
    <main
      id="main-content"
      tabindex="-1"
      class="main-content"
      role="main"
      aria-label="Main content"
    >
      <slot />
      <AppFooter />
    </main>
  </div>
</template>

<style scoped>
.main-content {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.main-content:focus {
  outline: none;
}
</style>
