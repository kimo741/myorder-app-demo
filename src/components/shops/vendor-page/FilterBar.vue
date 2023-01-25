<template>
  <div class="filter-bar horizental-list" dir="rtl">
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
      tap_active: ref("الكل"),
      taps: ref([
        {
          label: "الكل",
          value: "all",
        },
        {
          label: "مطاعم",
          value: "fastfood",
        },
        {
          label: "مقاهى",
          value: "snaks",
        },
        {
          label: "هدايا",
          value: "sandwitch",
        },
        {
          label: "مشروبات",
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
  background-color: transparent;
  width: 100%;
  border-radius: 0;
  .my-card {
    transition: all 0.1s ease-in-out;
    position: relative;
    color: rgba(65, 65, 65, 0.5);
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
      background-color: rgba(88, 88, 88, 0.5);
    }
  }
  .active {
    // background-color: rgba(88, 88, 88, 0.5);
    font-weight: 800;
    position: relative;

    &::after {
      background-color: rgba(88, 88, 88, 0.5);
    }
  }
}
</style>
