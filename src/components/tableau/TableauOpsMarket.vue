<template>
  <base-carousel :id="id" :slides="slides" :width="width" />
  <base-button
    :text="buttonTitle"
    :color="buttonColor"
    :fontColor="buttonFontColor"
    @clickButton="toggleButton"
  />
</template>

<script>
import { computed } from "vue";
import { upperFirst } from "lodash";
import BaseCarousel from "@/components/generic/BaseCarousel.vue";
import BaseButton from "@/components/generic/BaseButton.vue";

export default {
  name: "TableauOpsMarket",
  components: { BaseCarousel, BaseButton },
  props: {
    id: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "35vw",
    },
    slides: {
      type: Array,
      default: () => [],
    },
    showOneMarket: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["toggleWest", "toggleEast"],

  setup(props, context) {
    const buttonTitle = computed(() =>
      props.showOneMarket ? "Tableau" : upperFirst(props.id)
    );

    const buttonColor = computed(() =>
      props.id === "west" ? "#e9e7db" : "#171717"
    );

    const buttonFontColor = computed(() =>
      props.id === "west" ? "#4e4e49" : "#c0c0c0"
    );

    const toggleButton = () => {
      const emitted = props.id === "west" ? "toggleWest" : "toggleEast";
      context.emit(emitted);
    };

    return {
      buttonTitle,
      buttonColor,
      buttonFontColor,
      toggleButton,
    };
  },
};
</script>
