<template>
    <map-card :showCard="showCard" :card="aragonCard" />

    <!-- cities -->
    <map-card :showCard="showValencia" :card="valenciaCard" />
    <map-card :showCard="showTimbuktu" :card="timbuktuCard" />
    <map-card :showCard="showAlgiers" :card="algiersCard" />
</template>
<script>

import { ref, computed, watch } from "vue";
import MapCard from "@/components/map/MapCard.vue";
import { useCard } from "@/composables/card";
import { useStore } from "vuex";
import { COUNTRY_CODES, CITY_NAMES, CARD_TYPE } from "@/constants/enums";

export default ({
    name: "MapCardAragon",
    components: { MapCard },
    setup() {
        let showCard = ref(false);
        let aragonCard = ref({ cardId: COUNTRY_CODES.ARAGON, cardType: CARD_TYPE.KINGDOM });
        let showValencia = ref(false);
        let valenciaCard = ref({ cardId: CITY_NAMES.VALENCIA, cardType: CARD_TYPE.PIECE, pieceId: "" });
        let showTimbuktu = ref(false);
        let timbuktuCard = ref({ cardId: CITY_NAMES.TIMBUKTU, cardType: CARD_TYPE.PIECE, pieceId: "" });
        let showAlgiers = ref(false);
        let algiersCard = ref({ cardId: CITY_NAMES.ALGIERS, cardType: CARD_TYPE.PIECE, pieceId: "" });

        const { showPiece } = useCard();
        const store = useStore();
        const aragon = computed(() => store.getters["kingdoms/getAragon"]);
        const refreshAragon = computed(() => store.getters["kingdoms/getRefreshAragon"]);

        watch(refreshAragon, (refreshAragon) => {
            if (refreshAragon) {
                aragonCard.value.cardReligion = aragon.value.religion;
                showCard.value = true;

                // cities & pieces
                valenciaCard.value.pieceId = aragon.value.cities.VALENCIA;
                showValencia.value = showPiece(aragon.value.cities.VALENCIA);
                algiersCard.value.pieceId = aragon.value.cities.ALGIERS;
                showAlgiers.value = showPiece(aragon.value.cities.ALGIERS);
                timbuktuCard.value.pieceId = aragon.value.cities.TIMBUKTU;
                showTimbuktu.value = showPiece(aragon.value.cities.TIMBUKTU);
            }
        });

        return {
            showCard,
            aragonCard,
            showValencia,
            valenciaCard,
            showAlgiers,
            algiersCard,
            showTimbuktu,
            timbuktuCard,
        }
    },
});
</script>
