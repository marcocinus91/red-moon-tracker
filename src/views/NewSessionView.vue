<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseCard from '@/components/ui/BaseCard.vue';
import BaseInput from '@/components/ui/BaseInput.vue';
import BaseSelect from '@/components/ui/BaseSelect.vue';
import { useSessionsStore } from '@/stores/sessions';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const store = useSessionsStore()
const router = useRouter()

const date = ref('')
const windSpeed = ref(0)
const windDirection = ref('')
const seaCondition = ref<'calm' | 'moderate' | 'rough' | ''>('')
const performance = ref<1 | 2 | 3 | 4 | 5>(3)
const notes = ref('')

const windDirectionOptions = [
    { value: 'N', label: 'Nord' },
    { value: 'NE', label: 'Nord-Est' },
    { value: 'E', label: 'Est' },
    { value: 'SE', label: 'Sud-Est' },
    { value: 'S', label: 'Sud' },
    { value: 'SW', label: 'Sud-Ovest' },
    { value: 'W', label: 'Ovest' },
    { value: 'NW', label: 'Nord-Ovest' },
]

const seaConditionOptions = [
    { value: 'calm', label: '🌊 Calmo' },
    { value: 'moderate', label: '🌊🌊 Moderato' },
    { value: 'rough', label: '🌊🌊🌊 Mosso' },
]

function handleSubmit() {
    if (!seaCondition.value) return

    store.addSession({
        date: date.value,
        windSpeed: windSpeed.value,
        windDirection: windDirection.value,
        seaCondition: seaCondition.value,
        performance: performance.value,
        notes: notes.value,
    })
    router.push('/')
}
</script>

<template>
    <div class="max-w-lg mx-auto p-4">
        <h1 class="text-2xl font-bold mb-6">Nuova Sessione</h1>

        <BaseCard>
            <BaseInput label="Data" type="date" v-model="date" />
            <BaseInput label="Velocità vento (kn)" type="number" v-model="windSpeed" />
            <BaseSelect label="Direzione vento" :options="windDirectionOptions" v-model="windDirection" />
            <BaseSelect label="Condizioni mare" :options="seaConditionOptions" v-model="seaCondition" />

            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Performance</label>
                <div class="flex gap-2">
                    <label v-for="n in 5" :key="n"
                        class="flex-1 text-center py-2 border rounded-lg cursor-pointer transition-colors"
                        :class="performance === n ? 'bg-blue-600 text-white border-blue-600' : 'hover:bg-gray-100'">
                        <input type="radio" v-model="performance" :value="n" class="sr-only" />
                        {{ n }}
                    </label>
                </div>
            </div>

            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Note</label>
                <textarea v-model="notes" rows="3"
                    class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"></textarea>
            </div>

            <BaseButton @click="handleSubmit" class="w-full">Salva Sessione</BaseButton>
        </BaseCard>
    </div>
</template>