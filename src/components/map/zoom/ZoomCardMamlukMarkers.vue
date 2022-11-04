<template>
    <!-- markers -->
    <figure id="mamluk-zoom">
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 500 600"
            preserveAspectRatio="xMinYMin meet"
        >
            <image width="500" height="600" xlink:href="/images/ML-zoom.png" />
            <rect
                :id="MAMLUK"
                x="65"
                y="55"
                fill="pink"
                opacity="0"
                width="360"
                height="540"
            />
            <rect :id="CAIRO" x="170" y="405" :width="WIDTH" :height="HEIGHT" fill="pink" opacity="0" />
            <rect :id="CYPRUS" x="199" y="202" :width="WIDTH" :height="HEIGHT" fill="blue" opacity="0" />
            <rect :id="RED_SEA" x="320" y="409" :width="WIDTH" :height="HEIGHT" fill="yellow" opacity="0" />

            <!-- Border 9: Byzantium - Mamluk (there can not be a pirate between these 2: over land) -->
            <rect :id="BORDER9" x="220" y="2" :width="RADIO" :height="RADIO" fill="blue" opacity="0"/>

            <!-- Border 13: Ottoman - Mamluk -->
            <rect :id="BORDER13_PIRATE" x="10" y="340" :width="WIDTH_PIRATE" :height="HEIGHT_PIRATE" fill="red" opacity="0"/>
            <rect :id="BORDER13" x="5" y="385" :width="RADIO" :height="RADIO" fill="blue" opacity="0"/>
        </svg>
    </figure>
</template>

<script setup>
import { usePirate } from "@/composables/pirate";
import { COUNTRY_CODES, CITY_NAMES, KINGDOM_NAMES } from "@/constants/enums";
import { WIDTH, HEIGHT, WIDTH_PIRATE, HEIGHT_PIRATE, RADIO } from "@/constants/pieceSizes";

const { pirateMakerName } = usePirate();

// cities
const MAMLUK = `${COUNTRY_CODES.MAMLUK}-zoom`;
const CAIRO = `${CITY_NAMES.CAIRO}-zoom`;
const CYPRUS = `${CITY_NAMES.CYPRUS}-zoom`;
const RED_SEA = `${CITY_NAMES.RED_SEA}-zoom`;

// borders
const BORDER9 = `${KINGDOM_NAMES.BYZANTIUM}-${KINGDOM_NAMES.MAMLUK}-zoom`;
const BORDER13 = `${KINGDOM_NAMES.OTTOMAN}-${KINGDOM_NAMES.MAMLUK}-zoom`;
const BORDER13_PIRATE = pirateMakerName(KINGDOM_NAMES.OTTOMAN, KINGDOM_NAMES.MAMLUK, true);
</script>


<style lang="scss" scoped>
#mamluk-zoom {
	width: 100%;
	vertical-align: middle;
	margin: 0;
	overflow: hidden;
}

#mamluk-zoom svg { 
	display: inline-block;
	position: absolute;
	top: 0; left: 0;
    image { clip-path: inset(0% round 30px); }
}
</style>