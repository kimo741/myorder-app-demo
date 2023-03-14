<template>
  <q-page class="q-mx-sm" dir="rtl">
    <DynamicHeader :backIcon="true" title="الرصيد" />
    <q-card class="q-pa-lg q-my-md">
      <q-card-section class="text-center">
        <div class="text-grey text-body1">المحفظة الألكترونية</div>
        <div class="text-body2 q-py-sm">ر.س{{ walet }}</div>
      </q-card-section>
    </q-card>
    <q-card class="q-pa-lg q-my-md">
      <q-card-section class="text-center">
        <div class="text-grey text-body1">الرصيد</div>
        <div class="text-body2 q-py-sm">ر.س{{ cridet }}</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import DynamicHeader from "src/components/UI/DynamicHeader.vue";
import { ref } from "vue";

export default {
  components: { DynamicHeader },
  setup() {
    return {
      walet: ref("3546"),
      cridet: ref("20"),
    };
  },
};
</script>

<style>
</style>
