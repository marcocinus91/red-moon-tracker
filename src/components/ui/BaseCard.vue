<script setup lang="ts">
defineProps<{
    title?: string
}>()
</script>

<template>
    <div class="bg-white rounded-lg shadow-md p-6">
        <h2 v-if="title" class="text-lg font-semibold mb-4">{{ title }}</h2>
        <!-- equivalente di children in React -->
        <slot />
    </div>
</template>