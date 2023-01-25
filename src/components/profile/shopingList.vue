<template>
  <div dir="rtl">
    <!-- ////////// -->
    <!-- menue bar  -->
    <!-- ////////// -->
    <div class="row q-my-sm justify-between items-center">
      <div class="col-6 text-body1">قائمة التسوق</div>
      <div class="col-6">
        <div class="flex justify-end items-center">
          <div class="text-body2 text-primary">قوائمك</div>
          <q-icon
            size="md"
            color="grey"
            class="q-mx-sm"
            name="eva-more-horizontal-outline"
            @click="$emit('mnueMoreOptions')"
          />
        </div>
      </div>
    </div>
    <!-- /////////// -->
    <!-- cards items -->
    <!-- /////////// -->
    <div class="vertical-list" dir="rtl">
      <!-- ///////// -->
      <!-- loop card -->
      <!-- ///////// -->
      <q-card
        v-for="product in products"
        :key="product.id"
        class="my-card vertical-list__items no-effict"
      >
        <q-card-section horizontal class="items-center">
          <!-- ///////////// -->
          <!-- product image -->
          <!-- ///////////// -->

          <q-card-section class="slider-v__content col-7">
            <!-- /////////////////// -->
            <!-- product title -->
            <!-- /////////////////// -->
            <div class="text-body1 text-no-wrap">مشاهدة{{ product.title }}</div>
            <!-- /////////////////// -->
            <!-- product disc -->
            <!-- /////////////////// -->
            <div class="text-hint text-no-wrap">{{ product.disc }}</div>
            <!-- //////////////// -->
            <!-- product price -->
            <!-- //////////////// -->
            <div class="row justify-betweeen items-center">
              <div class="text-body1 col">
                <span class="text-800"> {{ product.price + "" }} </span>رس
              </div>
              <!-- /////////// -->
              <!-- add to cart -->
              <!-- /////////// -->
              <div class="col row justify-end">
                <q-icon
                  class=""
                  size="md"
                  name="img:icon/add-to-cart.png"
                  @click="$emit('addToCartPassing', product)"
                />
              </div>
            </div>
          </q-card-section>
          <!-- ///////////// -->
          <!-- product image -->
          <!-- ///////////// -->
          <q-img
            :src="product.image"
            class="col-5 slider-v__img"
            style="border-radius: 8px"
          />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    return {
      products: ref([
        {
          id: "1",
          image: "test/4.png",
          title: "اسم الطبق",
          disc: "وريم ايبسوم هو نموذج افتراضي ",
          price: "479 ",
        },
        {
          id: "2",
          image: "test/Rectangle 4331.png",
          title: "اسم الطبق",
          disc: "وريم ايبسوم هو نموذج افتراضي ",
          price: "132 ",
        },
        {
          id: "3",
          image: "test/Rectangle 4333.png",
          title: "اسم الطبق",
          disc: "وريم ايبسوم هو نموذج افتراضي ",
          price: "745 ",
        },
        {
          id: "4",
          image: "test/Rectangle 4335.png",
          title: "اسم الطبق",
          disc: "وريم ايبسوم هو نموذج افتراضي ",
          price: "399 ",
        },
        {
          id: "1",
          image: "test/apple-pay.png",
          title: "اسم الطبق",
          disc: "وريم ايبسوم هو نموذج افتراضي ",
          price: "300",
        },
      ]),
    };
  },
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
    padding: 8px 4px;
    height: 100px;
    border-radius: 8px;
    flex: 0 0 100%;
    display: inline-block;
    margin-bottom: 10px;
  }
  &__content {
    height: 100px;
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
    height: 100px;
    margin: auto;
  }
  &__add-to-card {
    direction: ltr;
    position: absolute;
    bottom: 4px;
    left: 5%;
  }
}
</style>
