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

  <q-dialog full-width v-model="dialog_share_vendor" position="bottom">
    <SharePost
      @closeShareDialog="dialog_share_vendor = false"
      :postdata="postData"
      supDomain="product"
    />
  </q-dialog>
  <q-dialog v-model="dialog_single_product">
    <SpacificProduct
      :singleProduct="singleProduct"
      @closeSingleProduct="dialog_single_product = false"
      @passProductForShareId="shareProduct"
    />
  </q-dialog>
</template>

<script>
import { ref } from "vue";
import MainNav from "src/components/Bar/top/MainNav.vue";
import SpacificCardShop from "src/components/shops/vendor-page/SpacificCardShop.vue";
import FilterBar from "./vendor-page/FilterBar.vue";
import VerticalScrollProducts from "./vendor-page/VerticalScrollProducts.vue";
import SpacificProduct from "./vendor-page/SpacificProduct.vue";
import SharePost from "../dialogs/SharePost.vue";
export default {
  components: {
    MainNav,
    SpacificCardShop,
    FilterBar,
    VerticalScrollProducts,
    SpacificProduct,
    SharePost,
  },
  setup() {
    return {
      dialog_share_vendor: ref(false),
      postData: ref(""),
      singleProduct: ref({}),
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
          name: "اسم الطبق",
          img: "test/Rectangle 4322.png",
          disc: "وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم على العميل ليتصور طريقه وضع النصوص ",
          price: "السعر",
          rate: "4.6",
        },
        {
          id: "2",
          img: "test/Rectangle 4332.png",
          name: "اسم الطبق",
          price: "السعر",
          disc: "وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم على العميل ليتصور طريقه وضع النصوص ",
          rate: "3.6",
        },
        {
          id: "3",
          img: "test/Rectangle 4333.png",
          name: "اسم الطبق",
          price: "السعر",
          disc: "وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم على العميل ليتصور طريقه وضع النصوص ",
          rate: "3.8",
        },
        {
          id: "4",
          img: "test/Rectangle 4335.png",
          name: "اسم الطبق",
          price: "السعر",
          disc: "وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم على العميل ليتصور طريقه وضع النصوص ",
          rate: "1.6",
        },
        {
          id: "5",
          img: "test/apple-pay.png",
          name: "اسم الطبق",
          price: "السعر",
          disc: "وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم على العميل ليتصور طريقه وضع النصوص ",
          rate: "4.6",
        },
      ]),
    };
  },
  methods: {
    shareVendor(vendor) {},
    getDetailsForProduct(product) {
      this.singleProduct = product;
      this.dialog_single_product = true;
    },
    shareProduct(product) {
      this.dialog_share_vendor = true;
      this.postData = product;
    },
  },
};
</script>

<style>
</style>
