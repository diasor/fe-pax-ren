<template>
    <!-- markers -->
    <figure id="hungary-zoom">
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 500 600"
            preserveAspectRatio="xMinYMin meet"
        >
            <image width="500" height="600" xlink:href="/images/HU-zoom.png" />
            <rect
                :id="HUNGARY"
                x="60"
                y="-12"
                fill="pink"
                opacity="0"
                width="360"
                height="546"
            />
            <rect :id="BUDA" x="103" y="333" :width="WIDTH" :height="HEIGHT" fill="red" opacity="0" />
            <rect :id="VARNA" x="247" y="365" :width="WIDTH" :height="HEIGHT" fill="red" opacity="0" />

            <!-- Border 5: Holly Roman Empire - Hungary (there can not be a pirate between these 2: over land) -->
            <rect :id="BORDER5" x="8" y="240" :width="RADIO" :height="RADIO" fill="blue" opacity="0"/>

            <!-- Border 7: Hungary - Byzantium  -->
            <rect :id="BORDER7_PIRATE" x="420" y="390" :width="WIDTH_PIRATE" :height="HEIGHT_PIRATE" fill="yellow" opacity="0"/>
            <rect :id="BORDER7" x="420" y="420" :width="RADIO" :height="RADIO" fill="blue" opacity="0"/>

            <!-- Border 8: Hungary - Ottoman -->
            <rect :id="BORDER8_PIRATE" x="260" y="534" :width="HEIGHT_PIRATE" :height="WIDTH_PIRATE" fill="pink" opacity="0"/>
            <rect :id="BORDER8" x="300" y="534" :width="RADIO" :height="RADIO" fill="blue" opacity="0"/>
        </svg>
    </figure>
</template>

<script setup>
import { usePirate } from "@/composables/pirate";
import { COUNTRY_CODES, CITY_NAMES, KINGDOM_NAMES } from "@/constants/enums";
import { WIDTH, HEIGHT, WIDTH_PIRATE, HEIGHT_PIRATE, RADIO } from "@/constants/pieceSizes";

const { pirateMakerName } = usePirate();
const HUNGARY = `${COUNTRY_CODES.HUNGARY}-zoom`;

// cities
const BUDA = `${CITY_NAMES.BUDA}-zoom`;
const VARNA = `${CITY_NAMES.VARNA}-zoom`;

// borders
const BORDER5 = `${KINGDOM_NAMES.HRE}-${KINGDOM_NAMES.HUNGARY}-zoom`;
const BORDER7 = `${KINGDOM_NAMES.HUNGARY}-${KINGDOM_NAMES.BYZANTIUM}-zoom`;
const BORDER7_PIRATE = pirateMakerName(KINGDOM_NAMES.HUNGARY, KINGDOM_NAMES.BYZANTIUM, true);
const BORDER8 = `${KINGDOM_NAMES.HUNGARY}-${KINGDOM_NAMES.OTTOMAN}-zoom`;
const BORDER8_PIRATE = pirateMakerName(KINGDOM_NAMES.HUNGARY, KINGDOM_NAMES.OTTOMAN, true);
</script>


<style lang="scss" scoped>
#hungary-zoom {
	width: 100%;
	vertical-align: middle;
	margin: 0;
	overflow: hidden;
}

#hungary-zoom svg { 
	display: inline-block;
	position: absolute;
	top: 0; left: 0;
    image { clip-path: inset(0% round 20px); }
}
</style>