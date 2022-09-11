<template>
    <!-- West Market (first line) -->
    <rect id="WEST_MARKET_1" x="582" :y="FIRST_LINE" fill="orange" opacity="0" :width="WIDTH" :height="HEIGHT" />
    <rect :id="endBlockWidth('WEST_MARKET_1')" x="922" :y="FIRST_LINE" fill="red" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight('WEST_MARKET_1')" x="582" :y="FIRST_LINE_END" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>
    
    <rect id="WEST_MARKET_2" x="970" :y="FIRST_LINE" fill="green" opacity="0" :width="WIDTH" :height="HEIGHT" />
    <rect :id="endBlockWidth('WEST_MARKET_2')" x="1310" :y="FIRST_LINE" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight('WEST_MARKET_2')" x="970" :y="FIRST_LINE_END" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <rect id="WEST_MARKET_3" x="1350" :y="FIRST_LINE" fill="red" opacity="0" :width="WIDTH" :height="HEIGHT" />
    <rect :id="endBlockWidth('WEST_MARKET_3')" x="1690" :y="FIRST_LINE" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight('WEST_MARKET_3')" x="1350" :y="FIRST_LINE_END" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <rect id="WEST_MARKET_4" x="1730" :y="FIRST_LINE" fill="brown" opacity="0" :width="WIDTH" :height="HEIGHT" />
    <rect :id="endBlockWidth('WEST_MARKET_4')" x="2070" :y="FIRST_LINE" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight('WEST_MARKET_4')" x="1730" :y="FIRST_LINE_END" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <rect id="WEST_MARKET_5" x="2110" :y="FIRST_LINE" fill="pink" opacity="0" :width="WIDTH" :height="HEIGHT" />
    <rect :id="endBlockWidth('WEST_MARKET_5')" x="2450" :y="FIRST_LINE" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight('WEST_MARKET_5')" x="2110" :y="FIRST_LINE_END" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <!-- East Market (second line) -->
    <rect id="EAST_MARKET_1" x="582" :y="SECOND_LINE" fill="brown" opacity="0" :width="WIDTH" :height="HEIGHT" />
    <rect :id="endBlockWidth('EAST_MARKET_1')" x="922" :y="SECOND_LINE" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight('EAST_MARKET_1')" x="582" :y="SECOND_LINE_END" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <rect id="EAST_MARKET_2" x="970" :y="SECOND_LINE" fill="green" opacity="0" :width="WIDTH" :height="HEIGHT" />
    <rect :id="endBlockWidth('EAST_MARKET_2')" x="1310" :y="SECOND_LINE" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight('EAST_MARKET_2')" x="970" :y="SECOND_LINE_END" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <rect id="EAST_MARKET_3" x="1350" :y="SECOND_LINE" fill="blue" opacity="0" :width="WIDTH" :height="HEIGHT" />
    <rect :id="endBlockWidth('EAST_MARKET_3')" x="1690" :y="SECOND_LINE" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight('EAST_MARKET_3')" x="1350" :y="SECOND_LINE_END" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <rect id="EAST_MARKET_4" x="1730" :y="SECOND_LINE" fill="brown" opacity="0" :width="WIDTH" :height="HEIGHT" />
    <rect :id="endBlockWidth('EAST_MARKET_4')" x="2070" :y="SECOND_LINE" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight('EAST_MARKET_4')" x="1730" :y="SECOND_LINE_END" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>

    <rect id="EAST_MARKET_5" x="2110" :y="SECOND_LINE" fill="pink" opacity="0" :width="WIDTH" :height="HEIGHT" />
    <rect :id="endBlockWidth('EAST_MARKET_5')" x="2450" :y="SECOND_LINE" fill="yellow" opacity="0" :width="END_WIDTH" :height="HEIGHT"/>
    <rect :id="endBlockHeight('EAST_MARKET_5')" x="2110" :y="SECOND_LINE_END" fill="blue" opacity="0" :width="WIDTH" :height="END_WIDTH"/>
</template>
<script>
export default {
    name: "MapMarkersMarket",
    setup(){
        const FIRST_LINE = 2159;
        const FIRST_LINE_END = 2675;
        const SECOND_LINE = 2722;
        const SECOND_LINE_END = 3238;
        const WIDTH = 340;
        const HEIGHT = "100";
        const END_WIDTH = 30;

        const endBlockWidth = (id) => `${id}-endX`;
        const endBlockHeight = (id) => `${id}-endY`;
        const endBlockX = (x) => x + WIDTH;

        return {
            FIRST_LINE,
            SECOND_LINE,
            WIDTH,
            END_WIDTH,
            HEIGHT,
            endBlockWidth,
            endBlockHeight,
            endBlockX,
            FIRST_LINE_END,
            SECOND_LINE_END,
        }
    },
};
</script>