<script setup lang="ts">
import { ref, watch } from 'vue'
import { WheelOfFortune } from '.'
import { questions } from '../storage/questions.json'
import { colors } from '../storage/colors.json'

defineProps<{}>()

const dialog = ref(false)
const question = ref('')

watch(question, () => dialog.value = true)
  
</script>

<template>
  <v-container
    class="fill-height d-flex align-center"
    fluid
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="5"
        xl="3"
      >
        <div class="content">
          <h1 class="text-h4 text-sm-h2 font-weight-bold pt-16 pb-8">
            Mindset&nbsp;Check&#x2011;in
          </h1>

          <p class="text-md-h6 font-weight-regular">
            Start your team meeting with sharing the
            <a
              href="/t-mindset-(en).pdf"
              target="_blank"
            >
              „T&#x2011;Mindset“
            </a>
            slide to focus everyone. Spin the Mindset Wheel and ask your team the question that appears.
          </p>

          <p class="text-md-h6 font-weight-regular">
            Listen to our internal podcast series
            <a
              href="https://www.iamhatch.com/change-categories/podcast"
              target="_blank"
            >
              here
            </a>
            .
          </p>

          <v-container class="pa-0 pt-4">
            <v-row no-gutters>
              <v-col cols="6" sm="3" md="6">
                <img src="../assets/t-systems-logo.png" alt="T-Systems logo" />
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col>
                <p class="text-primary">Lets power higher performance</p>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-col>

      <v-col
        cols="12"
        md="7"
        lg="6"
        xl="4"
      >
        <wheel-of-fortune
          @done="(q) => question = q"
          :labels="questions"
          :colors="colors"
          class="pa-sm-10 text-black"
        />
      </v-col>
    </v-row>
  </v-container>

  <v-dialog
    v-model="dialog"
    fullscreen
  >
    <v-container class="fill-height d-flex align-center">
      <v-row justify="center">
        <v-col class="dialog-content"
          lg="8"
          xl="6"
        >
          <v-responsive
            :aspect-ratio="300/227"
            class="popup"
          >
            <h2 class="text-h6 text-sm-h4 font-weight-bold px-10 pt-10 px-sm-16 pt-sm-16 text-white">
              {{question}}
            </h2>

            <v-responsive
              :aspect-ratio="1/1"
              class="close"
              @click="dialog = false"
            />
          </v-responsive>
        </v-col>
      </v-row>
    </v-container>
  </v-dialog>
</template>

<style lang="scss">
.dialog-content {
  position: relative;
  display: flex;
  justify-content: center;
}

.content {
  display: flex;
  flex-direction: column;
  height: 100%;

  *:last-child {
    margin-top: auto;
  }
}

.popup {
  background-image: url('../assets/popup-background.svg');
  background-size: contain;
  display: flex;
  flex: 1 1 auto !important;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 700px !important;
}

.close {
  background-image: url('../assets/popup-close.svg');
  background-size: contain;
  position: absolute !important;
  width: 12vw;
  max-width: 80px !important;
  bottom: 0;
  right: 19%;
  cursor: pointer;
}
</style>
