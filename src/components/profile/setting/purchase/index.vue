<template>
  <q-page class="q-mx-sm" dir="rtl">
    <DynamicHeader
      @emitSetting="$router.push({ name: 'setting' })"
      :setingIcon="true"
      :backIcon="true"
      :notifyIcon="false"
    />
    <q-card class="q-pa-0 no-effict bg-transparent">
      <q-tabs
        v-model="tab"
        dense
        class="no-effict primary bg-taps"
        align="justify"
        indicator-color="transparent"
        narrow-indicator
        active-class="active-class"
      >
        <q-tab label="تم التوصل" name="delevred" />
        <q-tab label="معلقة" name="suspended" />
        <q-tab label="ملغاة" name="canceled" />
      </q-tabs>
      <q-tab-panels
        style="background: #eeeeee !important"
        class="no-effict q-my-lg"
        v-model="tab"
        animated
      >
        <!-- //////////// -->
        <!-- delevred tap -->
        <!-- //////////// -->

        <q-tab-panel
          class="q-pa-0 no-effict"
          style="background: #eeeeee !important"
          name="delevred"
        >
          <deleverd-order :orders="delevred_orders" />
        </q-tab-panel>
        <!-- //////////// -->
        <!-- suspended tap -->
        <!-- //////////// -->
        <q-tab-panel
          class="q-pa-0 no-effict"
          style="background: #eeeeee !important"
          name="suspended"
        >
          <deleverd-order :orders="suspended_orders" />
          <!-- posts -->
        </q-tab-panel>
        <!-- ///////////// -->
        <!-- canceled tap -->
        <!-- ///////////// -->
        <q-tab-panel
          class="q-pa-0 no-effict"
          style="background: #eeeeee !important"
          name="canceled"
        >
          <deleverd-order :orders="canceled_orders" />
          <!-- tap -->
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
import DynamicHeader from "src/components/UI/DynamicHeader.vue";
import { ref } from "vue";
import DeleverdOrder from "./tap/deleverd-order.vue";
export default {
  components: { DynamicHeader, DeleverdOrder },
  setup() {
    return {
      tab: ref("delevred"),
      delevred_orders: ref([
        {
          id: "1",
          no: "265654",
          price: "500",
          location: "الرياض",
          date: "25/8/2022",
          status: "delevred",
        },
        {
          id: "2",
          no: "265654",
          price: "500",
          location: "الرياض",
          date: "25/8/2022",
          done: "delevred",
        },
        {
          id: "3",
          no: "265654",
          price: "500",
          location: "الرياض",
          date: "25/8/2022",
          done: "delevred",
        },
        {
          id: "4",
          no: "265654",
          price: "500",
          location: "الرياض",
          date: "25/8/2022",
          done: "delevred",
        },
        {
          id: "5",
          no: "265654",
          price: "500",
          location: "الرياض",
          date: "25/8/2022",
          done: "delevred",
        },
      ]),
      suspended_orders: ref([
        {
          id: "1",
          no: "265654",
          price: "500",
          location: "الرياض",
          date: "25/8/2022",
          status: "suspended",
        },
        {
          id: "2",
          no: "265654",
          price: "500",
          location: "الرياض",
          date: "25/8/2022",
          done: "suspended",
        },
        {
          id: "3",
          no: "265654",
          price: "500",
          location: "الرياض",
          date: "25/8/2022",
          done: "suspended",
        },
        {
          id: "4",
          no: "265654",
          price: "500",
          location: "الرياض",
          date: "25/8/2022",
          done: "suspended",
        },
        {
          id: "5",
          no: "265654",
          price: "500",
          location: "الرياض",
          date: "25/8/2022",
          done: "suspended",
        },
      ]),
      canceled_orders: ref([
        {
          id: "1",
          no: "265654",
          price: "500",
          location: "الرياض",
          date: "25/8/2022",
          status: "canceled",
        },
        {
          id: "2",
          no: "265654",
          price: "500",
          location: "الرياض",
          date: "25/8/2022",
          done: "canceled",
        },
        {
          id: "3",
          no: "265654",
          price: "500",
          location: "الرياض",
          date: "25/8/2022",
          done: "canceled",
        },
        {
          id: "4",
          no: "265654",
          price: "500",
          location: "الرياض",
          date: "25/8/2022",
          done: "canceled",
        },
        {
          id: "5",
          no: "265654",
          price: "500",
          location: "الرياض",
          date: "25/8/2022",
          done: "canceled",
        },
      ]),
    };
  },
};
</script>

<style lang="scss" scoped>
.bg-taps {
  background: rgba(118, 118, 128, 0.12);
  border-radius: 8px !important;
}
.active-class {
  background-color: white;
  border-radius: 10px;
  border: 1px solid $bg_slide;
}
</style>
