<template>
  <div class="filter-bar horizental-list">
    <div
      v-for="(item, i) in taps"
      :key="i"
      class="my-card text-sm text-hint text-center"
      :class="tap_active == item.label ? 'active' : ''"
      @click="sellectTap(item)"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      tap_active: ref("الأكثر مبيعا"),
      taps: ref([
        {
          label: "الأكثر مبيعا",
          value: "all",
        },
        {
          label: "العروض",
          value: "fastfood",
        },
        {
          label: "الأصناف الجانبية",
          value: "snaks",
        },
        {
          label: "المشروبات",
          value: "sandwitch",
        },
        {
          label: "اكلات سريعه",
          value: "deinks",
        },
      ]),
    };
  },
  watch: {
    tap_active(val) {
      if (val === "") {
        this.tap_active = "الأكثر مبيعا";
      }
    },
  },
  methods: {
    sellectTap(item) {
      this.tap_active = item.label;
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-bar {
  background-color: $primary;
  width: 100%;
  border-radius: 0;
  .my-card {
    transition: all 0.1s ease-in-out;
    position: relative;
    color: rgba(255, 255, 255, 0.5);
    &::after {
      content: "";
      position: absolute;
      top: 115%;
      left: 50%;
      width: 80%;
      overflow: auto;
      height: 2px;
      transform: translate(-50%, -50%);
      // background-color: rgba(0, 0, 0, 0.1);
    }
    &:active {
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
  .active {
    color: #ffffff;
    position: relative;
    &::after {
      background-color: #ffffff;
    }
  }
}
</style>
