<template>
    <map-card :showCard="franceCard.show" :card="franceCard" />
    <map-card :showCard="franceEmpireCard.show" :card="franceEmpireCard" />

    <!-- cities -->
    <map-card :showCard="brugesCard.show" :card="brugesCard" />
    <map-card :showCard="parisCard.show" :card="parisCard" />
    <map-card :showCard="lyonCard.show" :card="lyonCard" />
</template>

<script setup>
import { ref, computed, watch } from "vue";
import MapCard from "@/components/map/MapCard.vue";
import { useCard } from "@/composables/card";
import { useStore } from "vuex";
import { COUNTRY_CODES, CITY_NAMES, CARD_TYPE } from "@/constants/enums";
import { FRANCE_NAME } from "@/constants/empires";

const franceCard = ref({
    cardId: COUNTRY_CODES.FRANCE,
    cardType: CARD_TYPE.KINGDOM,
    show: false,
});
const franceEmpireCard = ref({
    cardId: FRANCE_NAME,
    cardType: CARD_TYPE.EMPIRE,
    show: false,
});
const brugesCard = ref({
    cardId: CITY_NAMES.BRUGES,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});
const parisCard = ref({
    cardId: CITY_NAMES.PARIS,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});
const lyonCard = ref({
    cardId: CITY_NAMES.LYON,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});

const { showPiece } = useCard();
const store = useStore();
const france = computed(() => store.getters["kingdoms/getFrance"]);
const refreshFrance = computed(
    () => store.getters["kingdoms/getRefreshFrance"]
);

watch(refreshFrance, (refreshFrance) => {
    if (refreshFrance) {
        // france kingdom and empire card
        franceCard.value.cardReligion = france.value.religion;
        franceCard.value.cardGovernment = france.value.government;
        franceCard.value.show = true;
        if (france.value.location === "THRONE") {
            franceEmpireCard.value.cardGovernment = france.value.government;
            franceEmpireCard.value.show = true;
        }

        // cities & pieces
        brugesCard.value.pieceId = france.value.cities.BRUGES;
        brugesCard.value.show = showPiece(france.value.cities.BRUGES);
        parisCard.value.pieceId = france.value.cities.PARIS;
        parisCard.value.show = showPiece(france.value.cities.PARIS);
        lyonCard.value.pieceId = france.value.cities.LYON;
        lyonCard.value.show = showPiece(france.value.cities.LYON);
        store.dispatch("kingdoms/setRefreshKingdom", {
            kingdomName: "france",
            refreshValue: false,
        });
    }
});
</script>
