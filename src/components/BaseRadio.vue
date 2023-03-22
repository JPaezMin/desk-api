<template>
    <input
        type="radio"
        :checked="modelValue === value"
        :value="value"
        v-bind="$attrs"
        @change="$emit('update:modelValue', value)"
        :id="uuid"
    />
    <label class="ml-1" v-if="label" :for="uuid">{{ label }}</label>
    <BaseErrorMessage v-if="error" :id="`${uuid}-error`" class="mt-2 text-red">
        {{ error }}
    </BaseErrorMessage>
</template>

<script>
import BaseErrorMessage from '@/components/BaseErrorMessage.vue'
import UniqueID from '@/features/UniqueID'
import SetupFormComponent from '@/features/SetupFormComponent'
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
            type: [String, Number],
        },
        value: {
            type: [String, Number],
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
