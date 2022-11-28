<template>
  <q-layout view="hHh lpR fFf" @scroll="handleScroll">
    <!-- <q-header elevated class="bg-primary text-white">
      <q-toolbar>
      </q-toolbar>
    </q-header> -->
    <!-- <q-drawer
      class="index-100"
      v-model="rightDrawerOpen"
      side="right"
      behavior="mobile"
    >
    </q-drawer> -->

    <q-page-container v-if="this.$q.platform.is.mobile">
      <router-view />
    </q-page-container>
    <q-page-container v-else>
      <NoDesktop />
    </q-page-container>
    <q-dialog
      dir="rtl"
      v-model="create_post"
      :maximized="true"
      style="padding: 0 !important"
      transition-show="slide-up"
      transition-hide="slide-down"
      persistent
    >
      <CreatePost @closePost="closeDialogPost" />
    </q-dialog>
    <q-footer class="bg-white text-white fixed-bottom">
      <q-toolbar class="relative">
        <!-- //////////////////////// -->
        <!-- footer section component -->
        <!-- //////////////////////// -->
        <footerSection @createPost="createPost" :hideButt="hideButton" />
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
import NoDesktop from "src/pages/NoDesktop.vue";
import CreatePost from "src/components/posts/CreatePost.vue";

export default {
  setup() {
    const rightDrawerOpen = ref(false);
    const hideButton = ref(false);
    const create_post = ref(false);
    // animation create Post
    const handleScroll = function (e) {
      if (e.direction == "up") {
        hideButton.value = false;
      } else {
        hideButton.value = true;
      }
    };
    const createPost = function () {
      create_post.value = true;
    };
    const closeDialogPost = function () {
      create_post.value = false;
    };
    return {
      hideButton,
      create_post,
      closeDialogPost,
      createPost,
      handleScroll,
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
  components: { FooterSection, NoDesktop, CreatePost },
};
</script>
