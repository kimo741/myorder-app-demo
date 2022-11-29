<template>
  <q-card class="main-rounded single-product full-width full-height" dir="rtl">
    <!-- ///////////// -->
    <!-- product image -->
    <!-- ///////////// -->
    <div class="handel-cutting-img q-my-md">
      <img src="test/Rectangle 4322.png" />
    </div>
    <!-- ///////////////// -->
    <!-- close dialog icon -->
    <!-- ///////////////// -->
    <q-icon
      @click="$emit('closeSingleProduct')"
      size="xs"
      name="eva-close-outline"
      class="close-icon"
    />
    <!-- /////////////// -->
    <!-- product details -->
    <!-- /////////////// -->
    <q-card>
      <q-card-section class="q-py-sm q-px-md main-rounded card-shadow">
        <div class="row justify-between">
          <!-- //////////// -->
          <!-- product name -->
          <!-- //////////// -->
          <div class="col text-right text-500 text-body1">اسم الطبق</div>
          <div class="col text-left flex justify-end">
            <!-- /////////// -->
            <!-- like button -->
            <!-- /////////// -->
            <q-btn
              @click="toggleLike"
              size="sm"
              flat
              class=""
              :icon="like_it ? 'eva-heart' : 'eva-heart-outline'"
            />
            <!-- //////////// -->
            <!-- share button -->
            <!-- //////////// -->
            <q-btn @click="sharPost" size="sm" flat class="" icon="share" />
          </div>
        </div>
        <div class="text-hint text-body2 q-py-sm">
          وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم على العميل ليتصور طريقه
          وضع النصوص
        </div>
        <div class="flex">
          <q-rating
            v-model="model"
            max="5"
            size="1em"
            color="yellow"
            icon="star_border"
            icon-selected="star"
            icon-half="star_half"
            disable
          />
          <div class="text-sm text-bold q-mx-sm">{{ model }}</div>
          <div class="text-sm text-hint">({{ model }})تقييم</div>
        </div>
      </q-card-section>
    </q-card>
    <!-- ///////// -->
    <!-- more adds -->
    <!-- ///////// -->
    <q-card class="q-my-md q-pa-md main-rounded">
      <div class="text-right text-body1 q-pb-sm text-primary text-500">
        اختيارك من الاصناف الجانبية :
      </div>
      <q-list separator>
        <q-item
          @click="sellectItem(item)"
          dense
          clickable
          v-ripple
          v-for="(item, i) in side_item_list"
          :key="i"
        >
          <q-item-section>{{ item.label }}</q-item-section>
          <q-item-section side>
            <q-radio
              dense
              v-model="side_items"
              :val="item.val"
              color="primary"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
    <q-card class="q-my-md q-pa-md main-rounded">
      <div class="text-right text-body1 q-pb-sm text-primary text-500">
        الاضافات <span class="text-hint text-sm">(اختياري) :</span>
      </div>
      <q-list separator>
        <q-item
          @click="markItem(item)"
          dense
          clickable
          v-ripple
          v-for="(item, i) in add_more_list"
          :key="i"
        >
          <q-item-section>{{ item.label }}</q-item-section>
          <q-item-section side>
            <q-checkbox
              :val="item.val"
              keep-color
              dense
              v-model="add_more"
              color="primary"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-card>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      side_items: ref("1"),
      add_more: ref([]),
      like_it: ref(false),
      model: ref("4"),
      side_item_list: ref([
        {
          label: "الاختيار الأول",
          val: "1",
        },
        {
          label: "الاختيار الثاني",
          val: "2",
        },
        {
          label: "الاختيار الثالث",
          val: "3",
        },
      ]),
      add_more_list: ref([
        {
          label: "اضافه",
          val: "1",
        },
        {
          label: "اضافه",
          val: "2",
        },
        {
          label: "اضافه",
          val: "3",
        },
      ]),
    };
  },
  methods: {
    toggleLike() {
      this.like_it = !this.like_it;
    },
    sellectItem(item) {
      this.side_items = item.val;
    },
    // markItem(item) {
    //   this.add_more.push(item.val);
    // },
  },
};
</script>

<style lang="scss" scoped>
.single-product {
  background: rgba(255, 255, 255, 0.95);
  padding: 20px;
  .close-icon {
    position: absolute;
    right: 8px;
    top: 8px;
  }
}
.handel-cutting-img {
  position: relative;
  max-width: 400px;
  width: 100%;
  height: 110px;
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    min-width: 50%;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: 50% 50%;
  }
}
</style>
