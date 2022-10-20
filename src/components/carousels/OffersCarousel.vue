<template>
  <div class="">
    <q-carousel
      v-model="slide"
      swipeable
      animated
      :navigation-position="navPos"
      navigation
      height="120px"
      control-color="primary"
      class="offer-carousel q-ma-0 full-width text-white rounded-borders"
      style="padding: 0; margin-bottom: 50px !important; overflow: visible"
    >
      <q-carousel-slide
        v-for="(item, i) in offers"
        :key="i"
        :name="item.id"
        class="q-pa-0 full-width full-height column no-wrap flex-center"
      >
        <img
          style="border-radius: 10px"
          class="full-width full-height"
          :src="item.image"
        />
        <!-- title for offer show on image -->
        <div class="q-mt-md text-center" style="position: absolute"></div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  props: ["offers"],
  setup() {
    return {
      navPos: ref("bottom"),
      slide: ref("1"),
    };
  },
};
</script>
