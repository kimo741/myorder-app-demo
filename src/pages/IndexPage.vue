<template>
  <q-page class="">
    <MainNav />
    <TopBarStotys />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import MainNav from "../components/Bar/top/MainNav.vue";
import TopBarStotys from "src/components/Stotys/TopBarStotys.vue";
// import BackAndSkip from "src/components/Bar/top/backAndSkip.vue";

export default defineComponent({
  name: "IndexPage",
  components: { MainNav, TopBarStotys },
});
</script>
