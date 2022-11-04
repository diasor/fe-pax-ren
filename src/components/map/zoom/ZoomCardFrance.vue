<template>
    <img
        v-if="franceCard.show"
        :src="franceCard.file"
        :style="franceCard.style"
    />

    <!-- cities -->
    <img v-if="parisCard.show" :src="parisCard.file" :style="parisCard.style" />
    <img v-if="brugesCard.show" :src="brugesCard.file" :style="brugesCard.style" />
    <img v-if="lyonCard.show" :src="lyonCard.file" :style="lyonCard.style" />

    <!-- borders -->
    <img v-if="border1Card.show" :src="border1Card.file" :style="border1Card.style" />
    <img v-if="border3Card.show" :src="border3Card.file" :style="border3Card.style" />
    <img v-if="border4Card.show" :src="border4Card.file" :style="border4Card.style" />
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { COUNTRY_CODES, CARD_TYPE, CITY_NAMES, CARD_POSITION } from "@/constants/enums";
import { useStore } from "vuex";
import { useCard } from "@/composables/card";
import { usePirate } from "@/composables/pirate";

const FRANCE = `${COUNTRY_CODES.FRANCE}-zoom`;
const PARIS = `${CITY_NAMES.PARIS}-zoom`;
const BRUGES = `${CITY_NAMES.BRUGES}-zoom`;
const LYON = `${CITY_NAMES.LYON}-zoom`;

// card informantion
const store = useStore();
const card = computed(() => store.getters["kingdoms/getFrance"]);
const franceCard = ref({
    ...card.value,
    cardId: COUNTRY_CODES.FRANCE,
    cardType: CARD_TYPE.KINGDOM_ZOOM,
    cardReligion: card.value.religion,
    cardGovernment: card.value.government,
    cardMarkerId: FRANCE,
});

// cities (Paris, Bruges and Lyon)
const { cardFile, cardZoomDynamicStyle, showPiece } = useCard();
const parisCard = ref({
    cardId: PARIS,
    cardMarkerId: PARIS,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.PARIS,
    show: false,
});
const brugesCard = ref({
    cardId: BRUGES,
    cardMarkerId: BRUGES,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.BRUGES,
    show: false,
});
const lyonCard = ref({
    cardId: LYON,
    cardMarkerId: LYON,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.LYON,
    show: false,
});

// borders
const { buildBorder, isOccupied } = usePirate();
const border1 = computed(() => store.getters["borders/getBorder1"]);
const border3 = computed(() => store.getters["borders/getBorder3"]);
const border4 = computed(() => store.getters["borders/getBorder4"]);
const border1Card = ref({
    cardType: CARD_TYPE.BORDER,
    cardPosition: CARD_POSITION.VERTICAL,
});
const border3Card = ref({
    cardType: CARD_TYPE.BORDER,
    cardPosition: CARD_POSITION.VERTICAL,
});
const border4Card = ref({
    cardType: CARD_TYPE.BORDER,
    cardPosition: CARD_POSITION.HORIZONTAL,
});

// map card ref
let franceZoom = ref(null);
onMounted(() => {
    franceZoom.value = document.getElementById("france-zoom");
    if (franceZoom.value !== null && franceZoom.value !== null) {
        // France card
        franceCard.value.file = cardFile(franceCard.value);
        franceCard.value.style = cardZoomDynamicStyle(franceCard.value);
        franceCard.value.show = true;

        // Paris card
        parisCard.value.file = cardFile(parisCard.value);
        parisCard.value.style = cardZoomDynamicStyle(parisCard.value);
        parisCard.value.show = showPiece(card.value.cities.PARIS);

        // Bruges card
        brugesCard.value.file = cardFile(brugesCard.value);
        brugesCard.value.style = cardZoomDynamicStyle(brugesCard.value);
        brugesCard.value.show = showPiece(card.value.cities.BRUGES);

        // Lyon card
        lyonCard.value.file = cardFile(lyonCard.value);
        lyonCard.value.style = cardZoomDynamicStyle(lyonCard.value);
        lyonCard.value.show = showPiece(card.value.cities.LYON);

        // border 1: England - France
        border1Card.value = buildBorder(
            border1.value,
            CARD_POSITION.VERTICAL,
            true
        );
        border1Card.value.file = cardFile(border1Card.value);
        border1Card.value.style = cardZoomDynamicStyle(border1Card.value);
        border1Card.value.show = isOccupied(border1.value.occupiedBy);

        // border 3: France - Holly Roman Empire
        border3Card.value = buildBorder(
            border3.value,
            CARD_POSITION.VERTICAL,
            true
        );
        border3Card.value.file = cardFile(border3Card.value);
        border3Card.value.style = cardZoomDynamicStyle(border3Card.value);
        border3Card.value.show = isOccupied(border3.value.occupiedBy);

         // border 4: France - Aragon
         border4Card.value = buildBorder(
            border4.value,
            CARD_POSITION.HORIZONTAL,
            true
        );
        border4Card.value.file = cardFile(border4Card.value);
        border4Card.value.style = cardZoomDynamicStyle(border4Card.value);
        border4Card.value.show = isOccupied(border4.value.occupiedBy);
    }
});
</script>
