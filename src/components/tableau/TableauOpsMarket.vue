<template>
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
    <base-button
        v-if="showButton"
        :text="buttonTitle"
        :color="buttonColor"
        :fontColor="buttonFontColor"
        @clickButton="toggleButton"
    />
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { upperFirst } from "lodash";
import TableauOpsVassals from "./TableauOpsVassals.vue";
import BaseCarousel from "@/components/generic/BaseCarousel.vue";
import BaseButton from "@/components/generic/BaseButton.vue";
import { REGION } from "@/constants/enums";

export default defineComponent({
    name: "TableauOpsMarket",
    components: { TableauOpsVassals, BaseCarousel, BaseButton },
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
        market: {
            type: String,
            default: REGION.EAST,
        },
    },

    emits: ["toggleWest", "toggleEast"],

    setup(props, context) {
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

        const toggleButton = () => {
            resetVassal();
            const emitted = props.id === "west" ? "toggleWest" : "toggleEast";
            context.emit(emitted);
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
        return {
            showButton,
            buttonTitle,
            buttonColor,
            buttonFontColor,
            toggleButton,
            setVassalsData,
            cardId,
            showVassals,
            vassalCoordX,
            vassalFullCoordX,
            vassalWidth,
            vassalFiles,
            alignMarket,
        };
    },
});
</script>
