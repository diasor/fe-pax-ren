<template>
    <div>
        <base-nav-bar @showCard="renderCard"/>
        <div id="pr-map" class="map-container">
            <map-markers />
            <!-- kingdom cards -->
            <map-card :showCard="showEngland" :cardId="COUNTRY_CODES.ENGLAND" :cardReligion="englandReligion" />
            <map-card :showCard="showFrance" :cardId="COUNTRY_CODES.FRANCE" :cardReligion="franceReligion" />
            <map-card :showCard="showHolyRomanEmpire" :cardId="COUNTRY_CODES.HOLY_ROMAN_EMPIRE" :cardReligion="holyRomanEmpireReligion" />
            <map-card :showCard="showHungary" :cardId="COUNTRY_CODES.HUNGARY" :cardReligion="hungaryReligion" />
            <map-card :showCard="showByzantium" :cardId="COUNTRY_CODES.BYZANTIUM" :cardReligion="byzantiumReligion" />
            <map-card :showCard="showPortugal" :cardId="COUNTRY_CODES.PORTUGAL" :cardReligion="portugalReligion" />
            <map-card :showCard="showAragon" :cardId="COUNTRY_CODES.ARAGON" :cardReligion="aragonReligion" />
            <map-card :showCard="showPapalStates" :cardId="COUNTRY_CODES.PAPAL_STATES" :cardReligion="papalStatesReligion" />
            <map-card :showCard="showOttoman" :cardId="COUNTRY_CODES.OTTOMAN" :cardReligion="ottomanReligion" />
            <map-card :showCard="showMamluk" :cardId="COUNTRY_CODES.MAMLUK" :cardReligion="mamlukReligion" />

            <!-- victory cards -->
            <map-card :showCard="showVictoryRenaissance" :cardId="VICTORY_TYPE.RENAISSANCE" :cardType="CARD_TYPE.VICTORY" />
            <map-card :showCard="showVictoryGlobalization" :cardId="VICTORY_TYPE.GLOBALIZATION" :cardType="CARD_TYPE.VICTORY" />
            <map-card :showCard="showVictoryImperial" :cardId="VICTORY_TYPE.IMPERIAL" :cardType="CARD_TYPE.VICTORY" />
            <map-card :showCard="showVictoryHoly" :cardId="VICTORY_TYPE.HOLY" :cardType="CARD_TYPE.VICTORY" />
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import BaseNavBar from "@/components/generic/BaseNavBar.vue";
import MapMarkers from "@/components/map/MapMarkers.vue";
import MapCard from "@/components/map/MapCard.vue";
import { COUNTRY_CODES, RELIGION, VICTORY_TYPE, CARD_TYPE } from "@/constants/enums";

export default {
    name: "MapDashboard",
    components: {
        BaseNavBar,
        MapMarkers,
        MapCard
    },
    setup(){
        // kingodms
        let showEngland = ref(false);
        let englandReligion = ref(RELIGION.CATHOLIC);
        let showFrance = ref(false);
        let franceReligion = ref(RELIGION.CATHOLIC);
        let showHolyRomanEmpire = ref(false);
        let holyRomanEmpireReligion = ref(RELIGION.CATHOLIC);
        let showHungary = ref(false);
        let hungaryReligion = ref(RELIGION.CATHOLIC);
        let showByzantium = ref(false);
        let byzantiumReligion = ref(RELIGION.CATHOLIC);
        let showPortugal = ref(false);
        let portugalReligion = ref(RELIGION.CATHOLIC);
        let showAragon = ref(false);
        let aragonReligion = ref(RELIGION.CATHOLIC);
        let showPapalStates = ref(false);
        let papalStatesReligion = ref(RELIGION.CATHOLIC);
        let showOttoman = ref(false);
        let ottomanReligion = ref(RELIGION.CATHOLIC);
        let showMamluk = ref(false);
        let mamlukReligion = ref(RELIGION.CATHOLIC);
        // victories
        let showVictoryRenaissance = ref(false);
        let showVictoryGlobalization = ref(false);
        let showVictoryImperial = ref(false);
        let showVictoryHoly = ref(false);
        let cardReligion = ref('');

        const showCard = (id, religion) => {
            cardReligion.value = religion ? religion : "ISLAMIC";
            switch(id) {
            case COUNTRY_CODES.ENGLAND:
                showEngland.value = true;
                englandReligion.value = religion;
                break;
            case COUNTRY_CODES.FRANCE:
                showFrance.value = true;
                franceReligion.value = religion;
                break;
            case COUNTRY_CODES.HOLY_ROMAN_EMPIRE:
                showHolyRomanEmpire.value = true;
                holyRomanEmpireReligion.value = religion;
                break;
            case COUNTRY_CODES.HUNGARY:
                showHungary.value = true;
                hungaryReligion.value = religion;
                break;
            case COUNTRY_CODES.BYZANTIUM:
                showByzantium.value = true;
                byzantiumReligion.value = religion;
                break;
            case COUNTRY_CODES.PORTUGAL:
                showPortugal.value = true;
                portugalReligion.value = religion;
                break;
            case COUNTRY_CODES.ARAGON:
                showAragon.value = true;
                aragonReligion.value = religion;
                break;
            case COUNTRY_CODES.PAPAL_STATES:
                showPapalStates.value = true;
                papalStatesReligion.value = religion;
                break;            
            case COUNTRY_CODES.OTTOMAN:
                showOttoman.value = true;
                ottomanReligion.value = religion;
                break;
            case COUNTRY_CODES.MAMLUK:
                showMamluk.value = true;
                mamlukReligion.value = religion;
                break;           
            // victory cards
            case VICTORY_TYPE.RENAISSANCE:
                showVictoryRenaissance.value = true;
                break;
            case VICTORY_TYPE.GLOBALIZATION:
                showVictoryGlobalization.value = true;
                break;
            case VICTORY_TYPE.IMPERIAL:
                showVictoryImperial.value = true;
                break;
            case VICTORY_TYPE.HOLY:
                showVictoryHoly.value = true;
                break;
            default:
                // code block
            }
        };
        const renderCard = (card) => {
            showCard(card.id, card.religion);
        };
        return { 
            showEngland,
            englandReligion,
            showFrance,
            franceReligion,
            showHolyRomanEmpire,
            holyRomanEmpireReligion,
            showHungary,
            hungaryReligion,
            showByzantium,
            byzantiumReligion,
            showPortugal,
            portugalReligion,
            showAragon,
            aragonReligion,
            showPapalStates,
            papalStatesReligion,
            showOttoman,
            ottomanReligion,
            showMamluk,
            mamlukReligion,
            showVictoryRenaissance,
            showVictoryGlobalization,
            showVictoryImperial,
            showVictoryHoly,
            renderCard,
            COUNTRY_CODES,
            VICTORY_TYPE,
            CARD_TYPE,
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
