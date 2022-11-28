<template>
  <div class="slider-v" dir="rtl">
    <!-- ////////////////////// -->
    <!-- product virtical slide -->
    <!-- ////////////////////// -->
    <q-card v-for="(product, i) in products" :key="i" class="my-card" flat>
      <q-card-section horizontal class="">
        <!-- ///////////// -->
        <!-- product image -->
        <!-- ///////////// -->
        <img
          class="col-5 slider-v__img"
          :src="product.img"
          style="border-radius: 8px"
        />
        <!-- /////////////////////// -->
        <!-- product content section -->
        <!-- /////////////////////// -->
        <q-card-section class="slider-v__content col-7">
          <div class="slider-v__content--hint">
            وريم ايبسوم هو نموذج افتراضي وريم ايبسوم هو نموذج افتراضي وريم
            ايبسوم هو نموذج افتراضي
          </div>
          <div class="slider-v__content--views">مشاهده {{ product.view }},</div>
          <div class="slider-v__content--ratting">
            <!-- ////////////// -->
            <!-- product rating -->
            <!-- ////////////// -->
            <q-rating
              size="12px"
              disable
              :model-value="product.rating"
              :max="5"
              color="primary"
            />
          </div>
        </q-card-section>
      </q-card-section>
      <!-- ////////////////////////// -->
      <!-- product button add to cart -->
      <!-- ////////////////////////// -->
      <q-icon
        size="md"
        name="img:icon/add-to-cart.png"
        class="slider-v__add-to-card"
        @click="addToCart(product.id)"
      />
    </q-card>
  </div>
</template>

<script>
export default {
  props: ["products"],
};
</script>

<style lang="scss" scoped>
.slider-v {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  scroll-padding: 100%;
  scroll-snap-type: y mandatory;
  height: max-content;
  padding: 4px;

  .my-card {
    padding: 8px;
    border-radius: 8px;
    flex: 0 0 100%;
    display: inline-block;
    margin-bottom: 10px;
  }
  &__content {
    height: 60px;
    padding: 5px 8px;
    &--hint {
      font-size: 11px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: $font-hint;
    }
    &--views {
      font-size: 13px;
    }
    &--ratting {
    }
  }
  &__img {
    height: 60px;
  }
  &__add-to-card {
    direction: ltr;
    position: absolute;
    bottom: 4px;
    left: 5%;
  }
}
</style>
