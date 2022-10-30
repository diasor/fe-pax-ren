<template>
    <!-- markers -->
    <figure id="france-zoom">
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 500 600"
            preserveAspectRatio="xMinYMin meet"
        >
            <image width="500" height="600" xlink:href="/images/FR-zoom.png" />
            <rect
                :id="FRANCE"
                x="65"
                y="-8"
                fill="pink"
                opacity="0"
                width="360"
                height="540"
            />
            <rect :id="PARIS" x="90" y="260" :width="WIDTH" :height="HEIGHT" fill="red" opacity="0" />
            <rect :id="BRUGES" x="193" y="116" :width="WIDTH" :height="HEIGHT" fill="red" opacity="0" />
            <rect :id="LYON" x="287" y="350" :width="WIDTH" :height="HEIGHT" fill="red" opacity="0" />

            <!-- Border 1: England - France -->
            <rect :id="BORDER1_PIRATE" :x="15" :y="150" :width="WIDTH_PIRATE" :height="HEIGHT_PIRATE" fill="red" opacity="0"/>
            <rect :id="BORDER1" :x="10" :y="190" :width="RADIO" :height="RADIO" fill="blue" opacity="0"/>

            <!-- Border 3: France - Holy Roman Empire  -->
            <rect :id="BORDER3_PIRATE" :x="430" :y="40" :width="WIDTH_PIRATE" :height="HEIGHT_PIRATE" fill="yellow" opacity="0"/>
            <rect :id="BORDER3" :x="420" :y="40" :width="RADIO" :height="RADIO" fill="blue" opacity="0"/>

            <!-- Border 4: France - Aragon (there can not be a pirate between these 2: over land) -->
            <rect :id="BORDER4" :x="215" :y="538" :width="RADIO" :height="RADIO" fill="blue" opacity="0.5"/>
        </svg>
    </figure>
</template>

<script setup>
import { usePirate } from "@/composables/pirate";
import { COUNTRY_CODES, CITY_NAMES, KINGDOM_NAMES } from "@/constants/enums";

// markers for zoom
const WIDTH = 80;
const HEIGHT = 110;
const WIDTH_PIRATE = 55;
const HEIGHT_PIRATE = 130;
const RADIO = 60;

const { pirateMakerName } = usePirate();
const FRANCE = `${COUNTRY_CODES.FRANCE}-zoom`;
const PARIS = `${CITY_NAMES.PARIS}-zoom`;
const BRUGES = `${CITY_NAMES.BRUGES}-zoom`;
const LYON = `${CITY_NAMES.LYON}-zoom`;
const BORDER1 = `${KINGDOM_NAMES.ENGLAND}-${KINGDOM_NAMES.FRANCE}-zoom`;
const BORDER1_PIRATE = pirateMakerName(KINGDOM_NAMES.ENGLAND, KINGDOM_NAMES.FRANCE, true);
const BORDER3 = `${KINGDOM_NAMES.FRANCE}-${KINGDOM_NAMES.HRE}-zoom`;
const BORDER3_PIRATE = pirateMakerName(KINGDOM_NAMES.FRANCE, KINGDOM_NAMES.HRE, true);
const BORDER4 = `${KINGDOM_NAMES.FRANCE}-${KINGDOM_NAMES.ARAGON}-zoom`;
</script>


<style lang="scss" scoped>
#france-zoom {
	width: 100%;
	vertical-align: middle;
	margin: 0;
	overflow: hidden;
}

#france-zoom svg { 
	display: inline-block;
	position: absolute;
	top: 0; left: 0;
    image { clip-path: inset(0% round 20px); }
}
</style>