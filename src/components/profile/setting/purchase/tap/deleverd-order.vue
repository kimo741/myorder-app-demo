<template>
  <div class="slider-v">
    <q-card v-for="(order, i) in orders" :key="i" class="my-card" flat>
      <q-card-section class="relative slider-v__content row">
        <div class="row justify-between col-12">
          <div class="col-6">طلب رقم {{ order.no }}</div>
          <div class="col-6 row justify-end">
            <div class="q-px-sm">
              <q-icon size="sm" name="img:icon/XMLID_328_.png" />
            </div>
            <div class="q-px-sm">{{ order.price }} ر س</div>
            <div class="q-px-sm">
              <q-icon size="xs" name="eva-arrow-ios-downward-outline" />
            </div>
          </div>
        </div>
        <!-- location -->
        <div class="row col-12 q-my-sm">
          <q-icon size="sm" name="img:icon/location.png" />
          <div class="q-px-sm">{{ order.location }}</div>
        </div>
        <!-- date and status -->
        <div class="row col-12 q-my-sm">
          <div class="col-6 row">
            <q-icon size="sm" name="img:icon/calendar.png" />
            <div class="q-px-sm">{{ order.date }}</div>
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
        </div>
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
  props: {
    orders: {
      type: Array,
      defaulte: [],
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped >
.slider-v {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  scroll-padding: 100%;
  scroll-snap-type: y mandatory;
  height: max-content;
  padding: 4px;

  .my-card {
    padding: 8px;
    border-radius: 8px;
    flex: 0 0 100%;
    display: inline-block;
    margin-bottom: 10px;
  }
  &__content {
    height: 100%;
    padding: 5px 8px;
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
    height: 60px;
  }
  &__add-to-card {
    direction: ltr;
    position: absolute;
    bottom: 4px;
    left: 5%;
  }
}
</style>
