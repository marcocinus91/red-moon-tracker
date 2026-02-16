<script setup lang="ts">
import SessionCard from '@/components/session/SessionCard.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { useSessionsStore } from '@/stores/sessions';

const store = useSessionsStore()
</script>

<template>
    <div class="max-w-2xl mx-auto -4">
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold">Sessioni</h1>
            <RouterLink to="/session/new">
                <BaseButton>+ Nuova Sessione</BaseButton>
            </RouterLink>
        </div>

        <div class="space-y-4">
            <RouterLink v-for="session in store.sessions" :key="session.id" :to="`/session/${session.id}`"
                class="block hover:opacity-80 transition-opacity">
                <SessionCard :session="session" />
            </RouterLink>
        </div>

        <p v-if="store.sessions.length === 0" class="text-gray-500 text-center py-8">
            Nessuna sessione registrata
        </p>
    </div>
</template>