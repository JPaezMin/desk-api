<template>
    <div>
        <input
            v-bind="{ ...$attrs, onChange: updateValue }"
            :checked="modelValue"
            :id="uuid"
            type="checkbox"
            class="field"
        />
        <label :for="uuid" v-if="label" class="ml-2">
            {{ label }}
        </label>
    </div>
    <BaseErrorMessage v-if="error" :id="`${uuid}-error`" class="mt-2 text-red">
        {{ error }}
    </BaseErrorMessage>
</template>

<script>
import UniqueID from '@/features/UniqueID'
import SetupFormComponent from '@/features/SetupFormComponent'
import BaseErrorMessage from '@/components/BaseErrorMessage.vue'
export default {
    components: {
        BaseErrorMessage,
    },
    props: {
        label: {
            type: String,
            default: '',
        },
        modelValue: {
            type: Boolean,
        },
        error: {
            type: String,
            default: '',
        },
    },
    setup(props, context) {
        const uuid = UniqueID().getID()
        const { updateValue } = SetupFormComponent(props, context)
        return {
            updateValue,
            uuid,
        }
    },
}
</script>
<style lang="postcss" scoped>
.text-red {
    @apply text-red-500;
}
</style>
