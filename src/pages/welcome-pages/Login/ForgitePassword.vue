<template>
  <q-page class="full-height q-px-md" dir="rtl">
    <BackAndSkip
      @emitClick="previewPage"
      class="q-py-md"
      iconSrc="arrow_forward_ios"
    />
    <div class="text-h5">نسيت كلمة المرور</div>
    <div class="text-body2">أدخل رقم الجوال لارسال كود التحقق دخول</div>
    <q-form class="q-my-lg row" @submit.prevent="sendVifrCode">
      <q-input
        class="col-11 main-rounded q-mx-auto"
        flat
        v-model="number"
        type="number"
        bg-color="grey-3"
        rounded
        required
        filled
      >
        <template v-slot:append>
          <q-btn-dropdown
            dir="ltr"
            dense
            flat
            push
            no-caps
            class="border-right"
          >
            <template v-slot:label>
              <div class="row items-center no-wrap">
                <img :src="musks.avatar" />
                <div class="text-center q-mx-sm">{{ musks.label }}</div>
              </div>
            </template>
            <!-- <q-img :src="musks.avatar" /> -->

            <q-list>
              <q-item
                v-for="(musk, i) in options"
                :key="i"
                clickable
                v-close-popup
                @click="onItemClick(musk)"
              >
                <q-item-section>
                  <q-item-label>{{ musk.label }}</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <!-- <q-avatar :url="musk.avatar" text-color="white" /> -->
                  <img :src="musk.avatar" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </template>
      </q-input>
      <div class="col-11 q-mx-auto q-my-lg">
        <q-btn
          type="submit"
          color="primary"
          class="main-rounded full-width q-py-sm q-my-md"
          label="متابعة"
          unelevated
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { ref } from "vue";
import BackAndSkip from "src/components/Bar/top/backAndSkip.vue";
export default {
  components: { BackAndSkip },
  setup() {
    return {
      number: ref(""),
      musks: ref({
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
  methods: {
    sendVifrCode() {},
  },
};
</script>

<style>
</style>
