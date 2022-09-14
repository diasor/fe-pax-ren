<template>
    <img v-if="showPiece" :src="cardSource" class="piece" :style="cardStyle"/>
    <img
        v-else-if="loadCard"
        :src="cardSource"
        class="card"
        :style="cardStyle"
        @click="displayModal"
    />
    <map-card-modal
        v-if="showModalCard"
        :imageName="cardSource"
        :showModal="showModalCard"
        @closeModal="closeModal"
    />
</template>

<script>
import { ref, computed } from 'vue';
import MapCardModal from "@/components/map/MapCardModal.vue";
import { useCard } from "@/composables/card";
import { CARD_TYPE, RELIGION } from "@/constants/enums";

export default {
    name: "MapCard",

    components: { MapCardModal },

    props: {
        showCard: {
            type: Boolean,
            default: false,
        },
        card: {
            cardId: "",
            cardType: "",
            cardReligion: "",
            pieceId: "",
            cardRegion: "",
            cardMarkerId: "",
        }
    },

    setup(props) {
        const { cardFile, cardDynamicStyle } = useCard();
        let showModalCard = ref(false);

        const showPiece = computed(() =>
            props.card.cardType === CARD_TYPE.PIECE && props.showCard);
        const cardSource = computed(() => cardFile(props.card));
        const cardStyle = computed(() => cardDynamicStyle(props.card));
        const loadCard = computed(() => (props.showCard && (props.card.cardReligion !== RELIGION.SECULAR)));
        
        const displayModal = () => {
            if (props.card) {
                showModalCard.value = true;
                console.log("opening card", cardSource.value);  
            }
        };

        const closeModal = () => {
            showModalCard.value = false;
        };

        return { cardSource, cardStyle, showPiece, loadCard, showModalCard, displayModal, closeModal }
    },
};
</script>
<style lang="scss" scoped>
.card {
    position: absolute;
    height: auto;
    border: 1px #2b2d2f solid;
    border-radius: 5px;
    cursor: url('~@/assets/images/magnifying-glass.svg'), auto !important;
}

.piece {
    position: absolute;
    height: auto;
    border: 1px #2b2d2f solid;
    border-radius: 50%;
}
</style>
