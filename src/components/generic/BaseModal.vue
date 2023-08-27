<template>
    <b-modal
        :title="props.title"
        v-model="renderModal"
        hide-footer
        ref="modalCard"
        data-testid="modal-container"
        @hidden="closeModal"
    >
        <div class="mt-1">
            <b-img
                :src="props.imageName"
                rounded
                center
                :alt="props.title"
                class="object-center"
                data-testid="modal-image"
            />
        </div>
    </b-modal>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

const props = defineProps({
    title: {
        type: String,
        default: "",
    },
    imageName: {
        type: String,
        default: "",
    },
    showModal: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(["closeModal"]);
let renderModal = ref(props.showModal);

const closeModal = () => {
    renderModal.value = false;
    emit("closeModal");
};
</script>
