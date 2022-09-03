<template>
    <figure id=kingdowm-map>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3400 3400" >
            <image width="3400" height="3400" xlink:href="/images/PR2_board_plain.jpg" />
            <map-markers-kingdoms />
            <map-markers-concession />
        </svg>
    </figure> 
</template>
<script>
import MapMarkersConcession from './MapMarkersConcession.vue';
import MapMarkersKingdoms from './MapMarkersKingdoms.vue';
export default {
    name: "MapMarkers",
    components: {
        MapMarkersConcession,
        MapMarkersKingdoms,
    }
};
</script>