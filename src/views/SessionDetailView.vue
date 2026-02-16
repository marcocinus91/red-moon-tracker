<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router'
import { useSessionsStore } from '@/stores/sessions'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const route = useRoute()
const store = useSessionsStore()

const id = Number(route.params.id)
const session = store.getSessionById(id)

const seaConditionLabels = {
    calm: '🌊 Calmo',
    moderate: '🌊🌊 Moderato',
    rough: '🌊🌊🌊 Mosso'
}
</script>

<template>
    <div class="max-w-lg mx-auto p-4">
        <div v-if="session">
            <h1 class="text-2xl font-bold mb-6">Dettaglio Sessione</h1>

            <BaseCard>
                <div class="space-y-4">
                    <div class="flex justify-between border-b pb-2">
                        <span class="text-gray-500">Data</span>
                        <span class="font-medium">{{ session.date }}</span>
                    </div>
                    <div class="flex justify-between border-b pb-2">
                        <span class="text-gray-500">Velocità vento</span>
                        <span class="font-medium">{{ session.windSpeed }} kn</span>
                    </div>
                    <div class="flex justify-between border-b pb-2">
                        <span class="text-gray-500">Direzione vento</span>
                        <span class="font-medium">{{ session.windDirection }}</span>
                    </div>
                    <div class="flex justify-between border-b pb-2">
                        <span class="text-gray-500">Condizioni mare</span>
                        <span class="font-medium">{{ seaConditionLabels[session.seaCondition] }}</span>
                    </div>
                    <div class="flex justify-between border-b pb-2">
                        <span class="text-gray-500">Performance</span>
                        <span class="text-yellow-500">
                            {{ '★'.repeat(session.performance) }}{{ '☆'.repeat(5 - session.performance) }}
                        </span>
                    </div>
                    <div v-if="session.notes">
                        <span class="text-gray-500 block mb-1">Note</span>
                        <p class="text-gray-700">{{ session.notes }}</p>
                    </div>
                </div>
            </BaseCard>

            <RouterLink to="/" class="block mt-4">
                <BaseButton variant="secondary" class="w-full">← Torna alla Home</BaseButton>
            </RouterLink>
        </div>

        <div v-else class="text-center py-12">
            <p class="text-gray-500 mb-4">Sessione non trovata</p>
            <RouterLink to="/">
                <BaseButton>Torna alla Home</BaseButton>
            </RouterLink>
        </div>
    </div>
</template>