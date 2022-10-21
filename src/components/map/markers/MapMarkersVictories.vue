<template>
    <!-- vitory markers -->
    <map-markers-block :id="renaissance" :x="CARD_X" :y="310" :width="CARD_SIZE" />
    <map-markers-block :id="globalization" :x="CARD_X" :y="715" :width="CARD_SIZE" />
    <map-markers-block :id="imperial" :x="CARD_X" :y="1355" :width="CARD_SIZE" />
    <map-markers-block :id="holy" :x="CARD_X" :y="1755" :width="CARD_SIZE" />
</template>

<script setup>
import MapMarkersBlock from "./MapMarkersBlock.vue";
import { VICTORY_TYPE } from "@/constants/enums";
const CARD_SIZE = 270;
const CARD_X = 345;

const renaissance = VICTORY_TYPE.RENAISSANCE;
const globalization = VICTORY_TYPE.GLOBALIZATION;
const imperial = VICTORY_TYPE.IMPERIAL;
const holy = VICTORY_TYPE.HOLY;

</script>
