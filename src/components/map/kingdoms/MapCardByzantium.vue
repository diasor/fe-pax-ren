<template>
  <map-card :showCard="showCard" :card="byzantiumCard" />

  <!-- cities -->
  <map-card :showCard="showTana" :card="tanaCard" />
  <map-card :showCard="showCaffa" :card="caffaCard" />
  <map-card :showCard="showTrebizond" :card="trebizondCard" />
</template>
<script>
import { ref, computed, watch } from "vue";
import MapCard from "@/components/map/MapCard.vue";
import { useCard } from "@/composables/card";
import { useStore } from "vuex";
import { COUNTRY_CODES, CITY_NAMES, CARD_TYPE } from "@/constants/enums";

export default {
  name: "MapCardByzantium",
  components: { MapCard },
  setup() {
    let showCard = ref(false);
    let byzantiumCard = ref({
      cardId: COUNTRY_CODES.BYZANTIUM,
      cardType: CARD_TYPE.KINGDOM,
    });
    let showTana = ref(false);
    let tanaCard = ref({
      cardId: CITY_NAMES.TANA,
      cardType: CARD_TYPE.PIECE,
      pieceId: "",
    });
    let showCaffa = ref(false);
    let caffaCard = ref({
      cardId: CITY_NAMES.CAFFA,
      cardType: CARD_TYPE.PIECE,
      pieceId: "",
    });
    let showTrebizond = ref(false);
    let trebizondCard = ref({
      cardId: CITY_NAMES.TREBIZOND,
      cardType: CARD_TYPE.PIECE,
      pieceId: "",
    });

    const { showPiece } = useCard();
    const store = useStore();
    const byzantium = computed(() => store.getters["kingdoms/getByzantium"]);
    const refreshByzantium = computed(
      () => store.getters["kingdoms/getRefreshByzantium"]
    );

    watch(refreshByzantium, (refreshByzantium) => {
      if (refreshByzantium) {
        byzantiumCard.value.cardReligion = byzantium.value.religion;
        showCard.value = true;

        // cities & pieces
        tanaCard.value.pieceId = byzantium.value.cities.TANA;
        showTana.value = showPiece(byzantium.value.cities.TANA);
        caffaCard.value.pieceId = byzantium.value.cities.CAFFA;
        showCaffa.value = showPiece(byzantium.value.cities.CAFFA);
        trebizondCard.value.pieceId = byzantium.value.cities.TREBIZOND;
        showTrebizond.value = showPiece(byzantium.value.cities.TREBIZOND);
        store.dispatch("kingdoms/setRefreshKingdom", {
          kingdomName: "byzantium",
          refreshValue: false,
        });
      }
    });

    return {
      showCard,
      byzantiumCard,
      showTana,
      tanaCard,
      showCaffa,
      caffaCard,
      showTrebizond,
      trebizondCard,
    };
  },
};
</script>
