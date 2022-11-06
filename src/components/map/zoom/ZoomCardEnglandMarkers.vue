<template>
    <!-- markers -->
    <figure id="england-zoom">
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 500 600"
            preserveAspectRatio="xMinYMin meet"
        >
            <image width="500" height="600" xlink:href="/images/EN-zoom.png" />
            <rect
                :id="ENGLAND"
                x="65"
                y="-8"
                fill="pink"
                opacity="0"
                width="360"
                height="540"
            />
            <rect :id="LONDON" x="259" y="135" :width="WIDTH" :height="HEIGHT" fill="red" opacity="0" />
            <rect :id="BORDEAUX" x="327" y="394" :width="WIDTH" :height="HEIGHT" fill="red" opacity="0" />

            <!-- Border 1: England - France -->
            <rect :id="BORDER1_PIRATE" x="430" y="150" :width="WIDTH_PIRATE" :height="HEIGHT_PIRATE" fill="red" opacity="0"/>
            <rect :id="BORDER1" x="420" y="200" :width="RADIO" :height="RADIO" fill="blue" opacity="0"/>
            
            <!-- Border 2: England - Portugal -->
            <rect :id="BORDER2_PIRATE" x="120" y="534" :width="HEIGHT_PIRATE" :height="WIDTH_PIRATE" fill="pink" opacity="0"/>
            <rect :id="BORDER2" x="155" y="538" :width="RADIO" :height="RADIO" fill="blue" opacity="0"/>
        </svg>
    </figure>
</template>

<script setup>
import { usePirate } from "@/composables/pirate";
import { COUNTRY_CODES, CITY_NAMES, KINGDOM_NAMES } from "@/constants/enums";
import { WIDTH, HEIGHT, WIDTH_PIRATE, HEIGHT_PIRATE, RADIO } from "@/constants/pieceSizes";

const { pirateMakerName } = usePirate();
const ENGLAND = `${COUNTRY_CODES.ENGLAND}-zoom`;
const LONDON = `${CITY_NAMES.LONDON}-zoom`;
const BORDEAUX = `${CITY_NAMES.BORDEAUX}-zoom`;
const BORDER1 = `${KINGDOM_NAMES.ENGLAND}-${KINGDOM_NAMES.FRANCE}-zoom`;
const BORDER1_PIRATE = pirateMakerName(KINGDOM_NAMES.ENGLAND, KINGDOM_NAMES.FRANCE, true);
const BORDER2 = `${KINGDOM_NAMES.ENGLAND}-${KINGDOM_NAMES.PORTUGAL}-zoom`;
const BORDER2_PIRATE = pirateMakerName(KINGDOM_NAMES.ENGLAND, KINGDOM_NAMES.PORTUGAL, true);
</script>


<style lang="scss" scoped>
#england-zoom {
	width: 100%;
	vertical-align: middle;
	margin: 0;
	overflow: hidden;
}

#england-zoom svg { 
	display: inline-block;
	position: absolute;
	top: 0; left: 0;
    image { clip-path: inset(0% round 30px); }
}
</style>