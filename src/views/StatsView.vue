<script setup lang="ts">
import { computed } from 'vue'
import { useSessionsStore } from '@/stores/sessions'
import BaseCard from '@/components/ui/BaseCard.vue'

const store = useSessionsStore()

const avgWindSpeed = computed(() => {
    if (store.sessions.length === 0) return 0
    const total = store.sessions.reduce((sum, s) => sum + s.windSpeed, 0)
    return (total / store.sessions.length).toFixed(1)
})

const avgPerformance = computed(() => {
    if (store.sessions.length === 0) return 0
    const total = store.sessions.reduce((sum, s) => sum + s.performance, 0)
    return (total / store.sessions.length).toFixed(1)
})

const sessionsPerSeaCondition = computed(() => {
    const counts = store.sessions.reduce((acc, s) => {
        acc[s.seaCondition] = (acc[s.seaCondition] || 0) + 1
        return acc
    }, {} as Record<string, number>)

    const labels = {
        calm: '🌊 Calmo',
        moderate: '🌊🌊 Moderato',
        rough: '🌊🌊🌊 Mosso'
    }

    return Object.entries(counts).map(([condition, count]) => ({
        label: labels[condition as keyof typeof labels] || condition,
        count
    }))
})
</script>

<template>
    <div class="max-w-2xl mx-auto p-4">
        <h1 class="text-2xl font-bold mb-6">Statistiche</h1>

        <div v-if="store.sessions.length > 0" class="grid gap-4 md:grid-cols-2">
            <BaseCard title="Sessioni totali">
                <p class="text-4xl font-bold text-blue-600">{{ store.sessions.length }}</p>
            </BaseCard>

            <BaseCard title="Vento medio">
                <p class="text-4xl font-bold text-blue-600">{{ avgWindSpeed }} <span class="text-lg">kn</span></p>
            </BaseCard>

            <BaseCard title="Performance media">
                <p class="text-4xl font-bold text-yellow-500">{{ avgPerformance }} <span class="text-lg">/ 5</span></p>
            </BaseCard>

            <BaseCard title="Per condizione mare">
                <ul class="space-y-2">
                    <li v-for="item in sessionsPerSeaCondition" :key="item.label" class="flex justify-between">
                        <span>{{ item.label }}</span>
                        <span class="font-medium">{{ item.count }}</span>
                    </li>
                </ul>
            </BaseCard>
        </div>

        <BaseCard v-else>
            <p class="text-gray-500 text-center py-4">Nessuna statistica disponibile</p>
        </BaseCard>
    </div>
</template>