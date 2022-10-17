<template>
  <div class="">
    <q-carousel
      v-model="slide"
      swipeable
      animated
      :navigation-position="navPos"
      navigation
      :arrows="false"
      height="120px"
      control-color="primary"
      class="offer-carousel q-ma-0 full-width text-white rounded-borders"
      style="padding: 0; margin-bottom: 50px !important; overflow: visible"
    >
      <q-carousel-slide
        v-for="(item, i) in sliders"
        :key="i"
        :name="item.id"
        class="q-pa-0 full-width full-height column no-wrap flex-center"
      >
        <img class="full-width full-height" :src="item.image" />
        <div class="q-mt-md text-center" style="position: absolute"></div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      navPos: ref("bottom"),
      slide: ref("1"),
      sliders: ref([
        { id: "1", image: "img/offer-50.png", lable: "عروض تصل لأكثر من 50%" },
        { id: "2", image: "test/3.png", lable: "عروض تصل لأكثر من 50%" },
        { id: "3", image: "test/4.png", lable: "عروض تصل لأكثر من 50%" },
      ]),
    };
  },
};
</script>
