<template>
  <q-page>
    <BackAndSkip :tytle="style !== 3 ? 'تخطي' : ''" @emitClick="scabEvent" />
    <div class="q-pa-md">
      <q-carousel
        v-model="slide"
        swipeable
        animated
        padding
        arrows
        navigation
        navigation-icon="radio_button_unchecked"
        transition-prev="slide-right"
        transition-next="slide-left"
        class="full-height full-width"
      >
        <q-carousel-slide name="1">
          <q-scroll-area class="fit">
            <q-icon name="style" size="56px" />
            <div class="q-mt-md">
              {{ lorem }}
            </div>
          </q-scroll-area>
        </q-carousel-slide>
        <q-carousel-slide name="2">
          <q-scroll-area class="fit">
            <q-icon name="style" size="56px" />
            <div class="q-mt-md">
              {{ lorem }}
            </div>
          </q-scroll-area>
        </q-carousel-slide>
        <q-carousel-slide name="3">
          <q-scroll-area class="fit">
            <q-icon name="style" size="56px" />
            <div class="q-mt-md">
              {{ lorem }}
            </div>
          </q-scroll-area>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </q-page>
</template>
<script>
import { ref } from "vue";
import BackAndSkip from "src/components/Bar/top/backAndSkip.vue";
export default {
  components: { BackAndSkip },
  setup() {
    return {
      slide: ref("1"),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
  methods: {
    scabEvent() {
      // make scape event
    },
  },
};
</script>

<style>
</style>
