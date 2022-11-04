<template>
    <img v-if="aragonCard.show" :src="aragonCard.file" :style="aragonCard.style" />

    <!-- cities -->
    <img v-if="valenciaCard.show" :src="valenciaCard.file" :style="valenciaCard.style" />
    <img v-if="algiersCard.show" :src="algiersCard.file" :style="algiersCard.style" />
    <img v-if="timbuktuCard.show" :src="timbuktuCard.file" :style="timbuktuCard.style" />

    <!-- borders -->
    <img v-if="border4Card.show" :src="border4Card.file" :style="border4Card.style" />
    <img v-if="border10Card.show" :src="border10Card.file" :style="border10Card.style" />
    <img v-if="border11Card.show" :src="border11Card.file" :style="border11Card.style" />
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { COUNTRY_CODES, CARD_TYPE, CITY_NAMES, CARD_POSITION } from "@/constants/enums";
import { useStore } from "vuex";
import { useCard } from "@/composables/card";
import { usePirate } from "@/composables/pirate";

const ARAGON = `${COUNTRY_CODES.ARAGON}-zoom`;
const VALENCIA = `${CITY_NAMES.VALENCIA}-zoom`;
const ALGIERS = `${CITY_NAMES.ALGIERS}-zoom`;
const TIMBUKTU = `${CITY_NAMES.TIMBUKTU}-zoom`;

// card informantion
const store = useStore();
const card = computed(() => store.getters["kingdoms/getAragon"]);
const aragonCard = ref({
    ...card.value,
    cardId: COUNTRY_CODES.ARAGON,
    cardType: CARD_TYPE.KINGDOM_ZOOM,
    cardReligion: card.value.religion,
    cardGovernment: card.value.government,
    cardMarkerId: ARAGON,
});

// cities (Paris, Bruges and Lyon)
const { cardFile, cardZoomDynamicStyle, showPiece } = useCard();
const valenciaCard = ref({
    cardId: VALENCIA,
    cardMarkerId: VALENCIA,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.VALENCIA,
    show: false,
});
const algiersCard = ref({
    cardId: ALGIERS,
    cardMarkerId: ALGIERS,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.ALGIERS,
    show: false,
});
const timbuktuCard = ref({
    cardId: TIMBUKTU,
    cardMarkerId: TIMBUKTU,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.TIMBUKTU,
    show: false,
});

// borders
const { buildBorder, isOccupied } = usePirate();
const border4 = computed(() => store.getters["borders/getBorder4"]);
const border10 = computed(() => store.getters["borders/getBorder10"]);
const border11 = computed(() => store.getters["borders/getBorder11"]);
const border4Card = ref({
    cardType: CARD_TYPE.BORDER,
    cardPosition: CARD_POSITION.HORIZONTAL,
});
const border10Card = ref({
    cardType: CARD_TYPE.BORDER,
    cardPosition: CARD_POSITION.VERTICAL,
});
const border11Card = ref({
    cardType: CARD_TYPE.BORDER,
    cardPosition: CARD_POSITION.VERTICAL,
});

// map card ref
let aragonZoom = ref(null);
onMounted(() => {
    aragonZoom.value = document.getElementById("aragon-zoom");
    if (aragonZoom.value !== null && aragonZoom.value !== null) {
        // Aragon card
        aragonCard.value.file = cardFile(aragonCard.value);
        aragonCard.value.style = cardZoomDynamicStyle(aragonCard.value);
        aragonCard.value.show = true;

        // Valencia card
        valenciaCard.value.file = cardFile(valenciaCard.value);
        valenciaCard.value.style = cardZoomDynamicStyle(valenciaCard.value);
        valenciaCard.value.show = showPiece(card.value.cities.VALENCIA);

        // Algiers card
        algiersCard.value.file = cardFile(algiersCard.value);
        algiersCard.value.style = cardZoomDynamicStyle(algiersCard.value);
        algiersCard.value.show = showPiece(card.value.cities.ALGIERS);

        // Timbuktu card
        timbuktuCard.value.file = cardFile(timbuktuCard.value);
        timbuktuCard.value.style = cardZoomDynamicStyle(timbuktuCard.value);
        timbuktuCard.value.show = showPiece(card.value.cities.TIMBUKTU);

        // border 4: France - Aragon
        border4Card.value = buildBorder(
            border4.value,
            CARD_POSITION.HORIZONTAL,
            true
        );
        border4Card.value.file = cardFile(border4Card.value);
        border4Card.value.style = cardZoomDynamicStyle(border4Card.value);
        border4Card.value.show = isOccupied(border4.value.occupiedBy);

        // border 10: Portugal - Aragon
        border10Card.value = buildBorder(
            border10.value,
            CARD_POSITION.VERTICAL,
            true
        );
        border10Card.value.file = cardFile(border10Card.value);
        border10Card.value.style = cardZoomDynamicStyle(border10Card.value);
        border10Card.value.show = isOccupied(border10.value.occupiedBy);

        // border 11: Aragon - Papal States
        border11Card.value = buildBorder(
            border11.value,
            CARD_POSITION.VERTICAL,
            true
        );
        border11Card.value.file = cardFile(border11Card.value);
        border11Card.value.style = cardZoomDynamicStyle(border11Card.value);
        border11Card.value.show = isOccupied(border11.value.occupiedBy);
    }
});
</script>
