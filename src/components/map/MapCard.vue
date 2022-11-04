<template>
    <img v-if="showPiece" :src="cardSource" class="piece" :style="cardStyle" />
    <img v-if="showBorder" :src="cardSource" class="piece" :style="cardStyle" />
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
        :imageType="imageType"
        :showModal="showModalCard"
        :cardId="props.card.cardId"
        @closeModal="closeModal"
    />
</template>

<script setup>
import { defineProps, ref, computed } from "vue";
import MapCardModal from "@/components/map/MapCardModal.vue";
import { useCard } from "@/composables/card";
import { CARD_TYPE } from "@/constants/enums";

const props = defineProps ({
    showCard: Boolean,
    card: {
            cardId: "",
            cardType: "",
            cardReligion: "",
            pieceId: "",
            cardRegion: "",
            cardMarkerId: "",
            cardPosition: "",
            cardGovernment: "",
        },
});

const { cardFile, cardDynamicStyle } = useCard();
let showModalCard = ref(false);

const showPiece = computed(
    () => props.card.cardType === CARD_TYPE.PIECE && props.showCard
);
const showBorder = computed(
    () =>
        (props.card.cardType === CARD_TYPE.BORDER ||
            props.card.cardType === CARD_TYPE.PIRATE) &&
        props.showCard
);
const cardSource = computed(() => cardFile(props.card));
const cardStyle = computed(() => cardDynamicStyle(props.card));
const loadCard = computed(() =>
    props.showCard &&
    (
        props.card.cardType === CARD_TYPE.KINGDOM ||
        props.card.cardType === CARD_TYPE.EMPIRE ||
        props.card.cardType === CARD_TYPE.MARKET_CARD ||
        props.card.cardType === CARD_TYPE.VICTORY
    )
);
const imageType = computed(() =>
    props.showCard && props.card.cardType === CARD_TYPE.VICTORY
        ? "square"
        : "rectangular"
);

const displayModal = () => {
    if (props.card) {
        showModalCard.value = true;
    }
};

const closeModal = () => {
    showModalCard.value = false;
};
</script>
<style lang="scss" scoped>
.card {
    position: absolute;
    height: auto;
    border: 1px #2b2d2f solid;
    border-radius: 5px;
    cursor: url("~@/assets/images/magnifying-glass.svg"), auto !important;
}

.piece {
    position: absolute;
    height: auto;
    border-radius: 50%;
}
</style>
