<template>
    <map-card :showCard="showCard" :card="papalStatesCard" />

    <!-- cities -->
    <map-card :showCard="showVenice" :card="veniceCard" />
</template>

<script>
import { ref, computed, watch } from "vue";
import MapCard from "@/components/map/MapCard.vue";
import { useCard } from "@/composables/card";
import { useStore } from "vuex";
import { COUNTRY_CODES, CITY_NAMES, CARD_TYPE } from "@/constants/enums";

export default ({
    name: "MapCardPapalStates",
    components: { MapCard },
    setup() {
        let showCard = ref(false);
        let papalStatesCard = ref({ cardId: COUNTRY_CODES.PAPAL_STATES, cardType: CARD_TYPE.KINGDOM });
        let showVenice = ref(false);
        let veniceCard = ref({ cardId: CITY_NAMES.VENICE, cardType: CARD_TYPE.PIECE, pieceId: "" });

        const { showPiece } = useCard();
        const store = useStore();
        const papalStates = computed(() => store.getters["kingdoms/getPapalStates"]);
        const refreshPapalStates = computed(() => store.getters["kingdoms/getRefreshPapalStates"]);

        watch(refreshPapalStates, (refreshPapalStates) => {
            if (refreshPapalStates) {
                papalStatesCard.value.cardReligion = papalStates.value.religion;
                showCard.value = true;

                // cities & pieces
                veniceCard.value.pieceId = papalStates.value.cities.VENICE;
                showVenice.value = showPiece(papalStates.value.cities.VENICE);
            }
        });

        return {
            showCard,
            papalStatesCard,
            showVenice,
            veniceCard,
        }
    },
});
</script>
