<template>
    <base-carousel
        :id="id"
        :slides="slides"
        :width="width"
        @showVassals="setVassalsDimensions"
    />
    <tableau-ops-vassals
        v-if="showVassals"
        :cardId="cardId"
        :vassals="westVassals"
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
    },

    emits: ["toggleWest", "toggleEast"],

    setup(props, context) {
        const showButton = computed(() => props.slides.length > 0);

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
            showVassals.value = false;
        };
        const eastVassals = [
            "/images/Empire card17.png",
            "/images/Empire card15.png",
            "/images/Empire card13.png",
        ];
        const westVassals = [
            "/images/Empire card9.png",
            "/images/Empire card11.png",
            "/images/Empire card3.png",
            "/images/Empire card1.png",
        ];

        let vassalCoordX = ref(0);
        let vassalFullCoordX = ref(0);
        let vassalWidth = ref(0);
        let showVassals = ref(false);
        let cardId = ref(0);
        const setVassalsDimensions = (dimensions) => {
            cardId.value = dimensions.cardId;
            showVassals.value = false;
            vassalCoordX.value = dimensions.left;
            vassalFullCoordX.value = dimensions.nextLeft;
            vassalWidth.value = dimensions.width;
            showVassals.value = true;
        };
        return {
            showButton,
            buttonTitle,
            buttonColor,
            buttonFontColor,
            toggleButton,
            eastVassals,
            westVassals,
            setVassalsDimensions,
            cardId,
            showVassals,
            vassalCoordX,
            vassalFullCoordX,
            vassalWidth,
        };
    },
});
</script>
