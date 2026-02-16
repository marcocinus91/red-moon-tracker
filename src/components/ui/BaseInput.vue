<script setup lang="ts">
defineProps<{
    label: string
    type?: string
}>()

const model = defineModel<string | number>()
</script>

<template>
    <div class="md-4">
        <label class="block text-sm font-medium text-gray-700 mb-1">
            {{ label }}
        </label>
        <input :type="type || 'text'" v-model="model"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:border-blue-500 outline-none transition-shadow" />
    </div>
</template>