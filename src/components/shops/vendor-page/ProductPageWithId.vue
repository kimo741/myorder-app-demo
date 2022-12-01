<template>
  <!-- if user share a product to a friend with by url -->
  <!-- this page for handel open product with url -->
  <!-- here i well get id for product from id route -->
  <!-- when mounted this component will send requist grphQl to get details about product by id -->
  <q-page class="main-rounded single-product full-width full-height" dir="rtl">
    <!-- ///////////// -->
    <!-- product image -->
    <!-- ///////////// -->
    <div class="handel-cutting-img q-my-md">
      <img :src="singleProduct.img" />
    </div>
    <!-- ///////////////// -->
    <!-- close dialog icon -->
    <!-- ///////////////// -->
    <q-icon
      @click="$emit('closeSingleProduct')"
      size="sm"
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
          <div class="col text-right text-500 text-body1">
            {{ singleProduct.name }}
          </div>
          <div class="col text-left flex justify-end">
            <!-- /////////// -->
            <!-- like button -->
            <!-- /////////// -->
            <q-icon
              @click="toggleLike"
              size="sm"
              flat
              class="q-mx-sm"
              :name="like_it ? 'eva-heart' : 'eva-heart-outline'"
            />
            <!-- //////////// -->
            <!-- share button -->
            <!-- //////////// -->
            <q-icon @click="sharPost" size="sm" flat name="share" />
          </div>
        </div>
        <div class="text-hint text-body2 q-py-sm">
          {{ singleProduct.disc }}
        </div>
        <div class="flex">
          <q-rating
            v-model="singleProduct.rate"
            max="5"
            size="1em"
            color="yellow"
            icon="star_border"
            icon-selected="star"
            icon-half="star_half"
            disable
          />
          <div class="text-sm text-bold q-mx-sm">{{ singleProduct.rate }}</div>
          <div class="text-sm text-hint">({{ singleProduct.rate }})تقييم</div>
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
        <!-- @click="markItem(item)" -->
        <q-item dense v-for="(item, i) in add_more_list" :key="i">
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
      <div
        @click="addToCart"
        class="q-ma-auto col-5 flex items-center add-tocart"
      >
        <div class="col-2">
          <Transition name="slide-up">
            <q-icon
              class="q-ma-auto"
              v-if="in_mycart"
              color="primary"
              size="sm"
              name="done_all"
            />
            <q-icon
              class="q-ma-auto"
              v-else
              color="primary"
              size="sm"
              name="add_shopping_cart"
            />
          </Transition>
        </div>
        <div class="col-10 q-ma-auto">أضف الي السلة</div>
      </div>
      <div class="col-2 text-sm text-center row items-center">
        <div class="text-body2 text-500">400 ر.س</div>
      </div>
      <div class="col-5">
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
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  // props: ["singleProduct"],
  setup() {
    return {
      // my opject for my product
      singleProduct: ref({}),
      // product id
      product_id: ref(""),
      // check if product in my card or not
      in_mycart: ref(false),
      //  radio  side item
      side_items: ref("1"),
      // count for product will orderd
      count: ref("1"),
      // sellect adds with order
      add_more: ref([]),
      // check if like it or not
      like_it: ref(false),
      // choises for side items
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
      // choises for adds
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
    // event on click add like
    toggleLike() {
      this.like_it = !this.like_it;
    },
    // event handel sellect side item
    sellectItem(item) {
      this.side_items = item.val;
    },
    // increase Order
    increaseOrder() {
      this.count++;
    },
    // decrease Order
    decreaseOrder() {
      if (this.count > 1) {
        this.count--;
      }
    },
    // event add to cart
    addToCart() {
      this.in_mycart = !this.in_mycart;
    },
    // event share product
    sharPost() {
      this.$emit("passProductForShareId", this.singleProduct);
    },
    // get data with graphQL by id on mounted component
    getDataById() {},
  },
  mounted() {
    this.product_id = this.$route.params.pid;
    // this.getDataById()
  },
};
</script>

<style lang="scss" scoped>
.single-product {
  background-color: #f5f4f3;
  // background: rgba(255, 255, 255, 0.95);
  padding: 20px 10px 0;
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
    border-radius: 20px;
    width: 100%;
    height: 100%;
    // object-fit: 50% 50%;
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
  transition: all 0.4s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
