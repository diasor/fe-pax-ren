<template>
    <!-- first line of empires -->
    <map-markers-block :id="ENGLAND_NAME" :x="796" :y="FIRST_LINE" :width="CARD_SIZE" />
    <map-markers-block :id="FRANCE_NAME" :x="1194" :y="FIRST_LINE" :width="CARD_SIZE" />
    <map-markers-block :id="HRE_NAME" :x="1590" :y="FIRST_LINE" :width="CARD_SIZE" />
    <map-markers-block :id="HUNGARY_NAME" :x="1988" :y="FIRST_LINE" :width="CARD_SIZE" />
    <map-markers-block :id="BYZANTIUM_NAME" :x="2385" :y="FIRST_LINE" :width="CARD_SIZE" />

    <!-- second line of empires -->
    <map-markers-block :id="PORTUGAL_NAME" :x="796" :y="SECOND_LINE" :width="CARD_SIZE" />
    <map-markers-block :id="ARAGON_NAME" :x="1194" :y="SECOND_LINE" :width="CARD_SIZE" />
    <map-markers-block :id="PAPAL_STATE_NAME" :x="1590" :y="SECOND_LINE" :width="CARD_SIZE" />
    <map-markers-block :id="OTTOMAN_NAME" :x="1988" :y="SECOND_LINE" :width="CARD_SIZE" />
    <map-markers-block :id="MAMLUK_NAME" :x="2385" :y="SECOND_LINE" :width="CARD_SIZE" />
</template>

<script setup>
import MapMarkersBlock from "./MapMarkersBlock.vue";
import {
    ARAGON_NAME,
    BYZANTIUM_NAME,
    ENGLAND_NAME,
    FRANCE_NAME,
    HRE_NAME,
    HUNGARY_NAME,
    PAPAL_STATE_NAME,
    OTTOMAN_NAME,
    MAMLUK_NAME,
    PORTUGAL_NAME,
} from "@/constants/empires";

const CARD_SIZE = 340;
const FIRST_LINE = 274;
const SECOND_LINE = 1720;
</script>
