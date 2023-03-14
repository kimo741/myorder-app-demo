<template>
  <div class="slider-v" dir="rtl">
    <q-card v-for="(order, i) in orders" :key="i" class="my-card" flat>
      <q-card-section class="relative slider-v__content row">
        <div class="row justify-between col-12">
          <div class="col-6 flex items-center">
            <q-img class="handel-img" :src="order.friend_img" />
            <div class="text-body2 q-px-sm">اسم الشخص</div>
          </div>
          <div class="flex text-center">
            <div class="">
              <q-icon size="sm" name="img:icon/XMLID_328_.png" />
            </div>
            <div class="">500 رس</div>
            <!-- <q-badge v-if="delevred" rounded color="green" label="تم التسليم" />
            <q-badge v-else rounded color="red" label="معلق" /> -->
          </div>
        </div>
        <!-- location -->
        <div class="row col-12 q-my-sm">
          <div class="col-6 row">
            <div class="col-12">
              <q-icon size="sm" name="img:icon/calendar.png" />
              <div class="q-px-sm">{{ order.date }}</div>
            </div>
            <div class="col-12">
              <div class="q-pa-sm text-red-5">تم الأهداء من :</div>
            </div>
          </div>
          <div class="col-6 text-center"></div>
        </div>
        <!-- date and status -->
        <!-- <div class="row col-12 q-my-sm">
          <div class="col-6 row">

          </div>
          <div class="row justify-end q-px-md col-6">
            <div
              v-if="order.status == 'delevred'"
              class="text-body2 text-green"
            >
              تم التوصل
            </div>
            <div v-else class="text-body2 text-red-6">
              {{ order.status == "suspended" ? "الطلب معلق" : "الطلب ملغي" }}
            </div>
          </div>
        </div> -->
      </q-card-section>
      <q-card-actions class="row justify-around">
        <q-btn class="col-5 main-rounded" color="primary" label="اعادة طلب" />
        <q-btn
          class="col-5 main-rounded"
          color="primary"
          outline
          label="تقيم"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      orders: ref([
        {
          no: "16452164",
          delevred: true,
          date: "25/8/2022",
          friend_img: "test/file-type-pdf2.png",
          friend_phone: "+966123456825",
        },
        {
          no: "16452164",
          delevred: false,
          date: "25/8/2022",
          friend_name: "اسم الشخص",
          friend_img: "test/file-type-pdf2.png",
          friend_phone: "+966123456825",
        },
      ]),
    };
  },
};
</script>

<style lang="scss">
.handel-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
