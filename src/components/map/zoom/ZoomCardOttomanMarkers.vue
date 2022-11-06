<template>
    <!-- markers -->
    <figure id="ottoman-zoom">
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 500 600"
            preserveAspectRatio="xMinYMin meet"
        >
            <image width="500" height="600" xlink:href="/images/OT-zoom.png" />
            <rect
                :id="OTTOMAN"
                x="59"
                y="57"
                fill="pink"
                opacity="0"
                width="361"
                height="536"
            />
            <rect :id="CONSTANTINOPLE" x="92" y="73" :width="WIDTH" :height="HEIGHT" fill="blue" opacity="0" />
            <rect :id="CONSTANTINOPLE_2" x="172" y="75" :width="WIDTH" :height="HEIGHT" fill="pink" opacity="0" />
            <rect :id="CONSTANTINOPLE_3" x="252" y="74" :width="WIDTH" :height="HEIGHT" fill="yellow" opacity="0" />
            <rect :id="MODON" x="108" y="245" :width="WIDTH" :height="HEIGHT" fill="pink" opacity="0" />
            <rect :id="RHODES" x="321" y="222" :width="WIDTH" :height="HEIGHT" fill="yellow" opacity="0" />

            <!-- Border 8: Hungary - Ottoman -->
            <rect :id="BORDER8_PIRATE" x="260" y="-4" :width="HEIGHT_PIRATE" :height="WIDTH_PIRATE" fill="pink" opacity="0"/>
            <rect :id="BORDER8" x="300" y="0" :width="RADIO" :height="RADIO" fill="blue" opacity="0"/>

             <!-- Border 12: Papal States - Ottoman  -->
            <rect :id="BORDER12_PIRATE" x="10" y="350" :width="WIDTH_PIRATE" :height="HEIGHT_PIRATE" fill="red" opacity="0"/>
            <rect :id="BORDER12" x="7" y="385" :width="RADIO" :height="RADIO" fill="blue" opacity="0"/>

            <!-- Border 13: Ottoman - Mamluk -->
            <rect :id="BORDER13_PIRATE" x="425" y="350" :width="WIDTH_PIRATE" :height="HEIGHT_PIRATE" fill="red" opacity="0"/>
            <rect :id="BORDER13" x="420" y="385" :width="RADIO" :height="RADIO" fill="blue" opacity="0"/>
        </svg>
    </figure>
</template>

<script setup>
import { usePirate } from "@/composables/pirate";
import { COUNTRY_CODES, CITY_NAMES, KINGDOM_NAMES } from "@/constants/enums";
import { WIDTH, HEIGHT, WIDTH_PIRATE, HEIGHT_PIRATE, RADIO } from "@/constants/pieceSizes";

const { pirateMakerName } = usePirate();
const OTTOMAN = `${COUNTRY_CODES.OTTOMAN}-zoom`;

// cities
const CONSTANTINOPLE = `${CITY_NAMES.CONSTANTINOPLE}-zoom`;
const CONSTANTINOPLE_2 = `${CITY_NAMES.CONSTANTINOPLE_2}-zoom`;
const CONSTANTINOPLE_3 = `${CITY_NAMES.CONSTANTINOPLE_3}-zoom`;
const MODON = `${CITY_NAMES.MODON}-zoom`;
const RHODES = `${CITY_NAMES.RHODES}-zoom`;

// borders
const BORDER8 = `${KINGDOM_NAMES.HUNGARY}-${KINGDOM_NAMES.OTTOMAN}-zoom`;
const BORDER8_PIRATE = pirateMakerName(KINGDOM_NAMES.HUNGARY, KINGDOM_NAMES.OTTOMAN, true);
const BORDER12 = `${KINGDOM_NAMES.PAPAL_STATES}-${KINGDOM_NAMES.OTTOMAN}-zoom`;
const BORDER12_PIRATE = pirateMakerName(KINGDOM_NAMES.PAPAL_STATES, KINGDOM_NAMES.OTTOMAN, true);
const BORDER13 = `${KINGDOM_NAMES.OTTOMAN}-${KINGDOM_NAMES.MAMLUK}-zoom`;
const BORDER13_PIRATE = pirateMakerName(KINGDOM_NAMES.OTTOMAN, KINGDOM_NAMES.MAMLUK, true);
</script>


<style lang="scss" scoped>
#ottoman-zoom {
	width: 100%;
	vertical-align: middle;
	margin: 0;
	overflow: hidden;
}

#ottoman-zoom svg { 
	display: inline-block;
	position: absolute;
	top: 0; left: 0;
    image { clip-path: inset(0% round 20px); }
}
</style>