<template>
  <div class="search-bar relative bg-gray-100 p-2 inline-block">
    <input placeholder="Search..." />
    <button
      class="absolute right-2 mr-1 focus:outline-none focus:ring"
      aria-label="search"
    >
      <i class="fas fa-search"></i>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
input {
  @apply bg-gray-100 mr-7 focus:outline-none;
}
body.dark .search-bar {
  background-color: rgba(255, 255, 255, 0.1);
  transition: -webkit-text-fill-color 0.3s var(--n-bezier),
    caret-color 0.3s var(--n-bezier), color 0.3s var(--n-bezier),
    text-decoration-color 0.3s var(--n-bezier);
  border: 1px solid transparent;
}
body.dark .search-bar {
  &:hover {
    @apply border border-blue-800;
  }
}
body.dark .search-bar input {
  @apply bg-transparent;
}
</style>
