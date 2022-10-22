<template>
    <map-card :showCard="aragonCard.show" :card="aragonCard" />
    <map-card :showCard="aragonEmpireCard.show" :card="aragonEmpireCard" />

    <!-- cities -->
    <map-card :showCard="valenciaCard.show" :card="valenciaCard" />
    <map-card :showCard="timbuktuCard.show" :card="timbuktuCard" />
    <map-card :showCard="algiersCard.show" :card="algiersCard" />
</template>

<script setup>
import { ref, computed, watch } from "vue";
import MapCard from "@/components/map/MapCard.vue";
import { useCard } from "@/composables/card";
import { useStore } from "vuex";
import { COUNTRY_CODES, CITY_NAMES, CARD_TYPE } from "@/constants/enums";
import { ARAGON_NAME } from "@/constants/empires";

const aragonCard = ref({
    cardId: COUNTRY_CODES.ARAGON,
    cardType: CARD_TYPE.KINGDOM,
});
const aragonEmpireCard = ref({
    cardId: ARAGON_NAME,
    cardType: CARD_TYPE.EMPIRE,
    show: false,
});
const valenciaCard = ref({
    cardId: CITY_NAMES.VALENCIA,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});
const timbuktuCard = ref({
    cardId: CITY_NAMES.TIMBUKTU,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});
const algiersCard = ref({
    cardId: CITY_NAMES.ALGIERS,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});

const { showPiece } = useCard();
const store = useStore();
const aragon = computed(() => store.getters["kingdoms/getAragon"]);
const refreshAragon = computed(
    () => store.getters["kingdoms/getRefreshAragon"]
);

watch(refreshAragon, (refreshAragon) => {
    if (refreshAragon) {
        // aragon kingdom and empire card
        aragonCard.value.cardReligion = aragon.value.religion;
        aragonCard.value.cardGovernment = aragon.value.government;
        aragonCard.value.show = true;
        if (aragon.value.location === "THRONE") {
            aragonEmpireCard.value.cardGovernment = aragon.value.government;
            aragonEmpireCard.value.show = true;
        }

        // cities & pieces
        valenciaCard.value.pieceId = aragon.value.cities.VALENCIA;
        valenciaCard.value.show = showPiece(aragon.value.cities.VALENCIA);
        algiersCard.value.pieceId = aragon.value.cities.ALGIERS;
        algiersCard.value.show = showPiece(aragon.value.cities.ALGIERS);
        timbuktuCard.value.pieceId = aragon.value.cities.TIMBUKTU;
        timbuktuCard.value.show = showPiece(aragon.value.cities.TIMBUKTU);

        store.dispatch("kingdoms/setRefreshKingdom", {
            kingdomName: "aragon",
            refreshValue: false,
        });
    }
});
</script>
