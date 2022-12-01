<template>
  <q-card class="share-dailog q-py-lg" dir="rtl">
    <q-list class="q-py-md" dense>
      <q-item>
        <q-item-section avatar>
          <q-avatar icon="img:icon/add-rounded.png" />
        </q-item-section>
        <q-item-label class="text-hint text-body2 q-my-auto text-center">
          المشاركة إلي قصتي</q-item-label
        >
      </q-item>
      <q-item>
        <q-item-section avatar>
          <q-avatar icon="img:icon/share.png" />
        </q-item-section>
        <q-item-label class="text-hint q-my-auto text-center">
          المشاركة خلال</q-item-label
        >
      </q-item>
      <q-item class="row q-mx-md justify-between">
        <div>
          <q-icon
            @click="facebookShare"
            size="md"
            name="img:icon/facebook-round.png"
          />
        </div>
        <div>
          <q-icon
            @click="twitterShare"
            size="md"
            name="img:icon/twitter-round.png"
          />
        </div>
        <div>
          <q-icon
            @click="instagramShare"
            size="md"
            name="img:icon/instagram-round.png"
          />
        </div>
        <div>
          <q-icon
            @click="linkedinShare"
            size="md"
            name="img:icon/linkedin-round.png"
          />
        </div>
        <div>
          <q-icon
            @click="whatsappShare"
            size="md"
            name="img:icon/whatsapp-round.png"
          />
        </div>
        <div>
          <q-icon
            @click="telegramShare"
            size="md"
            name="img:icon/telegram-round.png"
          />
        </div>
        <div>
          <q-icon
            @click="dropboxShare"
            size="md"
            name="img:icon/dropbox-round.png"
          />
        </div>
      </q-item>
      <q-item>
        <q-item-section avatar>
          <q-avatar size="sm" icon="img:icon/copy-link.png" />
        </q-item-section>
        <q-item-label class="text-hint q-my-auto text-center"
          >يمكنك نسخ الرابط
        </q-item-label>
      </q-item>
      <q-item>
        <q-item-section>
          <div
            style="background-color: rgba(232, 232, 232, 0.5)"
            class="row justify-between main-rounded q-pa-sm"
          >
            <div class="col-3">
              <q-btn
                class="main-rounded full-width"
                color="primary"
                label="نسخ"
                @click.stop.prevent="copyPostUrl"
              />
            </div>
            <div class="col-8 q-my-auto">
              <div class="row justify-between">
                <div
                  id="testing-code"
                  class="col-10 text-right handel_overflow text-hint"
                >
                  my-order://{{ supDomain }}/{{ postdata.id }}
                </div>
                <div class="col-2 text-center">
                  <q-icon name="img:icon/link-copy.png" />
                </div>
              </div>
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
    <q-btn
      @click="$emit('closeShareDialog')"
      size="sm"
      flat
      icon="close"
      color="dark"
      class="share-dailog__close"
    />
  </q-card>
</template>

<script>
import { copyToClipboard } from "quasar";
export default {
  // props: ["postdata"],
  props: {
    postdata: {
      type: String || Number,
      required: false,
    },
    supDomain: {
      type: String,
      default: "post",
    },
  },

  methods: {
    facebookShare() {},
    twitterShare() {},
    instagramShare() {},
    linkedinShare() {},
    whatsappShare() {},
    telegramShare() {},
    dropboxShare() {},
    copyPostUrl() {
      copyToClipboard(`my-order://post/${this.postdata.id}`)
        .then(() => {
          this.$q.notify({
            message: "تم نسخ رابط المنشور",
            color: "green",
          });
        })
        .catch(() => {
          this.$q.notify({
            message: "لم يتم نسخ المنشور",
            color: "red",
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.share-dailog {
  border-radius: 16px 16px 0 0 !important;
  width: 100%;
  &__close {
    position: absolute;
    right: 20px;
    top: 5px;
    width: 30px;
    height: 30px;
  }
}
.handel_overflow {
  overflow-wrap: normal;
  white-space: nowrap;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}
</style>
