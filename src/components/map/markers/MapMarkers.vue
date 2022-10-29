<template>
    <figure id="kingdom-map">
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 3400 3400"
            preserveAspectRatio="xMinYMin meet"
        >
            <image
                width="3400"
                height="3400"
                xlink:href="/images/PR2_board_plain.jpg"
            />
            <map-markers-victories v-if="props.showMarkers" />
            <map-markers-kingdoms v-if="props.showMarkers" />
            <map-markers-pieces v-if="props.showMarkers" />
            <map-markers-market v-if="props.showMarkers" />
            <map-markers-borders v-if="props.showMarkers" />
            <map-markers-empires v-if="props.showMarkers" />
        </svg>
    </figure>
</template>

<script setup>
import { defineProps } from "vue";
import MapMarkersPieces from "./MapMarkersPieces.vue";
import MapMarkersKingdoms from "./MapMarkersKingdoms.vue";
import MapMarkersMarket from "./MapMarkersMarket.vue";
import MapMarkersVictories from "./MapMarkersVictories.vue";
import MapMarkersBorders from "./MapMarkersBorders.vue";
import MapMarkersEmpires from "./MapMarkersEmpires.vue";

const props = defineProps({
    showMarkers: Boolean,
});
</script>
