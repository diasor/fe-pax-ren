import { forEach, upperCase, find } from "lodash";
import { useCard } from "@/composables/card";
import { CARD_TYPE, REGION, COUNTRY_CODES } from "@/constants/enums";

export function useBanker() {
    const { cardFile } = useCard();

    function getVassals(kingdoms, kingdom, banker, region) {
        let vassals = [];
        const location = `TABLEAU_${banker}_${region}`;
        forEach(kingdoms, (iter) => {
            if (iter.vassalOf === kingdom && iter.location === location) {
                const iterCard = {
                    cardId: iter.name,
                    cardType: CARD_TYPE.EMPIRE,
                    cardReligion: iter.religion,
                    cardGovernment: iter.government,
                };
                const file = cardFile(iterCard);
                vassals.push(file);
            }
        });
        return vassals;
    }


    function buildMarket(bankerName, marketDeck, kingdoms, region) {
        let market = [];
        if (marketDeck) {
            forEach(marketDeck, (card) => {
                const cardType = card.cardType === "KINGDOM" ? CARD_TYPE.EMPIRE : card.cardType;
                const cardId = cardType === CARD_TYPE.KINGDOM ? COUNTRY_CODES[card.name] : card.cardId;
                const iterCard = {
                    cardId,
                    id: card.cardName,
                    cardType,
                    cardRegion: region,
                    cardReligion: card.religion,
                    cardName: card.cardName,
                    cardGovernment: "",
                }

                if (cardType === CARD_TYPE.MARKET_CARD) {
                    const file = cardFile(iterCard);
                    market.push({
                        file,
                        vassals: []
                    });
                } else if (cardType === CARD_TYPE.EMPIRE && card.locationType === CARD_TYPE.KINGDOM) {
                    const fullKingdomeData = find(kingdoms, (k) => k.name === cardId);
                    if (fullKingdomeData.vassalOf === null) {
                        // only the kingdoms that are not vassals, are shown at the market level
                        // if they are vassals of another kingdom, they are shown as vassals
                        iterCard.cardGovernment = fullKingdomeData.government;
                        const file = cardFile(iterCard);
                        const kingdom = card.locationKingdom;
                        const vassals = getVassals(kingdoms, kingdom, upperCase(bankerName), region);
                        market.push({
                            file,
                            vassals,
                        });
                    }
                }
            });
        }
        return market;
    }

    function builBankerMakets(banker, kingdoms) {
        let westMarket = [];
        let eastMarket = [];
        if (banker.westTableau) {
            westMarket = buildMarket(banker.name, banker.westTableau, kingdoms, REGION.WEST);
        }
        if (banker.eastTableau) {
            eastMarket = buildMarket(banker.name, banker.eastTableau, kingdoms, REGION.EAST);
        }
        return {
            westMarket,
            eastMarket,
        };
    }

    function buildHand(handCards) {
        let hand = [];
        if (handCards) {
            forEach(handCards, (card) => {
                const iterCard = {
                    ...card,
                    id: card.cardId,
                    cardType: CARD_TYPE.MARKET_CARD,
                    cardRegion: card.deck,
                }
                const file = cardFile(iterCard);
                hand.push({
                    file,
                    vassals: []
                });
            });
        }
        return hand;
    }

    return { builBankerMakets, buildHand };
}
