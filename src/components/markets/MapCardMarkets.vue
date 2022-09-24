<template>
    <!-- west market -->
    <div v-for="iter in westMarket" :key="iter.card.cardId">
        <map-card :showCard="iter.showCard" :card="iter.card" />
    </div>

    <!-- east market -->
    <div v-for="iter in eastMarket" :key="iter.card.cardId">
        <map-card :showCard="iter.showCard" :card="iter.card" />
    </div>
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
        let westMarket = ref([]);
        
        // east market
        let eastMarket = ref([]);

        const store = useStore();
        const storeWestMarket = computed(() => store.getters["markets/getWestMarket"]);
        const refreshWestMarket = computed(() => store.getters["markets/getRefreshWestMarket"]);
        const storeEastMarket = computed(() => store.getters["markets/getEastMarket"]);
        const refreshEastMarket = computed(() => store.getters["markets/getRefreshEastMarket"]);

        watch(refreshWestMarket, (refreshWestMarket) => {
            if (refreshWestMarket) {
                for (let i = 0; i < storeWestMarket.value.length; i++) {
                    const cardId = i === 0 ? "PRW_BACK" : storeWestMarket.value[i].cardId;
                    const element = {
                        card: {
                            cardId,
                            cardMarkerId: `WEST_MARKET_${i}`,
                            cardRegion: REGION.WEST,
                            cardType: CARD_TYPE.MARKET_CARD
                        },
                        showCard: true,
                    };
                    westMarket.value.push(element);
                }
                store.dispatch("markets/setRefreshWest", false);
            }
        });
        
        watch(refreshEastMarket, (refreshEastMarket) => {
            if (refreshEastMarket) {
                for (let i = 0; i < storeEastMarket.value.length; i++) {
                    const cardId = i === 0 ? "PRE_BACK" : storeEastMarket.value[i].cardId;
                    const element = {
                        card: {
                            cardId,
                            cardMarkerId: `EAST_MARKET_${i}`,
                            cardRegion: REGION.EAST,
                            cardType: CARD_TYPE.MARKET_CARD
                        },
                        showCard: true,
                    };
                    eastMarket.value.push(element);
                }
                store.dispatch("markets/setRefreshEast", false);
            }
        });

        return {
            eastMarket,
            westMarket,
        }
    },
});
</script>
