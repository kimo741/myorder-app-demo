<template>
  <!-- <div class="fixed-top-bar bg-red"> -->
  <q-header elevated class="bg-primary text-white">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn :label="lable" :icon="icon" @click="$emit('emitClick')" flat />
      </q-toolbar-title>
      <!-- </div> -->
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  props: {
    lable: {
      type: String,
      required: false,
      default: "",
    },
    icon: {
      type: String,
      required: false,
      default: "",
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.fixed-top-bar {
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
