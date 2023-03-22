<template>
    <div>
        <BaseNotificationBar
            v-for="notification in notifications"
            :key="notification.id"
            :notification="notification"
        />
    </div>
</template>

<script>
import BaseNotificationBar from '@/components/BaseNotificationBar.vue'
import { mapState } from 'vuex'
export default {
    components: {
        BaseNotificationBar,
    },
    computed: mapState('notification', ['notifications']),
}
</script>

<style lang="scss" scoped></style>
