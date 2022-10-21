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
                @click.prevent="showRelated(index)"
            >
                <b-img
                    rounded
                    fluid
                    :src="slide.file"
                    @contextmenu.prevent="openContextMenu"
                />
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
import { ref, computed, defineProps, defineEmits } from "vue";
import ContextMenu from '@/components/generic/ContextMenu';

const props = defineProps({
    id: String,
    width: String,
    slides: Array,
    align: String,
});
const emit = defineEmits(["showVassals"]);

const slideLength = computed(() =>
    props.slides.length ? props.slides.length : -1
);

const carouselId = computed(() =>
    props.width >= 50
        ? `x-carousel-${props.id}`
        : `carousel-${props.id}`
);

const showPreviousIcon = computed(() => slideLength.value > 2);
const showNextIcon = computed(() => slideLength.value > 3);

const previousCard = () => {
    if (slideLength.value !== -1) {
        const firstId = `${props.id}-0`;
        let element = document.getElementById(firstId);
        element.scrollIntoView({ behavior: "smooth" });
    }
};

const nextCard = () => {
    if (slideLength.value !== -1) {
        const lastIndex = props.slides.length - 1;
        const lastId = `${props.id}-${lastIndex}`;
        let element = document.getElementById(lastId);
        element.scrollIntoView({ behavior: "smooth" });
    }
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
        "justify-content": alignment,
        "margin-left": showPreviousIcon.value ? "20px" : "0",
        "margin-right": showNextIcon.value ? "20px" : "0",
    };
});

const cardStyle = computed(() => {
    return {
        width: props.width && props.width > 40
            ? "12rem"
            : "9rem",
    }
});

const limits = computed(() => {
    const dimensions = document
        .getElementById(carouselId.value)
        .getBoundingClientRect();

    return {
        id: carouselId.value,
        top: dimensions.top,
        left: dimensions.left,
        width: dimensions.width,
        max: dimensions.left + dimensions.width,
    };
});

const showRelated = (index) => {
    const cardId = `${props.id}-${index}`;
    const cardDimenssions = document
        .getElementById(cardId)
        .getBoundingClientRect();

    // calculate the dismensions for displaying the vassal to the right or left, depending on the space
    let extendedDimenssions = { top: 0, left: 0 };

    if (cardDimenssions.left + 2 * cardDimenssions.width + 40 > limits.value.max) {
        // if the dimensions exceed the limits, then find the previous card
        const previousId = `${props.id}-${index - 1}`;
        extendedDimenssions = document
            .getElementById(previousId)
            .getBoundingClientRect();
    } else {
        if (index + 1 <= slideLength.value) {
            // if there is still another card, get the other card position
            const nextId = `${props.id}-${index + 1}`;
            extendedDimenssions = document
                .getElementById(nextId)
                .getBoundingClientRect();
        } else {
            extendedDimenssions = {
                left: dimensions.left + 2 * dimensions.width,
                top: dimensions.top,
            };
        }
    }

    const vassals = props.slides[index].vassals;
    const dimensions = {
        cardId: index,
        top: cardDimenssions.top,
        left: cardDimenssions.left,
        width: cardDimenssions.width,
        nextLeft: extendedDimenssions.left,
        nextTop: extendedDimenssions.top,
        vassals,
    };
    emit("showVassals", dimensions);
};

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
    padding: 20px 5px;
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
    margin: auto 0.5rem;
    border-radius: 10px;
    border: solid 1px $sandColor;
    cursor: pointer;
}

.no-scrollbar {
    scrollbar-width: none;
    margin-bottom: 0;
    padding-bottom: 0;
    overflow: hidden;
}

.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.nav-button {
    position: absolute;
    top: 50%;
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
