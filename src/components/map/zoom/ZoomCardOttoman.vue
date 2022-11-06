<template>
    <img v-if="ottomanCard.show" :src="ottomanCard.file" :style="ottomanCard.style" />

    <!-- cities -->
    <img v-if="constantinopleCard.show" :src="constantinopleCard.file" :style="constantinopleCard.style" />
    <img v-if="constantinople2Card.show" :src="constantinople2Card.file" :style="constantinople2Card.style" />
    <img v-if="constantinople3Card.show" :src="constantinople3Card.file" :style="constantinople3Card.style" />
    <img v-if="modonCard.show" :src="modonCard.file" :style="modonCard.style" />
    <img v-if="rhodesCard.show" :src="rhodesCard.file" :style="rhodesCard.style" />

    <!-- borders -->
    <img v-if="border8Card.show" :src="border8Card.file" :style="border8Card.style" />
    <img v-if="border12Card.show" :src="border12Card.file" :style="border12Card.style" />
    <img v-if="border13Card.show" :src="border13Card.file" :style="border13Card.style" />
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { COUNTRY_CODES, CITY_NAMES, CARD_TYPE, CARD_POSITION } from "@/constants/enums";
import { useStore } from "vuex";
import { useCard } from "@/composables/card";
import { usePirate } from "@/composables/pirate";

const OTTOMAN = `${COUNTRY_CODES.OTTOMAN}-zoom`;
const CONSTANTINOPLE = `${CITY_NAMES.CONSTANTINOPLE}-zoom`;
const CONSTANTINOPLE_2 = `${CITY_NAMES.CONSTANTINOPLE_2}-zoom`;
const CONSTANTINOPLE_3 = `${CITY_NAMES.CONSTANTINOPLE_3}-zoom`;
const MODON = `${CITY_NAMES.MODON}-zoom`;
const RHODES = `${CITY_NAMES.RHODES}-zoom`;

// card informantion
const store = useStore();
const card = computed(() => store.getters["kingdoms/getOttoman"]);
const ottomanCard = ref({
    ...card.value,
    cardId: COUNTRY_CODES.OTTOMAN,
    cardType: CARD_TYPE.KINGDOM_ZOOM,
    cardReligion: card.value.religion,
    cardGovernment: card.value.government,
    cardMarkerId: OTTOMAN,
});

// cities (Constantinople, Constantinople 2, Constantinople 3, Modon and Rhodes)
const { cardFile, cardZoomDynamicStyle, showPiece } = useCard();
const constantinopleCard = ref({
    cardId: CONSTANTINOPLE,
    cardMarkerId: CONSTANTINOPLE,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.CONSTANTINOPLE,
    show: false,
});
const constantinople2Card = ref({
    cardId: CONSTANTINOPLE_2,
    cardMarkerId: CONSTANTINOPLE_2,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.CONSTANTINOPLE_2,
    show: false,
});
const constantinople3Card = ref({
    cardId: CONSTANTINOPLE_3,
    cardMarkerId: CONSTANTINOPLE_3,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.CONSTANTINOPLE_3,
    show: false,
});
const modonCard = ref({
    cardId: MODON,
    cardMarkerId: MODON,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.MODON,
    show: false,
});
const rhodesCard = ref({
    cardId: RHODES,
    cardMarkerId: RHODES,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.RHODES,
    show: false,
});

// borders
const { buildBorder, isOccupied } = usePirate();
const border8 = computed(() => store.getters["borders/getBorder8"]);
const border12 = computed(() => store.getters["borders/getBorder12"]);
const border13 = computed(() => store.getters["borders/getBorder13"]);
const border8Card = ref({
    cardType: CARD_TYPE.BORDER,
    cardPosition: CARD_POSITION.HORIZONTAL,
});
const border12Card = ref({
    cardType: CARD_TYPE.BORDER,
    cardPosition: CARD_POSITION.VERTICAL,
});
const border13Card = ref({
    cardType: CARD_TYPE.BORDER,
    cardPosition: CARD_POSITION.VERTICAL,
});

// map card ref
let ottomanZoom = ref(null);
onMounted(() => {
    ottomanZoom.value = document.getElementById("ottoman-zoom");
    if (ottomanZoom.value !== null && ottomanZoom.value !== null) {
        // Ottoman card
        ottomanCard.value.file = cardFile(ottomanCard.value);
        ottomanCard.value.style = cardZoomDynamicStyle(ottomanCard.value);
        ottomanCard.value.show = true;

        // Constantinople card
        constantinopleCard.value.file = cardFile(constantinopleCard.value);
        constantinopleCard.value.style = cardZoomDynamicStyle(constantinopleCard.value);
        constantinopleCard.value.show = showPiece(card.value.cities.CONSTANTINOPLE);

        // Constantinople 2 card
        constantinople2Card.value.file = cardFile(constantinople2Card.value);
        constantinople2Card.value.style = cardZoomDynamicStyle(constantinople2Card.value);
        constantinople2Card.value.show = showPiece(card.value.cities.CONSTANTINOPLE_2);

        // Constantinople 3 card
        constantinople3Card.value.file = cardFile(constantinople3Card.value);
        constantinople3Card.value.style = cardZoomDynamicStyle(constantinople3Card.value);
        constantinople3Card.value.show = showPiece(card.value.cities.CONSTANTINOPLE_3);

        // Modon card
        modonCard.value.file = cardFile(modonCard.value);
        modonCard.value.style = cardZoomDynamicStyle(modonCard.value);
        modonCard.value.show = showPiece(card.value.cities.MODON);

        // Rhodes card
        rhodesCard.value.file = cardFile(rhodesCard.value);
        rhodesCard.value.style = cardZoomDynamicStyle(rhodesCard.value);
        rhodesCard.value.show = showPiece(card.value.cities.RHODES);

        // border 8: Hungary - Ottoman
        border8Card.value = buildBorder(
            border8.value,
            CARD_POSITION.HORIZONTAL,
            true
        );
        border8Card.value.file = cardFile(border8Card.value);
        border8Card.value.style = cardZoomDynamicStyle(border8Card.value);
        border8Card.value.show = isOccupied(border8.value.occupiedBy);

        // border 12: Ottomn - Papal States
        border12Card.value = buildBorder(
            border12.value,
            CARD_POSITION.VERTICAL,
            true
        );
        border12Card.value.file = cardFile(border12Card.value);
        border12Card.value.style = cardZoomDynamicStyle(border12Card.value);
        border12Card.value.show = isOccupied(border12.value.occupiedBy);

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
