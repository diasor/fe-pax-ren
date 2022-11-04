<template>
    <!-- markers -->
    <figure id="papal-states-zoom">
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 500 600"
            preserveAspectRatio="xMinYMin meet"
        >
            <image width="500" height="600" xlink:href="/images/PS-zoom.png" />
            <rect
                :id="PAPAL_STATES"
                x="65"
                y="55"
                fill="pink"
                opacity="0"
                width="360"
                height="540"
            />
            <rect :id="VENICE" x="168" y="67" :width="WIDTH" :height="HEIGHT" fill="blue" opacity="0" />


            <!-- Border 4: France - Aragon (there can not be a pirate between these 2: over land) -->
            <rect :id="BORDER4" x="215" y="-1" :width="RADIO" :height="RADIO" fill="blue" opacity="0"/>

            <!-- Border 11: Aragon - Papal States  -->
            <rect :id="BORDER11_PIRATE" x="16" y="220" :width="WIDTH_PIRATE" :height="HEIGHT_PIRATE" fill="yellow" opacity="0"/>
            <rect :id="BORDER11" x="12" y="255" :width="RADIO" :height="RADIO" fill="pink" opacity="0"/>

             <!-- Border 12: Papal States - Ottoman  -->
             <rect :id="BORDER12_PIRATE" x="425" y="350" :width="WIDTH_PIRATE" :height="HEIGHT_PIRATE" fill="red" opacity="0"/>
            <rect :id="BORDER12" x="420" y="385" :width="RADIO" :height="RADIO" fill="blue" opacity="0"/>
        </svg>
    </figure>
</template>

<script setup>
import { usePirate } from "@/composables/pirate";
import { COUNTRY_CODES, CITY_NAMES, KINGDOM_NAMES } from "@/constants/enums";
import { WIDTH, HEIGHT, WIDTH_PIRATE, HEIGHT_PIRATE, RADIO } from "@/constants/pieceSizes";

const { pirateMakerName } = usePirate();
const PAPAL_STATES = `${COUNTRY_CODES.PAPAL_STATES}-zoom`;

// cities
const VENICE = `${CITY_NAMES.VENICE}-zoom`;


// borders
const BORDER4 = `${KINGDOM_NAMES.FRANCE}-${KINGDOM_NAMES.ARAGON}-zoom`;
const BORDER11 = `${KINGDOM_NAMES.ARAGON}-${KINGDOM_NAMES.PAPAL_STATES}-zoom`;
const BORDER11_PIRATE = pirateMakerName(KINGDOM_NAMES.ARAGON, KINGDOM_NAMES.PAPAL_STATES, true);
const BORDER12 = `${KINGDOM_NAMES.PAPAL_STATES}-${KINGDOM_NAMES.OTTOMAN}-zoom`;
const BORDER12_PIRATE = pirateMakerName(KINGDOM_NAMES.PAPAL_STATES, KINGDOM_NAMES.OTTOMAN, true);
</script>


<style lang="scss" scoped>
#papal-states-zoom {
	width: 100%;
	vertical-align: middle;
	margin: 0;
	overflow: hidden;
}

#papal-states-zoom svg { 
	display: inline-block;
	position: absolute;
	top: 0; left: 0;
    image { clip-path: inset(0% round 20px); }
}
</style>