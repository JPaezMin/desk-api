<template>
    <div>
        <a :class="['link', LinkType]" href="#"><slot></slot></a>
    </div>
</template>

<script>
export default {
    props: {
        LinkType: {
            type: String,
            default: 'default',
        },
    },
}
</script>

<style lang="postcss" scoped>
.link {
    @apply font-medium text-blue-700 hover:text-blue-900;
}
</style>
