<template>
    <!-- England -->
    <rect :id="CITY_NAMES.LONDON" x="982" y=780 fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.LONDON)" :x="endBlock(982)" y=780 fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.LONDON)" x="982" :y="endBlock(780)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>
    
    <rect :id="CITY_NAMES.BORDEAUX" x="1046" y=1020 fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.BORDEAUX)" :x="endBlock(1046)" y=1020 fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.BORDEAUX)" x="1046" :y="endBlock(1020)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <rect :id="CITY_NAMES.BRUGES" x="1320" y=754 fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.BRUGES)" :x="endBlock(1320)" y=754 fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.BRUGES)" x="1320" :y="endBlock(754)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <rect :id="CITY_NAMES.PARIS" x="1227" y=893 fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.PARIS)" :x="endBlock(1227)" y=893 fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.PARIS)" x="1227" :y="endBlock(893)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <rect :id="CITY_NAMES.LYON" x="1410" y=970 fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.LYON)" :x="endBlock(1410)" y=970 fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.LYON)" x="1410" :y="endBlock(970)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>
    

    <!-- Holy Roman Empire -->
    <rect :id="CITY_NAMES.LUBECK" x="1663" y=695 fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.LUBECK)" :x="endBlock(1663)" y=695 fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.LUBECK)" x="1663" :y="endBlock(695)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <rect :id="CITY_NAMES.NOVGOROD" x="1805" y=685 fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.NOVGOROD)" :x="endBlock(1805)" y=685 fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.NOVGOROD)" x="1805" :y="endBlock(685)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <rect :id="CITY_NAMES.NURNBERG" x="1630" y=892 fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.NURNBERG)" :x="endBlock(1630)" y=892 fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.NURNBERG)" x="1630" :y="endBlock(892)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <rect :id="CITY_NAMES.VIENNA" x="1800" y=945 fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.VIENNA)" :x="endBlock(1800)" y=945 fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.VIENNA)" x="1800" :y="endBlock(945)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <!-- Hungary -->
    <rect :id="CITY_NAMES.BUDA" x="2037" y=963 fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.BUDA)" :x="endBlock(2037)" y=963 fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.BUDA)" x="2037" :y="endBlock(963)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <rect :id="CITY_NAMES.VARNA" x="2173" y=990 fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.VARNA)" :x="endBlock(2173)" y=990 fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.VARNA)" x="2173" :y="endBlock(990)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <!-- Byzantium -->
    <rect :id="CITY_NAMES.TANA" x="2492 " y=698 fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.TANA)" :x="endBlock(2492)" y=698 fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.TANA)" x="2492" :y="endBlock(698)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <rect :id="CITY_NAMES.CAFFA" x="2414" y=900 fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.CAFFA)" :x="endBlock(2414)" y=900 fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.CAFFA)" x="2414" :y="endBlock(900)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <rect :id="CITY_NAMES.TREBIZOND" x="2654" y=1030 fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.TREBIZOND)" :x="endBlock(2654)" y=1030 fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.TREBIZOND)" x="2654" :y="endBlock(1030)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <!-- Portugal -->
    <rect :id="CITY_NAMES.TOLEDO" x="1018" y=1322 fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.TOLEDO)" :x="endBlock(1018)" y=1322 fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.TOLEDO)" x="1018" :y="endBlock(1322)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <rect :id="CITY_NAMES.GRANADA" x="1035" y=1454 fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.GRANADA)" :x="endBlock(1035)" y=1454 fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.GRANADA)" x="1035" :y="endBlock(1454)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <rect :id="CITY_NAMES.SPICE_ISLANDS" x="887" y=1593 fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.SPICE_ISLANDS)" :x="endBlock(887)" y=1593 fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.SPICE_ISLANDS)" x="887" :y="endBlock(1593)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <!-- Aragon -->
    <rect :id="CITY_NAMES.VALENCIA" x="1242" y=1310 fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.VALENCIA)" :x="endBlock(1242)" y=1310 fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.VALENCIA)" x="1242" :y="endBlock(1310)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <rect :id="CITY_NAMES.TIMBUKTU" x="1278" y="1560" fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.TIMBUKTU)" :x="endBlock(1278)" y=1560 fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.TIMBUKTU)" x="1278" :y="endBlock(1560)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <rect :id="CITY_NAMES.ALGIERS" x="1430" y="1504" fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.ALGIERS)" :x="endBlock(1430)" y="1504" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.ALGIERS)" x="1430" :y="endBlock(1504)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <!-- Papal States -->
    <rect :id="CITY_NAMES.VENICE" x="1690" y="1230" fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.VENICE)" :x="endBlock(1690)" y="1230" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.VENICE)" x="1690" :y="endBlock(1230)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <!-- Ottoman -->
    <rect :id="CITY_NAMES.CONSTANTINOPLE" x="2028" y="1235" fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.CONSTANTINOPLE)" :x="endBlock(2028)" y="1235" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.CONSTANTINOPLE)" x="2028" :y="endBlock(1235)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <rect :id="CITY_NAMES.CONSTANTINOPLE_2" x="2100" y="1238" fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.CONSTANTINOPLE_2)" :x="endBlock(2100)" y="1238" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.CONSTANTINOPLE_2)" x="2100" :y="endBlock(1238)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <rect :id="CITY_NAMES.CONSTANTINOPLE_3" x="2178" y="1238" fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.CONSTANTINOPLE_3)" :x="endBlock(2178)" y="1238" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.CONSTANTINOPLE_3)" x="2178" :y="endBlock(1238)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <rect :id="CITY_NAMES.MODON" x="2043" y="1400" fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.MODON)" :x="endBlock(2043)" y="1400" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.MODON)" x="2043" :y="endBlock(1400)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <rect :id="CITY_NAMES.RHODES" x="2242" y="1380" fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.RHODES)" :x="endBlock(2242)" y="1380" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.RHODES)" x="2242" :y="endBlock(1380)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <!-- Mamluk -->
    <rect :id="CITY_NAMES.CYPRUS" x="2525" y="1358" fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.CYPRUS)" :x="endBlock(2525)" y="1358" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.CYPRUS)" x="2525" :y="endBlock(1358)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <rect :id="CITY_NAMES.CAIRO" x="2500" y="1550" fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.CAIRO)" :x="endBlock(2500)" y="1550" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.CAIRO)" x="2500" :y="endBlock(1550)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <rect :id="CITY_NAMES.RED_SEA" x="2640" y="1554" fill="red" opacity="0" :width="WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockWidth(CITY_NAMES.RED_SEA)" :x="endBlock(2640)" y="1554" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(CITY_NAMES.RED_SEA)" x="2640" :y="endBlock(1554)" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>
</template>
<script>
import { CITY_NAMES } from "@/constants/enums";
export default {
    name: "MapMarkersPieces",
    setup(){
        const WIDTH = 67;
        const END_WIDTH = 30;
        const HEIGHT = WIDTH;
        
        const endBlock = (x) => x + WIDTH;
        const endBlockWidth = (id) => `${id}-endX`;
        const endBlockHeight = (id) => `${id}-endY`;


        return {
            WIDTH, HEIGHT, END_WIDTH, CITY_NAMES, endBlockWidth, endBlockHeight, endBlock
        }
    },
};
</script>