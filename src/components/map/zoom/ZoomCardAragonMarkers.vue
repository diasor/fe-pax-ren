<template>
    <!-- markers -->
    <figure id="aragon-zoom">
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 500 600"
            preserveAspectRatio="xMinYMin meet"
        >
            <image width="500" height="600" xlink:href="/images/AR-zoom.png" />
            <rect
                :id="ARAGON"
                x="65"
                y="55"
                fill="pink"
                opacity="0"
                width="360"
                height="540"
            />
            <rect :id="VALENCIA" x="105" y="150" :width="WIDTH" :height="HEIGHT" fill="blue" opacity="0" />
            <rect :id="ALGIERS" x="310" y="360" :width="WIDTH" :height="HEIGHT" fill="red" opacity="0" />
            <rect :id="TIMBUKTU" x="147" y="410" :width="WIDTH" :height="HEIGHT" fill="pink" opacity="0" />


            <!-- Border 4: France - Aragon (there can not be a pirate between these 2: over land) -->
            <rect :id="BORDER4" x="215" y="-1" :width="RADIO" :height="RADIO" fill="blue" opacity="0"/>

            <!-- Border 10: Portugal - Aragon -->
            <rect :id="BORDER10_PIRATE" x="12" y="390" :width="WIDTH_PIRATE" :height="HEIGHT_PIRATE" fill="red" opacity="0"/>
            <rect :id="BORDER10" x="7" y="425" :width="RADIO" :height="RADIO" fill="blue" opacity="0"/>

            <!-- Border 11: Aragon - Papal States  -->
            <rect :id="BORDER11_PIRATE" x="430" y="210" :width="WIDTH_PIRATE" :height="HEIGHT_PIRATE" fill="yellow" opacity="0"/>
            <rect :id="BORDER11" x="420" y="265" :width="RADIO" :height="RADIO" fill="blue" opacity="0"/>
        </svg>
    </figure>
</template>

<script setup>
import { usePirate } from "@/composables/pirate";
import { COUNTRY_CODES, CITY_NAMES, KINGDOM_NAMES } from "@/constants/enums";
import { WIDTH, HEIGHT, WIDTH_PIRATE, HEIGHT_PIRATE, RADIO } from "@/constants/pieceSizes";

const { pirateMakerName } = usePirate();
const ARAGON = `${COUNTRY_CODES.ARAGON}-zoom`;

// cities
const VALENCIA = `${CITY_NAMES.VALENCIA}-zoom`;
const ALGIERS = `${CITY_NAMES.ALGIERS}-zoom`;
const TIMBUKTU = `${CITY_NAMES.TIMBUKTU}-zoom`;

// borders
const BORDER4 = `${KINGDOM_NAMES.FRANCE}-${KINGDOM_NAMES.ARAGON}-zoom`;
const BORDER10 = `${KINGDOM_NAMES.PORTUGAL}-${KINGDOM_NAMES.ARAGON}-zoom`;
const BORDER10_PIRATE = pirateMakerName(KINGDOM_NAMES.PORTUGAL, KINGDOM_NAMES.ARAGON, true);
const BORDER11 = `${KINGDOM_NAMES.ARAGON}-${KINGDOM_NAMES.PAPAL_STATES}-zoom`;
const BORDER11_PIRATE = pirateMakerName(KINGDOM_NAMES.ARAGON, KINGDOM_NAMES.PAPAL_STATES, true);
</script>


<style lang="scss" scoped>
#aragon-zoom {
	width: 100%;
	vertical-align: middle;
	margin: 0;
	overflow: hidden;
}

#aragon-zoom svg { 
	display: inline-block;
	position: absolute;
	top: 0; left: 0;
    image { clip-path: inset(0% round 30px); }
}
</style>