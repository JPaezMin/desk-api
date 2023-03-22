<template>
    <div
        class="inline-block p-3 mt-6 ml-6 bg-gray-100 border-2 border-gray-200"
    >
        <div class="flex items-start">
            <img src="/images/casino-logo-s.png" alt="Casino Logo" />
            <div class="ml-2">
                <div class="flex">
                    <img src="/images/flag.svg" alt="Flag Image" />
                    <span class="ml-1 font-bold">15 SECS</span>
                </div>
                <span>Kentarou Nishioka</span>
            </div>
        </div>
        <div class="flex mt-2 space-x-2">
            <BaseTag tagType="tagVip">VIP</BaseTag>
            <BaseTag tagType="tagAlert">ACCOUNT CLOSURE</BaseTag>
            <BaseTag tagType="tagRegular">GERMAN</BaseTag>
        </div>
        <p class="mt-2">Can i get my register 10 please ?</p>
    </div>
</template>

<script>
import BaseTag from '@/components/BaseTag.vue'
export default {
    components: {
        BaseTag,
    },
}
</script>

<style lang="scss" scoped></style>
