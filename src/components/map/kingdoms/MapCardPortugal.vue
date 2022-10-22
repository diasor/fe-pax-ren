<template>
    <map-card :showCard="portugalCard.show" :card="portugalCard" />
    <map-card :showCard="portugalEmpireCard.show" :card="portugalEmpireCard" />

    <!-- cities -->
    <map-card :showCard="toledoCard.show" :card="toledoCard" />
    <map-card :showCard="granadaCard.show" :card="granadaCard" />
    <map-card :showCard="spiceIslandsCard.show" :card="spiceIslandsCard" />
</template>

<script setup>
import { ref, computed, watch } from "vue";
import MapCard from "@/components/map/MapCard.vue";
import { useCard } from "@/composables/card";
import { useStore } from "vuex";
import { COUNTRY_CODES, CITY_NAMES, CARD_TYPE } from "@/constants/enums";
import { PORTUGAL_NAME } from "@/constants/empires";

const portugalCard = ref({
    cardId: COUNTRY_CODES.PORTUGAL,
    cardType: CARD_TYPE.KINGDOM,
    show: false,
});
const portugalEmpireCard = ref({
    cardId: PORTUGAL_NAME,
    cardType: CARD_TYPE.EMPIRE,
    show: false,
});
const toledoCard = ref({
    cardId: CITY_NAMES.TOLEDO,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});
const granadaCard = ref({
    cardId: CITY_NAMES.GRANADA,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});
const spiceIslandsCard = ref({
    cardId: CITY_NAMES.SPICE_ISLANDS,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});

const { showPiece } = useCard();
const store = useStore();
const portugal = computed(() => store.getters["kingdoms/getPortugal"]);
const refreshPortugal = computed(
    () => store.getters["kingdoms/getRefreshPortugal"]
);

watch(refreshPortugal, (newRefreshPortugal) => {
    if (newRefreshPortugal) {
        // portugal kingdom and empire cards
        portugalCard.value.cardReligion = portugal.value.religion;
        portugalCard.value.cardGovernment = portugal.value.government;
        portugalCard.value.show = true;
        if (portugal.value.location === "THRONE") {
            portugalEmpireCard.value.cardGovernment = portugal.value.government;
            portugalEmpireCard.value.show = true;
        }
        // cities & pieces
        toledoCard.value.pieceId = portugal.value.cities.TOLEDO;
        toledoCard.value.show = showPiece(portugal.value.cities.TOLEDO);
        granadaCard.value.pieceId = portugal.value.cities.GRANADA;
        granadaCard.value.show = showPiece(portugal.value.cities.GRANADA);
        spiceIslandsCard.value.pieceId =
            portugal.value.cities.SPICE_ISLANDS;
        spiceIslandsCard.value.show =
            showPiece(portugal.value.cities.SPICE_ISLANDS);
        store.dispatch("kingdoms/setRefreshKingdom", {
            kingdomName: "portugal",
            refreshValue: false,
        });
    }
});
</script>
