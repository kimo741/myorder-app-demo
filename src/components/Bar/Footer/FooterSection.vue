<template>
  <transition-group name="fade">
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
          <div
            v-if="this.$route.path == 'profile'"
            class="text-center text-links"
          >
            ملفي
          </div>
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

          <div
            v-if="this.$route.path == '/favorts'"
            class="text-center text-links"
          >
            الاعجابات
          </div>
        </q-item>
      </q-list>
      <q-list class="col-5 row">
        <q-item to="/shops" class="col text-grey text-primary column">
          <q-icon
            class="q-mx-auto"
            size="sm"
            :name="
              this.$route.path == '/shops'
                ? 'img:icon/shop-active.png'
                : 'img:icon/shop.png'
            "
          />
          <div
            v-if="this.$route.path == '/shops'"
            class="text-center text-links"
          >
            المتاجر
          </div>
        </q-item>
        <q-item to="/" class="col text-grey text-primary column">
          <q-icon
            class="q-mx-auto"
            size="sm"
            :name="
              this.$route.path == '/'
                ? 'img:icon/Home-active.png'
                : 'img:icon/Home.png'
            "
          />
          <div v-if="this.$route.path == '/'" class="text-center text-links">
            الرئيسة
          </div></q-item
        >
      </q-list>
    </div>
    <q-btn round size="lg" color="primary" icon="eva-plus" class="add-button" />
  </transition-group>
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
