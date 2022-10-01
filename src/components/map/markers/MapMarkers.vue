<template>
  <figure id="kingdowm-map">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 3400 3400"
    >
      <image
        width="3400"
        height="3400"
        xlink:href="/images/PR2_board_plain.jpg"
      />
      <map-markers-victories v-if="showMarkers" />
      <map-markers-kingdoms v-if="showMarkers" />
      <map-markers-pieces v-if="showMarkers" />
      <map-markers-market v-if="showMarkers" />
      <map-markers-borders v-if="showMarkers" />
    </svg>
  </figure>
</template>

<script>
import MapMarkersPieces from "./MapMarkersPieces.vue";
import MapMarkersKingdoms from "./MapMarkersKingdoms.vue";
import MapMarkersMarket from "./MapMarkersMarket.vue";
import MapMarkersVictories from "./MapMarkersVictories.vue";
import MapMarkersBorders from "./MapMarkersBorders.vue";

export default {
  name: "MapMarkers",
  components: {
    MapMarkersPieces,
    MapMarkersKingdoms,
    MapMarkersMarket,
    MapMarkersVictories,
    MapMarkersBorders,
  },

  props: {
    showMarkers: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
