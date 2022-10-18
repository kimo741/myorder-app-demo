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
            class="no-effict primary bg-taps"
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
            <q-tab-panel
              class="full-height q-pa-0 no-effict"
              style="background: #eeeeee !important"
              name="discovery"
            >
              <!-- /////////////// -->
              <!-- Banner Carousel -->
              <!-- /////////////// -->
              <OffersCarousel :offers="test_carousel" />
              <!-- ///////////////////////// -->
              <!-- top Title for top product  -->
              <!-- ///////////////////////// -->
              <TitleBar @showAll="showAll" label="الأكثر تقيما" />
              <!-- //////////// -->
              <!-- top products -->
              <!-- //////////// -->
              <SlideItemH :products="products" />
              <!-- /////////////////////////////////////// -->
              <!-- top Title for slide suggest component  -->
              <!-- /////////////////////////////////////// -->
              <TitleBar class="q-my-md" @showAll="showAll" label="موصى به لك" />
              <!-- //////////////// -->
              <!-- suggest for you  -->
              <!-- //////////////// -->
              <SliderItemV :products="products" />
            </q-tab-panel>
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
import TitleBar from "src/components/UI/TitleBar.vue";
import OffersCarousel from "src/components/carousels/OffersCarousel.vue";
import SlideItemH from "src/components/UI/sliders/SlideItemH.vue";
import SliderItemV from "src/components/UI/sliders/SliderItemV.vue";

export default {
  name: "IndexPage",
  components: {
    MainNav,
    TopBarStotys,
    PostView,
    SharePost,
    TitleBar,
    OffersCarousel,
    SlideItemH,
    SliderItemV,
  },
  setup() {
    return {
      // tap
      tab: ref("location"),
      // toggle dialog for for share
      share_dialog: ref(false),
      // data for post shaing
      share_post_data: ref(""),
      // test array for posts
      posts: ref([
        {
          id: "1",
          name: "اسم المطعم",
          img_user: "test/3.png",
          disc: "وريم ايبسوم هو نموذج افتراضي وريم ايبسوم هو نموذج افتراض",
          date: "15/5/2022",
          img_post: "test/2.png",
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
          img_user: "test/1.png",
          disc: "وريم ايبسوم هو نموذج افتراضي وريم ايبسوم هو نموذج افتراض",
          date: "15/5/2022",
          img_post: "test/5.png",
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
          img_user: "test/2.png",
          disc: "وريم ايبسوم هو نموذج افتراضي وريم ايبسوم هو نموذج افتراض",
          date: "15/5/2022",
          img_post: "test/4.png",
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
      // array test product
      products: ref([
        {
          id: "1",
          img: "test/1.png",
          rating: "3",
          view: "156",
        },
        {
          id: "2",
          img: "test/2.png",
          rating: "2",
          view: "14556",
        },
        {
          id: "3",
          img: "test/3.png",
          rating: "4.5",
          view: "141",
        },
        {
          id: "4",
          img: "test/4.png",
          rating: "4",
          view: "514489",
        },
        {
          id: "5",
          img: "test/5.png",
          rating: "1",
          view: "418712",
        },
      ]),
      // aray test for carousel banner
      test_carousel: ref([
        { id: "1", image: "img/offer-50.png", lable: "عروض تصل لأكثر من 50%" },
        { id: "2", image: "test/3.png", lable: "عروض تصل لأكثر من 50%" },
        { id: "3", image: "test/4.png", lable: "عروض تصل لأكثر من 50%" },
      ]),
    };
  },
  methods: {
    closeShareDialog() {
      // toggle dialog share
      this.share_dialog = false;
    },
    sharePost(data) {
      // pass data for share
      this.share_dialog = true;
      this.share_post_data = data;
    },
  },
};
</script>
<style lang="scss" scoped>
.bg-taps {
  background: rgba(118, 118, 128, 0.12);
  border-radius: 8px !important;
}
.active-class {
  background-color: white;
  border-radius: 10px;
  border: 1px solid $bg_slide;
}
</style>
