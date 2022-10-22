<template>
    <map-card :showCard="papalStatesCard.show" :card="papalStatesCard" />
    <map-card :showCard="papalStatesEmpireCard.show" :card="papalStatesEmpireCard" />

    <!-- cities -->
    <map-card :showCard="veniceCard.show" :card="veniceCard" />
</template>

<script setup>
import { ref, computed, watch } from "vue";
import MapCard from "@/components/map/MapCard.vue";
import { useCard } from "@/composables/card";
import { useStore } from "vuex";
import { COUNTRY_CODES, CITY_NAMES, CARD_TYPE } from "@/constants/enums";
import { PAPAL_STATE_NAME } from "@/constants/empires";

const papalStatesCard = ref({
    cardId: COUNTRY_CODES.PAPAL_STATES,
    cardType: CARD_TYPE.KINGDOM,
    show: false,
});
const papalStatesEmpireCard = ref({
    cardId: PAPAL_STATE_NAME,
    cardType: CARD_TYPE.EMPIRE,
    show: false,
});
const veniceCard = ref({
    cardId: CITY_NAMES.VENICE,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});

const { showPiece } = useCard();
const store = useStore();
const papalStates = computed(
    () => store.getters["kingdoms/getPapalStates"]
);
const refreshPapalStates = computed(
    () => store.getters["kingdoms/getRefreshPapalStates"]
);

watch(refreshPapalStates, (refreshPapalStates) => {
    if (refreshPapalStates) {
        // papal states kingdom and empire cards
        papalStatesCard.value.cardReligion = papalStates.value.religion;
        papalStatesCard.value.cardGovernment = papalStates.value.government;
        papalStatesCard.value.show = true;
        if (papalStates.value.location === "THRONE") {
            papalStatesEmpireCard.value.cardGovernment = papalStates.value.government;
            papalStatesEmpireCard.value.show = true;
        }
        // cities & pieces
        veniceCard.value.pieceId = papalStates.value.cities.VENICE;
        veniceCard.value.show = showPiece(papalStates.value.cities.VENICE);
        store.dispatch("kingdoms/setRefreshKingdom", {
            kingdomName: "papal_states",
            refreshValue: false,
        });
    }
});
</script>
