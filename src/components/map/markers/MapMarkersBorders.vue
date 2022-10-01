<template>
  <!-- Border 1: England - France -->
  <rect
    :id="border1PirateId"
    x="1132"
    y="800"
    fill="brown"
    opacity="0"
    :width="WIDTH_PIRATE"
    :height="HEIGHT_PIRATE"
  />
  <rect
    :id="endBlockIdWidth(border1PirateId)"
    :x="endBlockWidth(1132)"
    y="800"
    fill="yellow"
    opacity="0"
    :width="END_WIDTH"
    :height="HEIGHT_PIRATE"
  />
  <rect
    :id="endBlockIdHeight(border1PirateId)"
    x="1132"
    :y="endBlockHeight(800)"
    fill="blue"
    opacity="0"
    :width="WIDTH_PIRATE"
    :height="END_WIDTH"
  />

  <circle
    :id="border1Id"
    cx="1165"
    cy="830"
    :r="RADIO"
    opacity="0"
    fill="red"
  />
  <rect
    :id="endBlockName(border1Id)"
    :x="endBlockX(1165)"
    :y="endBlockY(830)"
    fill="yellow"
    opacity="0"
    :width="WIDTH"
    :height="HEIGHT"
  />

  <!-- Border 2: England - Portugal -->
  <rect
    :id="border2PirateId"
    x="900"
    y="1130"
    fill="brown"
    opacity="0"
    :width="HEIGHT_PIRATE"
    :height="WIDTH_PIRATE"
  />
  <rect
    :id="endBlockIdWidth(border2PirateId)"
    :x="endBlockHeight(900)"
    y="1130"
    fill="yellow"
    opacity="0"
    :width="END_WIDTH"
    :height="WIDTH_PIRATE"
  />
  <rect
    :id="endBlockIdHeight(border2PirateId)"
    x="900"
    :y="endBlockWidth(1130)"
    fill="blue"
    opacity="0"
    :width="HEIGHT_PIRATE"
    :height="END_WIDTH"
  />

  <circle
    :id="border2Id"
    cx="930"
    cy="1160"
    :r="RADIO"
    opacity="0"
    fill="green"
  />
  <rect
    :id="endBlockName(border2Id)"
    :x="endBlockX(930)"
    :y="endBlockY(1160)"
    fill="yellow"
    opacity="0"
    :width="WIDTH"
    :height="HEIGHT"
  />

  <!-- Border 3: France - Holly Roman Empire -->
  <rect
    :id="border3PirateId"
    x="1532"
    y="650"
    fill="brown"
    opacity="0"
    :width="WIDTH_PIRATE"
    :height="HEIGHT_PIRATE"
  />
  <rect
    :id="endBlockIdWidth(border3PirateId)"
    :x="endBlockWidth(1532)"
    y="650"
    fill="yellow"
    opacity="0"
    :width="END_WIDTH"
    :height="HEIGHT_PIRATE"
  />
  <rect
    :id="endBlockIdHeight(border3PirateId)"
    x="1532"
    :y="endBlockHeight(650)"
    fill="blue"
    opacity="0"
    :width="WIDTH_PIRATE"
    :height="END_WIDTH"
  />

  <circle
    :id="border3Id"
    cx="1565"
    cy="740"
    :r="RADIO"
    opacity="0"
    fill="red"
  />
  <rect
    :id="endBlockName(border3Id)"
    :x="endBlockX(1565)"
    :y="endBlockY(740)"
    fill="yellow"
    opacity="0"
    :width="WIDTH"
    :height="HEIGHT"
  />

  <!-- Border 4: France - Aragon (there can not be a pirate between these 2: over land) -->
  <circle
    :id="border4Id"
    cx="1358"
    cy="1160"
    :r="RADIO"
    opacity="0"
    fill="red"
  />
  <rect
    :id="endBlockName(border4Id)"
    :x="endBlockX(1358)"
    :y="endBlockY(1160)"
    fill="yellow"
    opacity="0"
    :width="WIDTH"
    :height="HEIGHT"
  />

  <!-- Border 5: Holly Roman Empire - Hungary (there can not be a pirate between these 2: over land) -->
  <circle
    :id="border5Id"
    cx="1959"
    cy="870"
    :r="RADIO"
    opacity="0"
    fill="red"
  />
  <rect
    :id="endBlockName(border5Id)"
    :x="endBlockX(1959)"
    :y="endBlockY(870)"
    fill="yellow"
    opacity="0"
    :width="WIDTH"
    :height="HEIGHT"
  />

  <!-- Border 6: Holly Roman Empire - Papal States (there can not be a pirate between these 2: over land) -->
  <circle
    :id="border6Id"
    cx="1740"
    cy="1160"
    :r="RADIO"
    opacity="0"
    fill="red"
  />
  <rect
    :id="endBlockName(border6Id)"
    :x="endBlockX(1740)"
    :y="endBlockY(1160)"
    fill="yellow"
    opacity="0"
    :width="WIDTH"
    :height="HEIGHT"
  />

  <!-- Border 7: Hungary - Byzantium -->
  <rect
    :id="border7PirateId"
    x="2330"
    y="990"
    fill="brown"
    opacity="0"
    :width="WIDTH_PIRATE"
    :height="HEIGHT_PIRATE"
  />
  <rect
    :id="endBlockIdWidth(border7PirateId)"
    :x="endBlockWidth(2330)"
    y="990"
    fill="yellow"
    opacity="0"
    :width="END_WIDTH"
    :height="HEIGHT_PIRATE"
  />
  <rect
    :id="endBlockIdHeight(border7PirateId)"
    x="2330"
    :y="endBlockHeight(990)"
    fill="blue"
    opacity="0"
    :width="WIDTH_PIRATE"
    :height="END_WIDTH"
  />

  <circle
    :id="border7Id"
    cx="2358"
    cy="870"
    :r="RADIO"
    opacity="0"
    fill="red"
  />
  <rect
    :id="endBlockName(border7Id)"
    :x="endBlockX(2358)"
    :y="endBlockY(870)"
    fill="yellow"
    opacity="0"
    :width="WIDTH"
    :height="HEIGHT"
  />

  <!-- Border 8: Hungary - Ottoman -->
  <rect
    :id="border8PirateId"
    x="2180"
    y="1130"
    fill="brown"
    opacity="0"
    :width="HEIGHT_PIRATE"
    :height="WIDTH_PIRATE"
  />
  <rect
    :id="endBlockIdWidth(border8PirateId)"
    :x="endBlockHeight(2180)"
    y="1130"
    fill="yellow"
    opacity="0"
    :width="END_WIDTH"
    :height="WIDTH_PIRATE"
  />
  <rect
    :id="endBlockIdHeight(border8PirateId)"
    x="2180"
    :y="endBlockWidth(1130)"
    fill="blue"
    opacity="0"
    :width="HEIGHT_PIRATE"
    :height="END_WIDTH"
  />

  <circle
    :id="border8Id"
    cx="2180"
    cy="1160"
    :r="RADIO"
    opacity="0"
    fill="red"
  />
  <rect
    :id="endBlockName(border8Id)"
    :x="endBlockX(2180)"
    :y="endBlockY(1160)"
    fill="yellow"
    opacity="0"
    :width="WIDTH"
    :height="HEIGHT"
  />

  <!-- Border 9: Byzantium - Mamluk (there can not be a pirate between these 2: over land) -->
  <circle
    :id="border9Id"
    cx="2550"
    cy="1160"
    :r="RADIO"
    opacity="0"
    fill="red"
  />
  <rect
    :id="endBlockName(border9Id)"
    :x="endBlockX(2550)"
    :y="endBlockY(1160)"
    fill="yellow"
    opacity="0"
    :width="WIDTH"
    :height="HEIGHT"
  />

  <!-- Border 10: Portugal - Aragon -->
  <rect
    :id="border10PirateId"
    x="1132"
    y="1500"
    fill="brown"
    opacity="0"
    :width="WIDTH_PIRATE"
    :height="HEIGHT_PIRATE"
  />
  <rect
    :id="endBlockIdWidth(border10PirateId)"
    :x="endBlockWidth(1132)"
    y="1500"
    fill="yellow"
    opacity="0"
    :width="END_WIDTH"
    :height="HEIGHT_PIRATE"
  />
  <rect
    :id="endBlockIdHeight(border10PirateId)"
    x="1132"
    :y="endBlockHeight(1500)"
    fill="blue"
    opacity="0"
    :width="WIDTH_PIRATE"
    :height="END_WIDTH"
  />

  <circle
    :id="border10Id"
    cx="1165"
    cy="1570"
    :r="RADIO"
    opacity="0"
    fill="red"
  />
  <rect
    :id="endBlockName(border10Id)"
    :x="endBlockX(1165)"
    :y="endBlockY(1570)"
    fill="yellow"
    opacity="0"
    :width="WIDTH"
    :height="HEIGHT"
  />

  <!-- Border 11: Aragon - Papal States -->
  <rect
    :id="border11PirateId"
    x="1532"
    y="1350"
    fill="brown"
    opacity="0"
    :width="WIDTH_PIRATE"
    :height="HEIGHT_PIRATE"
  />
  <rect
    :id="endBlockIdWidth(border11PirateId)"
    :x="endBlockWidth(1532)"
    y="1350"
    fill="yellow"
    opacity="0"
    :width="END_WIDTH"
    :height="HEIGHT_PIRATE"
  />
  <rect
    :id="endBlockIdHeight(border11PirateId)"
    x="1532"
    :y="endBlockHeight(1350)"
    fill="blue"
    opacity="0"
    :width="WIDTH_PIRATE"
    :height="END_WIDTH"
  />

  <circle
    :id="border11Id"
    cx="1560"
    cy="1400"
    :r="RADIO"
    opacity="0"
    fill="red"
  />
  <rect
    :id="endBlockName(border11Id)"
    :x="endBlockX(1560)"
    :y="endBlockY(1400)"
    fill="yellow"
    opacity="0"
    :width="WIDTH"
    :height="HEIGHT"
  />

  <!-- Border 12: Papal States - Ottoman -->
  <rect
    :id="border12PirateId"
    x="1930"
    y="1490"
    fill="brown"
    opacity="0"
    :width="WIDTH_PIRATE"
    :height="HEIGHT_PIRATE"
  />
  <rect
    :id="endBlockIdWidth(border12PirateId)"
    :x="endBlockWidth(1930)"
    y="1490"
    fill="yellow"
    opacity="0"
    :width="END_WIDTH"
    :height="HEIGHT_PIRATE"
  />
  <rect
    :id="endBlockIdHeight(border12PirateId)"
    x="1930"
    :y="endBlockHeight(1490)"
    fill="blue"
    opacity="0"
    :width="WIDTH_PIRATE"
    :height="END_WIDTH"
  />

  <circle
    :id="border12Id"
    cx="1960"
    cy="1550"
    :r="RADIO"
    opacity="0"
    fill="red"
  />
  <rect
    :id="endBlockName(border12Id)"
    :x="endBlockX(1960)"
    :y="endBlockY(1550)"
    fill="yellow"
    opacity="0"
    :width="WIDTH"
    :height="HEIGHT"
  />

  <!-- Border 13: Ottoman - Mamluk -->
  <rect
    :id="border13PirateId"
    x="2330"
    y="1480"
    fill="brown"
    opacity="0"
    :width="WIDTH_PIRATE"
    :height="HEIGHT_PIRATE"
  />
  <rect
    :id="endBlockIdWidth(border13PirateId)"
    :x="endBlockWidth(2330)"
    y="1480"
    fill="yellow"
    opacity="0"
    :width="END_WIDTH"
    :height="HEIGHT_PIRATE"
  />
  <rect
    :id="endBlockIdHeight(border13PirateId)"
    x="2330"
    :y="endBlockHeight(1480)"
    fill="blue"
    opacity="0"
    :width="WIDTH_PIRATE"
    :height="END_WIDTH"
  />

  <circle
    :id="border13Id"
    cx="2358"
    cy="1550"
    :r="RADIO"
    opacity="0"
    fill="red"
  />
  <rect
    :id="endBlockName(border13Id)"
    :x="endBlockX(2358)"
    :y="endBlockY(1550)"
    fill="yellow"
    opacity="0"
    :width="WIDTH"
    :height="HEIGHT"
  />
</template>
<script>
import { KINGDOM_NAMES } from "@/constants/enums";
export default {
  name: "MapMarkersBorders",
  setup() {
    const RADIO = 34;
    const WIDTH = 34;
    const WIDTH_PIRATE = 65;
    const HEIGHT_PIRATE = 130;
    const HEIGHT = RADIO * 2;
    const END_WIDTH = 30;

    const endBlockName = (id) => `${id}-endX`;
    const endBlockX = (x) => x + WIDTH;
    const endBlockY = (y) => y - RADIO;

    const endBlockWidth = (x) => x + WIDTH_PIRATE;
    const endBlockHeight = (y) => y + HEIGHT_PIRATE;
    const endBlockIdWidth = (id) => `${id}-endX`;
    const endBlockIdHeight = (id) => `${id}-endY`;

    const border1Id = `${KINGDOM_NAMES.ENGLAND}-${KINGDOM_NAMES.FRANCE}`;
    const border1PirateId = `${KINGDOM_NAMES.ENGLAND}-${KINGDOM_NAMES.FRANCE}_PIRATE`;
    const border2Id = `${KINGDOM_NAMES.ENGLAND}-${KINGDOM_NAMES.PORTUGAL}`;
    const border2PirateId = `${KINGDOM_NAMES.ENGLAND}-${KINGDOM_NAMES.PORTUGAL}_PIRATE`;
    const border3Id = `${KINGDOM_NAMES.FRANCE}-${KINGDOM_NAMES.HRE}`;
    const border3PirateId = `${KINGDOM_NAMES.FRANCE}-${KINGDOM_NAMES.HRE}_PIRATE`;
    const border4Id = `${KINGDOM_NAMES.FRANCE}-${KINGDOM_NAMES.ARAGON}`;
    const border5Id = `${KINGDOM_NAMES.HRE}-${KINGDOM_NAMES.HUNGARY}`;
    const border6Id = `${KINGDOM_NAMES.HRE}-${KINGDOM_NAMES.PAPAL_STATES}`;
    const border7Id = `${KINGDOM_NAMES.HUNGARY}-${KINGDOM_NAMES.BYZANTIUM}`;
    const border7PirateId = `${KINGDOM_NAMES.HUNGARY}-${KINGDOM_NAMES.BYZANTIUM}_PIRATE`;
    const border8Id = `${KINGDOM_NAMES.HUNGARY}-${KINGDOM_NAMES.OTTOMAN}`;
    const border8PirateId = `${KINGDOM_NAMES.HUNGARY}-${KINGDOM_NAMES.OTTOMAN}_PIRATE`;
    const border9Id = `${KINGDOM_NAMES.BYZANTIUM}-${KINGDOM_NAMES.MAMLUK}`;
    const border10Id = `${KINGDOM_NAMES.PORTUGAL}-${KINGDOM_NAMES.ARAGON}`;
    const border10PirateId = `${KINGDOM_NAMES.PORTUGAL}-${KINGDOM_NAMES.ARAGON}_PIRATE`;
    const border11Id = `${KINGDOM_NAMES.ARAGON}-${KINGDOM_NAMES.PAPAL_STATES}`;
    const border11PirateId = `${KINGDOM_NAMES.ARAGON}-${KINGDOM_NAMES.PAPAL_STATES}_PIRATE`;
    const border12Id = `${KINGDOM_NAMES.PAPAL_STATES}-${KINGDOM_NAMES.OTTOMAN}`;
    const border12PirateId = `${KINGDOM_NAMES.PAPAL_STATES}-${KINGDOM_NAMES.OTTOMAN}_PIRATE`;
    const border13Id = `${KINGDOM_NAMES.OTTOMAN}-${KINGDOM_NAMES.MAMLUK}`;
    const border13PirateId = `${KINGDOM_NAMES.OTTOMAN}-${KINGDOM_NAMES.MAMLUK}_PIRATE`;

    return {
      RADIO,
      WIDTH,
      WIDTH_PIRATE,
      HEIGHT,
      HEIGHT_PIRATE,
      END_WIDTH,
      endBlockName,
      endBlockX,
      endBlockY,
      endBlockWidth,
      endBlockHeight,
      endBlockIdWidth,
      endBlockIdHeight,
      border1Id,
      border1PirateId,
      border2Id,
      border2PirateId,
      border3Id,
      border3PirateId,
      border4Id,
      border5Id,
      border6Id,
      border7Id,
      border7PirateId,
      border8Id,
      border8PirateId,
      border9Id,
      border10Id,
      border10PirateId,
      border11Id,
      border11PirateId,
      border12Id,
      border12PirateId,
      border13Id,
      border13PirateId,
    };
  },
};
</script>
