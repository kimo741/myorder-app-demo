<template>
  <q-page dir="rtl" style="overflow: hidden">
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
        @focusin="focusInput"
      >
        <!-- @focusout="outOfFocus" -->
        <template v-slot:prepend>
          <q-avatar>
            <q-icon size="xs" name="img:icon/Search.png" />
          </q-avatar>
        </template>
      </q-input>
    </div>
    <div :class="menue ? 'active-filter' : 'unactive-filter'">
      <q-list separator color="primary" style="">
        <q-item
          :class="serchOf === 'user' ? 'active-seleted' : ''"
          @click="selectdFilter('user')"
          clickable
          v-ripple
        >
          <q-item-section>البحث عن اسم شخص</q-item-section>
        </q-item>
        <q-item
          :class="serchOf === 'resorant' ? 'active-seleted' : ''"
          @click="selectdFilter('resorant')"
          clickable
          v-ripple
        >
          <q-item-section>البحث عن مطعم</q-item-section>
        </q-item>
        <q-item
          :class="serchOf === 'coffee' ? 'active-seleted' : ''"
          @click="selectdFilter('coffee')"
          clickable
          v-ripple
        >
          <q-item-section>البحث عن مقهي</q-item-section>
        </q-item>
      </q-list>
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
      menue: ref(false),
      serchOf: ref(""),
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
    };
  },
  methods: {
    focusInput() {
      this.menue = true;
    },
    outOfFocus() {
      this.menue = false;
    },
    selectdFilter(selected) {
      this.serchOf = selected;
    },
  },
  components: { MainNav },
};
</script>

<style lang="scss" scoped>
.unactive-filter {
  transition: all 0.4s ease-in-out !important;
  transform: translateX(-100%);
  opacity: 0;
}
.active-filter {
  background: white;
  padding: 10px;
  margin: auto;
  width: 80%;
  transition: all 0.4s ease-in-out !important;
  transform: translateX(0);
  opacity: 1;
  border-radius: 10px;
}
.active-seleted {
  background: #ff6b6123;
  border-radius: 10px;
}
</style>
