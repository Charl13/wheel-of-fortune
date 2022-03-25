<script setup lang="ts">
import { WheelOfFortune } from '.'

defineProps<{}>()
</script>

<template>
  <v-card class="pa-2 flex-grow-1" min-width="420" max-width="600">
    <v-card-title>
      <h1 class="text-h2">Wheel of fortune</h1>
    </v-card-title>

    <wheel-of-fortune class="pa-10"/>

    <v-card-actions>
      <v-spacer />

      <v-btn flat size="x-large" class="bg-primary">Spin</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
</style>
