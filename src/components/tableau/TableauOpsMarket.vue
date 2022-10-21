<template>
    <div class="tableau-button" :style="buttonStyle">
        <base-button
            v-if="showButton"
            :text="buttonTitle"
            :color="buttonColor"
            :fontColor="buttonFontColor"
            @clickButton="toggleButton"
        />
    </div>
    <tableau-ops-carousel
        :id="id"
        :slides="slides"
        :width="width"
        :align="alignMarket"
        :showOneMarket="showOneMarket"
    />
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";
import { upperFirst } from "lodash";
import TableauOpsCarousel from "@/components/tableau/TableauOpsCarousel.vue";
import BaseButton from "@/components/generic/BaseButton.vue";
import { REGION } from "@/constants/enums";

const props = defineProps ({
    id: String,
    width: String,
    slides: Array,
    showOneMarket: Boolean,
    market: String,
});

const emit = defineEmits(["toggleWest", "toggleEast"]);

// buttons
const toggleButton = () => {
    const emitted = props.id === "west" ? "toggleWest" : "toggleEast";
    emit(emitted);
};
const showButton = computed(() => props.slides.length > 0);
const buttonTitle = computed(() =>
    props.showOneMarket ? "Back to Tableau" : `Show only ${upperFirst(props.id)}`
);
const buttonColor = computed(() =>
    props.id === "west" ? "#e9e7db" : "#171717"
);
const buttonFontColor = computed(() =>
    props.id === "west" ? "#4e4e49" : "#c0c0c0"
);
const alignMarket = computed(() => props.market === REGION.WEST ? "flex-end" : "flex-start");
const buttonStyle = computed(() => {
    let margin = "0 0";
    if (!props.showOneMarket) {
        if (props.id === "west") {
            margin = "0 17px";
        } else {
            margin = "0 5px";
        }
    }
    return {
        display: "flex",
        "justify-content": props.showOneMarket ? "flex-start" : `${alignMarket.value} !important`,
        margin,
    }
})
</script>
