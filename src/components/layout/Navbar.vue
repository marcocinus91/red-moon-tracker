<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Home, PlusCircle, BarChart3 } from 'lucide-vue-next';

const navLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/session/new', label: 'Nuova Sessione', icon: PlusCircle },
    { to: '/stats', label: 'Statistiche', icon: BarChart3 },
]
</script>

<template>
    <!-- Mobile header -->
    <header
        class="md:hidden fixed top-0 left-0 right-0 bg-linear-to-r from-red-900 to-red-800 text-white shadow-lg z-50">
        <div class="px-4 py-3 flex items-center justify-center">
            <RouterLink to="/" class="text-lg font-bold tracking-tight flex items-center gap-2">
                <img src="/luna-rossa.png" alt="Luna Rossa" class="h-20 w-20" />
                Luna Rossa Tracker
            </RouterLink>
        </div>
    </header>

    <!-- Desktop navbar -->
    <nav class="hidden md:block bg-linear-to-r from-red-900 to-red-800 text-white shadow-lg">
        <div class="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
            <RouterLink to="/" class="text-xl font-bold tracking-tight flex items-center gap-2">
                <img src="/luna-rossa.png" alt="Luna Rossa" class="h-20 w-h-20" />
                Luna Rossa Tracker
            </RouterLink>

            <div class="flex gap-1">
                <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to"
                    class="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
                    active-class="bg-white/20 font-medium">
                    {{ link.label }}
                </RouterLink>
            </div>
        </div>
    </nav>

    <!-- Mobile bottom navigation -->
    <nav class="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div class="flex justify-around">
            <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to"
                class="flex flex-col items-center py-3 px-6 text-gray-500 transition-colors"
                active-class="text-blue-600">
                <component :is="link.icon" :size="24" />
                <span class="text-xs mt-1">{{ link.label }}</span>
            </RouterLink>
        </div>
    </nav>
</template>