<template>
  <!-- ///////////////// -->
  <!-- conteainer slider -->
  <!-- ///////////////// -->
  <div
    class="horizental-slide"
    :class="horzental ? 'vertical_slide' : ''"
    dir="rtl"
  >
    <!-- /////////////////// -->
    <!-- loop card for items -->
    <!-- /////////////////// -->
    <q-card
      v-for="(product, i) in vindors"
      @click.once="$emit('openVendorPage', product)"
      :key="i"
      class="my-card horizental-slide__items"
      :class="horzental ? 'vertical_slide__item' : ''"
      flat
    >
      <q-card-section horizontal class="row q-pa-sm">
        <!-- ///////////// -->
        <!-- product image -->
        <!-- ///////////// -->
        <div
          class="horizental-slide__img col-2"
          :style="horzental ? 'width:19% ' : ''"
        >
          <!-- ////////////////// -->
          <!-- src image of items -->
          <!-- ////////////////// -->
          <img class="" :src="product.img" style="border-radius: 8px" />
        </div>
        <!-- //////////////////////////////////-->
        <!-- separator between image & content -->
        <!-- //////////////////////////////////-->
        <q-separator size="medium" vertical color="grey-5" spaced="5px" />
        <!-- /////////////////////// -->
        <!-- product content section -->
        <!-- /////////////////////// -->
        <q-card-section class="horizental-slide__content col">
          <!-- ///// -->
          <!-- row 1 -->
          <!-- ///// -->
          <div class="row justify-between">
            <!-- ///////////// -->
            <!-- product name  -->
            <!-- ///////////// -->
            <div class="horizental-slide__content--bold col">
              {{ product.name }}
            </div>
            <div class="horizental-slide__content--hint col text-left">
              <!-- ////////////////////////////////////////// -->
              <!--The distance between you & product as /kms  -->
              <!-- ////////////////////////////////////////// -->
              <q-icon name="img:icon/location.png" />
              {{ product.location }} kms
            </div>
            <!-- ///// -->
            <!-- row 2 -->
            <!-- ///// -->
          </div>
          <div class="row q-my-sm">
            <!-- ////////////////////////////////////////// -->
            <!--vendor type Ex:(restorant ,cooffe )  -->
            <!-- ////////////////////////////////////////// -->
            <q-badge
              transparent
              class="q-mx-sm"
              :label="product.type"
              style="background-color: rgba(255, 107, 97, 0.1); color: #ff6b61"
            />
            <!-- /////////// -->
            <!--  close/open -->
            <!-- /////////// -->
            <q-badge
              style="color: rgba(5, 181, 22, 0.5); background: transparent"
              :label="product.type ? 'مفتوح' : 'مغلق'"
            />
            <!-- ////// -->
            <!--  offer -->
            <!-- ////// -->
            <q-badge
              v-if="product.offer"
              transparent
              class="q-mx-sm"
              align="left"
              :label="'خصم' + product.offer"
              style="background-color: rgba(255, 107, 97, 0.1); color: #ff6b61"
            >
              <q-icon name="img:icon/label-offer.png" />
            </q-badge>
          </div>
          <!-- ///// -->
          <!-- row 3 -->
          <!-- ///// -->
          <div class="row justify-between">
            <div class="col" style="display: inline-flex !important">
              <q-icon class="q-my-auto" name="img:icon/time-hint.png" />
              <!-- //////////// -->
              <!-- delevry_time -->
              <!-- //////////// -->
              <div class="horizental-slide__content--hint q-mx-xs">
                {{ product.delevry_time }}
              </div>
              <q-icon class="q-my-auto" name="img:icon/car-ship.png" />
              <!-- ///// -->
              <!-- price -->
              <!-- ///// -->
              <div class="horizental-slide__content--hint q-mx-xs">
                {{ product.price }} ر.س
              </div>
            </div>
            <!-- ///// -->
            <!-- price -->
            <!-- ///// -->
            <div class="col text-left horizental-slide__content--hint">
              06:00 AM : 12:00 PM
            </div>
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  props: {
    vindors: {
      type: Array,
    },
    //  if i want slide horzintal
    horzental: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.horizental-slide {
  // padding: 0 1rem 1.3rem;
  display: flex;
  overflow-x: scroll;
  scroll-padding: 100%;
  scroll-snap-type: x mandatory;
  &__items {
    flex: 0 0 300px;
    position: relative;
    display: inline-block;
    scroll-snap-align: start;
    height: 90px;
    width: 300px;
    margin-right: 10px;
    padding: 0;
    border-radius: 8px;
    img {
      height: 100%;
      width: 100%;
    }
    &--section {
      padding: 5px;
      height: 100%;
    }
  }
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  &__add-to-card {
    position: absolute;
    left: 70% !important;
    top: -20px !important;
  }
  &__content {
    height: 60px;
    padding: 5px 8px;
    font-size: 12px;
    &--hint {
      font-size: 10px;
      // overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: $font-hint;
    }
    &--bold {
      font-weight: bold;
    }
    &--ratting {
    }
  }
}
.vertical_slide {
  display: block;
  flex-direction: column;
  scroll-snap-type: y mandatory;
  &__item {
    flex: 0 0 100%;
    width: 100%;
    height: max-content;
    margin: 5px auto !important;
  }
}
</style>
