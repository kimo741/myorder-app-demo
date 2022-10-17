<template>
  <div class="post relative q-my-md q-pa-sm">
    <div class="post__top">
      <!-- ///////////// -->
      <!-- personal info -->
      <!-- ///////////// -->
      <div dir="rtl" class="row justify-center">
        <div class="col flex justify-start">
          <div @click="showProfile" class="post__top-prifile bg-transparent">
            <!-- ///////////// -->
            <!-- profile image -->
            <!-- ///////////// -->
            <img :src="postInfo.img_user" alt="" />
          </div>
          <div class="text-body2">
            <!-- //// -->
            <!-- name -->
            <!-- //// -->
            <div @click="showProfile">{{ postInfo.name }}</div>
            <!-- //// -->
            <!-- date -->
            <!-- //// -->
            <div>{{ postInfo.date }}</div>
          </div>
        </div>
      </div>
    </div>

    <q-card class="my-card full-width bg-transparent no-effict">
      <!-- <div class="post__img"> -->
      <!-- ////////// -->
      <!-- disc post -->
      <!-- ////////// -->
      <div v-show="postInfo.disc !== ''" class="q-pa-md text-body2" dir="rtl">
        {{ postInfo.disc }}
      </div>
      <!-- ////////// -->
      <!-- image post -->
      <!-- ////////// -->
      <q-img :src="postInfo.img_post" class="main-rounded"> </q-img>
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
          <div v-if="parseInt(postInfo.views)" class="text-right text-body2">
            مشاهده{{ postInfo.views }}
          </div>
          <!-- //////////////// -->
          <!-- rating component -->
          <!-- //////////////// -->
          <div class="text-right">
            <q-rating
              class="text-right"
              dir="rtl"
              v-model="postInfo.rate"
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
              @click="toggleLike"
              size="md"
              flat
              class="col-1"
              :icon="like_it ? 'eva-heart' : 'eva-heart-outline'"
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
                :icon="add_to_fav ? 'star' : 'img:icon/love-2.png'"
              />
            </div>
          </div>
          <div style="direction: rtl; height: 15px">
            <!-- ///////////////////////// -->
            <!-- if post not have any like -->
            <!-- ///////////////////////// -->
            <div @click="showLiks" v-show="parseInt(postInfo.count_likes)">
              <!-- ///////////////////////////////////////////// -->
              <!-- if this post not have any like from my friend -->
              <!-- ///////////////////////////////////////////// -->
              <div v-if="friend_like_post.leangh">
                {{ postInfo.count_likes }} اعجبو بهذاالمنشر
              </div>
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
                  اعجب بواسطه اسم المطعم و {{ postInfo.count_likes }} اخرون
                </div>
              </div>
            </div>
          </div>
          <!-- //////// -->
          <!-- Comments -->
          <!-- //////// -->
          <div class="row post__comments q-my-sm q-pa-sm" dir="rtl">
            <div @click="showProfile" class="text-subtitle2 text-bold">
              {{ postInfo.comments.top_comment_user }}
            </div>
            <div class="text-caption q-ml-sm" style="color: rgba(0, 0, 0, 0.5)">
              {{ postInfo.comments.top_comment_value }}
            </div>
          </div>
          <div @click="showComment" dir="rtl" class="q-my-sm">
            مشاهدة {{ postInfo.comments.commint_count }}تعليق
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
    <q-dialog v-model="more_options">
      <MoreOptions
        @emitUnfollow="unfollowUser"
        @emitToggleLike="toggleLike"
        @emitMute="muteUser"
        @emitReport="reportUser"
      />
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import MoreOptions from "../dialogs/MoreOptions.vue";
export default {
  props: ["postInfo"],
  setup() {
    return {
      add_to_fav: ref(false),
      frinds_like: ref(false),
      like_it: ref(false),
      likes_count: ref(121),
      rating: ref(3.5),
      friend_like_post: ref([]),
      more_options: ref(false),
    };
  },
  methods: {
    moreOptions() {
      this.more_options = true;
    },
    addToCart() {},
    toggleLike() {
      this.like_it = !this.like_it;
      this.more_options = false;
    },
    addComment() {},
    showComment() {},
    sharPost() {
      this.$emit("sharePost", this.postInfo);
    },
    addToFavorits() {
      this.add_to_fav = !this.add_to_fav;
    },
    showLiks() {},
    showProfile() {},
    //////////////////////////////////
    //////////dialog/////////////////
    //////////////////////////////////
    unfollowUser() {
      this.more_options = false;
    },
    muteUser() {
      this.more_options = false;
    },
    reportUser() {
      this.more_options = false;
    },
  },
  mounted() {
    // get my friends id
    // make variabl for my friend ids
    // filter from my friend id & postInfo.likes_user_id
    // return [idd]
    //this.friend_like_post.push(data)
  },
  components: { MoreOptions },
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
