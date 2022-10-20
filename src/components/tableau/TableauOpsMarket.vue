<template>
    <base-button
        v-if="showButton"
        :text="buttonTitle"
        :color="buttonColor"
        :fontColor="buttonFontColor"
        @clickButton="toggleButton"
    />
    <base-carousel
        :id="id"
        :slides="slides"
        :width="width"
        :align="alignMarket"
        @showVassals="setVassalsData"
    />
    <tableau-ops-vassals
        v-if="showVassals"
        :showVassals="showVassals"
        :cardId="cardId"
        :vassals="vassalFiles"
        :vassalsXPosition="vassalCoordX"
        :vassalsFullXPosition="vassalFullCoordX"
        :vassalsWidth="vassalWidth"
        :showOneMarket="showOneMarket"
    />
</template>

<script setup>
import { defineProps, defineEmits, computed, ref } from "vue";
import { upperFirst } from "lodash";
import TableauOpsVassals from "./TableauOpsVassals.vue";
import BaseCarousel from "@/components/generic/BaseCarousel.vue";
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

// coordinates for vassals
let vassalCoordX = ref(0);
let vassalFullCoordX = ref(0);
let vassalWidth = ref(0);
let showVassals = ref(false);
let cardId = ref("");
let vassalFiles = ref([]);
const resetVassal = () => {
    cardId.value = "";
    vassalFiles.value = [];
    showVassals.value = false;
};

const setVassalsData = (data) => {
    cardId.value = data.cardId;
    showVassals.value = false;
    vassalCoordX.value = data.left;
    vassalFullCoordX.value = data.nextLeft;
    vassalWidth.value = data.width;
    vassalFiles.value = data.vassals;
    showVassals.value = true;
};

// buttons
const toggleButton = () => {
    resetVassal();
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

// card alignment
const alignMarket = computed(() => props.market === REGION.WEST ? "flex-end" : "flex-start");
</script>
