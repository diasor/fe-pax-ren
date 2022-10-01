<template>
  <div class="modal-backdrop" @click="closeModal" v-if="showModal" />
  <fade-in-out entry="center" exit="center" :duration="800" appear>
    <div :class="containerClass">
      <div @click="closeModal">
        <span class="close">+</span>
      </div>
      <div :class="contentClass" :style="imageStyle" />
    </div>
  </fade-in-out>
</template>

<script>
import { defineComponent, computed } from "vue";
import { FadeInOut } from "vue3-transitions";

export default defineComponent({
  name: "MapCardModal",
  components: { FadeInOut },
  props: {
    imageName: {
      type: String,
      default: "",
    },
    imageType: {
      type: String,
      default: "square",
    },
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["closeModal"],
  setup(props, { emit }) {
    const closeModal = () => {
      emit("closeModal");
    };

    const imageStyle = computed(() => {
      return {
        backgroundImage: `url("${props.imageName}")`,
        overflow: "hidden",
        backgroundPosition: "center",
        backgroundSize: "cover",
      };
    });
    const image = computed(() => props.imageName);
    const containerClass = computed(() =>
      props.imageType === "square"
        ? "modal-container-square"
        : "modal-container"
    );

    const contentClass = computed(() =>
      props.imageType === "square" ? "modal-content-square" : "modal-content"
    );

    return { closeModal, imageStyle, image, containerClass, contentClass };
  },
});
</script>

<style lang="scss" scoped>
@import "./../../assets/colors.scss";
.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 999;
}

.close {
  font-family: "Mrs_Sheppards" !important;
  float: right;
  padding-right: 7px !important;
  font-size: 40px;
  font-weight: 600;
  display: inline-block;
  transform: rotate(45deg);
  color: $sandColor;
  cursor: pointer;
}

.modal-container {
  overflow: hidden;
  position: fixed;
  left: 34%;
  top: 5%;
  width: 30.5vw !important;
  height: 91vh !important;
  z-index: 1500;
  border-radius: 20px !important;
  box-shadow: inset 0px 12px 27px 5px $sandColor;
}

.modal-content {
  overflow-y: auto;
  position: fixed;
  left: 35.5%;
  top: 8%;
  min-width: 300px;
  min-height: 300px;
  width: 27vw !important;
  height: 85vh !important;
  z-index: 2000;
  border-radius: 20px !important;
}

.modal-container-square {
  overflow: hidden;
  position: fixed;
  left: 34%;
  top: 12%;
  width: 42vw !important;
  height: 81vh !important;
  z-index: 1500;
  border-radius: 20px !important;
  box-shadow: inset 0px 12px 27px 5px $sandColor;
}

.modal-content-square {
  overflow-y: auto;
  position: fixed;
  left: 35.5%;
  top: 15%;
  min-width: 300px;
  min-height: 300px;
  width: 38vw !important;
  height: 75vh !important;
  z-index: 2000;
  border-radius: 20px !important;
}
</style>
