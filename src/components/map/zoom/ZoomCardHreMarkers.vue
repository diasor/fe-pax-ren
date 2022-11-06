<template>
    <!-- markers -->
    <figure id="hre-zoom">
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 500 600"
            preserveAspectRatio="xMinYMin meet"
        >
            <image width="500" height="600" xlink:href="/images/HRE-zoom.png" />
            <rect
                :id="HRE"
                x="68"
                y="-8"
                fill="pink"
                opacity="0"
                width="364"
                height="542"
            />
            <rect :id="VIENNA" x="289" y="316" :width="WIDTH" :height="HEIGHT" fill="red" opacity="0" />
            <rect :id="NOVGOROD" x="290" y="43" :width="WIDTH" :height="HEIGHT" fill="red" opacity="0" />
            <rect :id="LUBECK" x="141" y="57" :width="WIDTH" :height="HEIGHT" fill="red" opacity="0" />
            <rect :id="NURNBERG" x="108" y="264" :width="WIDTH" :height="HEIGHT" fill="red" opacity="0" />

            <!-- Border 3: France - Holy Roman Empire  -->
            <rect :id="BORDER3_PIRATE" :x="15" :y="40" :width="WIDTH_PIRATE" :height="HEIGHT_PIRATE" fill="yellow" opacity="0"/>
            <rect :id="BORDER3" :x="10" :y="50" :width="RADIO" :height="RADIO" fill="blue" opacity="0"/>

            <!-- Border 5: Holly Roman Empire - Hungary (there can not be a pirate between these 2: over land) -->
            <rect :id="BORDER5" :x="422" :y="240" :width="RADIO" :height="RADIO" fill="blue" opacity="0"/>

            <!-- Border 6: Holly Roman Empire - Papal States (there can not be a pirate between these 2: over land) -->
            <rect :id="BORDER6" :x="210" :y="534" :width="RADIO" :height="RADIO" fill="blue" opacity="0"/>
        </svg>
    </figure>
</template>

<script setup>
import { usePirate } from "@/composables/pirate";
import { COUNTRY_CODES, CITY_NAMES, KINGDOM_NAMES } from "@/constants/enums";
import { WIDTH, HEIGHT, WIDTH_PIRATE, HEIGHT_PIRATE, RADIO } from "@/constants/pieceSizes";

const { pirateMakerName } = usePirate();
const HRE = `${COUNTRY_CODES.HRE}-zoom`;

//cities
const NOVGOROD = `${CITY_NAMES.NOVGOROD}-zoom`;
const VIENNA = `${CITY_NAMES.VIENNA}-zoom`;
const LUBECK = `${CITY_NAMES.LUBECK}-zoom`;
const NURNBERG = `${CITY_NAMES.NURNBERG}-zoom`;

// borders
const BORDER3 = `${KINGDOM_NAMES.FRANCE}-${KINGDOM_NAMES.HRE}-zoom`;
const BORDER3_PIRATE = pirateMakerName(KINGDOM_NAMES.FRANCE, KINGDOM_NAMES.HRE, true);
const BORDER5 = `${KINGDOM_NAMES.HRE}-${KINGDOM_NAMES.HUNGARY}-zoom`;
const BORDER6 = `${KINGDOM_NAMES.HRE}-${KINGDOM_NAMES.PAPAL_STATES}-zoom`;
</script>


<style lang="scss" scoped>
#hre-zoom {
	width: 100%;
	vertical-align: middle;
	margin: 0;
	overflow: hidden;
}

#hre-zoom svg { 
	display: inline-block;
	position: absolute;
	top: 0; left: 0;
    image { clip-path: inset(0% round 30px); }
}
</style>