<template>
    <img v-if="hungaryCard.show" :src="hungaryCard.file" :style="hungaryCard.style" />

    <!-- cities -->
    <img v-if="budaCard.show" :src="budaCard.file" :style="budaCard.style" />
    <img v-if="varnaCard.show" :src="varnaCard.file" :style="varnaCard.style" />
    
    <!-- borders -->
    <img v-if="border5Card.show" :src="border5Card.file" :style="border5Card.style" />
    <img v-if="border7Card.show" :src="border7Card.file" :style="border7Card.style" />
    <img v-if="border8Card.show" :src="border8Card.file" :style="border8Card.style" />
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { COUNTRY_CODES, CARD_TYPE, CITY_NAMES, CARD_POSITION } from "@/constants/enums";
import { useStore } from "vuex";
import { useCard } from "@/composables/card";
import { usePirate } from "@/composables/pirate";

const HUNGARY = `${COUNTRY_CODES.HUNGARY}-zoom`;
const BUDA = `${CITY_NAMES.BUDA}-zoom`;
const VARNA = `${CITY_NAMES.VARNA}-zoom`;

// card informantion
const store = useStore();
const card = computed(() => store.getters["kingdoms/getHungary"]);
const hungaryCard = ref({
    ...card.value,
    cardId: COUNTRY_CODES.HUNGARY,
    cardType: CARD_TYPE.KINGDOM_ZOOM,
    cardReligion: card.value.religion,
    cardGovernment: card.value.government,
    cardMarkerId: HUNGARY,
});

// cities (Buda and Varna)
const { cardFile, cardZoomDynamicStyle, showPiece } = useCard();
const budaCard = ref({
    cardId: BUDA,
    cardMarkerId: BUDA,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.BUDA,
    show: false,
});
const varnaCard = ref({
    cardId: VARNA,
    cardMarkerId: VARNA,
    cardType: CARD_TYPE.PIECE,
    pieceId: card.value.cities.VARNA,
    show: false,
});

// borders
const { buildBorder, isOccupied } = usePirate();
const border5 = computed(() => store.getters["borders/getBorder5"]);
const border7 = computed(() => store.getters["borders/getBorder7"]);
const border8 = computed(() => store.getters["borders/getBorder8"]);

const border5Card = ref({
    cardType: CARD_TYPE.BORDER,
    cardPosition: CARD_POSITION.VERTICAL,
});
const border7Card = ref({
    cardType: CARD_TYPE.BORDER,
    cardPosition: CARD_POSITION.VERTICAL,
});
const border8Card = ref({
    cardType: CARD_TYPE.BORDER,
    cardPosition: CARD_POSITION.HORIZONTAL,
});

// map card ref
let hungaryZoom = ref(null);
onMounted(() => {
    hungaryZoom.value = document.getElementById("hungary-zoom");
    if (hungaryZoom.value !== null && hungaryZoom.value !== null) {
        // Hungary card
        hungaryCard.value.file = cardFile(hungaryCard.value);
        hungaryCard.value.style = cardZoomDynamicStyle(hungaryCard.value);
        hungaryCard.value.show = true;

        // Buda card
        budaCard.value.file = cardFile(budaCard.value);
        budaCard.value.style = cardZoomDynamicStyle(budaCard.value);
        budaCard.value.show = showPiece(card.value.cities.BUDA);

        // Varna card
        varnaCard.value.file = cardFile(varnaCard.value);
        varnaCard.value.style = cardZoomDynamicStyle(varnaCard.value);
        varnaCard.value.show = showPiece(card.value.cities.VARNA);

        // border 5: France - Holy Roman Empire
        border5Card.value = buildBorder(
            border5.value,
            CARD_POSITION.VERTICAL,
            true
        );
        border5Card.value.file = cardFile(border5Card.value);
        border5Card.value.style = cardZoomDynamicStyle(border5Card.value);
        border5Card.value.show = isOccupied(border5.value.occupiedBy);

        // border 7: Hungary - Byzantium
        border7Card.value = buildBorder(
            border7.value,
            CARD_POSITION.VERTICAL,
            true
        );
        border7Card.value.file = cardFile(border7Card.value);
        border7Card.value.style = cardZoomDynamicStyle(border7Card.value);
        border7Card.value.show = isOccupied(border7.value.occupiedBy);

        // border 8: Hungary - Ottoman
        border8Card.value = buildBorder(
            border8.value,
            CARD_POSITION.HORIZONTAL,
            true
        );
        border8Card.value.file = cardFile(border8Card.value);
        border8Card.value.style = cardZoomDynamicStyle(border8Card.value);
        border8Card.value.show = isOccupied(border8.value.occupiedBy);        
    }
});
</script>
