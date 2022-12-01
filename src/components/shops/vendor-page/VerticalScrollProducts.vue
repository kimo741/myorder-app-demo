<template>
  <div class="vertical-list" dir="rtl">
    <q-card
      @click="$emit('getDetailsForProduct', product)"
      class="my-card q-px-xs"
      v-for="(product, i) in products"
      :key="i"
    >
      <q-card-section class="q-pa-sm">
        <div class="handel-cutting-img">
          <img :src="product.img" alt="" />
        </div>
      </q-card-section>
      <q-card-section class="q-pa-0 row justify-around items-center">
        <div class="col text-right q-mr-lg text-500 text-no-wrap">
          {{ product.name }}
        </div>
        <div class="col text-left q-ml-lg text-500 text-no-wrap">
          {{ product.price }} ر.س
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.my-card {
  padding: 0;
}
.handel-cutting-img {
  position: relative;
  max-width: 400px;
  width: 100%;
  height: 100px;
  img {
    position: absolute;
    left: 50%;
    border-radius: 10px;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    min-width: 50%;
    width: 100%;
    height: 100%;
    object-fit: 50% 50%;
  }
}
</style>
