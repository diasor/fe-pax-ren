<template>
    <img v-if="mamlukCard.show" :src="mamlukCard.file" :style="mamlukCard.style" />

    <!-- cities -->
    <img v-if="cairoCard.show" :src="cairoCard.file" :style="cairoCard.style" />
    <img v-if="cyprusCard.show" :src="cyprusCard.file" :style="cyprusCard.style" />
    <img v-if="redSeaCard.show" :src="redSeaCard.file" :style="redSeaCard.style" />

    <!-- borders -->
    <img v-if="border9Card.show" :src="border9Card.file" :style="border9Card.style" />
    <img v-if="border13Card.show" :src="border13Card.file" :style="border13Card.style" />
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { COUNTRY_CODES, CITY_NAMES, CARD_TYPE, CARD_POSITION } from "@/constants/enums";
import { useStore } from "vuex";
import { useCard } from "@/composables/card";
import { usePirate } from "@/composables/pirate";

const MAMLUK = `${COUNTRY_CODES.MAMLUK}-zoom`;
const CAIRO = `${CITY_NAMES.CAIRO}-zoom`;
const CYPRUS = `${CITY_NAMES.CYPRUS}-zoom`;
const RED_SEA = `${CITY_NAMES.RED_SEA}-zoom`;

// card informantion
const store = useStore();
const card = computed(() => store.getters["kingdoms/getMamluk"]);
const mamlukCard = ref({
    ...card.value,
    cardId: COUNTRY_CODES.MAMLUK,
    cardType: CARD_TYPE.KINGDOM_ZOOM,
    cardReligion: card.value.religion,
    cardGovernment: card.value.government,
    cardMarkerId: MAMLUK,
});

// cities (Cairo, Cyprus and Red Sea)
const { cardFile, cardZoomDynamicStyle, showPiece } = useCard();
const cairoCard = ref({
    cardId: CAIRO,
    cardMarkerId: CAIRO,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.CAIRO,
    show: false,
});
const cyprusCard = ref({
    cardId: CYPRUS,
    cardMarkerId: CYPRUS,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.CYPRUS,
    show: false,
});
const redSeaCard = ref({
    cardId: RED_SEA,
    cardMarkerId: RED_SEA,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.RED_SEA,
    show: false,
});

// borders
const { buildBorder, isOccupied } = usePirate();
const border9 = computed(() => store.getters["borders/getBorder9"]);
const border13 = computed(() => store.getters["borders/getBorder13"]);
const border9Card = ref({
    cardType: CARD_TYPE.BORDER,
    cardPosition: CARD_POSITION.HORIZONTAL,
});
const border13Card = ref({
    cardType: CARD_TYPE.BORDER,
    cardPosition: CARD_POSITION.VERTICAL,
});

// map card ref
let mamlukZoom = ref(null);
onMounted(() => {
    mamlukZoom.value = document.getElementById("mamluk-zoom");
    if (mamlukZoom.value !== null && mamlukZoom.value !== null) {
        // Mamluk card
        mamlukCard.value.file = cardFile(mamlukCard.value);
        mamlukCard.value.style = cardZoomDynamicStyle(mamlukCard.value);
        mamlukCard.value.show = false;

        // Cairo card
        cairoCard.value.file = cardFile(cairoCard.value);
        cairoCard.value.style = cardZoomDynamicStyle(cairoCard.value);
        cairoCard.value.show = showPiece(card.value.cities.CAIRO);

        // Cyprus card
        cyprusCard.value.file = cardFile(cyprusCard.value);
        cyprusCard.value.style = cardZoomDynamicStyle(cyprusCard.value);
        cyprusCard.value.show = showPiece(card.value.cities.CYPRUS);

        // Red Sea card
        redSeaCard.value.file = cardFile(redSeaCard.value);
        redSeaCard.value.style = cardZoomDynamicStyle(redSeaCard.value);
        redSeaCard.value.show = showPiece(card.value.cities.RED_SEA);

        // border 9: Byzantium - Mamluk
        border9Card.value = buildBorder(
            border9.value,
            CARD_POSITION.HORIZONTAL,
            true
        );
        border9Card.value.file = cardFile(border9Card.value);
        border9Card.value.style = cardZoomDynamicStyle(border9Card.value);
        border9Card.value.show = isOccupied(border9.value.occupiedBy);

        // border 11: Aragon - Papal States
        border13Card.value = buildBorder(
            border13.value,
            CARD_POSITION.VERTICAL,
            true
        );
        border13Card.value.file = cardFile(border13Card.value);
        border13Card.value.style = cardZoomDynamicStyle(border13Card.value);
        border13Card.value.show = isOccupied(border13.value.occupiedBy);
    }
});
</script>
