<template>
  <q-page class="q-mx-sm">
    <DynamicHeader
      @emitSetting="$router.push({ name: 'setting' })"
      :setingIcon="true"
      title="ملفي"
    />
    <ProfileInfo />
    <HeighLightStory />
    <!-- ////////////// -->
    <!-- taps container -->
    <!-- ////////////// -->
    <div class="q-px-md q-mt-md">
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
          <q-tab icon="img:icon/bookmark.png" name="bookmark" />
          <q-tab icon="img:icon/favorits.png" name="favorits" />
          <q-tab icon="img:icon/timeline.png" name="myMnue" />
        </q-tabs>

        <q-tab-panels
          style="background: #eeeeee !important"
          class="no-effict q-my-lg"
          v-model="tab"
          animated
        >
          <!-- //////////// -->
          <!-- bookmark tap -->
          <!-- //////////// -->
          <q-tab-panel
            class="q-pa-0 no-effict"
            style="background: #eeeeee !important"
            name="bookmark"
          >
            <PostsContainer />

            <!-- posts -->
          </q-tab-panel>
          <!-- //////////// -->
          <!-- favorits tap -->
          <!-- //////////// -->
          <q-tab-panel
            class="q-pa-0 no-effict"
            style="background: #eeeeee !important"
            name="favorits"
          >
            <FilterBar />
            <PostsContainer />

            <!-- posts -->
          </q-tab-panel>
          <!-- ///////////// -->
          <!-- myMnue tap -->
          <!-- ///////////// -->
          <q-tab-panel
            class="full-height q-pa-0 no-effict"
            style="background: #eeeeee !important"
            name="myMnue"
          >
            <!-- ////////////// -->
            <!-- shopping menue -->
            <!-- ////////////// -->
            <ShopingList
              @mnueMoreOptions="menu_dialog = true"
              @addToCartPassing="addToCart"
            />
            <!-- tap -->
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
      <q-dialog full-width v-model="menu_dialog" position="bottom">
        <dialog-filter-menu />
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import HeighLightStory from "src/components/profile/HeighLightStory.vue";
import ProfileInfo from "src/components/profile/ProfileInfo.vue";
import DynamicHeader from "src/components/UI/DynamicHeader.vue";
import PostsContainer from "src/components/profile/PostsContainer.vue";
import AreaChart from "src/components/Charts/AreaChart.vue";
import { ref } from "vue";
import FilterBar from "src/components/shops/vendor-page/FilterBar.vue";
import ShopingList from "src/components/profile/shopingList.vue";
import DialogFilterMenu from 'src/components/dialogs/dialogFilterMenu.vue';
export default {
  setup() {
    const addToCart = (product) => {
      // get product to add it to cart
    };
    return {
      tab: ref("myMnue"),
      menu_dialog: ref(false),
      addToCart,
    };
  },
  components: {

    DynamicHeader,
    ProfileInfo,
    HeighLightStory,
    PostsContainer,
    AreaChart,
    FilterBar,
    ShopingList,
    DialogFilterMenu,
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
