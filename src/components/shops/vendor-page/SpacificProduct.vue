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
    <q-card class="q-my-md q-pa-md main-rounded card-shadow">
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
    <q-card class="q-my-md q-pa-md main-rounded card-shadow">
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
    <div class="button__section row items-center">
      <div @click="addToCart" class="col-5 flex items-center add-tocart">
        <!-- <Transition class="col-2" name="slide-up"> -->
        <q-icon
          v-if="my_cart"
          color="primary"
          class="col-2"
          size="md"
          name="done_all"
        />
        <q-icon v-else color="primary" class="col-2" size="md" name="add" />
        <!-- </Transition> -->
        <div class="col-10 text-sm">أضف الي السلة</div>
      </div>
      <div class="col-2 text-sm text-center row items-center">
        <div class="text-body2 text-500">400 ر.س</div>
      </div>
      <div class="col-4">
        <div class="row text-no-wrap order-count items-center">
          <!-- ///////////////// -->
          <!-- button add 1 more -->
          <!-- ///////////////// -->
          <div @click="increaseOrder" class="order-count--sum"></div>
          <!-- //////////// -->
          <!-- order counte -->
          <!-- //////////// -->
          <div class="col text-center text-bold">{{ count }}</div>
          <!-- /////////////////// -->
          <!-- buttun minus 1 more -->
          <!-- /////////////////// -->
          <div @click="decreaseOrder" class="order-count--minus"></div>
        </div>
      </div>
    </div>
  </q-card>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      my_cart: ref(false),
      side_items: ref("1"),
      count: ref("1"),
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
    increaseOrder() {
      this.count++;
    },
    decreaseOrder() {
      if (this.count > 1) {
        this.count--;
      }
    },
    addToCart() {
      this.my_cart = !this.my_cart;
    },
  },
};
</script>

<style lang="scss" scoped>
.single-product {
  background-color: #f5f4f3;
  // background: rgba(255, 255, 255, 0.95);
  padding: 10px;
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
.button__section {
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f5f4f3;
  margin-bottom: -10px;
}
.order-count {
  position: relative;
  &--sum,
  &--minus {
    position: relative;
    width: 20px;
    height: 20px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: rgba(217, 217, 217, 0.5);

    &::before {
      content: "";
      position: absolute;
      width: 70%;
      height: 3px;
      background-color: $primary;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    &:active {
      background-color: $primary;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.61), 0 2px 2px rgba(0, 0, 0, 0.527),
        0 3px 1px -2px rgba(0, 0, 0, 0.514) 2px 2px 8px black;
      &::before,
      &::after {
        background-color: rgba(217, 217, 217);
      }
    }
  }
  &--sum {
    &::after {
      content: "";
      position: absolute;
      width: 3px;
      height: 70%;
      background-color: $primary;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
.add-tocart {
  &:active {
    background-color: rgba(156, 156, 156, 0.5);
  }
}
button {
  position: absolute;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
