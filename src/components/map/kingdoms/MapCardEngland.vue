<template>
  <map-card :showCard="showCard" :card="englandCard" />

  <!-- cities -->
  <map-card :showCard="showLondon" :card="londonCard" />
  <map-card :showCard="showBordeaux" :card="bordeauxCard" />
</template>
<script>
import { ref, computed, watch } from "vue";
import MapCard from "@/components/map/MapCard.vue";
import { useCard } from "@/composables/card";
import { useStore } from "vuex";
import { COUNTRY_CODES, CITY_NAMES, CARD_TYPE } from "@/constants/enums";

export default {
  name: "MapCardEngland",
  components: { MapCard },
  setup() {
    let showCard = ref(false);
    let englandCard = ref({
      cardId: COUNTRY_CODES.ENGLAND,
      cardType: CARD_TYPE.KINGDOM,
    });
    let showLondon = ref(false);
    let londonCard = ref({
      cardId: CITY_NAMES.LONDON,
      cardType: CARD_TYPE.PIECE,
      pieceId: "",
    });
    let showBordeaux = ref(false);
    let bordeauxCard = ref({
      cardId: CITY_NAMES.BORDEAUX,
      cardType: CARD_TYPE.PIECE,
      pieceId: "",
    });

    const { showPiece } = useCard();
    const store = useStore();
    const england = computed(() => store.getters["kingdoms/getEngland"]);
    const refreshEngland = computed(
      () => store.getters["kingdoms/getRefreshEngland"]
    );

    watch(refreshEngland, (refreshEngland) => {
      if (refreshEngland) {
        englandCard.value.cardReligion = england.value.religion;
        showCard.value = true;

        // cities & pieces
        londonCard.value.pieceId = england.value.cities.LONDON;
        showLondon.value = showPiece(england.value.cities.LONDON);
        bordeauxCard.value.pieceId = england.value.cities.BORDEAUX;
        showBordeaux.value = showPiece(england.value.cities.BORDEAUX);
        store.dispatch("kingdoms/setRefreshKingdom", {
          kingdomName: "england",
          refreshValue: false,
        });
      }
    });

    return {
      showCard,
      englandCard,
      showLondon,
      londonCard,
      showBordeaux,
      bordeauxCard,
    };
  },
};
</script>
