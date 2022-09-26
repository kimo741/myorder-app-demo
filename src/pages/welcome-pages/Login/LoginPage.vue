<template>
  <q-page class="full-height q-px-md" dir="rtl">
    <BackAndSkip class="q-py-md" iconSrc="arrow_forward_ios" />
    <div class="text-h4">ادخل رقم الهاتف</div>
    <div class="text-body2">ادخل رقم هاتفك لانشاء حساب جديد او تسجيل دخول</div>
    <div class="q-my-lg">
      <div class="column">
        <q-input
          class="main-rounded"
          flat
          v-model="number"
          type="tel"
          hint="mobile number"
          bg-color="grey-4"
          rounded
          filled
        >
          <template v-slot:append>
            <q-select
              flat
              style="border-right: 1px solid #999"
              bg-color="transparent"
              v-model="musk"
              :options="options"
            >
              <template v-slot:append>
                <q-avatar square>
                  <img :src="musk.avatar" />
                </q-avatar>
              </template>
            </q-select>
          </template>
        </q-input>
      </div>
    </div>
  </q-page>
</template>

<script>
import BackAndSkip from "src/components/Bar/top/backAndSkip.vue";
import { ref } from "vue";
export default {
  components: { BackAndSkip },
  setup() {
    return {
      number: ref(""),
      musk: ref({
        label: "+966 ",
        value: "+966",
        avatar: "icon/flag.png",
      }),
      options: ref([
        {
          label: "+966",
          value: "+966",
          avatar: "icon/flag.png",
        },
        {
          label: "+002",
          label: "+002",
          avatar: "icon/flag.png",
        },
        {
          label: "+043",
          label: "+001",
          avatar: "icon/flag.png",
        },
      ]),
    };
  },
};
</script>

<style>
</style>
