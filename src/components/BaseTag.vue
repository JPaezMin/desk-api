<template>
    <span :class="['tag', tagType]"><slot></slot></span>
</template>

<script>
export default {
    props: {
        tagType: {
            type: String,
            default: 'default',
        },
    },
}
</script>
