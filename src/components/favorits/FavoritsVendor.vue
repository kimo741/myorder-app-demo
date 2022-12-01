<template>
  <div class="favorits-vendor vertical-list" dir="rtl">
    <q-card
      v-for="(item, i) in 5"
      :key="i"
      @click="$emit('passVendorForOpen', product)"
      class="my-card"
    >
      <q-card-section class="q-pa-0 q-ma-0">
        <img class="favorits-vendor_img" src="test/3.png" />
      </q-card-section>
      <q-card-section class="q-pa-0 q-mx-0 q-my-sm">
        <div class="row items-center">
          <div class="col-6">
            <div class="text-right text-no-wrap text-bold">اسم المطعم</div>
          </div>
          <div class="col-6 text-right">
            <div class="row justify-end">
              <!-- ////////////////// -->
              <!-- button toggle like -->
              <!-- ////////////////// -->
              <q-btn
                @click="toggleLike"
                size="md"
                flat
                class="col-1"
                :color="like_it ? 'red-13' : ''"
                :icon="like_it ? 'eva-heart' : 'eva-heart-outline'"
              />
              <!-- ///////////////////// -->
              <!-- button toggle Favorit -->
              <!-- ///////////////////// -->
              <q-btn
                @click="toggleFavorits"
                size="md"
                flat
                class="col-1"
                :icon="add_to_fav ? 'star' : 'img:icon/love-2.png'"
              />
              <!-- //////////////// -->
              <!-- button for share -->
              <!-- //////////////// -->
              <q-btn
                @click="sharPost"
                size="md"
                flat
                class="col-1"
                icon="share"
              />
            </div>
          </div>
        </div>
        <div class="text-right">
          <q-badge
            label="مطعم"
            text-color="red-4"
            color="red-1"
            class="q-px-md q-py-xs text-bold"
          />
        </div>
      </q-card-section>
      <q-card-section class="q-pa-0 q-mx-0 q-my-sm">
        <div class="flex">
          <q-rating
            v-model="rate"
            max="5"
            size="1em"
            color="yellow"
            icon="star_border"
            icon-selected="star"
            icon-half="star_half"
            disable
          />
          <div class="text-sm text-bold q-mx-sm">{{ rate }}</div>
          <div class="text-sm text-hint">({{ rate }})تقييم</div>
          <div class="text-sm text-bold q-mx-md">400 ر.س</div>
        </div>
      </q-card-section>
      <q-card-section class="q-pa-0 q-mx-0 q-my-sm">
        <div class="row justify-start">
          <div class="col-6 flex">
            <q-icon name="img:icon/car.png" size="xs" />
            <span class="q-mx-sm">11 دقيقه</span>
            <span class="q-mx-sm">(2.5 km)</span>
          </div>
          <div class="col-6 flex">
            <q-icon name="img:icon/time-hint.png" size="xs" />
            <span class="q-mx-sm">30 دقيقة</span>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      add_to_fav: ref(false),
      like_it: ref(true),
      rate: ref("4.2"),
    };
  },
  methods: {
    toggleLike() {
      this.like_it = !this.like_it;
    },
  },
};
</script>

<style lang="scss" scoped>
.favorits-vendor {
  &_img {
    width: 100%;
    height: 130px;
    border-radius: 10px;
  }
  .my-card {
    padding: 10px;
  }
}
</style>
