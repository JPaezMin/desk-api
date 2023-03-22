<template>
    <div>
        <BaseChatWidget />
        <BasePythiaBar class="mt-4" />
        <BaseChatButtonRow class="mt-4" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BaseChatWidget from '@/components/BaseChatWidget.vue'
import BasePythiaBar from '@/components/BasePythiaBar.vue'
import BaseChatButtonRow from '@/components/BaseChatButtonRow.vue'
export default {
    components: {
        BaseChatButtonRow,
        BaseChatWidget,
        BasePythiaBar,
    },
    computed: {
        ...mapGetters('chatSession', ['incomingMessages']),
    },
}
</script>

<style lang="scss" scoped></style>
