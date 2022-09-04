<template>
    <img v-if="showPiece" :src="cardSource" class="piece" :style="cardStyle"/>
    <img v-else-if="showCard" :src="cardSource" class="card" :style="cardStyle"/>
</template>

<script>
import { computed } from 'vue';
import { useCard } from "@/composables/card";
import { CARD_TYPE } from "@/constants/enums";

export default {
    name: "MapCard",

    props: {
        showCard: {
            type: Boolean,
            default: false,
        },
        card: {
            cardId: '',
            cardType: '',
            cardReligion: '',
            pieceId: '',
        }
    },

    setup(props) {
        const { cardFile, cardDynamicStyle } = useCard();
        const showPiece = computed(() =>
            props.card.cardType === CARD_TYPE.PIECE && props.showCard);
        const cardSource = computed(() =>
            cardFile(props.card.cardId, props.card.cardReligion, props.card.cardType, props.card.pieceId));
        const cardStyle = computed(() => cardDynamicStyle(props.card.cardId));
        return { cardSource, cardStyle, showPiece, CARD_TYPE }
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
