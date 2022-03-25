<script setup lang="ts">
defineProps<{}>()
</script>

<template>
  <v-responsive :aspect-ratio="1/1">
    <div id="wheel-of-fortune" class="bg-secondary elevation-4"/>
  </v-responsive>
</template>

<style>
#wheel-of-fortune {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
</style>
