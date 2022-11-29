<template>
  <div class="row justify-center items-center q-my-md">
    <q-card class="my-card horizental-slide__items" flat>
      <!-- :class="horzental ? 'vertical_slide__item' : ''" -->
      <q-card-section horizontal class="row q-pa-sm">
        <!-- ///////////// -->
        <!-- product image -->
        <!-- ///////////// -->
        <!-- :style="horzental ? 'width:19% ' : ''" -->
        <div class="horizental-slide__img col-2">
          <!-- ////////////////// -->
          <!-- src image of items -->
          <!-- ////////////////// -->
          <img class="" :src="vendor.img" style="border-radius: 8px" />
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
              {{ vendor.name }}
            </div>
            <q-icon
              size="sm"
              name="eva-more-horizontal-outline"
              class="horizental-slide__show-more"
              @click="$emit('emitEventShareVendor', vendor)"
            />

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
              :label="vendor.type"
              style="background-color: rgba(255, 107, 97, 0.1); color: #ff6b61"
            />
            <!-- /////////// -->
            <!--  close/open -->
            <!-- /////////// -->
            <q-badge
              style="color: rgba(5, 181, 22, 0.5); background: transparent"
              :label="vendor.type ? 'مفتوح' : 'مغلق'"
            />
            <q-badge
              v-if="vendor.offer"
              transparent
              class="q-mx-sm"
              align="left"
              :label="'خصم' + vendor.offer"
              style="background-color: rgba(255, 107, 97, 0.1); color: #ff6b61"
            >
              <q-icon name="img:icon/label-offer.png" />
            </q-badge>
            <div class="horizental-slide__content--hint col text-left">
              <!-- ////////////////////////////////////////// -->
              <!--The distance between you & product as /kms  -->
              <!-- ////////////////////////////////////////// -->
              <q-icon name="img:icon/location.png" />
              {{ vendor.location }} kms
            </div>
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
                {{ vendor.delevry_time }}
              </div>
              <q-icon class="q-my-auto" name="img:icon/car-ship.png" />
              <!-- ///// -->
              <!-- price -->
              <!-- ///// -->
              <div class="horizental-slide__content--hint q-mx-xs">
                {{ vendor.price }} ر.س
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
    vendor: {
      type: Object,
      required: true,
    },
  },
  // props: ["product"],
};
</script>

<style lang="scss" scoped>
.horizental-slide {
  display: flex;
  &__items {
    flex: 0 0 100%;
    position: relative;
    height: 100px;
    // padding: 10px;
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
  &__show-more {
    position: absolute;
    left: 5px;
    top: 0px;
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
