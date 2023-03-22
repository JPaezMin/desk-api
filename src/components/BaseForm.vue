<template>
    <div>
        <form @submit.prevent="submit" class="max-w-sm">
            <fieldset>
                <legend>Single Select</legend>
                <BaseSelect
                    :defaultSelect="true"
                    :options="categories"
                    v-model="category"
                    label=""
                    defaultValue="Select an Option"
                    :error="errors.category"
                />
            </fieldset>
            <fieldset>
                <legend>Input Group</legend>
                <BaseInput
                    v-model="title"
                    label="Title"
                    type="text"
                    :error="errors.title"
                />
                <BaseInput
                    v-model="description"
                    label="Description"
                    type="text"
                    :error="errors.description"
                />
            </fieldset>
            <fieldset>
                <legend>Single Input</legend>
                <BaseInput
                    v-model="location"
                    label="Location"
                    type="text"
                    :error="errors.location"
                />

                <h3 class="mt-4 font-bold">Radio Group</h3>
                <div>
                    <BaseRadioGroup
                        v-model="radioButtons"
                        name="radioButton"
                        :options="[
                            { value: 1, label: 'Yes' },
                            { value: 0, label: 'No' },
                        ]"
                        :error="errors.radioButtons"
                    />
                </div>
            </fieldset>
            <fieldset>
                <legend>Checkbox Group</legend>
                <div class="mt-2">
                    <BaseCheckBox
                        v-model="checkBox"
                        label="CheckBox"
                        :error="errors.checkBox"
                    />
                </div>
            </fieldset>
            <BaseButton class="mt-4" type="submit" buttonType="btnPrimary"
                >Submit</BaseButton
            >
        </form>
    </div>
</template>

<script>
import { useField, useForm } from 'vee-validate'
import BaseButton from '@/components/BaseButton.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import BaseCheckBox from '@/components/BaseCheckBox.vue'
import BaseRadioGroup from '@/components/BaseRadioGroup.vue'
export default {
    components: {
        BaseButton,
        BaseCheckBox,
        BaseInput,
        BaseSelect,
        BaseRadioGroup,
    },
    data() {
        return {
            categories: [
                'sustainability',
                'nature',
                'animal welfare',
                'housing',
                'education',
                'food',
                'community',
            ],
        }
    },
    setup() {
        const required = (value) => {
            const requiredMessage = 'This field is required'
            if (value === undefined || value === null) return requiredMessage
            if (!String(value).length) return requiredMessage
            return true
        }
        const minLength = (number, value) => {
            if (String(value).length < number)
                return 'Please type at least ' + number + ' characters'
            return true
        }
        const anything = () => {
            return true
        }
        const validationSchema = {
            category: required,
            title: (value) => {
                const req = required(value)
                if (req !== true) return req
                const min = minLength(3, value)
                if (min !== true) return min
                return true
            },
            description: required,
            location: required,
            radioButtons: anything,
            catering: anything,
            checkBox: anything,
        }
        const { handleSubmit, errors } = useForm({
            validationSchema,
            initialValues: {
                radioButtons: 1,
                catering: false,
                checkBox: false,
            },
        })
        const { value: category } = useField('category')
        const { value: title } = useField('title')
        const { value: description } = useField('description')
        const { value: location } = useField('location')
        const { value: radioButtons } = useField('radioButtons')
        const { value: catering } = useField('catering')
        const { value: checkBox } = useField('checkBox')
        const submit = handleSubmit((values) => {
            console.log('submit', values)
        })
        return {
            category,
            title,
            description,
            location,
            radioButtons,
            catering,
            checkBox,
            submit,
            errors,
        }
    },
}
</script>
