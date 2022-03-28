<script setup lang="ts">
import { toConicGradients, toWedges } from '../app/wheel-of-fortune'

interface Props {
  labels: string[]
  colors: string[]
}

const { labels, colors } = defineProps<Props>()

const conicGradients = toConicGradients(labels.length, colors)

const wedges = toWedges(labels)

const background = `conic-gradient(${
  conicGradients.map(gradient => [
    gradient.color,
    gradient.start,
    gradient.end
  ].join(' ')).join(', ')
})`
</script>

<template>
  <v-responsive :aspect-ratio="1/1">
    <div :style="{background}"
      id="wheel-of-fortune"
      class="elevation-4"
    >
      <div v-for="wedge in wedges"
        :key="wedge"
        :style="{transform: wedge.rotation}"
        class="wedge"
      >
        <span class="wedge--text">
          {{ wedge.label }}
        </span>
      </div>

      <div class="center"/>
    </div>
  </v-responsive>
</template>

<style lang="scss">
#wheel-of-fortune {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;

  .center {
    background-color: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
    align-self: center;
  }

  .wedge {
    position: absolute;
    top: 50%;
    width: 100%;
    padding-left: 18px;

    .wedge--text {
      position: absolute;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      display: block;
      max-width: 27%;
      font-size: 1.5vw;
      transform: rotate(-3deg);
    }
  }
}
</style>
