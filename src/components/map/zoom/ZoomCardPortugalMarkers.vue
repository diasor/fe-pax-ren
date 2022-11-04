<template>
    <!-- markers -->
    <figure id="portugal-zoom">
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 500 600"
            preserveAspectRatio="xMinYMin meet"
        >
            <image width="500" height="600" xlink:href="/images/PT-zoom.png" />
            <rect
                :id="PORTUGAL"
                x="68"
                y="55"
                fill="pink"
                opacity="0"
                width="358"
                height="540"
            />
            <rect :id="TOLEDO" x="298" y="168" :width="WIDTH" :height="HEIGHT" fill="red" opacity="0" />
            <rect :id="GRANADA" x="318" y="303" :width="WIDTH" :height="HEIGHT" fill="red" opacity="0" />
            <rect :id="SPICE_ISLANDS" x="160" y="457" :width="WIDTH" :height="HEIGHT" fill="red" opacity="0" />

            <!-- Border 2: England - Portugal -->
            <rect :id="BORDER2_PIRATE" x="140" y="0" :width="HEIGHT_PIRATE" :height="WIDTH_PIRATE" fill="pink" opacity="0"/>
            <rect :id="BORDER2" x="160" y="0" :width="RADIO" :height="RADIO" fill="blue" opacity="0"/>

            <!-- Border 10: Portugal - Aragon -->
            <rect :id="BORDER10_PIRATE" x="425" y="395" :width="WIDTH_PIRATE" :height="HEIGHT_PIRATE" fill="red" opacity="0"/>
            <rect :id="BORDER10" x="425" y="420" :width="RADIO" :height="RADIO" fill="blue" opacity="0"/>
        </svg>
    </figure>
</template>

<script setup>
import { usePirate } from "@/composables/pirate";
import { COUNTRY_CODES, CITY_NAMES, KINGDOM_NAMES } from "@/constants/enums";
import { WIDTH, HEIGHT, WIDTH_PIRATE, HEIGHT_PIRATE, RADIO } from "@/constants/pieceSizes";

const { pirateMakerName } = usePirate();
const PORTUGAL = `${COUNTRY_CODES.PORTUGAL}-zoom`;
const TOLEDO = `${CITY_NAMES.TOLEDO}-zoom`;
const GRANADA = `${CITY_NAMES.GRANADA}-zoom`;
const SPICE_ISLANDS = `${CITY_NAMES.SPICE_ISLANDS}-zoom`;

// borders
const BORDER2 = `${KINGDOM_NAMES.ENGLAND}-${KINGDOM_NAMES.PORTUGAL}-zoom`;
const BORDER2_PIRATE = pirateMakerName(KINGDOM_NAMES.ENGLAND, KINGDOM_NAMES.PORTUGAL, true);
const BORDER10 = `${KINGDOM_NAMES.PORTUGAL}-${KINGDOM_NAMES.ARAGON}-zoom`;
const BORDER10_PIRATE = pirateMakerName(KINGDOM_NAMES.PORTUGAL, KINGDOM_NAMES.ARAGON, true);
</script>


<style lang="scss" scoped>
#portugal-zoom {
	width: 100%;
	vertical-align: middle;
	margin: 0;
	overflow: hidden;
}

#portugal-zoom svg { 
	display: inline-block;
	position: absolute;
	top: 0; left: 0;
    image { clip-path: inset(0% round 20px); }
}
</style>