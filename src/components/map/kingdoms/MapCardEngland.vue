<template>
    <map-card :showCard="englandCard.show" :card="englandCard" />
    <map-card :showCard="englandEmpireCard.show" :card="englandEmpireCard" />

    <!-- cities -->
    <map-card :showCard="londonCard.show" :card="londonCard" />
    <map-card :showCard="bordeauxCard.show" :card="bordeauxCard" />
</template>
<script setup>
import { ref, computed, watch } from "vue";
import MapCard from "@/components/map/MapCard.vue";
import { useCard } from "@/composables/card";
import { useStore } from "vuex";
import { COUNTRY_CODES, CITY_NAMES, CARD_TYPE } from "@/constants/enums";
import { ENGLAND_NAME } from "@/constants/empires";

let englandCard = ref({
    cardId: COUNTRY_CODES.ENGLAND,
    cardType: CARD_TYPE.KINGDOM,
    show: false,
});
const englandEmpireCard = ref({
    cardId: ENGLAND_NAME,
    cardType: CARD_TYPE.EMPIRE,
    show: false,
});
let londonCard = ref({
    cardId: CITY_NAMES.LONDON,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});
let bordeauxCard = ref({
    cardId: CITY_NAMES.BORDEAUX,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});

const { showPiece } = useCard();
const store = useStore();
const england = computed(() => store.getters["kingdoms/getEngland"]);
const refreshEngland = computed(() => store.getters["kingdoms/getRefreshEngland"]);

watch(refreshEngland, (refreshEngland) => {
    if (refreshEngland) {
        englandCard.value.cardReligion = england.value.religion;
        englandCard.value.cardGovernment = england.value.government;
        englandCard.value.show = true;
        if (england.value.location === "THRONE") {
            englandEmpireCard.value.cardGovernment = england.value.government;
            englandEmpireCard.value.show = true;
        }

        // cities & pieces
        londonCard.value.pieceId = england.value.cities.LONDON;
        londonCard.value.show = showPiece(england.value.cities.LONDON);
        bordeauxCard.value.pieceId = england.value.cities.BORDEAUX;
        bordeauxCard.value.show = showPiece(england.value.cities.BORDEAUX);
        store.dispatch("kingdoms/setRefreshKingdom", {
            kingdomName: "england",
            refreshValue: false,
        });
    }
});
</script>
