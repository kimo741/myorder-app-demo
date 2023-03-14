<template>
  <q-page class="q-mx-sm" dir="rtl">
    <DynamicHeader :notifyIcon="false" :backIcon="true" title="الأهداءات" />
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
        <q-tab label="المهدي لهم" name="dedications" />
        <q-tab label="الأهدائات" name="myDedications" />
      </q-tabs>

      <q-tab-panels
        style="background: #eeeeee !important"
        class="no-effict q-my-lg"
        v-model="tab"
        animated
      >
        <!-- //////////// -->
        <!-- dedications tap -->
        <!-- //////////// -->
        <my-dedications />
        <q-tab-panel
          class="q-pa-0 no-effict"
          style="background: #eeeeee !important"
          name="dedications"
        >
          <Dedications />
          <!-- posts -->
        </q-tab-panel>
        <!-- //////////// -->
        <!-- my Dedications tap -->
        <!-- //////////// -->
        <q-tab-panel
          class="q-pa-0 no-effict"
          style="background: #eeeeee !important"
          name="myDedications"
        >
          <myDedications />
          <!-- posts -->
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
import DynamicHeader from "src/components/UI/DynamicHeader.vue";
import { ref } from "vue";
import Dedications from "./taps/dedications.vue";
import myDedications from "./taps/my-dedications.vue";
export default {
  components: { myDedications, DynamicHeader, Dedications },
  setup() {
    return {
      tab: ref("dedications"),
    };
  },
};
</script>

<style>
</style>
