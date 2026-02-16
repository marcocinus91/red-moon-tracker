<script setup lang="ts">
defineProps<{
    label: string
    options: { value: string, label: string }[]
}>()

const model = defineModel<string>()
</script>

<template>
    <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-1">{{ label }}</label>
        <select v-model="model"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow">
            <option value="">Seleziona...</option>
            <option v-for="opt in options" :key="opt.value" :value="opt.value">
                {{ opt.label }}
            </option>
        </select>
    </div>
</template>