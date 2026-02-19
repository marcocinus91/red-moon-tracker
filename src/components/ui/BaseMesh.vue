<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import RotatingMesh from '../RotatingMesh.vue';

</script>

<template>
    <TresCanvas clear-color="#1a1a2e">
        <!-- Camera -->
        <TresPerspectiveCamera :position="[0, 2, 5]" :look-at="[0, 0, 0]" />

        <!-- Luce ambientale -->
        <TresAmbientLight :intensity="1" />

        <!-- Luce direzionale -->
        <TresDirectionalLight :position="[5, 5, 5]" :intensity="2" />

        <!-- Cubo -->
        <TresMesh ref="meshRef">
            <TresBoxGeometry :args="[1.5, 1.5, 1.5]" />
            <TresMeshStandardMaterial color="#4f46e5" />
        </TresMesh>

        <RotatingMesh />
    </TresCanvas>
</template>