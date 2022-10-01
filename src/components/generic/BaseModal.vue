<template>
  <b-modal
    :title="title"
    v-model="renderModal"
    hide-footer
    ref="modalCard"
    @hidden="closeModal"
  >
    <div class="mt-1">
      <b-img
        :src="imageName"
        rounded
        center
        :alt="title"
        class="object-center"
      />
    </div>
  </b-modal>
</template>

<script>
import { ref } from "vue";

export default {
  name: "BaseModal",
  props: {
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
  },

  emits: ["closeModal"],

  setup(props, context) {
    let renderModal = ref(props.showModal);

    const closeModal = () => {
      renderModal.value = false;
      context.emit("closeModal");
    };

    return { closeModal, renderModal };
  },
};
</script>
