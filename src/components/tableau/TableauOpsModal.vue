<template>
    <div class="modal-backdrop" @click="closeModal" v-if="showModal" />
    <fade-in-out entry="center" exit="center" :duration="800" appear>
        <div class="modal-container">
            <div @click="closeModal">
                <span class="close-sand">+</span>
            </div>
            <div class="modal-content" :style="imageStyle" />
        </div>
    </fade-in-out>
</template>

<script>
import { defineComponent, computed } from "vue";
import { FadeInOut } from "vue3-transitions";

export default defineComponent({
    name: "TableauOpsModal",
    components: { FadeInOut },
    props: {
        imageName: {
            type: String,
            default: "",
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
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                borderRadius: "20px !important",
            };
        });

        return { closeModal, imageStyle };
    },
});
</script>

<style lang="scss" scoped>
@import "./../../assets/colors.scss";

.modal-container {
    overflow: hidden;
    position: fixed;
    left: 20%;
    top: 1%;
    width: 58vw !important;
    height: 98vh !important;
    z-index: 1500;
    border-radius: 20px !important;
    box-shadow: inset 0px 12px 27px 5px $sandColor;
}

.modal-content {
    overflow-y: auto;
    position: fixed;
    left: 21%;
    top: 2%;
    min-width: 500px;
    min-height: 500px;
    width: 55vw !important;
    height: 96vh !important;
    z-index: 2000;
    border-radius: 20px !important;
}

</style>
