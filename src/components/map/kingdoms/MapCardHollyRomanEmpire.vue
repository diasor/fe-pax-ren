<template>
    <map-card :showCard="showCard" :card="hreCard" />

    <!-- cities -->
    <map-card :showCard="showLubek" :card="lubekCard" />
    <map-card :showCard="showNovgorod" :card="novgorodCard" />
    <map-card :showCard="showNurnberg" :card="nurnbergCard" />
    <map-card :showCard="showVienna" :card="viennaCard" />
</template>

<script>
import { ref, computed, watch } from "vue";
import MapCard from "@/components/map/MapCard.vue";
import { useCard } from "@/composables/card";
import { useStore } from "vuex";
import { COUNTRY_CODES, CITY_NAMES, CARD_TYPE } from "@/constants/enums";

export default ({
    name: "MapCardHollyRomanEmpire",
    components: { MapCard },
    setup() {
        let showCard = ref(false);
        let hreCard = ref({ cardId: COUNTRY_CODES.HRE, cardType: CARD_TYPE.KINGDOM });
        let showLubek = ref(false);
        let lubekCard = ref({ cardId: CITY_NAMES.LUBECK, cardType: CARD_TYPE.PIECE, pieceId: "" });
        let showNovgorod = ref(false);
        let novgorodCard = ref({ cardId: CITY_NAMES.NOVGOROD, cardType: CARD_TYPE.PIECE, pieceId: "" });
        let showNurnberg = ref(false);
        let nurnbergCard = ref({ cardId: CITY_NAMES.NURNBERG, cardType: CARD_TYPE.PIECE, pieceId: "" });
        let showVienna = ref(false);
        let viennaCard = ref({ cardId: CITY_NAMES.VIENNA, cardType: CARD_TYPE.PIECE, pieceId: "" });

        const { showPiece } = useCard();
        const store = useStore();
        const hre = computed(() => store.getters["kingdoms/getHolyRomanEmpire"]);
        const refreshHRE = computed(() => store.getters["kingdoms/getRefreshHRE"]);

        watch(refreshHRE, (refreshHRE) => {
            if (refreshHRE) {
                hreCard.value.cardReligion = hre.value.religion;
                showCard.value = true;

                // cities & pieces
                lubekCard.value.pieceId = hre.value.cities.LUBECK;
                showLubek.value = showPiece(hre.value.cities.LUBECK);
                novgorodCard.value.pieceId = hre.value.cities.NOVGOROD;
                showNurnberg.value = showPiece(hre.value.cities.NOVGOROD);
                nurnbergCard.value.pieceId = hre.value.cities.NURNBERG;
                showNurnberg.value = showPiece(hre.value.cities.NURNBERG);
                viennaCard.value.pieceId = hre.value.cities.VIENNA;
                showVienna.value = showPiece(hre.value.cities.VIENNA);
            }
        });

        return {
            showCard,
            hreCard,
            showLubek,
            lubekCard,
            showNovgorod,
            novgorodCard,
            showNurnberg,
            nurnbergCard,
            showVienna,
            viennaCard,
        }
    },
});
</script>
