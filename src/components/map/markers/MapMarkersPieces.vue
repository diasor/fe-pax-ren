<template>
    <!-- England -->
    <map-markers-block :id="london" :x="984" :y="768" :width="WIDTH"  :height="HEIGHT" />
    <map-markers-block :id="bordeaux" :x="1046" :y="1020" :width="WIDTH"  :height="HEIGHT" />

    <!-- France -->
    <map-markers-block :id="bruges" :x="1320" :y="754" :width="WIDTH"  :height="HEIGHT" />
    <map-markers-block :id="paris" :x="1227" :y="893" :width="WIDTH"  :height="HEIGHT" />
    <map-markers-block :id="lyon" :x="1410" :y="974" :width="WIDTH"  :height="HEIGHT" />

    <!-- Holy Roman Empire -->
    <map-markers-block :id="lubeck" :x="1663" :y="695" :width="WIDTH"  :height="HEIGHT" />
    <map-markers-block :id="novgorod" :x="1805" :y="685" :width="WIDTH"  :height="HEIGHT" />
    <map-markers-block :id="nurnberg" :x="1630" :y="892" :width="WIDTH"  :height="HEIGHT" />
    <map-markers-block :id="vienna" :x="1800" :y="945" :width="WIDTH"  :height="HEIGHT" />

    <!-- Hungary -->
    <map-markers-block :id="buda" :x="2037" :y="963" :width="WIDTH"  :height="HEIGHT" />
    <map-markers-block :id="varna" :x="2173" :y="990" :width="WIDTH"  :height="HEIGHT" />

    <!-- Byzantium -->
    <map-markers-block :id="tana" :x="2492" :y="698" :width="WIDTH"  :height="HEIGHT" />
    <map-markers-block :id="caffa" :x="2414" :y="900" :width="WIDTH"  :height="HEIGHT" />
    <map-markers-block :id="trebizond" :x="2654" :y="1030" :width="WIDTH"  :height="HEIGHT" />

    <!-- Portugal -->
    <map-markers-block :id="toledo" :x="1019" :y="1323" :width="WIDTH"  :height="HEIGHT" />
    <map-markers-block :id="granada" :x="1039" :y="1452" :width="WIDTH"  :height="HEIGHT" />
    <map-markers-block :id="spiceIslands" :x="887" :y="1593" :width="WIDTH"  :height="HEIGHT" />

    <!-- Aragon -->
    <map-markers-block :id="valencia" :x="1242" :y="1310" :width="WIDTH"  :height="HEIGHT" />
    <map-markers-block :id="timbuktu" :x="1278" :y="1560" :width="WIDTH"  :height="HEIGHT" />
    <map-markers-block :id="algiers" :x="1430" :y="1504" :width="WIDTH"  :height="HEIGHT" />

    <!-- Papal States -->
    <map-markers-block :id="venice" :x="1690" :y="1230" :width="WIDTH"  :height="HEIGHT" />

    <!-- Ottoman -->
    <map-markers-block :id="constantinople" :x="2028" :y="1238" :width="WIDTH"  :height="HEIGHT" />
    <map-markers-block :id="constantinople2" :x="2100" :y="1238" :width="WIDTH"  :height="HEIGHT" />
    <map-markers-block :id="constantinople3" :x="2178" :y="1238" :width="WIDTH"  :height="HEIGHT" />
    <map-markers-block :id="modon" :x="2043" :y="1400" :width="WIDTH"  :height="HEIGHT" />
    <map-markers-block :id="rhodes" :x="2242" :y="1380" :width="WIDTH"  :height="HEIGHT" />

    <!-- Mamluk -->
    <map-markers-block :id="cyprus" :x="2525" :y="1358" :width="WIDTH"  :height="HEIGHT" />
    <map-markers-block :id="cairo" :x="2500" :y="1550" :width="WIDTH"  :height="HEIGHT" />
    <map-markers-block :id="redSea" :x="2640" :y="1554" :width="WIDTH"  :height="HEIGHT" />
</template>

<script setup>
import MapMarkersBlock from "./MapMarkersBlock.vue";
import { CITY_NAMES } from "@/constants/enums";
const WIDTH = 67;
const HEIGHT = WIDTH;

const london = CITY_NAMES.LONDON;
const bordeaux = CITY_NAMES.BORDEAUX;
const bruges = CITY_NAMES.BRUGES;
const paris = CITY_NAMES.PARIS;
const lyon = CITY_NAMES.LYON;
const lubeck = CITY_NAMES.LUBECK;
const novgorod = CITY_NAMES.NOVGOROD;
const nurnberg = CITY_NAMES.NURNBERG;
const vienna = CITY_NAMES.VIENNA;
const buda = CITY_NAMES.BUDA;
const varna = CITY_NAMES.VARNA;
const tana = CITY_NAMES.TANA;
const caffa = CITY_NAMES.CAFFA;
const trebizond = CITY_NAMES.TREBIZOND;
const toledo = CITY_NAMES.TOLEDO;
const granada = CITY_NAMES.GRANADA;
const spiceIslands = CITY_NAMES.SPICE_ISLANDS;
const valencia = CITY_NAMES.VALENCIA;
const timbuktu = CITY_NAMES.TIMBUKTU;
const algiers = CITY_NAMES.ALGIERS;
const venice = CITY_NAMES.VENICE;
const constantinople = CITY_NAMES.CONSTANTINOPLE;
const constantinople2 = CITY_NAMES.CONSTANTINOPLE_2;
const constantinople3 = CITY_NAMES.CONSTANTINOPLE_3;
const modon = CITY_NAMES.MODON;
const rhodes = CITY_NAMES.RHODES;
const cyprus = CITY_NAMES.CYPRUS;
const cairo = CITY_NAMES.CAIRO;
const redSea = CITY_NAMES.RED_SEA;
</script>
