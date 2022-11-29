<template>
  <q-page dir="rtl" class="q-mx-sm">
    <main-nav
      title="القائمة"
      :backIcon="true"
      :messageIcon="false"
      :locationIcon="false"
      :searchIcon="false"
      :cartIcon="true"
    />
    <SpacificCardShop
      @emitEventShareVendor="shareVendor"
      :vendor="testProduct"
    />
    <!-- ///////////////////// -->
    <!-- search in all product -->
    <!-- ///////////////////// -->
    <q-input
      dir="rtl"
      bg-color="white"
      filled
      v-model="search"
      label="البحث عن فئة , صنف"
      dense
    >
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>
    <!-- ////////// -->
    <!-- filter bar -->
    <!-- ////////// -->
    <FilterBar class="q-my-sm" />
    <!--//////////////////////// -->
    <!-- vertical slider product -->
    <!--//////////////////////// -->
    <vertical-scroll-products
      @getDetailsForProduct="getDetailsForProduct"
      :products="allProducts"
    />
  </q-page>
  <q-dialog v-model="dialog_share_vendor">
    <q-card></q-card>
  </q-dialog>
  <q-dialog v-model="dialog_single_product">
    <SpacificProduct @closeSingleProduct="dialog_single_product = false" />
  </q-dialog>
</template>

<script>
import { ref } from "vue";
import MainNav from "src/components/Bar/top/MainNav.vue";
import SpacificCardShop from "src/components/shops/vendor-page/SpacificCardShop.vue";
import FilterBar from "./vendor-page/FilterBar.vue";
import VerticalScrollProducts from "./vendor-page/VerticalScrollProducts.vue";
import SpacificProduct from "./vendor-page/SpacificProduct.vue";
export default {
  components: {
    MainNav,
    SpacificCardShop,
    FilterBar,
    VerticalScrollProducts,
    SpacificProduct,
  },
  setup() {
    return {
      dialog_share_vendor: ref(false),
      dialog_single_product: ref(false),
      search: ref(""),
      testProduct: ref({
        id: "1",
        img: "test/shops.png",
        name: "اسم المطعم",
        location: "2.5",
        type: "مطعم",
        offer: "20%",
        open: true,
        delevry_time: "30 دقيقة",
        price: "50",
        work_times: "06:00 AM : 12:00 PM",
      }),
      allProducts: ref([
        {
          id: "1",
          img: "test/Rectangle 4322.png",
          name: "اسم الطبق",
          price: "السعر",
        },
        {
          id: "2",
          img: "test/Rectangle 4332.png",
          name: "اسم الطبق",
          price: "السعر",
        },
        {
          id: "3",
          img: "test/Rectangle 4333.png",
          name: "اسم الطبق",
          price: "السعر",
        },
        {
          id: "4",
          img: "test/Rectangle 4335.png",
          name: "اسم الطبق",
          price: "السعر",
        },
        {
          id: "5",
          img: "test/apple-pay.png",
          name: "اسم الطبق",
          price: "السعر",
        },
      ]),
    };
  },
  methods: {
    shareVendor(vendor) {},
    getDetailsForProduct(product) {
      this.dialog_single_product = true;
    },
  },
};
</script>

<style>
</style>
