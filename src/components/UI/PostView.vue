<template>
  <div class="post relative q-pa-sm">
    <div class="post__top q-my-sm">
      <!-- ///////////// -->
      <!-- personal info -->
      <!-- ///////////// -->
      <div dir="rtl" class="row justify-center">
        <div class="col flex justify-start">
          <div @click="showProfile" class="post__top-prifile bg-transparent">
            <!-- ///////////// -->
            <!-- profile image -->
            <!-- ///////////// -->
            <q-img src="test/4.png" alt="" />
          </div>
          <div class="text-body2">
            <!-- //// -->
            <!-- name -->
            <!-- //// -->
            <div @click="showProfile">اسم المطعم</div>
            <!-- //// -->
            <!-- date -->
            <!-- //// -->
            <div>اليوم منذ 5 ساعات</div>
          </div>
        </div>
      </div>
    </div>

    <q-card class="my-card full-width bg-transparent no-effict">
      <!-- ////////// -->
      <!-- image post -->
      <!-- ////////// -->
      <!-- <div class="post__img"> -->
      <q-img src="test/1.png " class="main-rounded"> </q-img>
      <!-- </div> -->
      <q-card-actions
        class="relative no-effict full-width"
        align="right"
        style="border-radius: 14px"
      >
        <!-- /////////// -->
        <!-- ADD TO CART -->
        <!-- /////////// -->
        <q-icon
          size="xl"
          name="img:icon/add-to-cart.png"
          class="post__add-to-card"
          @click="addToCart"
        />
        <div class="full-width">
          <!-- /////////////////// -->
          <!-- views for this post -->
          <!-- /////////////////// -->
          <div class="text-right text-body2">مشاهده 1,985</div>
          <!-- //////////////// -->
          <!-- rating component -->
          <!-- //////////////// -->
          <div class="text-right">
            <q-rating
              class="text-right"
              dir="rtl"
              v-model="rating"
              max="5"
              size="1em"
              color="#DFB300"
              icon="star_border"
              icon-selected="star"
              icon-half="star_half"
              no-dimming
              disable
            />
          </div>
          <!-- //////////////////////////////////// -->
          <!-- container for like & commint & share -->
          <!-- //////////////////////////////////// -->
          <div class="row justify-start" dir="rtl">
            <!-- /////////////// -->
            <!-- button for like -->
            <!-- /////////////// -->
            <q-btn
              @click="addLike"
              size="md"
              flat
              class="col-1"
              icon="eva-heart-outline"
            />
            <!-- ////////////////// -->
            <!-- button for commint -->
            <!-- ////////////////// -->
            <q-btn
              @click="showComment"
              size="md"
              flat
              class="col-1"
              icon="comment"
            />
            <!-- //////////////// -->
            <!-- button for share -->
            <!-- //////////////// -->
            <q-btn
              @click="sharPost"
              size="md"
              flat
              class="col-1"
              icon="share"
            />
            <div class="col row justify-end">
              <q-btn
                @click="addToFavorits"
                size="md"
                flat
                icon="img:icon/love-2.png"
              />
            </div>
          </div>
          <div style="direction: rtl; height: 15px">
            <!-- ///////////////////////// -->
            <!-- if post not have any like -->
            <!-- ///////////////////////// -->
            <div @click="showLiks" v-show="likes_count">
              <!-- ///////////////////////////////////////////// -->
              <!-- if this post not have any like from my friend -->
              <!-- ///////////////////////////////////////////// -->
              <div v-if="frinds_like">{{ likes_count }} اعجبو بهذاالمنشر</div>
              <!-- ///////////////////////////////// -->
              <!-- if my firnd add like in this post -->
              <!-- ///////////////////////////////// -->
              <div class="relative handel-img" v-else>
                <div class="handel-img__1">
                  <img src="test/1.png" />
                </div>
                <div class="handel-img__2">
                  <img src="test/2.png" />
                </div>
                <div class="handel-img__3">
                  <img src="test/3.png" />
                </div>
                <div
                  class="handel-likes text-body2 q-mx-sm"
                  style="color: #888fa0; right: 28px"
                >
                  اعجب بواسطه اسم المطعم و 1900 اخرون
                </div>
              </div>
            </div>
          </div>
          <!-- //////// -->
          <!-- Comments -->
          <!-- //////// -->
          <div class="row post__comments q-my-sm q-pa-sm" dir="rtl">
            <div @click="showProfile" class="text-subtitle2 text-bold">
              اسم الشخص
            </div>
            <div class="text-caption q-ml-sm" style="color: rgba(0, 0, 0, 0.5)">
              وريم ايبسوم هو نموذج افتراضي وريم ايبسوم هو نموذج افتراضي وريم
              ايبسوم هو نموذج افتراضي وريم ايبسوم هو نموذج افتراضي وريم ايبسوم
              هو نموذج افتراضي وريم ايبسوم هو نموذج افتراضي
            </div>
          </div>
          <div @click="showComment" dir="rtl" class="q-my-sm">
            مشاهدة 15تعليق
          </div>
          <q-separator />
          <div class="row justify-between" dir="rtl">
            <div @click="addComment">
              <!-- /////////// -->
              <!-- ADD Comment -->
              <!-- /////////// -->
              <q-icon color="primary" name="edit" class="q-mr-sm" />
              <q-btn
                size="md"
                style="color: #888fa0"
                label="إضافة تعليق"
                flat
              />
            </div>
            <!-- ///// -->
            <!-- SHARE -->
            <!-- ///// -->
            <q-btn
              @click="sharPost"
              text-color="primary"
              size="md"
              label="نشر"
              flat
              color="font-hint"
            />
          </div>
        </div>
      </q-card-actions>
    </q-card>
    <!-- icon more option see it in scss  -->
    <div @click="moreOptions" dir="ltr" class="post__more"></div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {},
  setup() {
    return {
      frinds_like: ref(false),
      likes_count: ref(121),
      rating: ref(3.5),
    };
  },
  methods: {
    moreOptions() {},
    addToCart() {},
    addLike() {},
    addComment() {},
    showComment() {},
    sharPost() {},
    addToFavorits() {},
    showLiks() {},
    showProfile() {},
  },
  mounted() {
    console.log(this.$route.path == "/");
  },
};
</script>

<style lang="scss" scoped>
.post {
  width: 100%;
  border-radius: 14px;
  background-color: white;
  &__top {
    width: 100%;
    &-prifile {
      // float: right;
      position: relative;
      // scroll-snap-align: center;
      display: flex;
      align-items: center;
      height: 50px;
      width: 50px;
      font-size: 0;
      margin-right: 10px;
      background: white;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
      &::before {
        content: "";
        position: absolute;
        width: calc(100% + 6px);
        height: calc(100% + 6px);
        left: 50%;
        top: 50%;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        border: 2px solid $secondary;
      }
    }
    // &__img {
    //   overflow: hidden;
    //   width: 323px;
    //   height: 151px;
    // }
  }
  &__more {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    left: 20px;
    top: 30px;
    background: black;
    cursor: pointer;
    &::before {
      content: "";
      width: 5px;
      height: 5px;
      border-radius: 50%;
      position: absolute;
      left: 8px;
      top: 0;
      background: black;
    }
    &::after {
      content: "";
      width: 5px;
      height: 5px;
      border-radius: 50%;
      position: absolute;
      left: 16px;
      top: 0;
      background: black;
    }
  }
  &__comments {
    overflow-wrap: break-word;
  }
  &__add-to-card {
    position: absolute;
    left: 30px;
    top: -20px;
  }
}
.handel-img {
  &__1,
  &__2,
  &__3 {
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    overflow: hidden;
    right: 2px;
    top: 0;
  }
  img {
    width: 100%;
    height: 100%;
  }
  &__1 {
    z-index: 5;
  }
  &__2 {
    right: 13px;
    z-index: 3;
  }
  &__3 {
    right: 24px;
    z-index: 1;
  }
}
.handel-likes {
  margin-right: 40px;
  text-overflow: ellipsis;
  white-space: normal;
}
</style>
