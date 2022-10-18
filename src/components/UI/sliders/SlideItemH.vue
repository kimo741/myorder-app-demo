<template>
  <div class="horizental-slide" dir="rtl">
    <!-- ///////// -->
    <!-- loop card -->
    <!-- ///////// -->
    <q-card
      v-for="product in products"
      :key="product.id"
      class="my-card horizental-slide__items no-effict"
    >
      <!-- ///////////// -->
      <!-- product image -->
      <!-- ///////////// -->
      <img :src="product.img" />
      <q-card-section class="relative horizental-slide__items--section">
        <!-- /////////////////// -->
        <!-- product views count -->
        <!-- /////////////////// -->
        <div class="text-body2">مشاهدة{{ product.view }}</div>
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
        <!-- //////////////// -->
        <!-- icon add to cart -->
        <!-- //////////////// -->
        <q-icon
          size="md"
          name="img:icon/add-to-cart.png"
          class="horizental-slide__add-to-card"
          @click="addToCart(product.id)"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  props: ["products"],
  methods: {
    addToCart(id) {
      console.log(id);
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
    flex: 0 0 150px;
    position: relative;
    display: inline-block;
    scroll-snap-align: start;
    // height: 205px;
    width: 150px;
    margin-right: 5px;
    img {
      height: 160px;
      width: 100%;
    }
    &--section {
      padding: 5px;
      // height: 40px;
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
}
</style>
