<template>
  <map-card :showCard="showCard" :card="hungaryCard" />

  <!-- cities -->
  <map-card :showCard="showBuda" :card="budaCard" />
  <map-card :showCard="showVarna" :card="varnaCard" />
</template>
<script>
import { ref, computed, watch } from "vue";
import MapCard from "@/components/map/MapCard.vue";
import { useCard } from "@/composables/card";
import { useStore } from "vuex";
import { COUNTRY_CODES, CITY_NAMES, CARD_TYPE } from "@/constants/enums";

export default {
  name: "MapCardHungary",
  components: { MapCard },
  setup() {
    let showCard = ref(false);
    let hungaryCard = ref({
      cardId: COUNTRY_CODES.HUNGARY,
      cardType: CARD_TYPE.KINGDOM,
    });
    let showBuda = ref(false);
    let budaCard = ref({
      cardId: CITY_NAMES.BUDA,
      cardType: CARD_TYPE.PIECE,
      pieceId: "",
    });
    let showVarna = ref(false);
    let varnaCard = ref({
      cardId: CITY_NAMES.VARNA,
      cardType: CARD_TYPE.PIECE,
      pieceId: "",
    });

    const { showPiece } = useCard();
    const store = useStore();
    const hungary = computed(() => store.getters["kingdoms/getHungary"]);
    const refreshHungary = computed(
      () => store.getters["kingdoms/getRefreshHungary"]
    );

    watch(refreshHungary, (refreshHungary) => {
      if (refreshHungary) {
        hungaryCard.value.cardReligion = hungary.value.religion;
        showCard.value = true;

        // cities & pieces
        budaCard.value.pieceId = hungary.value.cities.BUDA;
        showBuda.value = showPiece(hungary.value.cities.BUDA);
        varnaCard.value.pieceId = hungary.value.cities.VARNA;
        showVarna.value = showPiece(hungary.value.cities.VARNA);
        store.dispatch("kingdoms/setRefreshKingdom", {
          kingdomName: "hungary",
          refreshValue: false,
        });
      }
    });

    return {
      showCard,
      hungaryCard,
      showBuda,
      budaCard,
      showVarna,
      varnaCard,
    };
  },
};
</script>
