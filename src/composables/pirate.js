import { CARD_TYPE } from "@/constants/enums";

export function usePirate() {
    function isPirate(pieceId) {
        return pieceId && pieceId.includes("PIRATE");
    } 

    function buildBorder(border, position, zoom=false)  {
        const fullBorder = {
            ...border,
            cardId: border.borderName,
            pieceId: border.occupiedBy,
            cardType: CARD_TYPE.BORDER,
            cardMarkerId: zoom ? `${border.borderName}-zoom` : border.borderName,
        };
        if (isPirate(border.occupiedBy)) {
            const cardId = zoom
                ? `${border.borderName}_PIRATE-zoom`
                : `${border.borderName}_PIRATE`;
            fullBorder.cardId = cardId;
            fullBorder.cardPosition = position;
            fullBorder.cardType = CARD_TYPE.PIRATE;
            fullBorder.cardMarkerId = cardId;
        }
        return fullBorder;
    }

    function isOccupied(occupiedBy) {
        return occupiedBy && occupiedBy !== "FREE"
    }

    function pirateMakerName(country1, country2, zoom) {
        return zoom
            ? `${country1}-${country2}_PIRATE-zoom`
            : `${country1}-${country2}_PIRATE`;
    }
    // expose managed state as return value
    return { isPirate, buildBorder, isOccupied, pirateMakerName };
}
