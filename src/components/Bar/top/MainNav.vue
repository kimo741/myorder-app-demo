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
      <div class="col-6 justify-center text-center">
        <q-img class="q-mx-auto" width="120px" src="logo.png" />
      </div>
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
  },
};
</script>

<style lang="scss" scoped>
.edit-badge {
  position: absolute;
  right: 3px;
  top: 3px;
  padding: 0 !important;
  width: 10px;
  height: 10px;
  &__notify {
    right: 50%;
    top: 3px;
    transform: translateX(-50%);
  }
}
</style>

