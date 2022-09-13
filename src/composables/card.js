import { find, upperCase, endsWith } from "lodash";
import { KINGDOMS_FILE, VICTORY_CARD, PIECE_FILE, WEST_CARDS, EAST_CARDS } from "@/constants/cards"; 
import { CARD_TYPE, RELIGION, REGION} from "@/constants/enums"; 

export function useCard() {
    function showPiece(pieceId) {
        return (!endsWith(pieceId, "FREE"));
    }

    function cardFile(propsCard) {
        const { cardId, cardReligion, cardType, pieceId, cardRegion } = propsCard;
        let id = "";
        let card = {};
        if (cardType === CARD_TYPE.VICTORY) {
            card = find(VICTORY_CARD, (iter) => iter.id === cardId);
        }
        if (cardType === CARD_TYPE.KINGDOM) {
            if (cardReligion === RELIGION.SECULAR) {
                return "";
            } else {
                id = `${cardId}-${upperCase(cardReligion)}`;
                card = find(KINGDOMS_FILE, (iter) => iter.id === id);
            }
        }
        if ((cardType === CARD_TYPE.PIECE) && (showPiece(pieceId))) {
            card = find(PIECE_FILE, (iter) => iter.id === pieceId);
        }
        if ((cardType === CARD_TYPE.MARKET_CARD) && (cardRegion === REGION.WEST)) {
            card = find(WEST_CARDS, (iter) => iter.id === cardId);
        }
        if ((cardType === CARD_TYPE.MARKET_CARD) && (cardRegion === REGION.EAST)) {
            card = find(EAST_CARDS, (iter) => iter.id === cardId);
        }
        return `/images/${card.file}`;
    }

    function cardDynamicStyle(card) {
        const { cardId, cardType, cardMarkerId } = card;
        let makerId = (cardType === CARD_TYPE.MARKET_CARD) ? cardMarkerId : cardId;
        const cardSvgRec = document.getElementById(makerId);
        const dimensions = cardSvgRec.getBoundingClientRect();
        const navBarOffset = 80;
        const coordX = parseInt(dimensions.left, 10);
        const coordY = parseInt(dimensions.top, 10) - navBarOffset;
        const endId = `${makerId}-endX`;
        const cardSvgRecEnd = document.getElementById(endId).getBoundingClientRect();
        let coordEndY = 0;
        if (cardType !== CARD_TYPE.PIECE) {
            const endIdY = `${makerId}-endY`;
            const cardSvgRecEndY = document.getElementById(endIdY).getBoundingClientRect();
            coordEndY = parseInt(cardSvgRecEndY.top, 10) - navBarOffset + 3;
        }
        const coordEndX = parseInt(cardSvgRecEnd.left, 10);
        const width = coordEndX - coordX;
        const height = coordEndY - coordY;
        if (cardType === CARD_TYPE.PIECE) {
            return {
                position: "absolute",
                top: `${coordY}px !important` ,
                left: `${coordX}px !important`,
                width: `${width}px !important`,
            };
        } else {
            return {
                position: "absolute",
                top: `${coordY}px !important` ,
                left: `${coordX}px !important`,
                width: `${width}px !important`,
                height:`${height}px !important`,
            };
        }
    }

    return { cardFile, cardDynamicStyle, showPiece };
  }