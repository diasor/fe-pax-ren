<template>
    <!-- markers -->
    <figure id="byzantium-zoom">
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 500 600"
            preserveAspectRatio="xMinYMin meet"
        >
            <image width="500" height="600" xlink:href="/images/BY-zoom.png" />
            <rect
                :id="BYZANTIUM"
                x="63"
                y="-12"
                fill="pink"
                opacity="0"
                width="360"
                height="544"
            />
            <rect :id="TANA" x="163" y="50" :width="WIDTH" :height="HEIGHT" fill="pink" opacity="0" />
            <rect :id="CAFFA" x="81" y="267" :width="WIDTH" :height="HEIGHT" fill="red" opacity="0" />
            <rect :id="TREBIZOND" x="336" y="406" :width="WIDTH" :height="HEIGHT" fill="blue" opacity="0" />

            <!-- Border 7: Hungary - Byzantium -->
            <rect :id="BORDER7_PIRATE" x="15" y="390" :width="WIDTH_PIRATE" :height="HEIGHT_PIRATE" fill="yellow" opacity="0"/>
            <rect :id="BORDER7" x="10" y="420" :width="RADIO" :height="RADIO" fill="blue" opacity="0"/>

            <!-- Border 8: Byzantium - Mamluk (there can not be a pirate between these 2: over land) -->
            <rect :id="BORDER9" x="210" y="540" :width="RADIO" :height="RADIO" fill="blue" opacity="0"/>
        </svg>
    </figure>
</template>

<script setup>
import { usePirate } from "@/composables/pirate";
import { COUNTRY_CODES, CITY_NAMES, KINGDOM_NAMES } from "@/constants/enums";
import { WIDTH, HEIGHT, WIDTH_PIRATE, HEIGHT_PIRATE, RADIO } from "@/constants/pieceSizes";

const { pirateMakerName } = usePirate();
const BYZANTIUM = `${COUNTRY_CODES.BYZANTIUM}-zoom`;

//cities
const TANA = `${CITY_NAMES.TANA}-zoom`;
const CAFFA = `${CITY_NAMES.CAFFA}-zoom`;
const TREBIZOND = `${CITY_NAMES.TREBIZOND}-zoom`;

// borders
const BORDER7 = `${KINGDOM_NAMES.HUNGARY}-${KINGDOM_NAMES.BYZANTIUM}-zoom`;
const BORDER7_PIRATE = pirateMakerName(KINGDOM_NAMES.HUNGARY, KINGDOM_NAMES.BYZANTIUM, true);
const BORDER9 = `${KINGDOM_NAMES.BYZANTIUM}-${KINGDOM_NAMES.MAMLUK}-zoom`;
</script>


<style lang="scss" scoped>
#byzantium-zoom {
	width: 100%;
	vertical-align: middle;
	margin: 0;
	overflow: hidden;
}

#byzantium-zoom svg { 
	display: inline-block;
	position: absolute;
	top: 0; left: 0;
    image { clip-path: inset(0% round 30px); }
}
</style>