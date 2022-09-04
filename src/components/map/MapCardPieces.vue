<template>
    <map-card :showCard="londonCard.showCard" :card="londonCard" />
    <map-card :showCard="bordeauxCard.showCard" :card="bordeauxCard" />
    <map-card :showCard="parisCard.showCard" :card="parisCard" />
    <map-card :showCard="brugesCard.showCard" :card="brugesCard" />
    <map-card :showCard="lyonCard.showCard" :card="lyonCard" />
    <map-card :showCard="lubeckCard.showCard" :card="lubeckCard" />
    <map-card :showCard="novgorodCard.showCard" :card="novgorodCard" />
    <map-card :showCard="nurnbergCard.showCard" :card="nurnbergCard" />
    <map-card :showCard="viennaCard.showCard" :card="viennaCard" />
    <map-card :showCard="budaCard.showCard" :card="budaCard" />
    <map-card :showCard="varnaCard.showCard" :card="varnaCard" />
    <map-card :showCard="tanaCard.showCard" :card="tanaCard" />
    <map-card :showCard="caffaCard.showCard" :card="caffaCard" />
    <map-card :showCard="trebizondCard.showCard" :card="trebizondCard" />
    <map-card :showCard="toledoCard.showCard" :card="toledoCard" />
    <map-card :showCard="granadaCard.showCard" :card="granadaCard" />
    <map-card :showCard="spiceIslandCard.showCard" :card="spiceIslandCard" />
    <map-card :showCard="valenciaCard.showCard" :card="valenciaCard" />
    <map-card :showCard="timbuktuCard.showCard" :card="timbuktuCard" />
    <map-card :showCard="veniceCard.showCard" :card="veniceCard" />
    <map-card :showCard="venice2Card.showCard" :card="venice2Card" />
    <map-card :showCard="constantinopleCard.showCard" :card="constantinopleCard" />
    <map-card :showCard="constantinople2Card.showCard" :card="constantinople2Card" />
    <map-card :showCard="constantinople3Card.showCard" :card="constantinople3Card" />
    <map-card :showCard="modonCard.showCard" :card="modonCard" />
    <map-card :showCard="rhodesCard.showCard" :card="rhodesCard" />
    <map-card :showCard="cairoCard.showCard" :card="cairoCard" />
    <map-card :showCard="cyprusCard.showCard" :card="cyprusCard" />
    <map-card :showCard="redSeaCard.showCard" :card="redSeaCard" />
    <map-card :showCard="algiersCard.showCard" :card="algiersCard" />
</template>
<script>
import { ref, onMounted } from 'vue';
import MapCard from "@/components/map/MapCard.vue";
import { CITY_NAMES } from "@/constants/enums";

export default {
    name: "MapCardPieces",
    components: {
        MapCard
    },
    props: {
        showCard: {
            type: Boolean,
            default: false,
        },
        card: {},
    },
    setup(props){
        let londonCard = ref({});
        let bordeauxCard = ref({});
        let parisCard = ref({});
        let brugesCard = ref({});
        let lyonCard = ref({});
        let lubeckCard = ref({});
        let novgorodCard = ref({});
        let nurnbergCard = ref({});
        let viennaCard = ref({});
        let budaCard = ref({});
        let varnaCard = ref({});
        let tanaCard = ref({});
        let caffaCard = ref({});
        let trebizondCard = ref({});
        let toledoCard = ref({});
        let granadaCard = ref({});
        let spiceIslandCard = ref({});
        let valenciaCard = ref({});
        let timbuktuCard = ref({});
        let papalStatesCard = ref({});
        let veniceCard = ref({});
        let venice2Card = ref({});
        let constantinopleCard = ref({});
        let constantinople2Card = ref({});
        let constantinople3Card = ref({});
        let modonCard = ref({});
        let rhodesCard = ref({});
        let cyprusCard = ref({});
        let cairoCard = ref({});
        let redSeaCard = ref({});
        let algiersCard = ref({});

        onMounted(() => {
            switch(props.card.cardId) {
            case CITY_NAMES.LONDON:
                londonCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.BORDEAUX:
                bordeauxCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.BRUGES:
                brugesCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.PARIS:
                parisCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.LYON:
                lyonCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.LUBECK:
                lubeckCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.NOVGOROD:
                novgorodCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.NURNBERG:
                nurnbergCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.VIENNA:
                viennaCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.BUDA:
                budaCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.VARNA:
                varnaCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.TANA:
                tanaCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.CAFFA:
                caffaCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.TREBIZOND:
                trebizondCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.TOLEDO:
                toledoCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.GRANADA:
                granadaCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.SPICE_ISLANDS:
                spiceIslandCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.VALENCIA:
                valenciaCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.ALGIERS:
                algiersCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.PAPAL_STATES:
                papalStatesCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.TIMBUKTU:
                timbuktuCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.VENICE:
                veniceCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.VENICE_2:
                venice2Card.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.CONSTANTINOPLE:
                constantinopleCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.CONSTANTINOPLE_2:
                constantinople2Card.value = {
                    ...props.card,
                    showCard: true,
                };
                break;                     
            case CITY_NAMES.CONSTANTINOPLE_3:
                constantinople3Card.value = {
                    ...props.card,
                    showCard: true,
                };
                break;             
            case CITY_NAMES.MODON:
                modonCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.RHODES:
                rhodesCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.CYPRUS:
                cyprusCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.CAIRO:
                cairoCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            case CITY_NAMES.RED_SEA:
                redSeaCard.value = {
                    ...props.card,
                    showCard: true,
                };
                break;
            default:
                // code block
             }      
        });

        return { 
            londonCard,
            bordeauxCard,
            parisCard,
            brugesCard,
            lyonCard,
            lubeckCard,
            novgorodCard,
            nurnbergCard,
            viennaCard,
            budaCard,
            varnaCard,
            tanaCard,
            caffaCard,
            trebizondCard,
            toledoCard,
            granadaCard,
            spiceIslandCard,
            valenciaCard,
            timbuktuCard,
            papalStatesCard,
            veniceCard,
            venice2Card,
            constantinopleCard,
            constantinople2Card,
            constantinople3Card,
            modonCard,
            rhodesCard,
            cyprusCard,
            cairoCard,
            redSeaCard,
            algiersCard,
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
