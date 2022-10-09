<template>
  <q-page class="">
    <div>
      <MainNav />
    </div>
    <div class="q-my-md">
      <TopBarStotys />
    </div>
    <div class="q-px-md q-mt-md">
      <div class="q-gutter-y-md">
        <q-card>
          <q-tabs
            v-model="tab"
            dense
            class="primary bg-taps"
            align="justify"
            indicator-color="transparent"
            narrow-indicator
            active-class="active-class"
          >
            <q-tab icon="explore" name="location" />
            <q-tab icon="insights" name="discovery" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="location"> </q-tab-panel>

            <q-tab-panel name="discovery"> </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import MainNav from "../components/Bar/top/MainNav.vue";
import TopBarStotys from "src/components/Stotys/TopBarStotys.vue";
// import BackAndSkip from "src/components/Bar/top/backAndSkip.vue";

export default {
  name: "IndexPage",
  components: { MainNav, TopBarStotys },
  setup() {
    return {
      tab: ref("location"),
    };
  },
};
</script>
<style lang="scss" scoped>
.bg-taps {
  background-color: $bg_slide !important;
}
.active-class {
  background-color: white;
  border-radius: 10px;
}
</style>
