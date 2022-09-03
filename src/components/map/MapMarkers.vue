<template>
    <figure id=kingdowm-map>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3400 3400" >
            <image width="3400" height="3400" xlink:href="/images/PR2_board_plain.jpg" />

            <!-- kingdom markers: first line -->
            <rect :id="COUNTRY_CODES.ENGLAND" x="795" :y="FIRST_LINE" fill="#fff" opacity="0.5" :width="WIDTH" :height="HEIGHT" />
            <rect :id="endBlockName(COUNTRY_CODES.ENGLAND)" x="1135" :y="FIRST_LINE" fill="red" opacity="0.5" :width="END_WIDTH" :height="HEIGHT"/>
            <rect :id="COUNTRY_CODES.FRANCE" x="1190" :y="FIRST_LINE" fill="green" opacity="0.5" :width="WIDTH" :height="HEIGHT" />
            <rect :id="endBlockName(COUNTRY_CODES.FRANCE)" x="1530" :y="FIRST_LINE" fill="blue" opacity="0.5" :width="END_WIDTH" :height="HEIGHT" />
            <rect :id="COUNTRY_CODES.HOLY_ROMAN_EMPIRE" x="1590" :y="FIRST_LINE" fill="brown" opacity="0.5" :width="WIDTH" :height="HEIGHT" />
            <rect :id="endBlockName(COUNTRY_CODES.HOLY_ROMAN_EMPIRE)" x="1930" :y="FIRST_LINE" fill="yellow" opacity="0.5" :width="END_WIDTH" :height="HEIGHT" />
            <rect :id="COUNTRY_CODES.HUNGARY" x="1990" :y="FIRST_LINE" fill="red" opacity="0.5" :width="WIDTH" :height="HEIGHT" />
            <rect :id="endBlockName(COUNTRY_CODES.HUNGARY)" x="2330" :y="FIRST_LINE" fill="yellow" opacity="0.5" :width="END_WIDTH" :height="HEIGHT" />
            <rect :id="COUNTRY_CODES.BYZANTIUM" x="2390" :y="FIRST_LINE" fill="blue" opacity="0.5" :width="WIDTH" :height="HEIGHT" />
            <rect :id="endBlockName(COUNTRY_CODES.BYZANTIUM)" x="2730" :y="FIRST_LINE" fill="yellow" opacity="0.5" :width="END_WIDTH" :height="HEIGHT" />            

            <!-- kingdom markers: second line -->
            <rect :id="COUNTRY_CODES.PORTUGAL" x="795" :y="SECOND_LINE" fill="#fff" opacity="0.5" :width="WIDTH" :height="HEIGHT" />
            <rect :id="endBlockName(COUNTRY_CODES.PORTUGAL)" :x="endBlockX(795)" :y="SECOND_LINE" fill="yellow" opacity="0.5" :width="END_WIDTH" :height="HEIGHT"/>
            <rect :id="COUNTRY_CODES.ARAGON" x="1190" :y="SECOND_LINE" fill="green" opacity="0.5" :width="WIDTH" :height="HEIGHT" />
            <rect :id="endBlockName(COUNTRY_CODES.ARAGON)" x="1530" :y="SECOND_LINE" fill="blue" opacity="0.5" :width="END_WIDTH" :height="HEIGHT" />
            <rect :id="COUNTRY_CODES.PAPAL_STATES" x="1590" :y="SECOND_LINE" fill="brown" opacity="0.5" :width="WIDTH" :height="HEIGHT" />
            <rect :id="endBlockName(COUNTRY_CODES.PAPAL_STATES)" x="1930" :y="SECOND_LINE" fill="yellow" opacity="0.5" :width="END_WIDTH" :height="HEIGHT" />
            <rect :id="COUNTRY_CODES.OTTOMAN" x="1990" :y="SECOND_LINE" fill="red" opacity="0.5" :width="WIDTH" :height="HEIGHT" />
            <rect :id="endBlockName(COUNTRY_CODES.OTTOMAN)" x="2330" :y="SECOND_LINE" fill="yellow" opacity="0.5" :width="END_WIDTH" :height="HEIGHT" />
            <rect :id="COUNTRY_CODES.MAMLUK" x="2390" :y="SECOND_LINE" fill="blue" opacity="0.5" :width="WIDTH" :height="HEIGHT" />
            <rect :id="endBlockName(COUNTRY_CODES.MAMLUK)" x="2730" :y="SECOND_LINE" fill="yellow" opacity="0.5" :width="END_WIDTH" :height="HEIGHT" />

            <!-- vitory markers -->
            <rect :id="VICTORY_TYPE.RENAISSANCE" x="345" y="320" fill="purple" opacity="0" width="270" :height="HEIGHT" />
            <rect :id="endBlockName(VICTORY_TYPE.RENAISSANCE)" x="615" y="320" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT" />
            <rect :id="VICTORY_TYPE.GLOBALIZATION" x="345" y="715" fill="purple" opacity="0" width="270" :height="HEIGHT" />
            <rect :id="endBlockName(VICTORY_TYPE.GLOBALIZATION)" x="615" y="715" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT" />
            <rect :id="VICTORY_TYPE.IMPERIAL" x="345" y="1355" fill="purple" opacity="0" width="270" :height="HEIGHT" />
            <rect :id="endBlockName(VICTORY_TYPE.IMPERIAL)" x="615" y="1355" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT" />
            <rect :id="VICTORY_TYPE.HOLY" x="345" y="1755" fill="purple" opacity="0" width="270" :height="HEIGHT" />
            <rect :id="endBlockName(VICTORY_TYPE.HOLY)" x="615" y="1755" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT" />
        </svg>
    </figure> 
</template>
<script>
import { COUNTRY_CODES, VICTORY_TYPE } from "@/constants/enums";
export default {
    name: "MapMarkers",
    setup(){
        const FIRST_LINE = 625;
        const SECOND_LINE = 1204;
        const WIDTH = 340;
        const HEIGHT = "100";
        const END_WIDTH = 50;

        const endBlockName = (id) => `${id}-end`;
        const endBlockX = (x) => x + WIDTH;

        return {
            FIRST_LINE,
            SECOND_LINE,
            WIDTH,
            END_WIDTH,
            HEIGHT,
            VICTORY_TYPE,
            COUNTRY_CODES,
            endBlockName,
            endBlockX,
        }
    },
};
</script>