<template>
    <map-card :showCard="showCard" :card="mamlukCard" />

    <!-- cities -->
    <map-card :showCard="showCyprus" :card="cyprusCard" />
    <map-card :showCard="showCairo" :card="cairoCard" />
    <map-card :showCard="showRedSea" :card="redSeaCard" />
</template>
<script>
import { ref, computed, watch } from "vue";
import MapCard from "@/components/map/MapCard.vue";
import { useCard } from "@/composables/card";
import { useStore } from "vuex";
import { COUNTRY_CODES, CITY_NAMES, CARD_TYPE } from "@/constants/enums";

export default {
    name: "MapCardMamluk",
    components: { MapCard },
    setup() {
        let showCard = ref(false);
        let mamlukCard = ref({
            cardId: COUNTRY_CODES.MAMLUK,
            cardType: CARD_TYPE.KINGDOM,
        });
        let showCyprus = ref(false);
        let cyprusCard = ref({
            cardId: CITY_NAMES.CYPRUS,
            cardType: CARD_TYPE.PIECE,
            pieceId: "",
        });
        let showCairo = ref(false);
        let cairoCard = ref({
            cardId: CITY_NAMES.CAIRO,
            cardType: CARD_TYPE.PIECE,
            pieceId: "",
        });
        let showRedSea = ref(false);
        let redSeaCard = ref({
            cardId: CITY_NAMES.RED_SEA,
            cardType: CARD_TYPE.PIECE,
            pieceId: "",
        });

        const { showPiece } = useCard();
        const store = useStore();
        const mamluk = computed(() => store.getters["kingdoms/getMamluk"]);
        const refreshMamluk = computed(
            () => store.getters["kingdoms/getRefreshMamluk"]
        );

        watch(refreshMamluk, (refreshMamluk) => {
            if (refreshMamluk) {
                mamlukCard.value.cardReligion = mamluk.value.religion;
                mamlukCard.value.cardGovernment = mamluk.value.government;
                showCard.value = true;

                // cities & pieces
                cyprusCard.value.pieceId = mamluk.value.cities.CYPRUS;
                showCyprus.value = showPiece(mamluk.value.cities.CYPRUS);
                cairoCard.value.pieceId = mamluk.value.cities.CAIRO;
                showCairo.value = showPiece(mamluk.value.cities.CAIRO);
                redSeaCard.value.pieceId = mamluk.value.cities.RED_SEA;
                showRedSea.value = showPiece(mamluk.value.cities.RED_SEA);
                store.dispatch("kingdoms/setRefreshKingdom", {
                    kingdomName: "mamluk",
                    refreshValue: false,
                });
            }
        });

        return {
            showCard,
            mamlukCard,
            showCyprus,
            cyprusCard,
            showCairo,
            cairoCard,
            showRedSea,
            redSeaCard,
        };
    },
};
</script>
