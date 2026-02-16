<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        variant?: 'primary' | 'secondary'
    }>(),
    {
        variant: 'primary'
    }
)
</script>

<template>
    <button class="px-4 py-2 rounded font-medium transition-colors" :class="{
        'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
        'bg-gray-200 text-gray-800 hover:bg-gray-300': variant === 'secondary'
    }">
        <slot />
    </button>
</template>