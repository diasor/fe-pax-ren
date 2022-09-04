import { find, upperCase } from "lodash";
import { KINGDOMS_FILE, VICTORY_CARD, PIECE_FILE } from "@/constants/cards"; 
import { CARD_TYPE } from "@/constants/enums"; 

export function useCard() {
    function cardFile(id, religion, cardType, pieceId) {
        let cardId = "";
        let card = {};
        if (cardType === CARD_TYPE.VICTORY) {
            cardId = id;
            card = find(VICTORY_CARD, (iter) => iter.id === cardId);
        }
        if (cardType === CARD_TYPE.KINGDOM) {
            cardId = `${id}-${upperCase(religion)}`;
            card = find(KINGDOMS_FILE, (iter) => iter.id === cardId);
        }
        if (cardType === CARD_TYPE.PIECE) {
            card = find(PIECE_FILE, (iter) => iter.id === pieceId);
        }
        return `/images/${card.file}`;
    }

    function cardDynamicStyle(cardId, cardType, pieceId) {
        let makerId = cardType === CARD_TYPE.PIECE ? pieceId : cardId;
        const cardSvgRec = document.getElementById(makerId);
        const dimensions = cardSvgRec.getBoundingClientRect();
        const coordX = parseInt(dimensions.left, 10);
        const coordY = parseInt(dimensions.top, 10) - 80;
        const endId = `${makerId}-end`;
        const cardSvgRecEnd = document.getElementById(endId).getBoundingClientRect();
        const coordEndX = parseInt(cardSvgRecEnd.left, 10);
        const width = coordEndX - coordX;
        return {
            position: "absolute",
            top: `${coordY}px !important` ,
            left: `${coordX}px !important`,
            width: `${width}px !important`,
        };
    }

    return { cardFile, cardDynamicStyle };
  }