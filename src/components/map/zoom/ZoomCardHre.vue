<template>
    <img v-if="hreCard.show" :src="hreCard.file" :style="hreCard.style" />

    <!-- cities -->
    <img v-if="viennaCard.show" :src="viennaCard.file" :style="viennaCard.style" />
    <img v-if="lubeckCard.show" :src="lubeckCard.file" :style="lubeckCard.style" />
    <img v-if="novgorodCard.show" :src="novgorodCard.file" :style="novgorodCard.style" />
    <img v-if="nurnbergCard.show" :src="nurnbergCard.file" :style="nurnbergCard.style" />
    
    <!-- borders -->
    <img v-if="border3Card.show" :src="border3Card.file" :style="border3Card.style" />
    <img v-if="border5Card.show" :src="border5Card.file" :style="border5Card.style" />
    <img v-if="border6Card.show" :src="border6Card.file" :style="border6Card.style" />
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { COUNTRY_CODES, CARD_TYPE, CITY_NAMES, CARD_POSITION } from "@/constants/enums";
import { useStore } from "vuex";
import { useCard } from "@/composables/card";
import { usePirate } from "@/composables/pirate";

const HRE = `${COUNTRY_CODES.HRE}-zoom`;
const NOVGOROD = `${CITY_NAMES.NOVGOROD}-zoom`;
const VIENNA = `${CITY_NAMES.VIENNA}-zoom`;
const LUBECK = `${CITY_NAMES.LUBECK}-zoom`;
const NURNBERG = `${CITY_NAMES.NURNBERG}-zoom`;

// card informantion
const store = useStore();
const card = computed(() => store.getters["kingdoms/getHolyRomanEmpire"]);
const hreCard = ref({
    ...card.value,
    cardId: COUNTRY_CODES.HRE,
    cardType: CARD_TYPE.KINGDOM_ZOOM,
    cardReligion: card.value.religion,
    cardGovernment: card.value.government,
    cardMarkerId: HRE,
});

// cities (Vienna, Novgorod, Lubeck and Nurnberg)
const { cardFile, cardZoomDynamicStyle, showPiece } = useCard();
const viennaCard = ref({
    cardId: VIENNA,
    cardMarkerId: VIENNA,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.VIENNA,
    show: false,
});
const novgorodCard = ref({
    cardId: NOVGOROD,
    cardMarkerId: NOVGOROD,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.NOVGOROD,
    show: false,
});
const lubeckCard = ref({
    cardId: LUBECK,
    cardMarkerId: LUBECK,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.LUBECK,
    show: false,
});
const nurnbergCard = ref({
    cardId: NURNBERG,
    cardMarkerId: NURNBERG,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.NURNBERG,
    show: false,
});

// borders
const { buildBorder, isOccupied } = usePirate();
const border3 = computed(() => store.getters["borders/getBorder3"]);
const border5 = computed(() => store.getters["borders/getBorder5"]);
const border6 = computed(() => store.getters["borders/getBorder6"]);

const border3Card = ref({
    cardType: CARD_TYPE.BORDER,
    cardPosition: CARD_POSITION.VERTICAL,
});
const border5Card = ref({
    cardType: CARD_TYPE.BORDER,
    cardPosition: CARD_POSITION.VERTICAL,
});
const border6Card = ref({
    cardType: CARD_TYPE.BORDER,
    cardPosition: CARD_POSITION.HORIZONTAL,
});

// map card ref
let hreZoom = ref(null);
onMounted(() => {
    hreZoom.value = document.getElementById("hre-zoom");
    if (hreZoom.value !== null && hreZoom.value !== null) {
        // Holy Roman Empire card
        hreCard.value.file = cardFile(hreCard.value);
        hreCard.value.style = cardZoomDynamicStyle(hreCard.value);
        hreCard.value.show = true;

        // Novgorod card
        novgorodCard.value.file = cardFile(novgorodCard.value);
        novgorodCard.value.style = cardZoomDynamicStyle(novgorodCard.value);
        novgorodCard.value.show = showPiece(card.value.cities.NOVGOROD);

        // Vienna card
        viennaCard.value.file = cardFile(viennaCard.value);
        viennaCard.value.style = cardZoomDynamicStyle(viennaCard.value);
        viennaCard.value.show = showPiece(card.value.cities.VIENNA);

        // Lubeck card
        lubeckCard.value.file = cardFile(lubeckCard.value);
        lubeckCard.value.style = cardZoomDynamicStyle(lubeckCard.value);
        lubeckCard.value.show = showPiece(card.value.cities.LUBECK);
        
        // Nurnberg card
        nurnbergCard.value.file = cardFile(nurnbergCard.value);
        nurnbergCard.value.style = cardZoomDynamicStyle(nurnbergCard.value);
        nurnbergCard.value.show = showPiece(card.value.cities.NURNBERG);

        // border 3: France - Holly Roman Empire
        border3Card.value = buildBorder(
            border3.value,
            CARD_POSITION.VERTICAL,
            true
        );
        border3Card.value.file = cardFile(border3Card.value);
        border3Card.value.style = cardZoomDynamicStyle(border3Card.value);
        border3Card.value.show = isOccupied(border3.value.occupiedBy);

        // border 5: France - Holy Roman Empire
        border5Card.value = buildBorder(
            border5.value,
            CARD_POSITION.VERTICAL,
            true
        );
        border5Card.value.file = cardFile(border5Card.value);
        border5Card.value.style = cardZoomDynamicStyle(border5Card.value);
        border5Card.value.show = isOccupied(border5.value.occupiedBy);

        // border 6: Holy Roman Empire - Papal States
        border6Card.value = buildBorder(
            border6.value,
            CARD_POSITION.HORIZONTAL,
            true
        );
        border6Card.value.file = cardFile(border6Card.value);
        border6Card.value.style = cardZoomDynamicStyle(border6Card.value);
        border6Card.value.show = isOccupied(border6.value.occupiedBy);
    }
});
</script>
