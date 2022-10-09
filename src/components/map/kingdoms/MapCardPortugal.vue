<template>
    <map-card :showCard="showCard" :card="portugalCard" />

    <!-- cities -->
    <map-card :showCard="showToledo" :card="toledoCard" />
    <map-card :showCard="showGranada" :card="granadaCard" />
    <map-card :showCard="showSpiceIslands" :card="spiceIslandsCard" />
</template>

<script>
import { ref, computed, watch } from "vue";
import MapCard from "@/components/map/MapCard.vue";
import { useCard } from "@/composables/card";
import { useStore } from "vuex";
import { COUNTRY_CODES, CITY_NAMES, CARD_TYPE } from "@/constants/enums";

export default {
    name: "MapCardPortugal",
    components: { MapCard },
    setup() {
        let showCard = ref(false);
        let portugalCard = ref({
            cardId: COUNTRY_CODES.PORTUGAL,
            cardType: CARD_TYPE.KINGDOM,
        });
        let showToledo = ref(false);
        let toledoCard = ref({
            cardId: CITY_NAMES.TOLEDO,
            cardType: CARD_TYPE.PIECE,
            pieceId: "",
        });
        let showGranada = ref(false);
        let granadaCard = ref({
            cardId: CITY_NAMES.GRANADA,
            cardType: CARD_TYPE.PIECE,
            pieceId: "",
        });
        let showSpiceIslands = ref(false);
        let spiceIslandsCard = ref({
            cardId: CITY_NAMES.SPICE_ISLANDS,
            cardType: CARD_TYPE.PIECE,
            pieceId: "",
        });

        const { showPiece } = useCard();
        const store = useStore();
        const portugal = computed(() => store.getters["kingdoms/getPortugal"]);
        const refreshPortugal = computed(
            () => store.getters["kingdoms/getRefreshPortugal"]
        );

        watch(refreshPortugal, (newRefreshPortugal) => {
            if (newRefreshPortugal) {
                portugalCard.value.cardReligion = portugal.value.religion;
                portugalCard.value.cardGovernment = portugal.value.government;
                showCard.value = true;

                // cities & pieces
                toledoCard.value.pieceId = portugal.value.cities.TOLEDO;
                showToledo.value = showPiece(portugal.value.cities.TOLEDO);
                granadaCard.value.pieceId = portugal.value.cities.GRANADA;
                showGranada.value = showPiece(portugal.value.cities.GRANADA);
                spiceIslandsCard.value.pieceId =
                    portugal.value.cities.SPICE_ISLANDS;
                showSpiceIslands.value = showPiece(
                    portugal.value.cities.SPICE_ISLANDS
                );
                store.dispatch("kingdoms/setRefreshKingdom", {
                    kingdomName: "portugal",
                    refreshValue: false,
                });
            }
        });

        return {
            showCard,
            portugalCard,
            showToledo,
            toledoCard,
            showGranada,
            granadaCard,
            showSpiceIslands,
            spiceIslandsCard,
        };
    },
};
</script>
