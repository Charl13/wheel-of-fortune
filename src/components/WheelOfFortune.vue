<script setup lang="ts">
import { toWedges, randomWedge, Wedge } from '../app/wheel-of-fortune'
import CustomEase from 'gsap/CustomEase'
import { gsap } from 'gsap'

interface Props {
  labels: string[]
  colors: string[]
}

interface Emits {
  (e: 'done', label: string): void
}

const { labels, colors } = defineProps<Props>()

const emit = defineEmits<Emits>()

const wedges = toWedges(labels, colors)

const ease = CustomEase.create("custom", "M0,0 C0.022, 0.066 0.156, -0.142 0.156,-0.214 0.156,-0.214 0.186,-0.218 0.186,-0.218 0.204,-0.11 0.219,0.318 0.258,0.498 0.378,1.061 0.818,0.988 1,1 ")

const rotateWheel = (wedge: Wedge) =>
  gsap.fromTo('#wheel-of-fortune', { rotation: 0 }, {
    duration: 10,
    ease,
    rotate: (720 + (360 / 4)) - wedge.center,
  }).then(() => wedge)

const spin = () =>
  randomWedge(wedges)
    .then(rotateWheel)
    .then((wedge: Wedge) => emit('done', wedge.label))

const background = `conic-gradient(${
  wedges.map((wedge: Wedge) => [
    wedge.color,
    `${wedge.start}deg`,
    `${wedge.end}deg`,
  ].join(' ')).join(', ')
})`
</script>

<template>
  <v-responsive :aspect-ratio="1/1">
    <div :style="{background}"
      id="wheel-of-fortune"
      class="elevation-4"
      @click="spin"
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

      <div class="center bg-primary">
        <img src="../assets/T_CB_3c_n.png"/>
      </div>
    </div>

    <v-responsive :aspect-ratio="1/1" class="indicator" @click="dialog = false"/>
  </v-responsive>
</template>

<style lang="scss">
@use 'vuetify/styles/settings/_variables' as vuetify;
@use 'sass:map';

.v-responsive__content {
  display: flex;
  justify-content: center;

  .indicator {
    background-image: url('/assets/wheel-of-fortune-indicator.svg');
    background-size: contain;
    position: absolute !important;
    width: 12%;
    margin-top: -1%;
  }

  #wheel-of-fortune {
    --font-size-threshold: 0.4rem;

    @media (min-width: #{map.get(vuetify.$grid-breakpoints, 'md')}) {
      --font-size-threshold: 0.2rem;
    }
    @media (min-width: #{map.get(vuetify.$grid-breakpoints, 'lg')}) {
      --font-size-threshold: 0.1rem;
    }

    border-radius: 50%;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    cursor: pointer;

    .center {
      width: 35%;
      height: 35%;
      border-radius: 50%;
      align-self: center;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 50%;
      }
    }

    .wedge {
      position: absolute;
      top: 50%;
      width: 100%;
      padding-left: 3%;

      .wedge--text {
        position: absolute;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        display: block;
        max-width: 27%;
        transform: rotate(-1deg);
        top: -4px;
        font-size: clamp(0.3rem, var(--font-size-threshold) + 1vw, 1rem);
      }
    }
  }
}
</style>
