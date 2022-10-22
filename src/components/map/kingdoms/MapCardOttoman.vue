<template>
    <map-card :showCard="ottomanCard.show" :card="ottomanCard" />
    <map-card :showCard="ottomanEmpireCard.show" :card="ottomanEmpireCard" />

    <!-- cities -->
    <map-card :showCard="constantinople1Card.show" :card="constantinople1Card" />
    <map-card :showCard="constantinople2Card.show" :card="constantinople2Card" />
    <map-card :showCard="constantinople3Card.show" :card="constantinople3Card" />
    <map-card :showCard="modonCard.show" :card="modonCard" />
    <map-card :showCard="rhodesCard.show" :card="rhodesCard" />
</template>

<script setup>
import { ref, computed, watch } from "vue";
import MapCard from "@/components/map/MapCard.vue";
import { useCard } from "@/composables/card";
import { useStore } from "vuex";
import {
    COUNTRY_CODES,
    CITY_NAMES,
    RELIGION,
    CARD_TYPE,
} from "@/constants/enums";
import { OTTOMAN_NAME } from "@/constants/empires";

const ottomanCard = ref({
    cardId: COUNTRY_CODES.OTTOMAN,
    cardReligion: RELIGION.CATHOLIC,
    cardType: CARD_TYPE.KINGDOM,
    show: false,
});
const ottomanEmpireCard = ref({
    cardId: OTTOMAN_NAME,
    cardType: CARD_TYPE.EMPIRE,
    show: false,
});
const constantinople1Card = ref({
    cardId: CITY_NAMES.CONSTANTINOPLE,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});
const constantinople2Card = ref({
    cardId: CITY_NAMES.CONSTANTINOPLE_2,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});
const constantinople3Card = ref({
    cardId: CITY_NAMES.CONSTANTINOPLE_3,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});
const modonCard = ref({
    cardId: CITY_NAMES.MODON,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});
const rhodesCard = ref({
    cardId: CITY_NAMES.RHODES,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});

const { showPiece } = useCard();
const store = useStore();
const ottoman = computed(() => store.getters["kingdoms/getOttoman"]);
const refreshOttoman = computed(
    () => store.getters["kingdoms/getRefreshOttoman"]
);

watch(refreshOttoman, (newRefreshOttoman) => {
    if (newRefreshOttoman) {
        // ottoman kingdom and empire cards
        ottomanCard.value.cardReligion = ottoman.value.religion;
        ottomanCard.value.cardGovernment = ottoman.value.government;
        ottomanCard.value.show = true;
        if (ottoman.value.location === "THRONE") {
            ottomanEmpireCard.value.cardGovernment = ottoman.value.government;
            ottomanEmpireCard.value.show = true;
        }
        // cities & pieces
        constantinople1Card.value.pieceId =
            ottoman.value.cities.CONSTANTINOPLE;
        constantinople1Card.value.show =
            showPiece(ottoman.value.cities.CONSTANTINOPLE);
        constantinople2Card.value.pieceId =
            ottoman.value.cities.CONSTANTINOPLE_2;
        constantinople2Card.value.show =
            showPiece(ottoman.value.cities.CONSTANTINOPLE_2);
        constantinople3Card.value.pieceId =
            ottoman.value.cities.CONSTANTINOPLE_3;
        constantinople3Card.value.show =
            showPiece(ottoman.value.cities.CONSTANTINOPLE_3);
        modonCard.value.pieceId = ottoman.value.cities.MODON;
        modonCard.value.show = showPiece(ottoman.value.cities.MODON);
        rhodesCard.value.pieceId = ottoman.value.cities.RHODES;
        rhodesCard.value.show = showPiece(ottoman.value.cities.RHODES);
        store.dispatch("kingdoms/setRefreshKingdom", {
            kingdomName: "ottoman",
            refreshValue: false,
        });
    }
});
</script>
