import { find, upperCase } from "lodash";
import { KINGDOMS_FILES, VICTORY_CARDS } from "@/constants/cards"; 
import { CARD_TYPE } from "@/constants/enums"; 
export function useCard() {
    function cardFile(id, religion, cardType) {
        let cardId = "";
        let card = {};
        if (cardType === CARD_TYPE.VICTORY) {
            cardId = id;
            card = find(VICTORY_CARDS, (iter) => iter.id === cardId);
        } 
        if (cardType === CARD_TYPE.KINGDOM) {
            cardId = `${id}-${upperCase(religion)}`;
            card = find(KINGDOMS_FILES, (iter) => iter.id === cardId);
        }        
        return `/images/${card.file}`;
    }

    function cardDynamicStyle(cardId) {
        const cardSvgRec = document.getElementById(cardId);
        const dimensions = cardSvgRec.getBoundingClientRect();
        const coordX = parseInt(dimensions.left, 10);
        const coordY = parseInt(dimensions.top, 10) - 80;
        const endId = `${cardId}-end`;
        const cardSvgRecEnd = document.getElementById(endId).getBoundingClientRect();
        const coordEndX = parseInt(cardSvgRecEnd.left, 10);
        const width = coordEndX - coordX;
        return {
            position: "absolute",
            top: `${coordY}px !important` ,
            left: `${coordX}px !important`,
            width: `${width}px !important`,
        }
    }

    return { cardFile, cardDynamicStyle }
  }