<template>
  <q-page dir="rtl">
    <!-- //////////////// -->
    <!-- header component -->
    <!-- //////////////// -->
    <div>
      <MainNav />
    </div>
    <div>
      <q-input
        class="main-rounded q-mx-auto q-mt-lg"
        style="width: 90%"
        flat
        bottom-slots
        v-model="search"
        bg-color="grey-4"
        dense
        rounded
        filled
        label="بحث"
      >
        <template v-slot:prepend>
          <q-avatar>
            <q-icon size="xs" name="img:icon/Search.png" />
          </q-avatar>
        </template>
      </q-input>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import MainNav from "src/components/Bar/top/MainNav.vue";
export default {
  setup() {
    return {
      search: ref(""),
    };
  },
  components: { MainNav },
};
</script>

<style>
</style>
