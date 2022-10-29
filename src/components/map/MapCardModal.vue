<template>
    <div class="modal-backdrop" @click="closeModal" v-if="showModal" />
    <fade-in-out entry="center" exit="center" :duration="800" appear>
        <div :class="containerClass">
            <div @click="closeModal">
                <span class="close-sand">+</span>
            </div>
            <div v-if="isEngland" class="modal-content-zoom">
                <zoom-cards :cardId="cardId" />
            </div>
            <div v-else :class="contentClass" :style="imageStyle" />
        </div>
    </fade-in-out>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";
import ZoomCards from "./zoom/ZoomCards.vue";
import { FadeInOut } from "vue3-transitions";

const props = defineProps({
    imageName: String,
    imageType: String,
    showModal: Boolean,
    cardId: String,
});

const isEngland = computed(() => (props.cardId === "EN" || props.cardId === "FR"));

const emit = defineEmits(["closeModal"]);

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
const containerClass = computed(() => {
    if (isEngland.value) {
        return "modal-container-zoom"
    } else {
        return props.imageType === "square"
            ? "modal-container-square"
            : "modal-container";
    }
});

const contentClass = computed(() =>
    props.imageType === "square"
        ? "modal-content-square"
        : "modal-content"
);
</script>

<style lang="scss" scoped>
@import "./../../assets/colors.scss";

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
.modal-container-zoom {
    position: fixed;
    width: 550px !important;
    height: 660px !important;

    // centered
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    z-index: 1500;
    border-radius: 20px !important;
    box-shadow: inset 0px 12px 27px 15px $sandColor;
}

.modal-content-zoom {
    overflow: hidden;
    position: fixed;
    width: 500px !important;
    height: 600px !important;

    // centered
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    z-index: 1500;
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
