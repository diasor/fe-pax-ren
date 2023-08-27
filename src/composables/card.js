import { find, forEach, upperCase, endsWith } from "lodash";
import {
    KINGDOM_FILES,
    VICTORY_FILES,
    PIECE_FILES,
    WEST_CARDS,
    EAST_CARDS,
    CONCESSION_FILES,
    PIRATE_FILES,
} from "@/constants/cards";
import { EMPIRE_FILES } from "@/constants/empires";
import { CARD_TYPE, RELIGION, REGION, PIECE_TYPE } from "@/constants/enums";

export function useCard() {
    function showPiece(pieceId) {
        return !endsWith(pieceId, "FREE");
    }

    function cardFile(propsCard) {
        const {
            cardId,
            cardReligion,
            cardType,
            pieceId,
            cardRegion,
            cardPosition,
            cardGovernment,
        } = propsCard;
        let id = "";
        let card = {};

        if (cardType === CARD_TYPE.VICTORY) {
            card = find(VICTORY_FILES, (iter) => iter.id === cardId);
        }
        if (cardType === CARD_TYPE.KINGDOM || cardType === CARD_TYPE.KINGDOM_ZOOM) {
            if (cardReligion === RELIGION.SECULAR) {
                id = `${cardId}-MEDIEVAL`;
                card = find(KINGDOM_FILES, (iter) => iter.id === id);
            } else {
                id = `${cardId}-${upperCase(cardReligion)}`;
                card = find(KINGDOM_FILES, (iter) => iter.id === id);
            }
        }
        // Rook, Knight => placed over the kingdom card
        if (cardType === CARD_TYPE.PIECE && showPiece(pieceId)) {
            card = find(PIECE_FILES, (iter) => iter.id === pieceId);
        }
        // Concessions => placed over the kingdom borders
        if (cardType === CARD_TYPE.BORDER && showPiece(pieceId)) {
            card = find(CONCESSION_FILES, (iter) => iter.id === pieceId);
        }
        // Pirates => placed over the kingdom borders
        if (cardType === CARD_TYPE.PIRATE && showPiece(pieceId)) {
            id = `${pieceId}_${cardPosition}`;
            card = find(PIRATE_FILES, (iter) => iter.id === id);
        }
        // West market card
        if (cardType === CARD_TYPE.MARKET_CARD && cardRegion === REGION.WEST) {
            card = find(WEST_CARDS, (iter) => iter.id === cardId);
        }
        // East market card
        if (cardType === CARD_TYPE.MARKET_CARD && cardRegion === REGION.EAST) {
            card = find(EAST_CARDS, (iter) => iter.id === cardId);
        }
        // Empire card
        if (cardType === CARD_TYPE.EMPIRE) {
            card = find(
                EMPIRE_FILES,
                (iter) => iter.id === cardId && iter.government === cardGovernment
            );
        }
        if (card === undefined) {
            console.log(`Card file NOT FOUND. id: ${cardId}, religion: ${cardRegion} `);
        } 
        return `/images/${card.file}`;
    }

    function isRook(pieceId) {
        return (
            pieceId === PIECE_TYPE.CATHOLIC_ROOK ||
            pieceId === PIECE_TYPE.MUSLIM_ROOK ||
            pieceId === PIECE_TYPE.REFORMIST_ROOK
        );
    }

    function cardDynamicStyle(card) {
        const { cardId, cardType, cardMarkerId, pieceId } = card;
        let markerId = cardType === CARD_TYPE.MARKET_CARD
            ? cardMarkerId
            : cardId;

        const cardSvgRec = document.getElementById(markerId);
        const dimensions = cardSvgRec.getBoundingClientRect();
        const navBarOffset = 80;
        let coordX = parseInt(dimensions.left, 10);
        let coordY = cardType === CARD_TYPE.KINGDOM_ZOOM
            ? parseInt(dimensions.top, 10)
            : parseInt(dimensions.top, 10) - navBarOffset;
        const endId = `${markerId}-endX`;
        const cardSvgRecEnd = document
            .getElementById(endId)
            .getBoundingClientRect();
        let coordEndY = 0;
        if (cardType !== CARD_TYPE.BORDER) {
            const endIdY = `${markerId}-endY`;
            const cardSvgRecEndY = document
                .getElementById(endIdY)
                .getBoundingClientRect();
            if (cardType === CARD_TYPE.PIECE && isRook(pieceId)) {
                // rook
                coordX = coordX - 3;
                coordY = coordY - 5;
                coordEndY = parseInt(cardSvgRecEndY.top, 10) - navBarOffset - 5;
            } else if (cardType === CARD_TYPE.PIECE && !isRook(pieceId)) {
                // knight
                coordX = coordX - 2;
                coordY = coordY + 2;
            } else {
                // pirate
                coordEndY = parseInt(cardSvgRecEndY.top, 10) - navBarOffset + 3;
            }
        }
        const coordEndX = parseInt(cardSvgRecEnd.left, 10);
        const width = coordEndX - coordX;
        const height = coordEndY - coordY;
        if (cardType === CARD_TYPE.PIECE) {
            return {
                position: "absolute",
                top: `${coordY}px !important`,
                left: `${coordX}px !important`,
                width: `${width}px !important`,
            };
        } else {
            return {
                position: "absolute",
                top: `${coordY}px !important`,
                left: `${coordX}px !important`,
                width: `${width}px !important`,
                height: `${height}px !important`,
            };
        }
    }

    function cardZoomDynamicStyle(card) {
        const { cardMarkerId, cardType, pieceId } = card;
        const cardSvgRec = document.getElementById(cardMarkerId);
        const box = cardSvgRec.getBBox();
        let coordX = parseInt(box.x, 10) + 5;
        let coordY = parseInt(box.y, 10) ;
        let width = parseInt(cardSvgRec.getBoundingClientRect().width, 10);
        if (cardType === CARD_TYPE.PIECE && isRook(pieceId)) {
            // since the rook is too wide on the bottom, a few pixels are shaved off
            width = width - 7;
            coordX = coordX + 2;
        }
        const height = parseInt(cardSvgRec.getBoundingClientRect().height, 10) + 7;

        return {
            position: "absolute",
            top: `${coordY}px !important`,
            left: `${coordX}px !important`,
            width: `${width}px !important`,
            height: `${height}px !important`,
            borderRadius: "20px !important",
            border: cardType === CARD_TYPE.PIECE || cardType === CARD_TYPE.PIRATE || cardType === CARD_TYPE.BORDER
                ? "none"
                : "1px #2b2d2f solid",
        };
    }

    function cardMarketSet(tableau, cardRegion) {
        let cards = [];
        forEach(tableau, (item) => {
            const cardType =
                item.cardType === "KINGDOM" ? CARD_TYPE.EMPIRE : item.cardType;
            const card = {
                cardId: item.cardId,
                cardType,
                cardRegion,
                cardName: item.cardName,
            };
            cards.push(cardFile(card));
        });

        return cards;
    }

    return { cardFile, cardDynamicStyle, cardZoomDynamicStyle, showPiece, cardMarketSet };
}
