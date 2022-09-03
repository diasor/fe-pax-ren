<template>
    <img v-if="showCard" :src="cardSource" class="card" :style="cardStyle"/>
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
        cardId: {
            type: String,
            default: '',
        },
        cardType: {
            type: String,
            default: CARD_TYPE.KINGDOM,
        },
        cardReligion: {
            type: String,
            default: '',
        },
    },

    setup(props){
        const { cardFile, cardDynamicStyle } = useCard();
        const cardSource = computed(() =>  cardFile(props.cardId, props.cardReligion, props.cardType));
        const cardStyle = computed(() => cardDynamicStyle(props.cardId));
        return { cardSource, cardStyle, CARD_TYPE }
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
</style>
