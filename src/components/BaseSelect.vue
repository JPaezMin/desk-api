<template>
    <label v-if="label" :for="uuid">{{ label }}</label>
    <div class="relative">
        <select
            :value="modelValue"
            v-bind="{
                ...$attrs,
                onChange: ($event) => {
                    $emit('update:modelValue', $event.target.value)
                },
            }"
            :id="uuid"
            :class="defaultSelect ? 'default' : 'actions'"
        >
            <option value="" disabled>{{ defaultValue }}</option>
            <option
                v-for="option in options"
                :value="option"
                :key="option"
                :selected="option === modelValue"
            >
                {{ option }}
            </option>
        </select>
        <div>
            <svg
                class="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
            >
                <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
            </svg>
        </div>
    </div>
    <BaseErrorMessage v-if="error" :id="`${uuid}-error`" class="mt-2 text-red">
        {{ error }}
    </BaseErrorMessage>
</template>

<script>
import SetupFormComponent from '@/features/SetupFormComponent'
import BaseErrorMessage from '@/components/BaseErrorMessage.vue'
import UniqueID from '@/features/UniqueID'
export default {
    components: {
        BaseErrorMessage,
    },
    props: {
        defaultValue: {
            type: [String, Number],
            default: '',
            required: false,
        },
        defaultSelect: {
            type: Boolean,
            default: true,
            required: true,
        },
        label: {
            type: String,
            default: '',
        },
        modelValue: {
            type: [String, Number],
            default: '',
        },
        options: {
            type: Array,
            required: true,
        },
        error: {
            type: String,
            default: '',
        },
    },
    setup(props, context) {
        const { updateValue } = SetupFormComponent(props, context)
        const uuid = UniqueID().getID()
        return {
            updateValue,
            uuid,
        }
    },
}
</script>

<style lang="postcss" scoped>
select {
    @apply block appearance-none w-full py-1 pl-2 pr-8 leading-tight bg-gray-100 text-gray-700
    placeholder-gray-900 border border-gray-200 focus:outline-none focus:bg-white focus:border-gray-500;
}
select + div {
    @apply pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center text-gray-700;
}
select.default {
    @apply bg-gray-100 border border-gray-100 text-gray-700  focus:bg-white focus:border-gray-500;
}
select.actions {
    @apply bg-white border-2 border-blue-700 text-blue-700  focus:bg-white focus:border-blue-700;
}
select.actions option {
    @apply appearance-none py-14;
}
select.actions + div svg {
    @apply fill-blue-700;
}
.text-red {
    @apply text-red-500;
}
</style>
