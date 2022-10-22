<template>
    <map-card :showCard="mamlukCard.show" :card="mamlukCard" />
    <map-card :showCard="mamlukEmpireCard.show" :card="mamlukEmpireCard" />

    <!-- cities -->
    <map-card :showCard="cyprusCard.show" :card="cyprusCard" />
    <map-card :showCard="cairoCard.show" :card="cairoCard" />
    <map-card :showCard="redSeaCard.show" :card="redSeaCard" />
</template>

<script setup>
import { ref, computed, watch } from "vue";
import MapCard from "@/components/map/MapCard.vue";
import { useCard } from "@/composables/card";
import { useStore } from "vuex";
import { COUNTRY_CODES, CITY_NAMES, CARD_TYPE } from "@/constants/enums";
import { MAMLUK_NAME } from "@/constants/empires";

const mamlukCard = ref({
    cardId: COUNTRY_CODES.MAMLUK,
    cardType: CARD_TYPE.KINGDOM,
    show: false,
});
const mamlukEmpireCard = ref({
    cardId: MAMLUK_NAME,
    cardType: CARD_TYPE.EMPIRE,
    show: false,
});
const cyprusCard = ref({
    cardId: CITY_NAMES.CYPRUS,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});
const cairoCard = ref({
    cardId: CITY_NAMES.CAIRO,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});
const redSeaCard = ref({
    cardId: CITY_NAMES.RED_SEA,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});

const { showPiece } = useCard();
const store = useStore();
const mamluk = computed(() => store.getters["kingdoms/getMamluk"]);
const refreshMamluk = computed(
    () => store.getters["kingdoms/getRefreshMamluk"]
);

watch(refreshMamluk, (refreshMamluk) => {
    if (refreshMamluk) {
        // mamluk kingdom and empire card
        mamlukCard.value.cardReligion = mamluk.value.religion;
        mamlukCard.value.cardGovernment = mamluk.value.government;
        mamlukCard.value.show = true;
        if (mamluk.value.location === "THRONE") {
            mamlukEmpireCard.value.cardGovernment = mamluk.value.government;
            mamlukEmpireCard.value.show = true;
        }

        // cities & pieces
        cyprusCard.value.pieceId = mamluk.value.cities.CYPRUS;
        cyprusCard.value.show = showPiece(mamluk.value.cities.CYPRUS);
        cairoCard.value.pieceId = mamluk.value.cities.CAIRO;
        cairoCard.value.show = showPiece(mamluk.value.cities.CAIRO);
        redSeaCard.value.pieceId = mamluk.value.cities.RED_SEA;
        redSeaCard.value.show = showPiece(mamluk.value.cities.RED_SEA);
        store.dispatch("kingdoms/setRefreshKingdom", {
            kingdomName: "mamluk",
            refreshValue: false,
        });
    }
});
</script>
