<template>
    <map-card :showCard="byzantiumCard.show" :card="byzantiumCard" />
    <map-card :showCard="byzantiumEmpireCard.show" :card="byzantiumEmpireCard" />

    <!-- cities -->
    <map-card :showCard="tanaCard.show" :card="tanaCard" />
    <map-card :showCard="caffaCard.show" :card="caffaCard" />
    <map-card :showCard="trebizondCard.show" :card="trebizondCard" />
</template>

<script setup>
import { ref, computed, watch } from "vue";
import MapCard from "@/components/map/MapCard.vue";
import { useCard } from "@/composables/card";
import { useStore } from "vuex";
import { COUNTRY_CODES, CITY_NAMES, CARD_TYPE } from "@/constants/enums";
import { BYZANTIUM_NAME } from "@/constants/empires";

const byzantiumCard = ref({
    cardId: COUNTRY_CODES.BYZANTIUM,
    cardType: CARD_TYPE.KINGDOM,
    show: false,
});
const byzantiumEmpireCard = ref({
    cardId: BYZANTIUM_NAME,
    cardType: CARD_TYPE.EMPIRE,
    show: false,
});
const tanaCard = ref({
    cardId: CITY_NAMES.TANA,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});
const caffaCard = ref({
    cardId: CITY_NAMES.CAFFA,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});
const trebizondCard = ref({
    cardId: CITY_NAMES.TREBIZOND,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});

const { showPiece } = useCard();
const store = useStore();
const byzantium = computed(
    () => store.getters["kingdoms/getByzantium"]
);
const refreshByzantium = computed(
    () => store.getters["kingdoms/getRefreshByzantium"]
);

watch(refreshByzantium, (refreshByzantium) => {
    if (refreshByzantium) {
        // byzantium kingdom and empire card
        byzantiumCard.value.cardReligion = byzantium.value.religion;
        byzantiumCard.value.cardGovernment = byzantium.value.government;
        byzantiumCard.value.show = true;
        if (byzantium.value.location === "THRONE") {
            byzantiumEmpireCard.value.cardGovernment = byzantium.value.government;
            byzantiumEmpireCard.value.show = true;
        }

        // cities & pieces
        tanaCard.value.pieceId = byzantium.value.cities.TANA;
        tanaCard.value.show = showPiece(byzantium.value.cities.TANA);
        caffaCard.value.pieceId = byzantium.value.cities.CAFFA;
        caffaCard.value.show = showPiece(byzantium.value.cities.CAFFA);
        trebizondCard.value.pieceId = byzantium.value.cities.TREBIZOND;
        trebizondCard.value.show = showPiece(
            byzantium.value.cities.TREBIZOND
        );
        store.dispatch("kingdoms/setRefreshKingdom", {
            kingdomName: "byzantium",
            refreshValue: false,
        });
    }
});
</script>
