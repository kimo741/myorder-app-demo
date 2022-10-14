<template>
  <div class="full-width row justify-between">
    <q-list class="col-5 row">
      <q-item class="col text-grey text-primary column">
        <q-icon
          class="q-mx-auto"
          size="sm"
          :name="
            this.$route.path == 'profile'
              ? 'img:icon/person-footer-active.png'
              : 'img:icon/person-footer.png'
          "
        />
        <div class="text-center text-links">ملفي</div>
      </q-item>
      <q-item class="col text-grey text-primary column">
        <q-icon
          class="q-mx-auto"
          size="sm"
          :name="
            this.$route.path == 'favorite'
              ? 'img:icon/heart-footer-avtive.png'
              : 'img:icon/heart-footer.png'
          "
        />

        <div class="text-center text-links">الاعجابات</div>
      </q-item>
    </q-list>
    <q-list class="col-5 row">
      <q-item class="col text-grey text-primary column">
        <q-icon
          class="q-mx-auto"
          size="sm"
          :name="
            this.$route.path == 'shop'
              ? 'img:icon/shop-avtive.png'
              : 'img:icon/shop.png'
          "
        />
        <div class="text-center text-links">المتاجر</div>
      </q-item>
      <q-item class="col text-grey text-primary column">
        <q-icon
          class="q-mx-auto"
          size="sm"
          :name="
            this.$route.path == '/'
              ? 'img:icon/Home-active.png'
              : 'img:icon/Home.png'
          "
        />
        <div class="text-center text-links">الرئيسة</div></q-item
      >
    </q-list>
  </div>
  <q-btn round size="lg" color="primary" icon="eva-plus" class="add-button" />
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      active_footer: ref(""),
    };
  },
  mounted() {
    console.log(this.$route.path);
  },
};
</script>

<style lang="scss" scoped>
.add-button {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.text-links {
  font-size: 10px;
  color: $primary;
}
</style>
