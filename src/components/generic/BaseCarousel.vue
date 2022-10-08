<template>
    <div :id="carouselId" class="tableau-slides" :style="carouselStyle">
        <font-awesome-icon
            v-if="showPreviousIcon"
            icon="fa-circle-chevron-left"
            class="nav-button nav-button__prev"
            @click.prevent="previousCard"
        />

        <div class="carousel full no-scrollbar" :style="cardStyle">
            <div
                v-for="(slide, index) in slides"
                :key="index"
                :id="`${id}-${index}`"
                class="item"
                @click.prevent="showRelated(index)"
            >
                <b-img rounded fluid :src="slide" />
            </div>
        </div>

        <font-awesome-icon
            v-if="showNextIcon"
            icon="fa-circle-chevron-right"
            class="nav-button nav-button__next"
            @click.prevent="nextCard"
        />
    </div>
</template>
<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
    name: "BaseCarousel",

    props: {
        id: {
            type: String,
            default: "",
        },
        width: {
            type: String,
            default: "35vw",
        },
        slides: {
            type: Array,
            default: () => [],
        },
    },

    emits: ["showVassals"],

    setup(props, context) {
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

        const carouselStyle = computed(() => {
            return {
                width: props.width
                    ? `${props.width}vw !important`
                    : "35vw !important",
            };
        });

        const cardStyle = computed(() => {
            const width = parseInt(props.width, 10);
            if (width > 80) {
                return {
                    "grid-auto-columns": "calc(24% - 60px)",
                };
            }
            if (width > 50) {
                return {
                    "grid-auto-columns": "calc(30% - 60px)",
                };
            }
            return {
                "grid-auto-columns": "calc(40% - 40px)",
            };
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

            console.log("LIMITS", limits.value);
            console.log("origial dimensions ", cardDimenssions);
            // calculate the dismensions for displaying the vassal to the right or left, depending on the space
            let extendedDimenssions = { top: 0, left: 0 };

            if (
                cardDimenssions.left + 2 * cardDimenssions.width + 40 >
                limits.value.max
            ) {
                console.log(" ENTRA EN 1");
                // if the dimensions exceed the limits, then find the previous card
                const previousId = `${props.id}-${index - 1}`;
                extendedDimenssions = document
                    .getElementById(previousId)
                    .getBoundingClientRect();
                console.log("EXCEEDS dimensions ", extendedDimenssions);
            } else {
                console.log(" ENTRA EN 2");
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
            const dimensions = {
                cardId: index,
                top: cardDimenssions.top,
                left: cardDimenssions.left,
                width: cardDimenssions.width,
                nextLeft: extendedDimenssions.left,
                nextTop: extendedDimenssions.top,
            };
            context.emit("showVassals", dimensions);
        };

        const vassal = "/images/Empire card17.png";
        return {
            carouselId,
            previousCard,
            showPreviousIcon,
            showNextIcon,
            nextCard,
            carouselStyle,
            cardStyle,
            showRelated,
            vassal,
        };
    },
});
</script>

<style lang="scss" scoped>
@import url("https://unpkg.com/vue-agile/dist/VueAgile.css");
@import "./../../assets/colors.scss";
.tableau-slides {
    padding: 20px 5px;
    position: relative;
}

.carousel {
    display: grid;
    grid-gap: 10px;
    grid-template-rows: minmax(150px, 1fr);
    grid-auto-flow: column;

    overflow-x: scroll;
    scroll-snap-type: x proximity;
    padding-bottom: calc(0.75 * 20px);
    margin-bottom: calc(-0.25 * 20px);
}

.carousel > div,
.item {
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-top: 40px;
    margin-bottom: 40px;
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
        left: -20px;
    }
    &__next {
        right: -20px;
    }
    &:hover {
        color: $navButtonHover;
    }
}
</style>
