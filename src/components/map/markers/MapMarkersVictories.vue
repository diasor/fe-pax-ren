<template>
    <!-- vitory markers -->
    <rect
        :id="VICTORY_TYPE.RENAISSANCE"
        :x="CARD_X"
        y="320"
        fill="red"
        opacity="0"
        :width="CARD_SIZE"
        :height="HEIGHT"
    />
    <rect
        :id="endBlockWidth(VICTORY_TYPE.RENAISSANCE)"
        x="615"
        y="320"
        fill="yellow"
        opacity="0"
        :width="END_WIDTH"
        :height="HEIGHT"
    />
    <rect
        :id="endBlockHeight(VICTORY_TYPE.RENAISSANCE)"
        :x="CARD_X"
        :y="victoryHeight(320)"
        fill="blue"
        opacity="0"
        :width="CARD_SIZE"
        :height="END_WIDTH"
    />

    <rect
        :id="VICTORY_TYPE.GLOBALIZATION"
        :x="CARD_X"
        y="715"
        fill="brown"
        opacity="0"
        :width="CARD_SIZE"
        :height="HEIGHT"
    />
    <rect
        :id="endBlockWidth(VICTORY_TYPE.GLOBALIZATION)"
        x="615"
        y="715"
        fill="yellow"
        opacity="0"
        :width="END_WIDTH"
        :height="HEIGHT"
    />
    <rect
        :id="endBlockHeight(VICTORY_TYPE.GLOBALIZATION)"
        :x="CARD_X"
        :y="victoryHeight(715)"
        fill="blue"
        opacity="0"
        :width="CARD_SIZE"
        :height="END_WIDTH"
    />

    <rect
        :id="VICTORY_TYPE.IMPERIAL"
        :x="CARD_X"
        y="1355"
        fill="blue"
        opacity="0"
        :width="CARD_SIZE"
        :height="HEIGHT"
    />
    <rect
        :id="endBlockWidth(VICTORY_TYPE.IMPERIAL)"
        x="615"
        y="1355"
        fill="yellow"
        opacity="0"
        :width="END_WIDTH"
        :height="HEIGHT"
    />
    <rect
        :id="endBlockHeight(VICTORY_TYPE.IMPERIAL)"
        :x="CARD_X"
        :y="victoryHeight(1355)"
        fill="blue"
        opacity="0"
        :width="CARD_SIZE"
        :height="END_WIDTH"
    />

    <rect
        :id="VICTORY_TYPE.HOLY"
        :x="CARD_X"
        y="1755"
        fill="purple"
        opacity="0"
        :width="CARD_SIZE"
        :height="HEIGHT"
    />
    <rect
        :id="endBlockWidth(VICTORY_TYPE.HOLY)"
        x="615"
        y="1755"
        fill="yellow"
        opacity="0"
        :width="END_WIDTH"
        :height="HEIGHT"
    />
    <rect
        :id="endBlockHeight(VICTORY_TYPE.HOLY)"
        :x="CARD_X"
        :y="victoryHeight(1755)"
        fill="blue"
        opacity="0"
        :width="CARD_SIZE"
        :height="END_WIDTH"
    />
</template>
<script>
import { VICTORY_TYPE } from "@/constants/enums";
export default {
    name: "MapMarkersVictories",
    setup() {
        const CARD_SIZE = 260;
        const CARD_X = 345;
        const WIDTH = 340;
        const HEIGHT = 50;
        const END_WIDTH = 30;

        const endBlockWidth = (id) => `${id}-endX`;
        const endBlockHeight = (id) => `${id}-endY`;
        const endBlockX = (x) => x + WIDTH;
        const victoryHeight = (y) => y + CARD_SIZE;

        return {
            CARD_X,
            CARD_SIZE,
            WIDTH,
            END_WIDTH,
            HEIGHT,
            VICTORY_TYPE,
            endBlockWidth,
            endBlockHeight,
            endBlockX,
            victoryHeight,
        };
    },
};
</script>
