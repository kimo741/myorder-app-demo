<template>
  <q-page dir="rtl" class="q-mx-sm"
    ><MainNav
      :cartIcon="true"
      :locationIcon="false"
      :messageIcon="false"
      :notfiIcon="false"
      :filterIcon="true"
      @emitFiler="globalFiltter"
    />
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
            <q-tab label="متاجر" name="vendor" />
            <q-tab label="منتجات" name="product" />
            <q-tab label="بوستات" name="posts" />
          </q-tabs>

          <q-tab-panels
            style="background: #eeeeee !important"
            class="no-effict q-my-0"
            v-model="tab"
            animated
          >
            <!-- ////////// -->
            <!-- vendor tap -->
            <!-- ////////// -->
            <q-tab-panel
              class="q-pa-0 no-effict"
              style="background: #eeeeee !important"
              name="vendor"
            >
              <div class="q-my-md bg-transparent">
                <FavoritsVendor />
              </div>
            </q-tab-panel>
            <!-- /////////// -->
            <!-- product tap -->
            <!-- /////////// -->
            <q-tab-panel
              class="full-height q-pa-0 no-effict"
              style="background: #eeeeee !important"
              name="product"
            >
              <!-- product -->
            </q-tab-panel>
            <!-- ///////// -->
            <!-- posts tap -->
            <!-- ///////// -->
            <q-tab-panel
              class="full-height q-pa-0 no-effict"
              style="background: #eeeeee !important"
              name="posts"
            >
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import MainNav from "src/components/Bar/top/MainNav.vue";
import FavoritsVendor from "src/components/favorits/FavoritsVendor.vue";
import { ref } from "vue";

export default {
  components: { MainNav, FavoritsVendor },
  setup() {
    return {
      tab: ref("vendor"),
    };
  },
  methods: {
    globalFiltter() {},
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

