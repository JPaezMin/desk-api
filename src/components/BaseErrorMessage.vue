<template>
    <div class="mt-4 mb-4">
        <p aria-live="assertive" class="errorMessage" :id="id">
            <slot />
        </p>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: [String, Number],
            required: true,
        },
    },
}
</script>
