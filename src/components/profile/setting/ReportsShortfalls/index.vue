<template>
  <q-page class="q-mx-sm" dir="rtl">
    <DynamicHeader
      :backIcon="true"
      title="إبلاغ عن نواقص"
      :notify-icon="false"
    />
    <div class="text-body1 q-my-md q-pa-sm text-bold">
      سجل الابلاغ عن النواقص
    </div>
    <!-- ///// -->
    <!-- cards -->
    <!-- ///// -->
    <q-card
      v-for="(report, i) in reports"
      :key="i"
      class="my-card q-my-md"
      flat
    >
      <q-card-section class="relative slider-v__content row q-pa-0">
        <div class="row justify-between q-pa-sm col-12">
          <div class="col-6">طلب رقم {{ report.no }}</div>
          <div class="col-6 row justify-end">
            <div class="q-px-sm">
              <q-icon size="sm" name="img:icon/XMLID_328_.png" />
            </div>
            <div class="q-px-sm">{{ report.price }} ر س</div>
          </div>
        </div>
        <!-- date  -->
        <div class="row col-12 q-my-sm q-pa-sm">
          <div class="col-6 row">
            <q-icon size="sm" name="img:icon/calendar.png" />
            <div class="q-px-sm">{{ report.date }}</div>
          </div>
        </div>
        <!-- buttom card  -->
        <div
          class="row col-12 q-my-sm text-white bg-red-10 slider-v__content q-pa-sm"
        >
          <div class="col-8 text-no-wrap">
            <div class="text-body1 text-bold">{{ report.name }}</div>
            <div class="text-body2 q-py-sm">{{ report.disc }}</div>
          </div>
          <div class="col-4 text-left">
            <q-img :src="report.img" class="slider-v__img" />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import DynamicHeader from "src/components/UI/DynamicHeader.vue";
import { ref } from "vue";

export default {
  components: { DynamicHeader },
  setup() {
    return {
      reports: ref([
        {
          name: "اسم الطبق",
          no: "2456584",
          price: "500",
          date: "25/8/2022",
          img: "test/prod1.png",
          disc: "وريم ايبسوم هو نموذج افتراضي ",
        },
        {
          name: "اسم الطبق",
          no: "2456584",
          price: "500",
          date: "25/8/2022",
          img: "test/prod1.png",
          disc: "وريم ايبسوم هو نموذج افتراضي ",
        },
        {
          name: "اسم الطبق",
          no: "2456584",
          price: "500",
          date: "25/8/2022",
          img: "test/prod1.png",
          disc: "وريم ايبسوم هو نموذج افتراضي ",
        },
      ]),
    };
  },
};
</script>

<style lang="scss" scoped>
.slider-v {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  scroll-padding: 100%;
  scroll-snap-type: y mandatory;
  height: max-content;
  padding: 4px;
  // margin: 0 30px;

  .my-card {
    padding: 0 !important;
    border-radius: 8px;
    flex: 0 0 100%;
    display: inline-block;
    // margin-bottom: 30px;
  }
  &__content {
    // height: 150px;
    // padding: 5px 8px;
    &--hint {
      font-size: 11px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: $font-hint;
    }
    &--views {
      font-size: 13px;
    }
    &--ratting {
    }
  }
  &__img {
    height: 70px;
    width: 70px;
    text-align: left;
    // zoom: 0.8;
    // position: absolute;
    // left: 50%;
    // top: 50%;
  }
  &__add-to-card {
    direction: ltr;
    position: absolute;
    bottom: 4px;
    left: 5%;
  }
}
.img-container {
  position: relative;
}
</style>
