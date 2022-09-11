<template>
    <figure id=kingdowm-map>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3400 3400" >
            <image width="3400" height="3400" xlink:href="/images/PR2_board_plain.jpg" />
            <map-markers-victories />
            <map-markers-kingdoms />
            <map-markers-pieces />
            <map-markers-market />
        </svg>
    </figure> 
</template>
<script>
import MapMarkersPieces from './MapMarkersPieces.vue';
import MapMarkersKingdoms from './MapMarkersKingdoms.vue';
import MapMarkersMarket from "./MapMarkersMarket.vue";
import MapMarkersVictories from "./MapMarkersVictories.vue";
export default {
    name: "MapMarkers",
    components: {
        MapMarkersPieces,
        MapMarkersKingdoms,
        MapMarkersMarket,
        MapMarkersVictories,
    }
};
</script>