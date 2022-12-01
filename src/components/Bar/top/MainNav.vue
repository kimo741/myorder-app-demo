<template>
  <div class="container" dir="rtl">
    <div class="row justify-around q-pt-md">
      <div class="col-3">
        <div class="row justify-center">
          <q-btn
            v-show="backIcon"
            class="col-5"
            icon="eva-arrow-ios-forward-outline"
            @click="this.$router.go(-1)"
            flat
          />
          <q-btn
            v-show="filterIcon"
            class="col-5"
            size="md"
            icon="eva-funnel-outline"
            color="grey-8"
            @click="this.$emit('emitFiler')"
            flat
          />
          <!-- ///////////////// -->
          <!-- notficaton button -->
          <!-- ///////////////// -->
          <q-btn
            v-show="notfiIcon"
            class="col-5"
            icon="img:icon\notfication.png"
            flat
            @click="openNotficatonPage"
          >
            <!-- badge if have notficaton was,t see it -->

            <q-badge
              class="edit-badge edit-badge__notify"
              v-show="nofiBdge"
              align="top"
              color="primary"
              rounded
              floating
            />
            <!-- ///////////////// -->
            <!----- chat button ----->
            <!-- ///////////////// -->
          </q-btn>
          <q-btn
            v-show="messageIcon"
            class="col-5"
            icon="img:icon\message.png"
            flat
          >
            <q-badge
              class="edit-badge"
              v-show="messageBdge"
              color="primary"
              rounded
              floating
              @click="openInboxMessages"
            />
          </q-btn>
        </div>
      </div>
      <!-- ///////////////// -->
      <!------ cover img ------>
      <!-- ///////////////// -->
      <div
        @click="this.$router.push('/')"
        v-if="title === null"
        class="col-6 main-nav__logo"
      >
        <img src="logo.png" />
      </div>
      <div v-else class="text-h1 text-500 q-ma-auto">{{ title }}</div>
      <!-- ///////////////// -->
      <!------ ///////// ------>
      <!-- ///////////////// -->
      <div class="col-3 row justify-center">
        <!-- ///////////////// -->
        <!---- location img ----->
        <!-- ///////////////// -->
        <q-btn
          v-show="locationIcon"
          class="col-5"
          icon="img:icon\location.png"
          flat
          @click="openLocationPage"
        />
        <!-- ///////////////// -->
        <!---- search button ---->
        <!-- ///////////////// -->
        <q-btn
          v-show="searchIcon"
          class="col-5"
          icon="img:icon\Search.png"
          flat
          @click="openSearchPage"
          to="/search"
        />
        <q-btn
          v-show="cartIcon"
          class="col-5"
          icon="img:icon\cart.png"
          flat
          @click="chechmyCart"
          to="/search"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messageBdge: {
      type: Boolean,
      default: false,
    },
    filterIcon: {
      type: Boolean,
      default: false,
    },
    nofiBdge: {
      type: Boolean,
      default: false,
    },
    // toggle notify icon
    notfiIcon: {
      type: Boolean,
      default: true,
    },
    // back icon
    backIcon: {
      type: Boolean,
      default: false,
    },
    // toggle message icon
    messageIcon: {
      type: Boolean,
      default: true,
    },
    // toggle location icon
    locationIcon: {
      type: Boolean,
      default: true,
    },
    // toggle search icon
    searchIcon: {
      type: Boolean,
      default: true,
    },
    // toggle search icon
    title: {
      type: String,
      default: null,
    },
    cartIcon: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    openNotficatonPage() {
      //
    },
    openLocationPage() {
      //
    },
    openSearchPage() {
      //
    },
    openInboxMessages() {
      //
    },
    chechmyCart() {
      //
    },
  },
};
</script>

<style lang="scss" scoped>
.main-nav {
  width: 100%;
  height: 60px;
  &__logo {
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    text-align: center;
    zoom: 40%;
    img {
    }
  }
}
.edit-badge {
  position: absolute;
  padding: 0 !important;
  width: 10px;
  height: 10px !important;
  &__notify {
    max-height: 1px !important;
    right: 18px;
    top: 0px;
    transform: translateX(-50%);
  }
}
</style>
