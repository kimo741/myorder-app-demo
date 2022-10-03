<template>
  <q-page class="login-page full-height q-px-md" dir="rtl">
    <BackAndSkip
      @emitClick="previewPage"
      class="q-py-md"
      iconSrc="arrow_forward_ios"
    />
    <div class="text-h5">هلا بعودتك من جديد</div>
    <div class="text-body2">ادخل رقم هاتفك لانشاء حساب جديد او تسجيل دخول</div>
    <q-form @submit.prevent="logIn">
      <div class="q-my-lg row justify-center">
        <div class="col-10 text-center q-mx-auto">
          <q-input
            class="main-rounded q-mx-auto"
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
        </div>
        <div class="col-10 q-my-md">
          <q-input
            class="main-rounded"
            bg-color="grey-3"
            rounded
            filled
            required
            flat
            v-model="password"
            :type="isPwd ? 'password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
                standout
              />
            </template>
          </q-input>
          <div
            @click="forgitPassword"
            class="q-mt-sm text-right text-body2"
            style="color: #999"
          >
            نسيت كلمة المرور ؟
          </div>
        </div>
        <div class="col-10 q-my-sm btn-container">
          <q-btn
            type="submit"
            color="primary"
            class="main-rounded full-width q-py-sm q-my-sm"
            label="تسجيل دخول"
            unelevated
          />
          <q-btn
            @click="newRegester"
            color="primary"
            outline
            class="main-rounded full-width q-pt-sm q-my-sm"
            label="تسجيل جديد"
            unelevated
          />

          <div
            @click="openAsGust"
            class="q-my-sm text-center text-body2"
            style="color: #999"
          >
            الدخول كزائر
          </div>
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import BackAndSkip from "src/components/Bar/top/backAndSkip.vue";
import { ref } from "vue";
export default {
  components: { BackAndSkip },
  setup() {
    return {
      password: ref(""),
      isPwd: ref(true),
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
    previewPage() {},
    logIn() {
      // this.$router.push({
      //   name: "verification",
      //   params: {
      //     phone: this.number,
      //   },
      // });
    },
    newRegester() {},
    forgitPassword() {},
    openAsGust() {},
    onItemClick(mask) {
      this.musks = mask;
    },
  },
};
</script>

<style>
</style>
