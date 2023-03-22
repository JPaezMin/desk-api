<template>
    <div class="flex items-center justify-between">
        <BaseSearchBar />
        <BasePythiaCarousel />
    </div>
</template>

<script>
import BaseSearchBar from './BaseSearchBar.vue'
import BasePythiaCarousel from './BasePythiaCarousel.vue'

export default {
    components: { BaseSearchBar, BasePythiaCarousel },
}
</script>

<style lang="scss" scoped></style>
