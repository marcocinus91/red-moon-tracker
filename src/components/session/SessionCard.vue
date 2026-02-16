<script setup lang="ts">
import type { Session } from '@/types';
import BaseCard from '../ui/BaseCard.vue';

defineProps<{
    session: Session
}>()

const seaConditionLabels = {
    calm: '🌊 Calmo',
    moderate: '🌊🌊 Moderato',
    rough: '🌊🌊🌊 Mosso'
}
</script>

<template>
    <BaseCard>
        <div class="flex justify-between items-start">
            <div>
                <p class="text-sm text-gray-500">{{ session.date }}</p>
                <p class="font-medium mt-1">{{ session.windSpeed }} kn - {{ session.windDirection }}</p>
            </div>
            <div class="text-right">
                <span class="text-sm">{{ seaConditionLabels[session.seaCondition] }}</span>
                <p class="text-yellow-500 mt-1">
                    {{ '★'.repeat(session.performance) }}{{ '☆'.repeat(5 - session.performance) }}
                </p>
            </div>
        </div>
    </BaseCard>
</template>