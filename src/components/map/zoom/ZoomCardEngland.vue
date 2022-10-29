<template>
    <img
        v-if="englandCard.show"
        :src="englandCard.file"
        :style="englandCard.style"
    />

    <!-- cities -->
    <img v-if="londonCard.show" :src="londonCard.file" :style="londonCard.style" />
    <img v-if="bordeauxCard.show" :src="bordeauxCard.file" :style="bordeauxCard.style" />

    <!-- borders -->
    <img v-if="border1Card.show" :src="border1Card.file" :style="border1Card.style" />
    <img v-if="border2Card.show" :src="border2Card.file" :style="border2Card.style" />
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { COUNTRY_CODES, CARD_TYPE, CITY_NAMES, CARD_POSITION } from "@/constants/enums";
import { useStore } from "vuex";
import { useCard } from "@/composables/card";
import { usePirate } from "@/composables/pirate";

const ENGLAND_NAME = `${COUNTRY_CODES.ENGLAND}-zoom`;
const LONDON = `${CITY_NAMES.LONDON}-zoom`;
const BORDEAUX = `${CITY_NAMES.BORDEAUX}-zoom`;

// card informantion
const store = useStore();
const card = computed(() => store.getters["kingdoms/getEngland"]);
const englandCard = ref({
    ...card.value,
    cardId: COUNTRY_CODES.ENGLAND,
    cardType: CARD_TYPE.KINGDOM_ZOOM,
    cardReligion: card.value.religion,
    cardGovernment: card.value.government,
    cardMarkerId: ENGLAND_NAME,
});

// cities (London and Bordeaux)
const { cardFile, cardZoomDynamicStyle, showPiece } = useCard();
const londonCard = ref({
    cardId: LONDON,
    cardMarkerId: LONDON,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.LONDON,
    show: false,
});
const bordeauxCard = ref({
    cardId: BORDEAUX,
    cardMarkerId: BORDEAUX,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.BORDEAUX,
    show: false,
});

// borders
const { buildBorder, isOccupied } = usePirate();
const border1 = computed(() => store.getters["borders/getBorder1"]);
const border2 = computed(() => store.getters["borders/getBorder2"]);
const border1Card = ref({
    cardType: CARD_TYPE.BORDER,
    cardPosition: CARD_POSITION.VERTICAL,
});
const border2Card = ref({
    cardType: CARD_TYPE.BORDER,
    cardPosition: CARD_POSITION.HORIZONTAL,
});

// map card ref
let englandZoom = ref(null);
onMounted(() => {
    englandZoom.value = document.getElementById("england-zoom");
    if (englandZoom.value !== null && englandZoom.value !== null) {
        // England card
        englandCard.value.file = cardFile(englandCard.value);
        englandCard.value.style = cardZoomDynamicStyle(englandCard.value);
        englandCard.value.show = true;

        // London card
        londonCard.value.file = cardFile(londonCard.value);
        londonCard.value.style = cardZoomDynamicStyle(londonCard.value);
        londonCard.value.show = showPiece(card.value.cities.LONDON);

        // Bordeaux card
        bordeauxCard.value.file = cardFile(bordeauxCard.value);
        bordeauxCard.value.style = cardZoomDynamicStyle(bordeauxCard.value);
        bordeauxCard.value.show = showPiece(card.value.cities.BORDEAUX);

        // border 1: England - France
        border1Card.value = buildBorder(
            border1.value,
            CARD_POSITION.VERTICAL,
            true
        );
        border1Card.value.file = cardFile(border1Card.value);
        border1Card.value.style = cardZoomDynamicStyle(border1Card.value);
        border1Card.value.show = isOccupied(border1.value.occupiedBy);

        // border 2: England - Portugal
        border2Card.value = buildBorder(
            border2.value,
            CARD_POSITION.HORIZONTAL,
            true
        );
        border2Card.value.file = cardFile(border2Card.value);
        border2Card.value.style = cardZoomDynamicStyle(border2Card.value);
        border2Card.value.show = isOccupied(border2.value.occupiedBy);
    }
});
</script>
