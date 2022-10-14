<template>
  <q-layout view="hHh lpR fFf">
    <!-- <q-header elevated class="bg-primary text-white">
      <q-toolbar>
      </q-toolbar>
    </q-header> -->
    <q-drawer
      class="index-100"
      v-model="rightDrawerOpen"
      side="right"
      behavior="mobile"
    >
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-white text-white fixed-bottom">
      <q-toolbar class="relative">
        <!-- //////////////////////// -->
        <!-- footer section component -->
        <!-- //////////////////////// -->
        <footerSection />
        <!-- //////////////////////// -->
        <!-- //////////////////////// -->
        <!-- //////////////////////// -->
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import FooterSection from "../components/Bar/Footer/FooterSection.vue";

export default {
  setup() {
    const rightDrawerOpen = ref(false);
    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
  components: { FooterSection },
};
</script>
