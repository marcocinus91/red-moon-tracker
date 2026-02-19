<script setup lang="ts">
import { useLoop } from '@tresjs/core';
import { ref } from 'vue';

const meshRef = ref()

const { onBeforeRender } = useLoop();

onBeforeRender(() => {
    if (meshRef.value) {
        meshRef.value.rotation.y = +  0.01
        meshRef.value.rotation.x = +  0.005
    }
})
</script>

<template>
    <TresMesh ref="meshRef">
        <TresBoxGeometry :args="[1.5, 1.5, 1.5]" />
        <TresMeshStandardMaterial color="#4f46e5" />
    </TresMesh>
</template>