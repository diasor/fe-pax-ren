<template>
    <map-card :showCard="showCard" :card="franceCard" />

    <!-- cities -->
    <map-card :showCard="showBruges" :card="brugesCard" />
    <map-card :showCard="showParis" :card="parisCard" />
    <map-card :showCard="showLyon" :card="lyonCard" />
</template>
<script>
import { ref, computed, watch } from "vue";
import MapCard from "@/components/map/MapCard.vue";
import { useCard } from "@/composables/card";
import { useStore } from "vuex";
import { COUNTRY_CODES, CITY_NAMES, CARD_TYPE } from "@/constants/enums";

export default {
    name: "MapCardFrance",
    components: { MapCard },
    setup() {
        let showCard = ref(false);
        let franceCard = ref({
            cardId: COUNTRY_CODES.FRANCE,
            cardType: CARD_TYPE.KINGDOM,
        });
        let showBruges = ref(false);
        let brugesCard = ref({
            cardId: CITY_NAMES.BRUGES,
            cardType: CARD_TYPE.PIECE,
            pieceId: "",
        });
        let showParis = ref(false);
        let parisCard = ref({
            cardId: CITY_NAMES.PARIS,
            cardType: CARD_TYPE.PIECE,
            pieceId: "",
        });
        let showLyon = ref(false);
        let lyonCard = ref({
            cardId: CITY_NAMES.LYON,
            cardType: CARD_TYPE.PIECE,
            pieceId: "",
        });

        const { showPiece } = useCard();
        const store = useStore();
        const france = computed(() => store.getters["kingdoms/getFrance"]);
        const refreshFrance = computed(
            () => store.getters["kingdoms/getRefreshFrance"]
        );

        watch(refreshFrance, (refreshFrance) => {
            if (refreshFrance) {
                franceCard.value.cardReligion = france.value.religion;
                franceCard.value.cardGovernment = france.value.government;
                showCard.value = true;

                // cities & pieces
                brugesCard.value.pieceId = france.value.cities.BRUGES;
                showBruges.value = showPiece(france.value.cities.BRUGES);
                parisCard.value.pieceId = france.value.cities.PARIS;
                showParis.value = showPiece(france.value.cities.PARIS);
                lyonCard.value.pieceId = france.value.cities.LYON;
                showLyon.value = showPiece(france.value.cities.LYON);
                store.dispatch("kingdoms/setRefreshKingdom", {
                    kingdomName: "france",
                    refreshValue: false,
                });
            }
        });

        return {
            showCard,
            franceCard,
            showBruges,
            brugesCard,
            showParis,
            parisCard,
            showLyon,
            lyonCard,
        };
    },
};
</script>
