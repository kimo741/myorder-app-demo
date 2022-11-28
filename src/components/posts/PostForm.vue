<template>
  <q-form @submit.prevent="sharePost" class="profile-info q-mt-lg">
    <div class="row items-center">
      <div class="col-3">
        <UserImage imgSrc="test/2.png" />
      </div>
      <!-- //////////// -->
      <!-- product name -->
      <!-- //////////// -->
      <q-input
        class="col main-rounded text-dark text-500 edit-round"
        v-model="post_info.name"
        label="اسم الطبق"
        bg-color="white"
        label-color="dark"
        rounded
        required
        outlined
        disable
      />
    </div>
    <!-- /////////////////// -->
    <!-- product discruption -->
    <!-- /////////////////// -->
    <div class="q-my-sm">
      <q-input
        class="edit-round"
        input-class="text-dark text-500"
        bg-color="white"
        label="وصف"
        required
        v-model="post_info.disc"
        outlined
        type="textarea"
        placeholder="يفضل كتابة وصف للمنتج"
      />
    </div>
    <div class="row justify-between profile-info__duple-form">
      <div class="profile-info__duple-form--col">
        <!-- <div class="q-my-sm q-mr-xs text-right text-body2 text-bold">
          اسم المتجر
        </div> -->

        <q-input
          class="col edit-round"
          v-model="post_info.price"
          required
          outlined
          label="السعر"
          dense
          input-class="text-dark text-500"
          disable
          bg-color="white"
        />
      </div>
      <div class="profile-info__duple-form--col">
        <!-- <div class="q-my-sm q-mr-xs text-right text-body2 text-bold">السعر</div> -->

        <q-input
          class="col edit-round"
          label="المتجر"
          required
          outlined
          dense
          disable
          input-class="text-dark text-500"
          bg-color="white"
          v-model="post_info.vendor_name"
        />
      </div>
    </div>
    <!-- rating -->
    <div class="row q-my-md justify-around">
      <div class="col-5 text-right">جودة الطعام</div>
      <q-rating
        v-model="rate.Quality"
        dir="ltr"
        max="5"
        class="col-5"
        size="xs"
        color="#DFB300"
        icon="star_border"
        icon-selected="star"
        icon-half="star_half"
      />
      <div class="col-5 text-right">النظافة</div>
      <q-rating
        v-model="rate.Cleanliness"
        dir="ltr"
        max="5"
        class="col-5"
        size="xs"
        color="#DFB300"
        icon="star_border"
        icon-selected="star"
        icon-half="star_half"
      />
      <div class="col-5 text-right">التغليف</div>
      <q-rating
        v-model="rate.packaging"
        dir="ltr"
        max="5"
        class="col-5"
        size="xs"
        color="#DFB300"
        icon="star_border"
        icon-selected="star"
        icon-half="star_half"
        @update:model-value="getdata"
      />
    </div>
    <UploadMultibleImage
      :disable="true"
      @passImagesFile="getUploadImages"
      :orderImage="post_info.img"
    />
    <q-toggle
      class="q-my-sm"
      label="تسويق بالعموله"
      v-model="handelToggleButton"
    />
  </q-form>
</template>

<script>
import UploadMultibleImage from "../UI/UploadMultibleImage.vue";
import { ref } from "vue";
import UserImage from "../UI/UserImage.vue";

export default {
  props: {
    post_info: {
      type: Object || Proxy,
      required: true,
    },
  },
  components: {
    UserImage,
    UploadMultibleImage,
    UserImage,
  },
  setup() {
    return {
      rate: ref({
        Quality: "0",
        Cleanliness: "0",
        packaging: "0",
      }),
    };
  },
  computed: {
    handelToggleButton: {
      get() {
        return this.post_info.commission_marketing;
      },
      set(val) {
        this.$emit("passCommissionMarketing", val);
      },
    },
  },
  methods: {
    getdata() {
      this.$emit("passRating", this.rate);
    },
    deep: true,
  },
};
</script>

<style lang="scss" scoped>
.profile-info {
  background-color: white;
  padding: 10px;
  &__duple-form {
    &--col {
      width: 47%;
    }
  }
}
</style>
