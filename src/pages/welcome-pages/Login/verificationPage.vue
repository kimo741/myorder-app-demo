<template>
  <q-page class="full-height q-px-md" dir="rtl">
    <BackAndSkip class="q-py-md" iconSrc="arrow_forward_ios" />
    <div class="text-h4 text-bold">التحقق من رقم الهاتف</div>
    <div class="text-body2">
      ستصلك رسالة نصية برمز التحقق علي رقم {{ phone_num }}
    </div>
    <q-form
      dir="ltr"
      @submit.prevent="vifred"
      class="row items-center justify-around"
    >
      <!-- //////////////////////// -->
      <!-------- input firs key ------>
      <!-- //////////////////////// -->
      <q-input
        class="text-center col-2 text-h3"
        :input-style="{ textAlign: 'center' }"
        ref="input1"
        filled
        v-model="ids.id1"
        maxlength="1"
        rounded
        required
        @keyup="changeToTow"
      />
      <!-- //////////////////////// -->
      <!-------- input key (2) ------->
      <!-- //////////////////////// -->
      <q-input
        class="text-center text-h3 col-2"
        :autofocus="fucas_num == '2'"
        filled
        v-model="ids.id2"
        :input-style="{ textAlign: 'center' }"
        ref="input2"
        maxlength="1"
        required
        rounded
        @keyup="changeToThre"
      />
      <!-- //////////////////////// -->
      <!-------- input key (3) ------->
      <!-- //////////////////////// -->
      <q-input
        class="text-center text-h3 col-2"
        maxlength="1"
        ref="input3"
        required
        filled
        v-model="ids.id3"
        :input-style="{ textAlign: 'center' }"
        rounded
        @keyup="changeToFour"
      />
      <!-- //////////////////////// -->
      <!-------- input key (4) ------->
      <!-- //////////////////////// -->

      <q-input
        class="text-center text-h3 col-2"
        filled
        ref="input4"
        required
        v-model="ids.id4"
        :input-style="{ textAlign: 'center' }"
        maxlength="1"
        rounded
        @keyup="doneVifr"
      />
      <div class="col-10 q-my-sm btn-container">
        <q-btn
          type="submit"
          color="primary"
          class="main-rounded full-width q-py-sm q-my-sm"
          label="تحقق"
        />
      </div>
    </q-form>
    <div v-if="!time_out" class="col-11 q-my-sm">
      <span class="text-body2">لم تتلق رمز ؟</span>
      <span class="q-px-md text-caption text-grey-5"
        >اعادوة الأرسال {{ min }}:{{ suc }}</span
      >
    </div>
    <div v-else class="col-11 q-my-sm">
      <span class="text-body2" @click="resendCode">اعد الأرسال</span>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import BackAndSkip from "src/components/Bar/top/backAndSkip.vue";
export default {
  components: { BackAndSkip },
  setup() {
    return {
      phone_num: ref(""),
      ids: ref({
        id1: "",
        id2: "",
        id3: "",
        id4: "",
      }),
      suc: ref(59),
      min: ref(1),
      time_out: ref(false),
    };
  },
  watch: {
    suc(val) {
      if (val !== 0) {
        setTimeout(() => {
          this.suc--;
        }, 1000);
      } else if (!val && !this.min) {
        this.time_out = true;
      } else {
        this.suc = 59;
        this.min--;
      }
    },
  },
  computed: {
    mergeInputs() {
      return this.ids.id1 + this.ids.id2 + this.ids.id3 + this.ids.id4;
    },
  },
  mounted() {
    this.suc--;
    this.phone_num = this.$route.params.phone;
  },
  methods: {
    changeToTow() {
      this.$refs.input2.$el.focus();
      // this.fucas_num = "2";
    },
    changeToThre() {
      // this.fucas_num = "3";
      this.$refs.input3.$el.focus();
    },
    changeToFour() {
      // this.fucas_num = "4";
      this.$refs.input4.$el.focus();
    },
    doneVifr() {
      // supmit
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
