<template>
    <div>
        <table class="text-left w-full mb-6">
            <thead>
                <tr>
                    <th v-for="(header, index) in columnHeaders" :key="index">
                        <div class="tableColumnTitle">
                            <span>{{ header }}</span>
                            <span
                                @click="
                                    updateSortDirection(
                                        header.toLowerCase().trim()
                                    )
                                "
                                class="
                                    tableColumnTitle__icon
                                    transform
                                    transition-transform
                                "
                                :class="{
                                    'rotate-180': currentSortDir === 'asc',
                                }"
                            >
                                <fa
                                    :icon="['fa', 'chevron-down']"
                                    v-if="
                                        currentSortDir === 'asc' &&
                                        currentSort === header.name
                                    "
                                />
                                <fa :icon="['fa', 'chevron-up']" v-else />
                            </span>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(chat, index) in sortedChats" :key="index">
                    <td>
                        <BaseBadge :badgeType="getBadgeState(chat.status)">{{
                            chat.status
                        }}</BaseBadge>
                    </td>
                    <td>{{ chat.id }}</td>
                    <td>{{ chat.assignee }}</td>
                    <td>{{ chat.brand }}</td>
                    <td>{{ chat.requested }}</td>
                    <td>{{ chat.updated }}</td>
                    <td>{{ chat.subject }}</td>
                    <td>{{ chat.requester }}</td>
                    <td>{{ chat.language }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import BaseBadge from '@/components/BaseBadge.vue'
export default {
    components: {
        BaseBadge,
    },
    data() {
        return {
            currentSort: 'status',
            currentSortDir: 'asc',
        }
    },
    computed: {
        ...mapState({
            chats: (state) => state.chat.chats,
            columnHeaders: (state) => state.chat.columns,
        }),
        sortedChats() {
            return this.chats.slice().sort((a, b) => {
                let modifier = 1
                if (this.currentSortDir === 'desc') {
                    modifier = -1
                }
                //return negative value = asc order
                if (a[this.currentSort] < b[this.currentSort]) {
                    return -1 * modifier
                }
                if (a[this.currentSort] > b[this.currentSort]) {
                    return 1 * modifier
                }
                // a = b
                return 0
            })
        },
    },
    methods: {
        getBadgeState(state) {
            let badgeState = ''
            if (state == 'Open' || state == 'New' || state == 'Pending') {
                badgeState = 'badgeSuccess'
            } else {
                if (state == 'On Hold') {
                    badgeState = 'badgeWarning'
                } else {
                    badgeState = 'badgeClose'
                }
            }
            return badgeState
        },
        updateSortDirection(columnToSort) {
            console.log(columnToSort)
            if (columnToSort === this.currentSort) {
                this.currentSortDir =
                    this.currentSortDir === 'asc' ? 'desc' : 'asc'
            } else {
                this.currentSortDir = 'asc'
            }
            this.currentSort = columnToSort
        },
    },
}
</script>

<style lang="scss" scoped></style>
