<template>
  <div class="container">
    <div class="post relative">
      <div class="post__top q-my-sm">
        <div dir="rtl" class="row justify-center">
          <div class="col flex justify-start">
            <div class="post__top-prifile">
              <img src="test/4.png" alt="" />
            </div>
            <div class="text-body2">
              <div>اسم المطعم</div>
              <div>اليوم منذ 5ساعات</div>
            </div>
          </div>
        </div>
      </div>
      <q-card class="my-card">
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />
        <q-card-actions align="right"> </q-card-actions>
      </q-card>
      <div @click="moreOptions" dir="ltr" class="post__more">
        <!-- ico more option see it in scss  -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {};
  },
  methods: {
    moreOptions() {},
  },
};
</script>

<style lang="scss" scoped>
.post {
  &__top {
    &-prifile {
      // float: right;
      position: relative;
      // scroll-snap-align: center;
      display: flex;
      height: 50px;
      width: 50px;
      font-size: 0;
      margin-right: 10px;
      background: white;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
      &::before {
        content: "";
        position: absolute;
        width: calc(100% + 6px);
        height: calc(100% + 6px);
        left: 50%;
        top: 50%;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        border: 2px solid $secondary;
      }
    }
  }
  &__more {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    background: black;
    cursor: pointer;
    &::before {
      content: "";
      width: 5px;
      height: 5px;
      border-radius: 50%;
      position: absolute;
      left: 10px;
      top: 0;
      background: black;
    }
    &::after {
      content: "";
      width: 5px;
      height: 5px;
      border-radius: 50%;
      position: absolute;
      left: 20px;
      top: 0;
      background: black;
    }
  }
}
</style>
