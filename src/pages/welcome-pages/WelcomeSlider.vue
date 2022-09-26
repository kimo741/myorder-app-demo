<template>
  <q-page>
    <BackAndSkip title="تخطي" />
    <div class="">
      <q-carousel
        v-model="slide"
        swipeable
        animated
        control-color="primary"
        :navigation-position="navPos"
        navigation
        padding
        style="height: calc(100vh - 50px); border-radius: none !important"
        class="full-width rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <!-- <q-icon name="live_tv" size="56px" /> -->
          <div class="row welcom">
            <div class="col-12 welcom__img">
              <img src="img/Group.png" />
            </div>
            <div class="col-12 welcom__content q-mt-md text-center">
              <div class="text-h5 text-500">سهولة تصفح المتاجر</div>
              <div class="text-body2 disc-color">
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ للنص أو شكل توضع
              </div>
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <!-- <q-icon name="live_tv" size="56px" /> -->
          <div class="row welcom">
            <div class="col-12 welcom__img">
              <img src="img/Customer Survey.png" />
            </div>
            <div class="col-12 welcom__content q-mt-md text-center">
              <div class="text-h5 text-500">يمكن الطلب والتوصيل بكل سهولة</div>
              <div class="text-body2 disc-color">
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ للنص أو شكل توضع
              </div>
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <!-- <q-icon name="live_tv" size="56px" /> -->
          <div class="row welcom">
            <div class="col-12 welcom__img">
              <img src="img/Delivery-amico 1 (1).png" />
            </div>
            <div class="col-12 welcom__content q-mt-md text-center">
              <div class="text-h5 text-500">سهولة تصفح المتاجر</div>
              <div class="text-body2 disc-color">
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ للنص أو شكل توضع
              </div>
              <q-btn class="q-my-md welcom__btn" label="ابدأ" />
              <div class="text-center text-body2 cursor-pointer">
                الدخول كذائر
              </div>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import BackAndSkip from "src/components/Bar/top/backAndSkip.vue";

export default {
  setup() {
    return {
      navPos: ref("bottom"),
      slide: ref("style"),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
  components: { BackAndSkip },
};
</script>
<style lang="scss" scoped>
.welcom {
  // position: relative;
  // height: 100%;
  height: 100%;
  &__img {
    // overflow: hidden;
    height: 270px !important;
    width: 100%;
    overflow: hidden;
    margin-top: 70px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  &__content {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 300px;
    background-color: $bg-slide;
    text-align: center;
    border-radius: 30px 30px 0 0;
    padding: 0 20px 0 20px;
    overflow: auto;
  }
  &__btn {
    height: 45px;
    width: 70%;
    border-radius: 10px;
    font-weight: bolder;
    background-color: $secondary;
    color: white;
  }
}
</style>
