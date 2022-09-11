<template>
    <img v-if="showPiece" :src="cardSource" class="piece" :style="cardStyle"/>
    <img v-else-if="loadCard" :src="cardSource" class="card" :style="cardStyle"/>
</template>

<script>
import { computed } from 'vue';
import { useCard } from "@/composables/card";
import { CARD_TYPE, RELIGION } from "@/constants/enums";

export default {
    name: "MapCard",

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
        const showPiece = computed(() =>
            props.card.cardType === CARD_TYPE.PIECE && props.showCard);
        const cardSource = computed(() => cardFile(props.card));
        const cardStyle = computed(() => cardDynamicStyle(props.card));
        const loadCard = computed(() => (props.showCard && (props.card.cardReligion !== RELIGION.SECULAR)));
        
        return { cardSource, cardStyle, showPiece, CARD_TYPE, loadCard }
    },
};
</script>
<style lang="scss" scoped>
.card {
    position: absolute;
    height: auto;
    border: 1px #2b2d2f solid;
    border-radius: 5px;
}

.piece {
    position: absolute;
    height: auto;
    border: 1px #2b2d2f solid;
    border-radius: 50%;
}
</style>
