<template>
    <img v-if="byzantiumCard.show" :src="byzantiumCard.file" :style="byzantiumCard.style" />

    <!-- cities -->
    <img v-if="tanaCard.show" :src="tanaCard.file" :style="tanaCard.style" />
    <img v-if="caffaCard.show" :src="caffaCard.file" :style="caffaCard.style" />
    <img v-if="trebizondCard.show" :src="trebizondCard.file" :style="trebizondCard.style" />
    
    <!-- borders -->
    <img v-if="border7Card.show" :src="border7Card.file" :style="border7Card.style" />
    <img v-if="border9Card.show" :src="border9Card.file" :style="border9Card.style" />
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { COUNTRY_CODES, CARD_TYPE, CITY_NAMES, CARD_POSITION } from "@/constants/enums";
import { useStore } from "vuex";
import { useCard } from "@/composables/card";
import { usePirate } from "@/composables/pirate";

const BYZANTIUM = `${COUNTRY_CODES.BYZANTIUM}-zoom`;
const TANA = `${CITY_NAMES.TANA}-zoom`;
const CAFFA = `${CITY_NAMES.CAFFA}-zoom`;
const TREBIZOND = `${CITY_NAMES.TREBIZOND}-zoom`;

// card informantion
const store = useStore();
const card = computed(() => store.getters["kingdoms/getByzantium"]);
const byzantiumCard = ref({
    ...card.value,
    cardId: COUNTRY_CODES.BYZANTIUM,
    cardType: CARD_TYPE.KINGDOM_ZOOM,
    cardReligion: card.value.religion,
    cardGovernment: card.value.government,
    cardMarkerId: BYZANTIUM,
});

// cities (Tana, Caffa and Trebizond)
const { cardFile, cardZoomDynamicStyle, showPiece } = useCard();
const tanaCard = ref({
    cardId: TANA,
    cardMarkerId: TANA,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.TANA,
    show: false,
});
const caffaCard = ref({
    cardId: CAFFA,
    cardMarkerId: CAFFA,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.CAFFA,
    show: false,
});
const trebizondCard = ref({
    cardId: TREBIZOND,
    cardMarkerId: TREBIZOND,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.TREBIZOND,
    show: false,
});

// borders
const { buildBorder, isOccupied } = usePirate();
const border7 = computed(() => store.getters["borders/getBorder7"]);
const border9 = computed(() => store.getters["borders/getBorder9"]);

const border7Card = ref({
    cardType: CARD_TYPE.BORDER,
    cardPosition: CARD_POSITION.VERTICAL,
});
const border9Card = ref({
    cardType: CARD_TYPE.BORDER,
    cardPosition: CARD_POSITION.HORIZONTAL,
});

// map card ref
let byzantiumZoom = ref(null);
onMounted(() => {
    byzantiumZoom.value = document.getElementById("byzantium-zoom");
    if (byzantiumZoom.value !== null && byzantiumZoom.value !== null) {
        // Byzantium card
        byzantiumCard.value.file = cardFile(byzantiumCard.value);
        byzantiumCard.value.style = cardZoomDynamicStyle(byzantiumCard.value);
        byzantiumCard.value.show = true;

        // Caffa card
        caffaCard.value.file = cardFile(caffaCard.value);
        caffaCard.value.style = cardZoomDynamicStyle(caffaCard.value);
        caffaCard.value.show = showPiece(card.value.cities.CAFFA);

        // Tana card
        tanaCard.value.file = cardFile(tanaCard.value);
        tanaCard.value.style = cardZoomDynamicStyle(tanaCard.value);
        tanaCard.value.show = showPiece(card.value.cities.TANA);
        
        // Trebizond card
        trebizondCard.value.file = cardFile(trebizondCard.value);
        trebizondCard.value.style = cardZoomDynamicStyle(trebizondCard.value);
        trebizondCard.value.show = showPiece(card.value.cities.TREBIZOND);

        // border 7: Hungary - Byzantium
        border7Card.value = buildBorder(
            border7.value,
            CARD_POSITION.VERTICAL,
            true
        );
        border7Card.value.file = cardFile(border7Card.value);
        border7Card.value.style = cardZoomDynamicStyle(border7Card.value);
        border7Card.value.show = isOccupied(border7.value.occupiedBy);

        // border 8: Byzantium - Mamluk
        border9Card.value = buildBorder(
            border9.value,
            CARD_POSITION.HORIZONTAL,
            true
        );
        border9Card.value.file = cardFile(border9Card.value);
        border9Card.value.style = cardZoomDynamicStyle(border9Card.value);
        border9Card.value.show = isOccupied(border9.value.occupiedBy);
    }
});
</script>
