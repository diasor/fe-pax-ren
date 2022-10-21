<template>
    <!-- West Market (first line) -->
    <map-markers-block id="WEST_MARKET_0" :x="213" :y="FIRST_LINE" :width="WIDTH" :height="HEIGHT" />
    <map-markers-block id="WEST_MARKET_1" :x="582" :y="FIRST_LINE" :width="WIDTH" :height="HEIGHT" />
    <map-markers-block id="WEST_MARKET_2" :x="970" :y="FIRST_LINE" :width="WIDTH" :height="HEIGHT" />
    <map-markers-block id="WEST_MARKET_3" :x="1353" :y="FIRST_LINE" :width="WIDTH" :height="HEIGHT" />
    <map-markers-block id="WEST_MARKET_4" :x="1730" :y="FIRST_LINE" :width="WIDTH" :height="HEIGHT" />
    <map-markers-block id="WEST_MARKET_5" :x="2115" :y="FIRST_LINE" :width="WIDTH" :height="HEIGHT" />

    <!-- East Market (second line) -->
    <map-markers-block id="EAST_MARKET_0" :x="213" :y="SECOND_LINE" :width="WIDTH" :height="HEIGHT" />
    <map-markers-block id="EAST_MARKET_1" :x="582" :y="SECOND_LINE" :width="WIDTH" :height="HEIGHT" />
    <map-markers-block id="EAST_MARKET_2" :x="970" :y="SECOND_LINE" :width="WIDTH" :height="HEIGHT" />
    <map-markers-block id="EAST_MARKET_3" :x="1353" :y="SECOND_LINE" :width="WIDTH" :height="HEIGHT" />
    <map-markers-block id="EAST_MARKET_4" :x="1730" :y="SECOND_LINE" :width="WIDTH" :height="HEIGHT" />
    <map-markers-block id="EAST_MARKET_5" :x="2115" :y="SECOND_LINE" :width="WIDTH" :height="HEIGHT" />
</template>

<script setup>
import MapMarkersBlock from "./MapMarkersBlock.vue";
const FIRST_LINE = 2165;
const SECOND_LINE = 2725;
const WIDTH = 340;
const HEIGHT = 512;
</script>
