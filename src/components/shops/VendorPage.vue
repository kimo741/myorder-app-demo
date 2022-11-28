<template>
  <q-page dir="rtl" class="q-mx-sm">
    <main-nav
      :backIcon="true"
      :messageIcon="false"
      :locationIcon="false"
      :searchIcon="false"
    />
    <SpacificCardShop :vendor="testProduct" />
  </q-page>
</template>

<script>
// import { ref } from "vue";
import MainNav from "src/components/Bar/top/MainNav.vue";
import SpacificCardShop from "src/components/shops/vendor-page/SpacificCardShop.vue";
export default {
  components: { MainNav, SpacificCardShop },
  data() {
    return {
      testProduct: {
        id: "1",
        img: "test/shops.png",
        name: "اسم المطعم",
        location: "2.5",
        type: "مطعم",
        open: true,
        delevry_time: "30 دقيقة",
        price: "50",
        work_times: "06:00 AM : 12:00 PM",
      },
    };
  },
};
</script>

<style>
</style>
