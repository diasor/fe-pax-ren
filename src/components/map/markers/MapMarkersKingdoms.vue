<template>
    <!-- kingdom markers: first line -->
    <map-markers-block :id="england" :x="795" :y="FIRST_LINE" :width="WIDTH" :height="CARD_HEIGHT" />
    <map-markers-block :id="france" :x="1194" :y="FIRST_LINE" :width="WIDTH" :height="CARD_HEIGHT" />
    <map-markers-block :id="hre" :x="1590" :y="FIRST_LINE" :width="WIDTH" :height="CARD_HEIGHT" />
    <map-markers-block :id="hungary" :x="1990" :y="FIRST_LINE" :width="WIDTH" :height="CARD_HEIGHT" />
    <map-markers-block :id="byzantium" :x="2390" :y="FIRST_LINE" :width="WIDTH" :height="CARD_HEIGHT" />

    
    <!-- kingdom markers: second line -->
    <map-markers-block :id="portugal" :x="795" :y="SECOND_LINE" :width="WIDTH" :height="CARD_HEIGHT" />
    <map-markers-block :id="aragon" :x="1194" :y="SECOND_LINE" :width="WIDTH" :height="CARD_HEIGHT" />
    <map-markers-block :id="papalStates" :x="1590" :y="SECOND_LINE" :width="WIDTH" :height="CARD_HEIGHT" />
    <map-markers-block :id="ottoman" :x="1990" :y="SECOND_LINE" :width="WIDTH" :height="CARD_HEIGHT" />
    <map-markers-block :id="mamluk" :x="2390" :y="SECOND_LINE" :width="WIDTH" :height="CARD_HEIGHT" />

</template>
<script setup>
import MapMarkersBlock from "./MapMarkersBlock.vue";
import { COUNTRY_CODES } from "@/constants/enums";
const CARD_HEIGHT = 514;
const FIRST_LINE = 624;
const SECOND_LINE = 1201;
const WIDTH = 340;

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
