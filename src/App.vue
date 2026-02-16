<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './components/layout/Navbar.vue';
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <Navbar />
        <main class="max-w-4xl mx-auto p-4 pt-28 pb-24 md:pt-4 md:pb-4">
            <RouterView />
        </main>
    </div>
</template>