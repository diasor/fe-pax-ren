<template>
    <!-- west market -->
    <map-card :showCard="showWestMarket1" :card="westMarketCard1" />
    <map-card :showCard="showWestMarket2" :card="westMarketCard2" />
    <map-card :showCard="showWestMarket3" :card="westMarketCard3" />
    <map-card :showCard="showWestMarket4" :card="westMarketCard4" />
    <map-card :showCard="showWestMarket5" :card="westMarketCard5" />

    <!-- east market -->
    <map-card :showCard="showEastMarket1" :card="eastMarketCard1" />
    <map-card :showCard="showEastMarket2" :card="eastMarketCard2" />
    <map-card :showCard="showEastMarket3" :card="eastMarketCard3" />
    <map-card :showCard="showEastMarket4" :card="eastMarketCard4" />
    <map-card :showCard="showEastMarket5" :card="eastMarketCard5" />
</template>

<script>
import { ref, computed, watch } from "vue";
import MapCard from "@/components/map/MapCard.vue";
import { useStore } from "vuex";
import { CARD_TYPE, REGION } from "@/constants/enums";

export default ({
    name: "MapCardMarkets",
    components: { MapCard },
    setup() {
        // west market
        let showWestMarket1 = ref(false);
        let showWestMarket2 = ref(false);
        let showWestMarket3 = ref(false);
        let showWestMarket4 = ref(false);
        let showWestMarket5 = ref(false);
        let westMarketCard1 = ref({ cardId: "", cardMarkerId: "WEST_MARKET_1", cardRegion: REGION.WEST, cardType: CARD_TYPE.MARKET_CARD });
        let westMarketCard2 = ref({ cardId: "", cardMarkerId: "WEST_MARKET_2", cardRegion: REGION.WEST, cardType: CARD_TYPE.MARKET_CARD });
        let westMarketCard3 = ref({ cardId: "", cardMarkerId: "WEST_MARKET_3", cardRegion: REGION.WEST, cardType: CARD_TYPE.MARKET_CARD });
        let westMarketCard4 = ref({ cardId: "", cardMarkerId: "WEST_MARKET_4", cardRegion: REGION.WEST, cardType: CARD_TYPE.MARKET_CARD });
        let westMarketCard5 = ref({ cardId: "", cardMarkerId: "WEST_MARKET_5", cardRegion: REGION.WEST, cardType: CARD_TYPE.MARKET_CARD });

        // east market
        let showEastMarket1 = ref(false);
        let showEastMarket2 = ref(false);
        let showEastMarket3 = ref(false);
        let showEastMarket4 = ref(false);
        let showEastMarket5 = ref(false);
        let eastMarketCard1 = ref({ cardMarkerId: "EAST_MARKET_1", cardRegion: REGION.EAST, cardType: CARD_TYPE.MARKET_CARD });
        let eastMarketCard2 = ref({ cardMarkerId: "EAST_MARKET_2", cardRegion: REGION.EAST, cardType: CARD_TYPE.MARKET_CARD });
        let eastMarketCard3 = ref({ cardMarkerId: "EAST_MARKET_3", cardRegion: REGION.EAST, cardType: CARD_TYPE.MARKET_CARD });
        let eastMarketCard4 = ref({ cardMarkerId: "EAST_MARKET_4", cardRegion: REGION.EAST, cardType: CARD_TYPE.MARKET_CARD });
        let eastMarketCard5 = ref({ cardMarkerId: "EAST_MARKET_5", cardRegion: REGION.EAST, cardType: CARD_TYPE.MARKET_CARD });


        const store = useStore();
        const westMarket = computed(() => store.getters["markets/getWestMarket"]);
        const refreshWestMarket = computed(() => store.getters["markets/getRefreshWestMarket"]);
        const eastMarket = computed(() => store.getters["markets/getEastMarket"]);
        const refreshEastMarket = computed(() => store.getters["markets/getRefreshEastMarket"]);

        watch(refreshWestMarket, (refreshWestMarket) => {
            if (refreshWestMarket) {
                const maxCard = westMarket.value.length;
                if ( maxCard >= 1) {
                    westMarketCard1.value.cardId = westMarket.value[0].cardId;
                    showWestMarket1.value = true;
                }
               if ( maxCard >= 2) {
                    westMarketCard2.value.cardId = westMarket.value[1].cardId;
                    showWestMarket2.value = true;
                }
                if ( maxCard >= 3) {
                    westMarketCard3.value.cardId = westMarket.value[2].cardId;
                    showWestMarket3.value = true;
                }
                if ( maxCard >= 4) {
                    westMarketCard4.value.cardId = westMarket.value[3].cardId;
                    showWestMarket4.value = true;
                }
                if ( maxCard >= 5) {
                    westMarketCard5.value.cardId = westMarket.value[4].cardId;
                    showWestMarket5.value = true;
                }
            }
        });
        
        watch(refreshEastMarket, (refreshEastMarket) => {
            if (refreshEastMarket) {
                const maxCard = eastMarket.value.length;
                if ( maxCard >= 1) {
                    eastMarketCard1.value.cardId = eastMarket.value[0].cardId;
                    showEastMarket1.value = true;
                }
               if ( maxCard >= 2) {
                    eastMarketCard2.value.cardId = eastMarket.value[1].cardId;
                    showEastMarket2.value = true;
                }
                if ( maxCard >= 3) {
                    eastMarketCard3.value.cardId = eastMarket.value[2].cardId;
                    showEastMarket3.value = true;
                }
                if ( maxCard >= 4) {
                    eastMarketCard4.value.cardId = eastMarket.value[3].cardId;
                    showEastMarket4.value = true;
                }
                if ( maxCard >= 5) {
                    eastMarketCard5.value.cardId = eastMarket.value[4].cardId;
                    showEastMarket5.value = true;
                }
            }
        });

        return {
            showWestMarket1,
            showWestMarket2,
            showWestMarket3,
            showWestMarket4,
            showWestMarket5,
            westMarketCard1,
            westMarketCard2,
            westMarketCard3,
            westMarketCard4,
            westMarketCard5,
            showEastMarket1,
            showEastMarket2,
            showEastMarket3,
            showEastMarket4,
            showEastMarket5,
            eastMarketCard1,
            eastMarketCard2,
            eastMarketCard3,
            eastMarketCard4,
            eastMarketCard5,
        }
    },
});
</script>
