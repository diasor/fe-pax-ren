<template>
    <!-- kingdom markers: first line -->
    <rect :id="COUNTRY_CODES.ENGLAND" x="795" :y="FIRST_LINE" fill="#fff" opacity="0" :width="WIDTH" :height="HEIGHT" />
    <rect :id="endBlockWidth(COUNTRY_CODES.ENGLAND)" x="1135" :y="FIRST_LINE" fill="red" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(COUNTRY_CODES.ENGLAND)" x="795" :y="FIRST_LINE_END" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>
    
    <rect :id="COUNTRY_CODES.FRANCE" x="1194" :y="FIRST_LINE" fill="green" opacity="0" :width="WIDTH" :height="HEIGHT" />
    <rect :id="endBlockWidth(COUNTRY_CODES.FRANCE)" x="1534" :y="FIRST_LINE" fill="blue" opacity="0" :width="END_WIDTH" :height="HEIGHT" />
    <rect :id="endBlockHeight(COUNTRY_CODES.FRANCE)" x="1194" :y="FIRST_LINE_END" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>
    
    <rect :id="COUNTRY_CODES.HRE" x="1590" :y="FIRST_LINE" fill="brown" opacity="0" :width="WIDTH" :height="HEIGHT" />
    <rect :id="endBlockWidth(COUNTRY_CODES.HRE)" x="1930" :y="FIRST_LINE" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT" />
    <rect :id="endBlockHeight(COUNTRY_CODES.HRE)" x="1590" :y="FIRST_LINE_END" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>
    
    
    <rect :id="COUNTRY_CODES.HUNGARY" x="1990" :y="FIRST_LINE" fill="red" opacity="0" :width="WIDTH" :height="HEIGHT" />
    <rect :id="endBlockWidth(COUNTRY_CODES.HUNGARY)" x="2330" :y="FIRST_LINE" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT" />
    <rect :id="endBlockHeight(COUNTRY_CODES.HUNGARY)" x="1990" :y="FIRST_LINE_END" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>
    
    <rect :id="COUNTRY_CODES.BYZANTIUM" x="2390" :y="FIRST_LINE" fill="blue" opacity="0" :width="WIDTH" :height="HEIGHT" />
    <rect :id="endBlockWidth(COUNTRY_CODES.BYZANTIUM)" x="2730" :y="FIRST_LINE" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT" />            
    <rect :id="endBlockHeight(COUNTRY_CODES.BYZANTIUM)" x="2390" :y="FIRST_LINE_END" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <!-- kingdom markers: second line -->
    <rect :id="COUNTRY_CODES.PORTUGAL" x="795" :y="SECOND_LINE" fill="#fff" opacity="0" :width="WIDTH" :height="HEIGHT" />
    <rect :id="endBlockWidth(COUNTRY_CODES.PORTUGAL)" :x="endBlockX(795)" :y="SECOND_LINE" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight(COUNTRY_CODES.PORTUGAL)" x="795" :y="SECOND_LINE_END" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>
    
    <rect :id="COUNTRY_CODES.ARAGON" x="1194" :y="SECOND_LINE" fill="green" opacity="0" :width="WIDTH" :height="HEIGHT" />
    <rect :id="endBlockWidth(COUNTRY_CODES.ARAGON)" x="1534" :y="SECOND_LINE" fill="blue" opacity="0" :width="END_WIDTH" :height="HEIGHT" />
    <rect :id="endBlockHeight(COUNTRY_CODES.ARAGON)" x="1194" :y="SECOND_LINE_END" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>
    
    <rect :id="COUNTRY_CODES.PAPAL_STATES" x="1590" :y="SECOND_LINE" fill="brown" opacity="0" :width="WIDTH" :height="HEIGHT" />
    <rect :id="endBlockWidth(COUNTRY_CODES.PAPAL_STATES)" x="1930" :y="SECOND_LINE" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT" />
    <rect :id="endBlockHeight(COUNTRY_CODES.PAPAL_STATES)" x="1590" :y="SECOND_LINE_END" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>
    
    <rect :id="COUNTRY_CODES.OTTOMAN" x="1990" :y="SECOND_LINE" fill="red" opacity="0" :width="WIDTH" :height="HEIGHT" />
    <rect :id="endBlockWidth(COUNTRY_CODES.OTTOMAN)" x="2330" :y="SECOND_LINE" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT" />
    <rect :id="endBlockHeight(COUNTRY_CODES.OTTOMAN)" x="1990" :y="SECOND_LINE_END" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>
    
    <rect :id="COUNTRY_CODES.MAMLUK" x="2390" :y="SECOND_LINE" fill="blue" opacity="0" :width="WIDTH" :height="HEIGHT" />
    <rect :id="endBlockWidth(COUNTRY_CODES.MAMLUK)" x="2730" :y="SECOND_LINE" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT" />
    <rect :id="endBlockHeight(COUNTRY_CODES.MAMLUK)" x="2390" :y="SECOND_LINE_END" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <!-- vitory markers -->
    <rect :id="VICTORY_TYPE.RENAISSANCE" x="345" y="320" fill="purple" opacity="0" width="270" :height="HEIGHT" />
    <rect :id="endBlockWidth(VICTORY_TYPE.RENAISSANCE)" x="615" y="320" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT" />
    <rect :id="endBlockHeight(VICTORY_TYPE.RENAISSANCE)" x="345" :y="victoryHeight(320)" fill="blue" opacity="0" :width="270" :height="END_WIDTH"/>
    
    <rect :id="VICTORY_TYPE.GLOBALIZATION" x="345" y="715" fill="purple" opacity="0" width="270" :height="HEIGHT" />
    <rect :id="endBlockWidth(VICTORY_TYPE.GLOBALIZATION)" x="615" y="715" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT" />
    <rect :id="endBlockHeight(VICTORY_TYPE.GLOBALIZATION)" x="345" :y="victoryHeight(715)" fill="blue" opacity="0" :width="270" :height="END_WIDTH"/>
    
    <rect :id="VICTORY_TYPE.IMPERIAL" x="345" y="1355" fill="purple" opacity="0" width="270" :height="HEIGHT" />
    <rect :id="endBlockWidth(VICTORY_TYPE.IMPERIAL)" x="615" y="1355" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT" />
    <rect :id="endBlockHeight(VICTORY_TYPE.IMPERIAL)" x="345" :y="victoryHeight(1355)" fill="blue" opacity="0" :width="270" :height="END_WIDTH"/>
    
    <rect :id="VICTORY_TYPE.HOLY" x="345" y="1755" fill="purple" opacity="0" width="270" :height="HEIGHT" />
    <rect :id="endBlockWidth(VICTORY_TYPE.HOLY)" x="615" y="1755" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT" />
    <rect :id="endBlockHeight(VICTORY_TYPE.IMPERIAL)" x="345" :y="victoryHeight(1755)" fill="blue" opacity="0" :width="270" :height="END_WIDTH"/>
</template>
<script>
import { COUNTRY_CODES, VICTORY_TYPE } from "@/constants/enums";
export default {
    name: "MapMarkers",
    setup(){
        const CARD_HEIGHT = 510;
        const FIRST_LINE = 624;
        const FIRST_LINE_END = FIRST_LINE + CARD_HEIGHT;
        const SECOND_LINE = 1201;
        const SECOND_LINE_END = SECOND_LINE + CARD_HEIGHT;
        const WIDTH = 340;
        const HEIGHT = 100;
        const END_WIDTH = 30;

        const endBlockWidth = (id) => `${id}-endX`;
        const endBlockHeight = (id) => `${id}-endY`;
        const endBlockX = (x) => x + WIDTH;
        const victoryHeight = (y) => y + 260;

        return {
            FIRST_LINE,
            FIRST_LINE_END,
            SECOND_LINE,
            SECOND_LINE_END,
            WIDTH,
            END_WIDTH,
            HEIGHT,
            VICTORY_TYPE,
            COUNTRY_CODES,
            endBlockWidth,
            endBlockHeight,
            endBlockX,
            victoryHeight,
        }
    },
};
</script>