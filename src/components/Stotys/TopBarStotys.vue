<template>
  <div class="container" dir="rtl">
    <div class="storys">
      <div class="storys__items storys__mine">
        <img :src="storys[0].img" />
      </div>
      <div
        v-for="(story, i) in storys"
        :key="i"
        class="storys__items"
        @click="openThisImg(story)"
      >
        <img :src="story.img" />
      </div>
    </div>
    <q-dialog
      persistent
      class="popUp-story bg-white"
      style="padding: 0 !important"
      full-height
      full-width
      flat
      v-model="show_story"
    >
      <!-- <q-card
        class="bg-transparent q-px-0 full-width"
        style="text-align: center; padding: 0 !important"
      > -->
      <q-card
        class="bg-transparent"
        style="
          padding: 0 !important;
          width: 100% !important;
          height: 100% !important ;
        "
      >
        <q-btn class="closePopup" icon="close" flat @click="closePopup" />
        <q-img
          class="dialog__img"
          style="z-index: 100"
          :src="storys[img_ndex].img"
        />
      </q-card>
      <!-- </q-card> -->
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      img_ndex: ref(""),
      show_story: ref(false),
      storys: ref([
        {
          id: 1,
          img: "test/1.png",
        },
        {
          id: 2,
          img: "test/2.png",
        },
        {
          id: 3,
          img: "test/3.png",
        },
        {
          id: 4,
          img: "test/4.png",
        },
        {
          id: 5,
          img: "test/5.png",
        },
      ]),
    };
  },
  methods: {
    openThisImg(img) {
      this.show_story = true;
      const index = this.storys.findIndex((d) => d.id == img.id);
      this.img_ndex = index;
    },
    closePopup() {
      this.show_story = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.storys {
  padding: 1rem;
  display: flex;
  overflow-x: scroll;
  scroll-padding: 100%;
  scroll-snap-type: x mandatory;
  &__items {
    flex: 0 0 70px;
    position: relative;
    // scroll-snap-align: center;
    display: inline-block;
    height: 65px;
    width: 65px;
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
      border: 2px solid $primary;
    }
  }
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  &__mine {
    border: 2px solid white;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 30%;
      height: 3px;
      background-color: white;
      border: none;
      border-radius: 0;
    }
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 3px;
      height: 30px;
      background-color: white;
    }
  }
}
.closePopup {
  position: fixed;
  right: 5px;
  top: 5px;
  z-index: 200;
}
.dialog__img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  height: auto;
}
// .mobile {
//   display: none;
//   @media (max-width: 768px) {
//     display: flex;
//   }
//   overflow-x: scroll;
//   padding: 24px;
//   width: 100%;
//   scroll-snap-type: mandatory;
//   scroll-padding: 24px;
//   border-radius: 8px;
//   gap: 6px;
//   &::-webkit-scrollbar {
//     width: 5px;
//     height: 5px;
//   }
//   &::-webkit-scrollbar-thumb {
//     border-radius: 14px;
//     border: 5px solid $q-primary;
//   }
//   &__item {
//     flex: 0 0 100%;
//     padding: 10px;
//     scroll-snap-align: start;
//     font-size: 0.8rem;
//   }
// }
</style>
