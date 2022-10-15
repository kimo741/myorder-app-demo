<template>
  <q-page>
    <!-- //////////////// -->
    <!-- header component -->
    <!-- //////////////// -->
    <div>
      <MainNav />
    </div>
    <!-- /////////////// -->
    <!-- story component -->
    <!-- /////////////// -->
    <div class="q-my-md">
      <TopBarStotys />
    </div>
    <div class="q-px-md q-mt-md">
      <div class="q-gutter-y-md">
        <q-card class="q-pa-0 no-effict bg-transparent">
          <!-- //// -->
          <!-- taps -->
          <!-- //// -->
          <q-tabs
            v-model="tab"
            dense
            class="bg-transparent no-effict primary bg-taps"
            align="justify"
            indicator-color="transparent"
            narrow-indicator
            active-class="active-class"
          >
            <q-tab icon="explore" name="location" />
            <q-tab icon="insights" name="discovery" />
          </q-tabs>

          <q-tab-panels
            style="background: #eeeeee !important"
            class="no-effict q-my-lg"
            v-model="tab"
            animated
          >
            <!-- //////////// -->
            <!-- location tap -->
            <!-- //////////// -->
            <q-tab-panel
              class="q-pa-0 no-effict"
              style="background: #eeeeee !important"
              name="location"
            >
              <!-- posts -->
              <div class="q-my-md bg-transparent">
                <PostView
                  v-for="(post, i) in posts"
                  :postInfo="post"
                  :key="i"
                  @sharePost="sharePost"
                />
                <q-dialog full-width v-model="share_dialog" position="bottom">
                  <SharePost
                    @closeShareDialog="closeShareDialog"
                    :postdata="share_post_data"
                  />
                </q-dialog>
              </div>
            </q-tab-panel>
            <!-- ///////////// -->
            <!-- discovery tap -->
            <!-- ///////////// -->
            <q-tab-panel name="discovery"> </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import MainNav from "../components/Bar/top/MainNav.vue";
import TopBarStotys from "src/components/Stotys/TopBarStotys.vue";
import PostView from "src/components/UI/PostView.vue";
import SharePost from "../components/dialogs/SharePost.vue";
import BackAndSkip from "src/components/Bar/top/backAndSkip.vue";

export default {
  name: "IndexPage",
  components: {
    MainNav,
    TopBarStotys,
    PostView,
    SharePost,
  },
  setup() {
    return {
      tab: ref("location"),
      share_dialog: ref(false),
      share_post_data: ref(""),
      posts: ref([
        {
          id: "1",
          name: "اسم المطعم",
          img_user: "test/4.png",
          disc: "لتتلتفققف",
          date: "15/5/2022",
          img_post: "test/1.png",
          rate: "4",
          views: "0",
          count_likes: "155",
          likes_user_id: ["1", "2", "3", "4"],
          comments: {
            user_id: "2",
            top_comment_user: "اسم الشخص",
            top_comment_value:
              "وريم ايبسوم هو نموذج افتراضي وريم ايبسوم هو نموذج افتراضي وريم              ايبسوم هو نموذج افتراضي وريم ايبسوم هو نموذج افتراضي وريم ايبسومهو نموذج افتراضي وريم ايبسوم هو نموذج افتراضي",
            commint_count: "15",
          },
        },
        {
          id: "1",
          name: "اسم المطعم",
          img_user: "test/4.png",
          disc: "لتتلتفققف",
          date: "15/5/2022",
          img_post: "test/1.png",
          rate: "4",
          views: "0",
          count_likes: "155",
          likes_user_id: ["1", "2", "3", "4"],
          comments: {
            user_id: "2",
            top_comment_user: "اسم الشخص",
            top_comment_value:
              "وريم ايبسوم هو نموذج افتراضي وريم ايبسوم هو نموذج افتراضي وريم              ايبسوم هو نموذج افتراضي وريم ايبسوم هو نموذج افتراضي وريم ايبسومهو نموذج افتراضي وريم ايبسوم هو نموذج افتراضي",
            commint_count: "15",
          },
        },
        {
          id: "1",
          name: "اسم المطعم",
          img_user: "test/4.png",
          disc: "لتتلتفققف",
          date: "15/5/2022",
          img_post: "test/1.png",
          rate: "4",
          views: "0",
          count_likes: "155",
          likes_user_id: ["1", "2", "3", "4"],
          comments: {
            user_id: "2",
            top_comment_user: "اسم الشخص",
            top_comment_value:
              "وريم ايبسوم هو نموذج افتراضي وريم ايبسوم هو نموذج افتراضي وريم              ايبسوم هو نموذج افتراضي وريم ايبسوم هو نموذج افتراضي وريم ايبسومهو نموذج افتراضي وريم ايبسوم هو نموذج افتراضي",
            commint_count: "15",
          },
        },
        {
          id: "1",
          name: "اسم المطعم",
          img_user: "test/4.png",
          disc: "لتتلتفققف",
          date: "15/5/2022",
          img_post: "test/1.png",
          rate: "4",
          views: "0",
          count_likes: "155",
          likes_user_id: ["1", "2", "3", "4"],
          comments: {
            user_id: "2",
            top_comment_user: "اسم الشخص",
            top_comment_value:
              "وريم ايبسوم هو نموذج افتراضي وريم ايبسوم هو نموذج افتراضي وريم              ايبسوم هو نموذج افتراضي وريم ايبسوم هو نموذج افتراضي وريم ايبسومهو نموذج افتراضي وريم ايبسوم هو نموذج افتراضي",
            commint_count: "15",
          },
        },
        {
          id: "1",
          name: "اسم المطعم",
          img_user: "test/4.png",
          disc: "لتتلتفققف",
          date: "15/5/2022",
          img_post: "test/1.png",
          rate: "4",
          views: "0",
          count_likes: "155",
          likes_user_id: ["1", "2", "3", "4"],
          comments: {
            user_id: "2",
            top_comment_user: "اسم الشخص",
            top_comment_value:
              "وريم ايبسوم هو نموذج افتراضي وريم ايبسوم هو نموذج افتراضي وريم              ايبسوم هو نموذج افتراضي وريم ايبسوم هو نموذج افتراضي وريم ايبسومهو نموذج افتراضي وريم ايبسوم هو نموذج افتراضي",
            commint_count: "15",
          },
        },
      ]),
    };
  },
  methods: {
    closeShareDialog() {
      this.share_dialog = false;
    },
    sharePost(data) {
      this.share_dialog = true;
      this.share_post_data = data;
    },
  },
};
</script>
<style lang="scss" scoped>
.bg-taps {
  background-color: $bg_slide;
}
.active-class {
  background-color: white;
  border-radius: 10px;
  border: 1px solid $bg_slide;
}
</style>
