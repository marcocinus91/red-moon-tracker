<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './components/layout/Navbar.vue';
</script>

<template>
    <Navbar />

    <main class="p-4">
        <RouterView />
    </main>
</template>