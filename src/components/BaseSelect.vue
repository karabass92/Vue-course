<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/16/solid'
import BaseButton from './BaseButton.vue'

interface IOptions {
    value: number,
    label: string
}

defineProps({
    placeholder: {
        default: 'Rest',
        type: String
    },
    selected: Number,
    options:{
        required: true,
        type: Array<IOptions>
    },
})
</script>

<template>
    <div class="flex gap-2">
        <BaseButton>
            <XMarkIcon class="h-8" />
        </BaseButton>
        <select class="w-full truncate roinded bg-gray-100 py-1 px-2 text-2xl">
            <option selected disabled value="">{{ placeholder }}</option>
            <option 
                v-for="{value, label} in options" 
                :key="value" 
                :value="value" 
                :selected="value === selected"
            >
                {{ label }}
            </option>
        </select>
    </div>
</template>