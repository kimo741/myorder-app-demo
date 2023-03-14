<template>
  <q-page class="q-mx-sm" dir="rtl">
    <DynamicHeader :backIcon="true" title="التسويق بالعمولة" />
    <div class="row justify-around items-center q-my-md">
      <q-card class="col-5 card-hight text-center">
        <q-card-section class="text-center items-center">
          <div class="text-grey text-body1">رصيدك الحالي</div>
          <div class="text-body2 q-py-sm">ر.س{{ current_cridet }}</div>
        </q-card-section>
      </q-card>
      <q-card class="col-5">
        <q-card-section class="text-center card-hight">
          <div class="text-grey text-body1">شارك الكود الخصم</div>
          <div class="text-body2 q-py-sm">ر.س{{ discount_code }}</div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import DynamicHeader from "src/components/UI/DynamicHeader.vue";
import { ref } from "vue";

export default {
  components: { DynamicHeader },
  setup() {
    return {
      current_cridet: ref("245"),
      discount_code: ref("USR123"),
      history: ref([
        {
          name: "اسم الطبق",
          disc: "وريم ايبسوم هو نموذج افتراضي ",
          price: "400",
          reach: "1.200",
          img: "test/prod1.png",
        },
        {
          name: "اسم الطبق",
          disc: "وريم ايبسوم هو نموذج افتراضي ",
          price: "400",
          reach: "1.600",
          img: "test/prod1.png",
        },
      ]),
    };
  },
};
</script>

<style scoped>
.card-hight {
  height: 150px;
}
</style>
