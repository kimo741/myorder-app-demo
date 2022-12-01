<template>
  <q-page>
    <!-- //////////////// -->
    <!-- header component -->
    <!-- //////////////// -->
    <div>
      <MainNav />
    </div>
    <div class="q-px-md q-mt-xl">
      <div class="q-gutter-y-md">
        <q-card class="q-pa-0 no-effict bg-transparent">
          <!-- //// -->
          <!-- taps -->
          <!-- //// -->
          <q-tabs
            v-model="tab"
            dense
            class="no-effict primary bg-taps"
            align="justify"
            indicator-color="transparent"
            narrow-indicator
            active-class="active-class"
          >
            <q-tab icon="img:icon/menu.png" name="list" />
            <q-tab icon="img:icon/mark-location.png" name="location" />
          </q-tabs>

          <q-tab-panels
            style="background: #eeeeee !important"
            class="no-effict q-my-lg"
            v-model="tab"
            animated
          >
            <!-- //////////// -->
            <!-- location tap -->
            <!-- //////////// -->
            <q-tab-panel
              class="q-pa-0 no-effict"
              style="background: #eeeeee !important"
              name="location"
            >
              <!-- posts -->
              <div class="q-my-md bg-transparent"></div>
            </q-tab-panel>
            <!-- ///////////// -->
            <!-- discovery tap -->
            <!-- ///////////// -->
            <q-tab-panel
              class="full-height q-pa-0 no-effict"
              style="background: #eeeeee !important"
              name="list"
            >
              <!-- /////////////// -->
              <!-- Banner Carousel -->
              <!-- /////////////// -->
              <OffersCarousel :offers="test_carousel" />
              <!-- ///////////////////////// -->
              <!-- top Title for top product -->
              <!-- ///////////////////////// -->
              <TitleBar @showAll="showAll" label="الأقرب اليك" />
              <!-- /////////////// -->
              <!-- virtical slider -->
              <!-- /////////////// -->
              <DinamicSliderVindors
                @openVendorPage="openVendorPage"
                :vindors="products"
              />
              <!-- ///////////////////////// -->
              <!-- top Title for all vindors -->
              <!-- ///////////////////////// -->
              <TitleBar @showAll="showAll" label="كل المطاعم" />
              <!-- ///////////////// -->
              <!--  horzental slider -->
              <!-- ///////////////// -->
              <DinamicSliderVindors
                @openVendorPage="openVendorPage"
                :vindors="products"
                :horzental="true"
              />
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import MainNav from "src/components/Bar/top/MainNav.vue";
import OffersCarousel from "src/components/carousels/OffersCarousel.vue";
import TitleBar from "src/components/UI/TitleBar.vue";
import DinamicSliderVindors from "src/components/shops/DinamicSliderVindors.vue";
export default {
  components: {
    MainNav,
    OffersCarousel,
    TitleBar,
    DinamicSliderVindors,
  },
  setup() {
    return {
      tab: ref("list"),
      test_carousel: ref([
        { id: "1", image: "img/offer-50.png", lable: "عروض تصل لأكثر من 50%" },
        { id: "2", image: "test/3.png", lable: "عروض تصل لأكثر من 50%" },
        { id: "3", image: "test/4.png", lable: "عروض تصل لأكثر من 50%" },
      ]),
      products: ref([
        {
          id: "1",
          img: "test/shops.png",
          name: "اسم المطعم",
          location: "2.5",
          type: "مطعم",
          open: true,
          offer: "15%",
          delevry_time: "30 دقيقة",
          price: "50",
          work_times: "06:00 AM : 12:00 PM",
        },
        {
          id: "1",
          img: "test/shops.png",
          name: "اسم المطعم",
          location: "2.5",
          type: "مطعم",
          open: true,
          offer: false,
          delevry_time: "30 دقيقة",
          price: "50",
          work_times: "06:00 AM : 12:00 PM",
        },
        {
          id: "1",
          img: "test/shops.png",
          name: "اسم المطعم",
          location: "2.5",
          type: "مطعم",
          offer: "10%",
          open: true,
          delevry_time: "30 دقيقة",
          price: "50",
          work_times: "06:00 AM : 12:00 PM",
        },
        {
          id: "1",
          img: "test/shops.png",
          name: "اسم المطعم",
          location: "2.5",
          type: "مطعم",
          open: true,
          offer: "20%",
          delevry_time: "30 دقيقة",
          price: "50",
          work_times: "06:00 AM : 12:00 PM",
        },
        {
          id: "1",
          img: "test/shops.png",
          name: "اسم المطعم",
          location: "2.5",
          type: "مطعم",
          open: true,
          delevry_time: "30 دقيقة",
          offer: false,
          price: "50",
          work_times: "06:00 AM : 12:00 PM",
        },
        {
          id: "1",
          img: "test/shops.png",
          name: "اسم المطعم",
          location: "2.5",
          type: "مطعم",
          open: true,
          offer: false,
          delevry_time: "30 دقيقة",
          price: "50",
          work_times: "06:00 AM : 12:00 PM",
        },
        {
          id: "1",
          img: "test/shops.png",
          name: "اسم المطعم",
          location: "2.5",
          type: "مطعم",
          open: true,
          offer: false,
          delevry_time: "30 دقيقة",
          price: "50",
          work_times: "06:00 AM : 12:00 PM",
        },
      ]),
    };
  },
  methods: {
    openVendorPage(product) {
      this.$router.push({
        name: "vendorPage",
        params: {
          id: product.id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-taps {
  background: rgba(118, 118, 128, 0.12);
  border-radius: 8px !important;
}
.active-class {
  background-color: white;
  border-radius: 10px;
  border: 1px solid $bg_slide;
}
</style>

