<template>
    <div>
        <base-nav-bar @showCard="renderCard"/>
        <div id="pr-map" class="map-container">
            <!-- all markers -->
            <map-markers />

            <!-- kingdom cards -->
            <map-card :showCard="englandCard.showCard" :card="englandCard" />
            <map-card :showCard="franceCard.showCard" :card="franceCard" />
            <map-card :showCard="hollyRomanEmpireCard.showCard" :card="hollyRomanEmpireCard" />
            <map-card :showCard="hungaryCard.showCard" :card="hungaryCard" />
            <map-card :showCard="byzantiumCard.showCard" :card="byzantiumCard" />
            <map-card :showCard="portugalCard.showCard" :card="portugalCard" />
            <map-card :showCard="aragonCard.showCard" :card="aragonCard" />
            <map-card :showCard="papalStatesCard.showCard" :card="papalStatesCard" />
            <map-card :showCard="ottomanCard.showCard" :card="ottomanCard" />
            <map-card :showCard="mamlukCard.showCard" :card="ottomanCard" />
            <!-- victory cards -->
            <map-card :showCard="renaissanceVictoryCard.showCard" :card="renaissanceVictoryCard" />
            <map-card :showCard="globalizationVictoryCard.showCard" :card="globalizationVictoryCard" />
            <map-card :showCard="imperialVictoryCard.showCard" :card="imperialVictoryCard" />
            <map-card :showCard="holyVictoryCard.showCard" :card="holyVictoryCard" />

            <map-card-pieces v-if="showPiece" :showCard="showPiece" :card="displayCard" />
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import BaseNavBar from "@/components/generic/BaseNavBar.vue";
import MapMarkers from "@/components/map/MapMarkers.vue";
import MapCard from "@/components/map/MapCard.vue";
import MapCardPieces from "@/components/map/MapCardPieces.vue";
import { COUNTRY_CODES, VICTORY_TYPE, CARD_TYPE } from "@/constants/enums";

export default {
    name: "MapDashboard",
    components: {
        BaseNavBar,
        MapMarkers,
        MapCard,
        MapCardPieces,
    },
    setup(){
        let englandCard = ref({});
        let franceCard = ref({});
        let hollyRomanEmpireCard = ref({});
        let hungaryCard = ref({});
        let byzantiumCard = ref({});
        let portugalCard = ref({});
        let aragonCard = ref({});
        let papalStatesCard = ref({});
        let ottomanCard = ref({});
        let mamlukCard = ref({});
        // victories
        let renaissanceVictoryCard = ref({});
        let globalizationVictoryCard = ref({});
        let imperialVictoryCard = ref({});
        let holyVictoryCard = ref({});
        let displayCard = ref({});
        let showPiece = ref(false);

        const renderCard = (card) => {
            displayCard.value = { ...card };
            if (card.cardType === CARD_TYPE.PIECE) {
                showPiece.value = true;
            } else {
                const { cardId } = card;
                switch(cardId) {
                case COUNTRY_CODES.ENGLAND:
                    englandCard.value = {
                        ...card,
                        showCard: true,
                    };
                    break;
                case COUNTRY_CODES.FRANCE:
                    franceCard.value = {
                        ...card,
                        showCard: true,
                    };
                    break;
                case COUNTRY_CODES.HOLY_ROMAN_EMPIRE:
                    hollyRomanEmpireCard.value = {
                        ...card,
                        showCard: true,
                    };
                    break;
                case COUNTRY_CODES.HUNGARY:
                    hungaryCard.value = {
                        ...card,
                        showCard: true,
                    };
                    break;
                case COUNTRY_CODES.BYZANTIUM:
                   byzantiumCard.value = {
                        ...card,
                        showCard: true,
                    };
                    break;
                case COUNTRY_CODES.PORTUGAL:
                    portugalCard.value = {
                        ...card,
                        showCard: true,
                    };
                    break;
                case COUNTRY_CODES.ARAGON:
                    aragonCard.value = {
                        ...card,
                        showCard: true,
                    };
                    break;
                case COUNTRY_CODES.PAPAL_STATES:
                    papalStatesCard.value = {
                        ...card,
                        showCard: true,
                    };
                    break;            
                case COUNTRY_CODES.OTTOMAN:
                    ottomanCard.value = {
                        ...card,
                        showCard: true,
                    };
                    break;
                case COUNTRY_CODES.MAMLUK:
                    mamlukCard.value = {
                        ...card,
                        showCard: true,
                    };
                    break;           
                // victory cards
                case VICTORY_TYPE.RENAISSANCE:
                    renaissanceVictoryCard.value = {
                        ...card,
                        showCard: true,
                    };
                    break;
                case VICTORY_TYPE.GLOBALIZATION:
                    globalizationVictoryCard.value = {
                        ...card,
                        showCard: true,
                    };
                    break;
                case VICTORY_TYPE.IMPERIAL:
                    imperialVictoryCard.value = {
                        ...card,
                        showCard: true,
                    };
                    break;
                case VICTORY_TYPE.HOLY:
                    holyVictoryCard.value = {
                        ...card,
                        showCard: true,
                    };
                    break;
                default:
                    // code block
                }
            }
        };
        
        return {
            englandCard,
            franceCard,
            hollyRomanEmpireCard,
            hungaryCard,
            byzantiumCard,
            portugalCard,
            aragonCard,
            papalStatesCard,
            ottomanCard,
            mamlukCard,
            displayCard,
            renaissanceVictoryCard,
            globalizationVictoryCard,
            imperialVictoryCard,
            holyVictoryCard,
            renderCard,
            showPiece,
        }
    },

};
</script>

<style lang="scss" scoped>
.map-container {
    position: relative;
}

image {
    width: 100% !important;
    max-width: 100%;    
    height: auto;
    vertical-align: middle;  
}
</style>
