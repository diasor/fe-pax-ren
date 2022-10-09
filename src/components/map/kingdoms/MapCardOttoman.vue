<template>
    <map-card :showCard="showCard" :card="ottomanCard" />

    <!-- cities -->
    <map-card :showCard="showConstantinople1" :card="constantinople1Card" />
    <map-card :showCard="showConstantinople2" :card="constantinople2Card" />
    <map-card :showCard="showConstantinople3" :card="constantinople3Card" />
    <map-card :showCard="showModon" :card="modonCard" />
    <map-card :showCard="showRhodes" :card="rhodesCard" />
</template>
<script>
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

export default {
    name: "MapCardOttoman",
    components: { MapCard },
    setup() {
        let showCard = ref(false);
        let ottomanCard = ref({
            cardId: COUNTRY_CODES.OTTOMAN,
            cardReligion: RELIGION.CATHOLIC,
            cardType: CARD_TYPE.KINGDOM,
        });
        let showConstantinople1 = ref(false);
        let constantinople1Card = ref({
            cardId: CITY_NAMES.CONSTANTINOPLE,
            cardType: CARD_TYPE.PIECE,
            pieceId: "",
        });
        let showConstantinople2 = ref(false);
        let constantinople2Card = ref({
            cardId: CITY_NAMES.CONSTANTINOPLE_2,
            cardType: CARD_TYPE.PIECE,
            pieceId: "",
        });
        let showConstantinople3 = ref(false);
        let constantinople3Card = ref({
            cardId: CITY_NAMES.CONSTANTINOPLE_3,
            cardType: CARD_TYPE.PIECE,
            pieceId: "",
        });
        let showModon = ref(false);
        let modonCard = ref({
            cardId: CITY_NAMES.MODON,
            cardType: CARD_TYPE.PIECE,
            pieceId: "",
        });
        let showRhodes = ref(false);
        let rhodesCard = ref({
            cardId: CITY_NAMES.RHODES,
            cardType: CARD_TYPE.PIECE,
            pieceId: "",
        });

        const { showPiece } = useCard();
        const store = useStore();
        const ottoman = computed(() => store.getters["kingdoms/getOttoman"]);
        const refreshOttoman = computed(
            () => store.getters["kingdoms/getRefreshOttoman"]
        );

        watch(refreshOttoman, (newRefreshOttoman) => {
            if (newRefreshOttoman) {
                ottomanCard.value.cardReligion = ottoman.value.religion;
                ottomanCard.value.cardGovernment = ottoman.value.government;
                showCard.value = true;

                // cities & pieces
                constantinople1Card.value.pieceId =
                    ottoman.value.cities.CONSTANTINOPLE;
                showConstantinople1.value = showPiece(
                    ottoman.value.cities.CONSTANTINOPLE
                );
                constantinople2Card.value.pieceId =
                    ottoman.value.cities.CONSTANTINOPLE_2;
                showConstantinople2.value = showPiece(
                    ottoman.value.cities.CONSTANTINOPLE_2
                );
                constantinople3Card.value.pieceId =
                    ottoman.value.cities.CONSTANTINOPLE_3;
                showConstantinople3.value = showPiece(
                    ottoman.value.cities.CONSTANTINOPLE_3
                );
                modonCard.value.pieceId = ottoman.value.cities.MODON;
                showModon.value = showPiece(ottoman.value.cities.MODON);
                rhodesCard.value.pieceId = ottoman.value.cities.RHODES;
                showRhodes.value = showPiece(ottoman.value.cities.RHODES);
                store.dispatch("kingdoms/setRefreshKingdom", {
                    kingdomName: "ottoman",
                    refreshValue: false,
                });
            }
        });

        return {
            showCard,
            ottomanCard,
            showConstantinople1,
            constantinople1Card,
            showConstantinople2,
            constantinople2Card,
            showConstantinople3,
            constantinople3Card,
            showModon,
            modonCard,
            showRhodes,
            rhodesCard,
        };
    },
};
</script>
