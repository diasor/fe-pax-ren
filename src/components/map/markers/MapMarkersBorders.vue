<template>
    <!-- Border 1: England - France -->
    <map-markers-block :id="border1PirateId" :x="1132" :y="800" :width="WIDTH_PIRATE" :height="HEIGHT_PIRATE" />
    <map-markers-circle :id="border1Id" :x="1165" :y="830" />

    <!-- Border 2: England - Portugal -->
    <map-markers-block :id="border2PirateId" :x="900" :y="1130" :width="HEIGHT_PIRATE" :height="WIDTH_PIRATE" />
    <map-markers-circle :id="border2Id" :x="930" :y="1160" />

    <!-- Border 3: France - Holly Roman Empire -->
    <map-markers-block :id="border3PirateId" :x="1532" :y="650" :width="WIDTH_PIRATE" :height="HEIGHT_PIRATE" />
    <map-markers-circle :id="border3Id" :x="1565" :y="740" />

    <!-- Border 4: France - Aragon (there can not be a pirate between these 2: over land) -->
    <map-markers-circle :id="border4Id" :x="1358" :y="1160" />

    <!-- Border 5: Holly Roman Empire - Hungary (there can not be a pirate between these 2: over land) -->
    <map-markers-circle :id="border5Id" :x="1959" :y="870" />

    <!-- Border 6: Holly Roman Empire - Papal States (there can not be a pirate between these 2: over land) -->
    <map-markers-circle :id="border6Id" :x="1740" :y="1160" />

    <!-- Border 7: Hungary - Byzantium -->
    <map-markers-block :id="border7PirateId" :x="2330" :y="990" :width="WIDTH_PIRATE" :height="HEIGHT_PIRATE" />
    <map-markers-circle :id="border7Id" :x="2358" :y="870" />

    <!-- Border 8: Hungary - Ottoman -->
    <map-markers-block :id="border8PirateId" :x="2180" :y="1130" :width="HEIGHT_PIRATE" :height="WIDTH_PIRATE" />
    <map-markers-circle :id="border8Id" :x="2180" :y="1160" />

    <!-- Border 9: Byzantium - Mamluk (there can not be a pirate between these 2: over land) -->
    <map-markers-circle :id="border9Id" :x="2550" :y="1160" />

    <!-- Border 10: Portugal - Aragon -->
    <map-markers-block :id="border10PirateId" :x="1132" :y="1500" :width="WIDTH_PIRATE" :height="HEIGHT_PIRATE" />
    <map-markers-circle :id="border10Id" :x="1165" :y="1570" />

    <!-- Border 11: Aragon - Papal States -->
    <map-markers-block :id="border11PirateId" :x="1532" :y="1350" :width="WIDTH_PIRATE" :height="HEIGHT_PIRATE" />
    <map-markers-circle :id="border11Id" :x="1560" :y="1400" />

    <!-- Border 12: Papal States - Ottoman -->
    <map-markers-block :id="border12PirateId" :x="1930" :y="1490" :width="WIDTH_PIRATE" :height="HEIGHT_PIRATE" />
    <map-markers-circle :id="border12Id" :x="1960" :y="1550" />

    <!-- Border 13: Ottoman - Mamluk -->
    <map-markers-block :id="border13PirateId" :x="2330" :y="1480" :width="WIDTH_PIRATE" :height="HEIGHT_PIRATE" />
    <map-markers-circle :id="border13Id" :x="2358" :y="1550" />
</template>

<script setup>
import MapMarkersBlock from "./MapMarkersBlock.vue";
import MapMarkersCircle from "./MapMarkersCircle.vue";
import { KINGDOM_NAMES } from "@/constants/enums";
const WIDTH_PIRATE = 65;
const HEIGHT_PIRATE = 130;

const border1Id = `${KINGDOM_NAMES.ENGLAND}-${KINGDOM_NAMES.FRANCE}`;
const border1PirateId = `${KINGDOM_NAMES.ENGLAND}-${KINGDOM_NAMES.FRANCE}_PIRATE`;
const border2Id = `${KINGDOM_NAMES.ENGLAND}-${KINGDOM_NAMES.PORTUGAL}`;
const border2PirateId = `${KINGDOM_NAMES.ENGLAND}-${KINGDOM_NAMES.PORTUGAL}_PIRATE`;
const border3Id = `${KINGDOM_NAMES.FRANCE}-${KINGDOM_NAMES.HRE}`;
const border3PirateId = `${KINGDOM_NAMES.FRANCE}-${KINGDOM_NAMES.HRE}_PIRATE`;
const border4Id = `${KINGDOM_NAMES.FRANCE}-${KINGDOM_NAMES.ARAGON}`;
const border5Id = `${KINGDOM_NAMES.HRE}-${KINGDOM_NAMES.HUNGARY}`;
const border6Id = `${KINGDOM_NAMES.HRE}-${KINGDOM_NAMES.PAPAL_STATES}`;
const border7Id = `${KINGDOM_NAMES.HUNGARY}-${KINGDOM_NAMES.BYZANTIUM}`;
const border7PirateId = `${KINGDOM_NAMES.HUNGARY}-${KINGDOM_NAMES.BYZANTIUM}_PIRATE`;
const border8Id = `${KINGDOM_NAMES.HUNGARY}-${KINGDOM_NAMES.OTTOMAN}`;
const border8PirateId = `${KINGDOM_NAMES.HUNGARY}-${KINGDOM_NAMES.OTTOMAN}_PIRATE`;
const border9Id = `${KINGDOM_NAMES.BYZANTIUM}-${KINGDOM_NAMES.MAMLUK}`;
const border10Id = `${KINGDOM_NAMES.PORTUGAL}-${KINGDOM_NAMES.ARAGON}`;
const border10PirateId = `${KINGDOM_NAMES.PORTUGAL}-${KINGDOM_NAMES.ARAGON}_PIRATE`;
const border11Id = `${KINGDOM_NAMES.ARAGON}-${KINGDOM_NAMES.PAPAL_STATES}`;
const border11PirateId = `${KINGDOM_NAMES.ARAGON}-${KINGDOM_NAMES.PAPAL_STATES}_PIRATE`;
const border12Id = `${KINGDOM_NAMES.PAPAL_STATES}-${KINGDOM_NAMES.OTTOMAN}`;
const border12PirateId = `${KINGDOM_NAMES.PAPAL_STATES}-${KINGDOM_NAMES.OTTOMAN}_PIRATE`;
const border13Id = `${KINGDOM_NAMES.OTTOMAN}-${KINGDOM_NAMES.MAMLUK}`;
const border13PirateId = `${KINGDOM_NAMES.OTTOMAN}-${KINGDOM_NAMES.MAMLUK}_PIRATE`;

</script>
