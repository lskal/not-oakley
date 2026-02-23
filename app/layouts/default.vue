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
    </main>
    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
.main-content {
  &:focus {
    outline: none;
  }
}
</style>
