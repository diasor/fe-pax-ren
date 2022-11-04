<template>
    <img
        v-if="portugalCard.show"
        :src="portugalCard.file"
        :style="portugalCard.style"
    />

    <!-- cities -->
    <img v-if="toledoCard.show" :src="toledoCard.file" :style="toledoCard.style" />
    <img v-if="granadaCard.show" :src="granadaCard.file" :style="granadaCard.style" />
    <img v-if="spiceIslandsCard.show" :src="spiceIslandsCard.file" :style="spiceIslandsCard.style" />

    <!-- borders -->
    <img v-if="border2Card.show" :src="border2Card.file" :style="border2Card.style" />
    <img v-if="border10Card.show" :src="border10Card.file" :style="border10Card.style" />
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { COUNTRY_CODES, CARD_TYPE, CITY_NAMES, CARD_POSITION } from "@/constants/enums";
import { useStore } from "vuex";
import { useCard } from "@/composables/card";
import { usePirate } from "@/composables/pirate";

const PORTUGAL = `${COUNTRY_CODES.PORTUGAL}-zoom`;
const TOLEDO = `${CITY_NAMES.TOLEDO}-zoom`;
const GRANADA = `${CITY_NAMES.GRANADA}-zoom`;
const SPICE_ISLANDS = `${CITY_NAMES.SPICE_ISLANDS}-zoom`;

// card informantion
const store = useStore();
const card = computed(() => store.getters["kingdoms/getPortugal"]);
const portugalCard = ref({
    ...card.value,
    cardId: COUNTRY_CODES.PORTUGAL,
    cardType: CARD_TYPE.KINGDOM_ZOOM,
    cardReligion: card.value.religion,
    cardGovernment: card.value.government,
    cardMarkerId: PORTUGAL,
});

// cities (Toledo, Granada and Spice Islands)
const { cardFile, cardZoomDynamicStyle, showPiece } = useCard();
const toledoCard = ref({
    cardId: TOLEDO,
    cardMarkerId: TOLEDO,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.TOLEDO,
    show: false,
});
const granadaCard = ref({
    cardId: GRANADA,
    cardMarkerId: GRANADA,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.GRANADA,
    show: false,
});
const spiceIslandsCard = ref({
    cardId: SPICE_ISLANDS,
    cardMarkerId: SPICE_ISLANDS,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.SPICE_ISLANDS,
    show: false,
});

// borders
const { buildBorder, isOccupied } = usePirate();
const border2 = computed(() => store.getters["borders/getBorder2"]);
const border10 = computed(() => store.getters["borders/getBorder10"]);
const border2Card = ref({
    cardType: CARD_TYPE.BORDER,
    cardPosition: CARD_POSITION.HORIZONTAL,
});
const border10Card = ref({
    cardType: CARD_TYPE.BORDER,
    cardPosition: CARD_POSITION.VERTICAL,
});

// map card ref
let portugalZoom = ref(null);
onMounted(() => {
    portugalZoom.value = document.getElementById("portugal-zoom");
    if (portugalZoom.value !== null && portugalZoom.value !== null) {
        // |Portugal card
        portugalCard.value.file = cardFile(portugalCard.value);
        portugalCard.value.style = cardZoomDynamicStyle(portugalCard.value);
        portugalCard.value.show = true;

        // Toledo card
        toledoCard.value.file = cardFile(toledoCard.value);
        toledoCard.value.style = cardZoomDynamicStyle(toledoCard.value);
        toledoCard.value.show = showPiece(card.value.cities.TOLEDO);

        // Granada card
        granadaCard.value.file = cardFile(granadaCard.value);
        granadaCard.value.style = cardZoomDynamicStyle(granadaCard.value);
        granadaCard.value.show = showPiece(card.value.cities.GRANADA);

        // Spice Islands card
        spiceIslandsCard.value.file = cardFile(spiceIslandsCard.value);
        spiceIslandsCard.value.style = cardZoomDynamicStyle(spiceIslandsCard.value);
        spiceIslandsCard.value.show = showPiece(card.value.cities.SPICE_ISLANDS);

        // border 2: England - Portugal
        border2Card.value = buildBorder(
            border2.value,
            CARD_POSITION.HORIZONTAL,
            true
        );
        border2Card.value.file = cardFile(border2Card.value);
        border2Card.value.style = cardZoomDynamicStyle(border2Card.value);
        border2Card.value.show = isOccupied(border2.value.occupiedBy);

        // border 10: Portugal - Aragon
        border10Card.value = buildBorder(
            border10.value,
            CARD_POSITION.VERTICAL,
            true
        );
        border10Card.value.file = cardFile(border10Card.value);
        border10Card.value.style = cardZoomDynamicStyle(border10Card.value);
        border10Card.value.show = isOccupied(border10.value.occupiedBy);
    }
});
</script>
