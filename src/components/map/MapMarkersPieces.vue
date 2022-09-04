<template>
    <!-- England -->
    <circle :id="CITY_NAMES.LONDON" cx="1012" cy="830" :r="RADIO" opacity="0.5" fill="red" />
    <rect :id="endBlockName(CITY_NAMES.LONDON)" :x="endBlockX(1012)" :y="endBlockY(830)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>
    <circle :id="CITY_NAMES.BORDEAUX" cx="1080" cy="1070" :r="RADIO" opacity="0.5" fill="red" />
    <rect :id="endBlockName(CITY_NAMES.BORDEAUX)" :x="endBlockX(1080)" :y="endBlockY(1070)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>

    <!-- France -->
    <circle :id="CITY_NAMES.BRUGES" cx="1348" cy="800" :r="RADIO" opacity="0.5" fill="blue" />
    <rect :id="endBlockName(CITY_NAMES.BRUGES)" :x="endBlockX(1348)" :y="endBlockY(800)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>
    <circle :id="CITY_NAMES.PARIS" cx="1255" cy="945" :r="RADIO" opacity="0.5" fill="blue" />
    <rect :id="endBlockName(CITY_NAMES.PARIS)" :x="endBlockX(1255)" :y="endBlockY(945)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>
    <circle :id="CITY_NAMES.LYON" cx="1438" cy="1025" :r="RADIO" opacity="0.5" fill="blue" />
    <rect :id="endBlockName(CITY_NAMES.LYON)" :x="endBlockX(1438)" :y="endBlockY(1025)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>

    <!-- Holy Roman Empire -->
    <circle :id="CITY_NAMES.LUBECK" cx="1688" cy="750" :r="RADIO" opacity="0.5" fill="yellow" />
    <rect :id="endBlockName(CITY_NAMES.LUBECK)" :x="endBlockX(1688)" :y="endBlockY(750)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>
    <circle :id="CITY_NAMES.NOVGOROD" cx="1830" cy="730" :r="RADIO" opacity="0.5" fill="yellow" />
    <rect :id="endBlockName(CITY_NAMES.NOVGOROD)" :x="endBlockX(1830)" :y="endBlockY(730)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>
    <circle :id="CITY_NAMES.NURNBERG" cx="1662" cy="948" :r="RADIO" opacity="0.5" fill="yellow" />
    <rect :id="endBlockName(CITY_NAMES.NURNBERG)" :x="endBlockX(1662)" :y="endBlockY(948)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>
    <circle :id="CITY_NAMES.VIENNA" cx="1830" cy="995" :r="RADIO" opacity="0.5" fill="yellow" />
    <rect :id="endBlockName(CITY_NAMES.VIENNA)" :x="endBlockX(1830)" :y="endBlockY(995)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>

    <!-- Hungary -->
    <circle :id="CITY_NAMES.BUDA" cx="2060" cy="1010" :r="RADIO" opacity="0.5" fill="green" />
    <rect :id="endBlockName(CITY_NAMES.BUDA)" :x="endBlockX(2060)" :y="endBlockY(1010)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>
    <circle :id="CITY_NAMES.VARNA" cx="2200" cy="1040" :r="RADIO" opacity="0.5" fill="green" />
    <rect :id="endBlockName(CITY_NAMES.VARNA)" :x="endBlockX(2200)" :y="endBlockY(1040)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>


    <!-- Byzantium -->
    <circle :id="CITY_NAMES.TANA" cx="2520" cy="745" :r="RADIO" opacity="0.5" fill="blue" />
    <rect :id="endBlockName(CITY_NAMES.TANA)" :x="endBlockX(2520)" :y="endBlockY(745)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>
    <circle :id="CITY_NAMES.CAFFA" cx="2440" cy="950" :r="RADIO" opacity="0.5" fill="blue" />
    <rect :id="endBlockName(CITY_NAMES.CAFFA)" :x="endBlockX(2440)" :y="endBlockY(950)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>
    <circle :id="CITY_NAMES.TREBIZOND" cx="2675" cy="1080" :r="RADIO" opacity="0.5" fill="blue" />
    <rect :id="endBlockName(CITY_NAMES.TREBIZOND)" :x="endBlockX(2675)" :y="endBlockY(1080)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>


    <!-- Portugal -->
    <circle :id="CITY_NAMES.TOLEDO" cx="1050" cy="1370" :r="RADIO" opacity="0.5" fill="red" />
    <rect :id="endBlockName(CITY_NAMES.TOLEDO)" :x="endBlockX(1050)" :y="endBlockY(1370)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>
    <circle :id="CITY_NAMES.GRANADA" cx="1050" cy="1500" :r="RADIO" opacity="0.5" fill="red" />
    <rect :id="endBlockName(CITY_NAMES.GRANADA)" :x="endBlockX(1050)" :y="endBlockY(1500)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>


    <!-- Aragon -->
    <circle :id="CITY_NAMES.VALENCIA" cx="1265" cy="1354" :r="RADIO" opacity="0.5" fill="purple" />
    <rect :id="endBlockName(CITY_NAMES.VALENCIA)" :x="endBlockX(1265)" :y="endBlockY(1354)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>
    <circle :id="CITY_NAMES.TIMBUKTU" cx="1305" cy="1605" :r="RADIO" opacity="0.5" fill="purple" />
    <rect :id="endBlockName(CITY_NAMES.TIMBUKTU)" :x="endBlockX(1305)" :y="endBlockY(1605)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>
    <circle :id="CITY_NAMES.ALGIERS" cx="1460" cy="1560" :r="RADIO" opacity="0.5" fill="purple" />
    <rect :id="endBlockName(CITY_NAMES.ALGIERS)" :x="endBlockX(1460)" :y="endBlockY(1560)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>

    <!-- Papal States -->
    <circle :id="CITY_NAMES.VENICE" cx="1710" cy="1280" :r="RADIO" opacity="0.5" fill="red" />
    <rect :id="endBlockName(CITY_NAMES.VENICE)" :x="endBlockX(1710)" :y="endBlockY(1280)" fill="red" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>

    <!-- Ottoman -->
    <circle :id="CITY_NAMES.CONSTANTINOPLE" cx="2050" cy="1286" :r="RADIO" opacity="0.5" fill="blue" />
    <rect :id="endBlockName(CITY_NAMES.CONSTANTINOPLE)" :x="endBlockX(2050)" :y="endBlockY(1286)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>
    <circle :id="CITY_NAMES.CONSTANTINOPLE_2" cx="2130" cy="1286" :r="RADIO" opacity="0.5" fill="blue" />
    <rect :id="endBlockName(CITY_NAMES.CONSTANTINOPLE_2)" :x="endBlockX(2130)" :y="endBlockY(1286)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>
    <circle :id="CITY_NAMES.CONSTANTINOPLE_3" cx="2205" cy="1286" :r="RADIO" opacity="0.5" fill="blue" />
    <rect :id="endBlockName(CITY_NAMES.CONSTANTINOPLE_3)" :x="endBlockX(2205)" :y="endBlockY(1286)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>
    <circle :id="CITY_NAMES.MODON" cx="2068" cy="1450" :r="RADIO" opacity="0.5" fill="blue" />
    <rect :id="endBlockName(CITY_NAMES.MODON)" :x="endBlockX(2068)" :y="endBlockY(1450)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>
    <circle :id="CITY_NAMES.RHODES" cx="2270" cy="1430" :r="RADIO" opacity="0.5" fill="blue" />
    <rect :id="endBlockName(CITY_NAMES.RHODES)" :x="endBlockX(2270)" :y="endBlockY(1430)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>


    <!-- Mamluk -->
    <circle :id="CITY_NAMES.CYPRUS" cx="2550" cy="1402" :r="RADIO" opacity="0.5" fill="green" />
    <rect :id="endBlockName(CITY_NAMES.CYPRUS)" :x="endBlockX(2550)" :y="endBlockY(1402)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>
    <circle :id="CITY_NAMES.CAIRO" cx="2525" cy="1602" :r="RADIO" opacity="0.5" fill="green" />
    <rect :id="endBlockName(CITY_NAMES.CAIRO)" :x="endBlockX(2525)" :y="endBlockY(1602)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>
    <circle :id="CITY_NAMES.RED_SEA" cx="2660" cy="1602" :r="RADIO" opacity="0.5" fill="green" />
    <rect :id="endBlockName(CITY_NAMES.RED_SEA)" :x="endBlockX(2660)" :y="endBlockY(1602)" fill="yellow" opacity="0.5" :width="WIDTH" :height="HEIGHT"/>



</template>
<script>
import { CITY_NAMES } from "@/constants/enums";
export default {
    name: "MapMarkersPieces",
    setup(){
        const RADIO = 37;
        const WIDTH = 37;
        const HEIGHT = RADIO * 2;
        
        const endBlockName = (id) => `${id}-end`;
        const endBlockX = (x) => x + WIDTH;
        const endBlockY = (y) => y - RADIO;

        return {
            RADIO, WIDTH, HEIGHT, CITY_NAMES, endBlockName, endBlockX, endBlockY
        }
    },
};
</script>