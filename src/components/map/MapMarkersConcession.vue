<template>
    <!-- England -->
    <circle :id="CITY_NAMES.LONDON" cx="1012" cy="830" :r="RADIO" opacity="0.5" fill="red" />
    <circle :id="CITY_NAMES.BORDEAUX" cx="1080" cy="1070" :r="RADIO" opacity="0.5" fill="red" />

    <!-- France -->
    <circle :id="CITY_NAMES.BRUGES" cx="1348" cy="800" :r="RADIO" opacity="0.5" fill="blue" />
    <circle :id="CITY_NAMES.PARIS" cx="1255" cy="945" :r="RADIO" opacity="0.5" fill="blue" />
    <circle :id="CITY_NAMES.LYON" cx="1438" cy="1025" :r="RADIO" opacity="0.5" fill="blue" />

    <!-- Holy Roman Empire -->
    <circle :id="CITY_NAMES.LABECK" cx="1688" cy="750" :r="RADIO" opacity="0.5" fill="yellow" />
    <circle :id="CITY_NAMES.NOVGOROD" cx="1830" cy="730" :r="RADIO" opacity="0.5" fill="yellow" />
    <circle :id="CITY_NAMES.NURNBERG" cx="1662" cy="948" :r="RADIO" opacity="0.5" fill="yellow" />
    <circle :id="CITY_NAMES.VIENNA" cx="1830" cy="995" :r="RADIO" opacity="0.5" fill="yellow" />

    <!-- Hungary -->
    <circle :id="CITY_NAMES.BUDA" cx="2060" cy="1010" :r="RADIO" opacity="0.5" fill="green" />
    <circle :id="CITY_NAMES.VARNA" cx="2200" cy="1040" :r="RADIO" opacity="0.5" fill="green" />

    <!-- Byzantium -->
    <circle :id="CITY_NAMES.TANA" cx="2520" cy="745" :r="RADIO" opacity="0.5" fill="blue" />
    <circle :id="CITY_NAMES.CAFFA" cx="2440" cy="950" :r="RADIO" opacity="0.5" fill="blue" />
    <circle :id="CITY_NAMES.TREBIZOND" cx="2675" cy="1080" :r="RADIO" opacity="0.5" fill="blue" />

    <!-- Portugal -->
    <circle :id="CITY_NAMES.TOLEDO" cx="1050" cy="1370" :r="RADIO" opacity="0.5" fill="red" />
    <circle :id="CITY_NAMES.GRANADA" cx="1070" cy="1500" :r="RADIO" opacity="0.5" fill="red" />

    <!-- Aragon -->
    <circle :id="CITY_NAMES.VALENCIA" cx="1265" cy="1354" :r="RADIO" opacity="0.5" fill="purple" />
    <circle :id="CITY_NAMES.TIMBUKTU" cx="1305" cy="1605" :r="RADIO" opacity="0.5" fill="purple" />
    <circle :id="CITY_NAMES.ALGIERS" cx="1460" cy="1560" :r="RADIO" opacity="0.5" fill="purple" />

    <!-- Papal States -->
    <circle :id="CITY_NAMES.VENICE" cx="1710" cy="1280" :r="RADIO" opacity="0.5" fill="yellow" />

    <!-- Ottoman -->
    <circle :id="CITY_NAMES.CONSTANTINOPLE" cx="2050" cy="1286" :r="RADIO" opacity="0.5" fill="blue" />
    <circle :id="CITY_NAMES.CONSTANTINOPLE_2" cx="2130" cy="1286" :r="RADIO" opacity="0.5" fill="blue" />
    <circle :id="CITY_NAMES.CONSTANTINOPLE_3" cx="2205" cy="1286" :r="RADIO" opacity="0.5" fill="blue" />
    <circle :id="CITY_NAMES.MODON" cx="2068" cy="1450" :r="RADIO" opacity="0.5" fill="blue" />
    <circle :id="CITY_NAMES.RHODES" cx="2270" cy="1430" :r="RADIO" opacity="0.5" fill="blue" />

    <!-- Mamluk -->
    <circle :id="CITY_NAMES.MAMLUK" cx="2550" cy="1402" :r="RADIO" opacity="0.5" fill="green" />
    <circle :id="CITY_NAMES.CAIRO" cx="2525" cy="1602" :r="RADIO" opacity="0.5" fill="green" />
    <circle :id="CITY_NAMES.RED_SEA" cx="2660" cy="1602" :r="RADIO" opacity="0.5" fill="green" />


</template>
<script>
import { CITY_NAMES } from "@/constants/enums";
export default {
    name: "MapMarkersConcession",
    setup(){
        const RADIO = 37;

        return {
            RADIO, CITY_NAMES
        }
    },
};
</script>