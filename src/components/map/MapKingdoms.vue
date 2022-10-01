<template>
  <div v-show="showKingdoms">
    <!-- kingdom cards -->
    <map-card-england />
    <map-card-france />
    <map-card-holly-roman-empire />
    <map-card-hungary />
    <map-card-byzantium />
    <map-card-portugal />
    <map-card-aragon />
    <map-card-papal-states />
    <map-card-ottoman />
    <map-card-mamluk />

    <!-- victories -->
    <map-card-victories />

    <!-- markets -->
    <map-card-markets />

    <!-- borders -->
    <map-card-borders />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MapCardEngland from "@/components/map/kingdoms/MapCardEngland.vue";
import MapCardFrance from "@/components/map/kingdoms/MapCardFrance.vue";
import MapCardHollyRomanEmpire from "@/components/map/kingdoms/MapCardHollyRomanEmpire.vue";
import MapCardHungary from "@/components/map/kingdoms/MapCardHungary.vue";
import MapCardPortugal from "@/components/map/kingdoms/MapCardPortugal.vue";
import MapCardByzantium from "@/components/map/kingdoms/MapCardByzantium.vue";
import MapCardAragon from "@/components/map/kingdoms/MapCardAragon.vue";
import MapCardPapalStates from "@/components/map/kingdoms/MapCardPapalStates.vue";
import MapCardOttoman from "@/components/map/kingdoms/MapCardOttoman.vue";
import MapCardMamluk from "@/components/map/kingdoms/MapCardMamluk.vue";
import MapCardVictories from "@/components/map/MapCardVictories.vue";
import MapCardMarkets from "@/components/markets/MapCardMarkets.vue";
import MapCardBorders from "@/components/map/MapCardBorders.vue";

export default defineComponent({
  name: "MapKingdoms",
  components: {
    MapCardEngland,
    MapCardFrance,
    MapCardHollyRomanEmpire,
    MapCardHungary,
    MapCardByzantium,
    MapCardPortugal,
    MapCardAragon,
    MapCardPapalStates,
    MapCardOttoman,
    MapCardMamluk,
    MapCardVictories,
    MapCardMarkets,
    MapCardBorders,
  },

  props: {
    showKingdoms: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.map-container {
  position: relative;
}

image {
  width: 100% !important;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}
</style>
