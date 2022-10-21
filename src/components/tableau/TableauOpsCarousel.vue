<template>
    <div :id="carouselId" class="tableau-slides" :style="mainContainerStyle">
        <font-awesome-icon
            v-if="showPreviousIcon"
            icon="fa-circle-chevron-left"
            class="nav-button nav-button__prev"
            @click.prevent="previousCard"
        />

        <div class="carousel no-scrollbar" :style="carouselStyle">
            <div
                v-for="(slide, index) in slides"
                :key="index"
                :id="`${id}-${index}`"
                class="card"
                :style="cardStyle"
            >
                <div class="card__image">
                    <b-img
                        rounded
                        fluid
                        :src="slide.file"
                        @contextmenu.prevent="openContextMenu"
                    />
                </div>

                <div class="card__vassals" :style="vassalsStyle">
                    <tableau-ops-vassals
                        :cardId="slide.cardId"
                        :vassals="slide.vassals"
                        :showOneMarket="showOneMarket"
                    />
                </div>
            </div>

        </div>

        <font-awesome-icon
            v-if="showNextIcon"
            icon="fa-circle-chevron-right"
            class="nav-button nav-button__next"
            @click.prevent="nextCard"
        />
    </div>

    <context-menu ref="menu" :itemList="cardMenu" />
</template>

<script setup>
import { defineProps, ref, computed } from "vue";
import ContextMenu from '@/components/generic/ContextMenu';
import TableauOpsVassals from "@/components/tableau/TableauOpsVassals.vue";

const props = defineProps({
    id: String,
    width: String,
    slides: Array,
    align: String,
    showOneMarket: Boolean,
});

let selectedCard = ref(0);
const carouselId = computed(() =>
    props.width >= 50
        ? `x-carousel-${props.id}`
        : `carousel-${props.id}`
);

const slideLength = computed(() => props.slides.length ? props.slides.length : -1);
const showPreviousIcon = computed(() => selectedCard.value > 0);
const showNextIcon = computed(() => slideLength.value > 0 && selectedCard.value < slideLength.value - 1);

const previousCard = () => {
    if (slideLength.value > 0) {
        selectedCard.value = selectedCard.value - 1;
        goToSelectedCard();
    }
};

const nextCard = () => {
    if (slideLength.value > 0) {
        selectedCard.value = selectedCard.value + 1;
        goToSelectedCard();
    }
};

const goToSelectedCard = () => {
    const nextCardId = `${props.id}-${selectedCard.value}`;
    const nextCard = document.getElementById(nextCardId);
    nextCard.scrollIntoView({ behavior: "smooth" });
};

const mainContainerStyle = computed(() => {
    return {
        width: props.width
            ? `${props.width}vw !important`
            : "35vw !important",
    };
});

const carouselStyle = computed(() => {
    let alignment = "flex-start";
    if (slideLength.value < 3 && props.align === "flex-end" && props.width < 40) {
        alignment = "flex-end";
    } else if (props.align === "center") {
        alignment = props.align;
    } 
    return {
        justifyContent: alignment,
        marginLeft: showPreviousIcon.value ? "20px" : "0",
        marginRight: showNextIcon.value ? "20px" : "0",
    };
});

const cardStyle = computed(() => {
    return {
        width: props.width && props.width > 40
            ? "12.4rem"
            : "10rem",
    }
});

const vassalsStyle = computed(() => {
    return {
        height: props.showOneMarket ? "10rem" : "12.5rem",
    }
});

let showContextMenu = ref(false);
const cardMenu = [
    { id: "Sell card", event: "sellCard" },
    { id: "Zoom on card", event: "zoom" }
];

const menu = ref(null);
const openContextMenu = (e) => {
    showContextMenu.value = true;
    menu.value?.openMenu(e);

};
</script>

<style lang="scss" scoped>
@import url("https://unpkg.com/vue-agile/dist/VueAgile.css");
@import "./../../assets/colors.scss";
.tableau-slides {
    padding: 8px 5px;
    position: relative;
}

.carousel {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}

.card {
    flex: 0 0 auto;
    border-radius: 10px;
    background-color: transparent;
    border: transparent;

    cursor: pointer;

    flex-direction: columns;
    &__image {
        margin-bottom: 3.1rem;
        > img {
            max-height: 290px;
        }
    }
    &__vassals {
        background-color: transparent;
        overflow-y: auto;
        padding: 0 2px;
    }
}

.nav-button {
    position: absolute;
    top: 30%;
    transform: translateY(-50%);

    background: transparent;
    border: none;
    color: $navButton;
    cursor: pointer;
    font-size: 24px;
    transition-duration: 0.3s;

    &__prev {
        left: 0;
    }
    &__next {
        right: 0;
    }
    &:hover {
        color: $navButtonHover;
    }
}
</style>
