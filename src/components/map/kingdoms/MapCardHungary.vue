<template>
    <map-card :showCard="hungaryCard.show" :card="hungaryCard" />
    <map-card :showCard="hungaryEmpireCard.show" :card="hungaryEmpireCard" />
    
    <!-- cities -->
    <map-card :showCard="budaCard.show" :card="budaCard" />
    <map-card :showCard="varnaCard.show" :card="varnaCard" />
</template>
<script setup>
import { ref, computed, watch } from "vue";
import MapCard from "@/components/map/MapCard.vue";
import { useCard } from "@/composables/card";
import { useStore } from "vuex";
import { COUNTRY_CODES, CITY_NAMES, CARD_TYPE } from "@/constants/enums";
import { HUNGARY_NAME } from "@/constants/empires";

const hungaryCard = ref({
    cardId: COUNTRY_CODES.HUNGARY,
    cardType: CARD_TYPE.KINGDOM,
    show: false,
});
const hungaryEmpireCard = ref({
    cardId: HUNGARY_NAME,
    cardType: CARD_TYPE.EMPIRE,
    show: false,
});
const budaCard = ref({
    cardId: CITY_NAMES.BUDA,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});
const varnaCard = ref({
    cardId: CITY_NAMES.VARNA,
    cardType: CARD_TYPE.PIECE,
    pieceId: "",
    show: false,
});

const { showPiece } = useCard();
const store = useStore();
const hungary = computed(() => store.getters["kingdoms/getHungary"]);
const refreshHungary = computed(
    () => store.getters["kingdoms/getRefreshHungary"]
);

watch(refreshHungary, (refreshHungary) => {
    if (refreshHungary) {
        // hungary kingdom and empire card
        hungaryCard.value.cardReligion = hungary.value.religion;
        hungaryCard.value.cardGovernment = hungary.value.government;
        hungaryCard.value.show = true;
        if (hungary.value.location === "THRONE") {
            hungaryEmpireCard.value.cardGovernment = hungary.value.government;
            hungaryEmpireCard.value.show = true;
        }
        // cities & pieces
        budaCard.value.pieceId = hungary.value.cities.BUDA;
        budaCard.value.show = showPiece(hungary.value.cities.BUDA);
        varnaCard.value.pieceId = hungary.value.cities.VARNA;
        varnaCard.value.show = showPiece(hungary.value.cities.VARNA);
        store.dispatch("kingdoms/setRefreshKingdom", {
            kingdomName: "hungary",
            refreshValue: false,
        });
    }
});
</script>
