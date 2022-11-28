<template>
  <!-- <transition-group name="fade"> -->
  <div class="full-width row justify-between">
    <q-list class="col-5 row">
      <q-item
        to="profile"
        class="col text-grey text-primary column"
        :class="
          /profile/.test(this.$route.path) ? 'footer-section__active' : ''
        "
      >
        <q-icon
          class="q-mx-auto"
          size="sm"
          :name="
            /profile/.test(this.$route.path)
              ? 'img:icon/person-footer-active.png'
              : 'img:icon/person-footer.png'
          "
        />
        <div
          v-if="/profile/.test(this.$route.path)"
          class="text-center text-links"
        >
          ملفي
        </div>
      </q-item>
      <!-- ///////// -->
      <!-- fav tap -->
      <!-- ///////// -->
      <q-item
        to="favorite"
        class="col text-grey text-primary column"
        :class="
          /favorite/.test(this.$route.path) ? 'footer-section__active' : ''
        "
      >
        <q-icon
          class="q-mx-auto"
          size="sm"
          :name="
            /favorite/.test(this.$route.path)
              ? 'img:icon/heart-footer-avtive.png'
              : 'img:icon/heart-footer.png'
          "
        />

        <div
          v-if="/favorite/.test(this.$route.path)"
          class="text-center text-links"
        >
          الاعجابات
        </div>
      </q-item>
    </q-list>
    <q-list class="col-5 row">
      <!-- ///////// -->
      <!-- shops tap -->
      <!-- ///////// -->
      <q-item
        :class="/shops/.test(this.$route.path) ? 'footer-section__active' : ''"
        to="/shops"
        class="col text-grey text-primary column"
      >
        <q-icon
          class="q-mx-auto"
          size="sm"
          :name="
            /shops/.test(this.$route.path)
              ? 'img:icon/shop-active.png'
              : 'img:icon/shop.png'
          "
        />
        <div
          v-if="/shops/.test(this.$route.path)"
          class="text-center text-links"
        >
          المتاجر
        </div>
      </q-item>
      <!-- //////// -->
      <!-- home tap -->
      <!-- //////// -->
      <q-item
        :class="this.$route.path == '/' ? 'footer-section__active' : ''"
        to="/"
        class="col text-grey text-primary column"
      >
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
        </div>
      </q-item>
    </q-list>
  </div>
  <q-btn
    @click="$emit('createPost')"
    round
    size="lg"
    color="primary"
    icon="eva-plus"
    class="add-button"
    :class="hideButt ? 'hide-button' : ''"
  />
  <!-- </transition-group> -->
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    hideButt: {
      type: Boolean,
      default: false,
    },
  },
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
.footer-section {
  &__active {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 50%;
      top: 0;
      width: 80%;
      height: 2px;
      background-color: $primary;
      transform: translateX(-50%);
    }
  }
}
.add-button {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out;
}
.text-links {
  font-size: 10px;
  color: $primary;
}
.hide-button {
  bottom: 0;
  top: 50%;
}
</style>
