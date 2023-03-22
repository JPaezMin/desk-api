<template>
  <nav role="navigation" aria-label="Main menu">
    <ul class="flex" role="menubar">
      <li role="menuitem" tabindex="-1">
        <n-button
          text
          tag="a"
          href="/design-system"
          target="_blank"
          class="mr-4"
        >
          <template #icon>
            <n-icon class="mr-2">
              <i class="fas fa-users"></i>
            </n-icon>
          </template>
          DESIGN SYSTEM
        </n-button>
      </li>
      <li role="menuitem" tabindex="-1">
        <n-button text tag="a" href="/naive-ui" target="_blank" class="mr-4">
          <template #icon>
            <n-icon class="mr-2">
              <i class="fas fa-users"></i>
            </n-icon>
          </template>
          NAIVE UI
        </n-button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.dark nav ul li a {
  color: rgba(255, 255, 255, 0.82);
}
</style>
