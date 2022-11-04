<template>
    <img v-if="papalStatesCard.show" :src="papalStatesCard.file" :style="papalStatesCard.style" />

    <!-- cities -->
    <img v-if="veniceCard.show" :src="veniceCard.file" :style="veniceCard.style" />

    <!-- borders -->
    <img v-if="border4Card.show" :src="border4Card.file" :style="border4Card.style" />
    <img v-if="border11Card.show" :src="border11Card.file" :style="border11Card.style" />
    <img v-if="border12Card.show" :src="border12Card.file" :style="border12Card.style" />
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { COUNTRY_CODES, CARD_TYPE, CITY_NAMES, CARD_POSITION } from "@/constants/enums";
import { useStore } from "vuex";
import { useCard } from "@/composables/card";
import { usePirate } from "@/composables/pirate";

const PAPAL_STATES = `${COUNTRY_CODES.PAPAL_STATES}-zoom`;
const VENICE = `${CITY_NAMES.VENICE}-zoom`;

// card informantion
const store = useStore();
const card = computed(() => store.getters["kingdoms/getPapalStates"]);
const papalStatesCard = ref({
    ...card.value,
    cardId: COUNTRY_CODES.PAPAL_STATES,
    cardType: CARD_TYPE.KINGDOM_ZOOM,
    cardReligion: card.value.religion,
    cardGovernment: card.value.government,
    cardMarkerId: PAPAL_STATES,
});

// cities (Venice)
const { cardFile, cardZoomDynamicStyle, showPiece } = useCard();
const veniceCard = ref({
    cardId: VENICE,
    cardMarkerId: VENICE,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.VENICE,
    show: false,
});

// // borders
const { buildBorder, isOccupied } = usePirate();
const border4 = computed(() => store.getters["borders/getBorder4"]);
const border11 = computed(() => store.getters["borders/getBorder11"]);
const border12 = computed(() => store.getters["borders/getBorder12"]);

const border4Card = ref({
    cardType: CARD_TYPE.BORDER,
    cardPosition: CARD_POSITION.HORIZONTAL,
});
const border11Card = ref({
    cardType: CARD_TYPE.BORDER,
    cardPosition: CARD_POSITION.VERTICAL,
});
const border12Card = ref({
    cardType: CARD_TYPE.BORDER,
    cardPosition: CARD_POSITION.VERTICAL,
});

// map card ref
let papalStateZoom = ref(null);
onMounted(() => {
    papalStateZoom.value = document.getElementById("papal-states-zoom");
    if (papalStateZoom.value !== null && papalStateZoom.value !== null) {
        // Papal States card
        papalStatesCard.value.file = cardFile(papalStatesCard.value);
        papalStatesCard.value.style = cardZoomDynamicStyle(papalStatesCard.value);
        papalStatesCard.value.show = true;

        // Venice card
        veniceCard.value.file = cardFile(veniceCard.value);
        veniceCard.value.style = cardZoomDynamicStyle(veniceCard.value);
        veniceCard.value.show = showPiece(card.value.cities.VENICE);

        // border 4: France - Aragon
        border4Card.value = buildBorder(
            border4.value,
            CARD_POSITION.HORIZONTAL,
            true
        );
        border4Card.value.file = cardFile(border4Card.value);
        border4Card.value.style = cardZoomDynamicStyle(border4Card.value);
        border4Card.value.show = isOccupied(border4.value.occupiedBy);
        // border 11: Aragon - Papal States
        border11Card.value = buildBorder(
            border11.value,
            CARD_POSITION.VERTICAL,
            true
        );
        border11Card.value.file = cardFile(border11Card.value);
        border11Card.value.style = cardZoomDynamicStyle(border11Card.value);
        border11Card.value.show = isOccupied(border11.value.occupiedBy);

        // border 12: Aragon - Papal States
        border12Card.value = buildBorder(
            border12.value,
            CARD_POSITION.VERTICAL,
            true
        );
        border12Card.value.file = cardFile(border12Card.value);
        border12Card.value.style = cardZoomDynamicStyle(border12Card.value);
        border12Card.value.show = isOccupied(border12.value.occupiedBy);

    }
});
</script>
