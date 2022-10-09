<template>
  <div class="upload-image">
    <input class="input" ref="input" @change="changeImag" type="file" />
    <div class="text-subtitle1"></div>
    <div class="img-container card-round q-mx-auto">
      <q-avatar
        style="color: white; zoom: 90%; z-index: 5"
        color="primary"
        class="img-action"
        size="xs"
        ><q-icon size="xs" name="add" />
      </q-avatar>
      <q-img
        style="z-index: 1"
        :width="imgWidth"
        :height="imgHeight"
        @click="clickFileInput"
        class="img"
        :src="src"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: "",
    },
    imgWidth: {
      type: String,
      default: "80px",
    },
    imgHeight: {
      type: String,
      default: "80px",
    },
  },
  data() {
    return {
      src: "avatar/no-profile-img.png",
    };
  },
  watch: {
    imgSrc(val) {
      if (val) {
        this.src = this.imgSrc;
      } else {
        this.src = "placeholder-image.png";
      }
    },
  },
  methods: {
    changeImag(event) {
      const allwoedType = [
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/webp",
      ];
      const file = event.target.files[0];
      if (allwoedType.indexOf(file.type) !== -1) {
        var imgData = new FileReader();
        imgData.readAsDataURL(file);
        imgData.onload = (e) => {
          this.src = e.target.result;
          this.$emit("uploadFile", file);
        };
      } else {
        this.$q.notify({
          message:
            "Sorry! You can't upload image With " + file.type + " Extension",
          color: "red",
        });
      }
    },
    clickFileInput() {
      const input = this.$refs.input;
      input.click();
    },
  },
};
</script>
<style lang="scss" scoped>
.upload-image {
  position: relative;
  overflow: hidden;
  .input {
    position: absolute;
    transform: translateX(101%);
  }
  .img-container {
    position: relative;
    width: max-content;
    .img-action {
      position: absolute;
      right: 0px;
      bottom: 10px;
    }
    .img {
      cursor: pointer;
      border-radius: 50% !important;
      // clip-path: circle(50%);
    }
  }
}
</style>
