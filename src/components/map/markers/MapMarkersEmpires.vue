<template>
    <!-- first line of empires -->
    <map-markers-block :id="england" :x="795" :y="FIRST_LINE" :width="CARD_SIZE" />
    <map-markers-block :id="france" :x="1192" :y="FIRST_LINE" :width="CARD_SIZE" />
    <map-markers-block :id="hre" :x="1590" :y="FIRST_LINE" :width="CARD_SIZE" />
    <map-markers-block :id="hungary" :x="1988" :y="FIRST_LINE" :width="CARD_SIZE" />
    <map-markers-block :id="byzantium" :x="2385" :y="FIRST_LINE" :width="CARD_SIZE" />

    <!-- second line of empires -->
    <map-markers-block :id="portugal" :x="794" :y="SECOND_LINE" :width="CARD_SIZE" />
    <map-markers-block :id="aragon" :x="1192" :y="SECOND_LINE" :width="CARD_SIZE" />
    <map-markers-block :id="papalStates" :x="1590" :y="SECOND_LINE" :width="CARD_SIZE" />
    <map-markers-block :id="ottoman" :x="1988" :y="SECOND_LINE" :width="CARD_SIZE" />
    <map-markers-block :id="mamluk" :x="2385" :y="SECOND_LINE" :width="CARD_SIZE" />
</template>

<script setup>
import MapMarkersBlock from "./MapMarkersBlock.vue";
import { COUNTRY_CODES } from "@/constants/enums";
const CARD_SIZE = 340;
const FIRST_LINE = 270;
const SECOND_LINE = 1712;

const england = COUNTRY_CODES.ENGLAND;
const france = COUNTRY_CODES.FRANCE;
const hre = COUNTRY_CODES.HRE;
const hungary = COUNTRY_CODES.HUNGARY;
const byzantium = COUNTRY_CODES.BYZANTIUM;
const portugal = COUNTRY_CODES.PORTUGAL;
const aragon = COUNTRY_CODES.ARAGON;
const papalStates = COUNTRY_CODES.PAPAL_STATES;
const ottoman = COUNTRY_CODES.OTTOMAN;
const mamluk = COUNTRY_CODES.MAMLUK;
</script>
