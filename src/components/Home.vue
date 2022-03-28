<script setup lang="ts">
import { WheelOfFortune } from '.'
import { questions } from '../storage/questions.json'
import { colors } from '../storage/colors.json'

defineProps<{}>()
</script>

<template>
  <v-card class="pa-2 flex-grow-1">
    <v-card-title>
      <h1 class="text-h2">Wheel of fortune</h1>
    </v-card-title>

    <wheel-of-fortune :labels="questions" :colors="colors" class="pa-10"/>

    <v-card-actions>
      <v-spacer />

      <v-btn flat size="x-large" class="bg-primary">Spin</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
</style>
