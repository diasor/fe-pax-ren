<template>
    <map-card :showCard="showRenaissanceVictory" :card="renaissanceVictoryCard" />
    <map-card :showCard="showGlobalizationVictory" :card="globalizationVictoryCard" />
    <map-card :showCard="showImperialVictory" :card="imperialVictoryCard" />
    <map-card :showCard="showHolyVictory" :card="holyVictoryCard" />
</template>
<script>

import { ref, computed, watch } from "vue";
import MapCard from "@/components/map/MapCard.vue";
import { useStore } from "vuex";
import { VICTORY_TYPE, CARD_TYPE } from "@/constants/enums";

export default ({
    name: "MapCardVictories",
    components: { MapCard },
    setup() {
        const renaissanceVictoryCard = { cardId: VICTORY_TYPE.RENAISSANCE, cardType: CARD_TYPE.VICTORY };
        const globalizationVictoryCard = { cardId: VICTORY_TYPE.GLOBALIZATION, cardType: CARD_TYPE.VICTORY };
        const imperialVictoryCard = { cardId: VICTORY_TYPE.IMPERIAL, cardType: CARD_TYPE.VICTORY };
        const holyVictoryCard = { cardId: VICTORY_TYPE.HOLY, cardType: CARD_TYPE.VICTORY };

        let showRenaissanceVictory = ref(false);
        let showGlobalizationVictory = ref(false);
        let showImperialVictory = ref(false);
        let showHolyVictory = ref(false);

        const store = useStore();
        const victories = computed(() => store.getters["board/allVictories"]);
        const refreshVictories = computed(() => store.getters["board/getRefreshVictories"]);

        watch(refreshVictories, (refreshVictories) => {
            if (refreshVictories) {
                showRenaissanceVictory.value = victories.value.isRenaissanceVictoryActive;
                showGlobalizationVictory.value = victories.value.isGlobalizationVictoryActive;
                showImperialVictory.value = victories.value.isImperialVictoryActive;
                showHolyVictory.value = victories.value.isHolyVictoryActive ;
                store.dispatch("board/setRefreshVictories", false);
            }
        });

        return {
            showRenaissanceVictory,
            renaissanceVictoryCard,
            showGlobalizationVictory,
            globalizationVictoryCard,
            showImperialVictory,
            imperialVictoryCard,
            showHolyVictory,
            holyVictoryCard,
        }
    },
});
</script>
