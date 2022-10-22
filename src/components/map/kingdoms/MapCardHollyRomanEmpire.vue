<template>
    <map-card :showCard="hreCard.show" :card="hreCard" />
    <map-card :showCard="hreEmpireCard.show" :card="hreEmpireCard" />

    <!-- cities -->
    <map-card :showCard="lubekCard.show" :card="lubekCard" />
    <map-card :showCard="novgorodCard.show" :card="novgorodCard" />
    <map-card :showCard="nurnbergCard.show" :card="nurnbergCard" />
    <map-card :showCard="viennaCard.show" :card="viennaCard" />
</template>

<script setup>
import { ref, computed, watch } from "vue";
import MapCard from "@/components/map/MapCard.vue";
import { useCard } from "@/composables/card";
import { useStore } from "vuex";
import { COUNTRY_CODES, CITY_NAMES, CARD_TYPE } from "@/constants/enums";
import { HRE_NAME } from "@/constants/empires";


const hreCard = ref({
    cardId: COUNTRY_CODES.HRE,
    cardType: CARD_TYPE.KINGDOM,
    show: false,
});
const hreEmpireCard = ref({
    cardId: HRE_NAME,
    cardType: CARD_TYPE.EMPIRE,
    show: false,
});
const lubekCard = ref({
    cardId: CITY_NAMES.LUBECK,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});
const novgorodCard = ref({
    cardId: CITY_NAMES.NOVGOROD,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});
const nurnbergCard = ref({
    cardId: CITY_NAMES.NURNBERG,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});
const viennaCard = ref({
    cardId: CITY_NAMES.VIENNA,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});

const { showPiece } = useCard();
const store = useStore();
const hre = computed(
    () => store.getters["kingdoms/getHolyRomanEmpire"]
);
const refreshHRE = computed(
    () => store.getters["kingdoms/getRefreshHRE"]
);

watch(refreshHRE, (refreshHRE) => {
    if (refreshHRE) {
        // holy roman empire kingdom and empire card
        hreCard.value.cardReligion = hre.value.religion;
        hreCard.value.cardGovernment = hre.value.government;
        hreCard.value.show = true;
        if (hre.value.location === "THRONE") {
            hreEmpireCard.value.cardGovernment = hre.value.government;
            hreEmpireCard.value.show = true;
        }

        // cities & pieces
        lubekCard.value.pieceId = hre.value.cities.LUBECK;
        lubekCard.value.show = showPiece(hre.value.cities.LUBECK);
        novgorodCard.value.pieceId = hre.value.cities.NOVGOROD;
        novgorodCard.value.show = showPiece(hre.value.cities.NOVGOROD);
        nurnbergCard.value.pieceId = hre.value.cities.NURNBERG;
        nurnbergCard.value.show = showPiece(hre.value.cities.NURNBERG);
        viennaCard.value.pieceId = hre.value.cities.VIENNA;
        viennaCard.value.show = showPiece(hre.value.cities.VIENNA);
        store.dispatch("kingdoms/setRefreshKingdom", {
            kingdomName: "hre",
            refreshValue: false,
        });
    }
});
</script>
