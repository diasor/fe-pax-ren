<template>
    <div class="carousel-container">
        <agile
            ref="main"
            class="main"
            :options="options1"
            :as-nav-for="asNavFor1"
        >
            <div v-for="(slide, index) in slides" :key="index" class="slide">
                <b-img thumbnail rounded fluid :src="slide" />
            </div>
        </agile>
        <agile ref="thumbnails" :options="options2" :as-nav-for="asNavFor2">
            <div
                v-for="(slide, index) in slides"
                :key="index"
                class="slide slide--thumbnail"
                @click="goToSlide(index)"
            >
                <b-img thumbnail rounded fluid :src="slide" alt="Image 1" />
            </div>

            <!-- navigation buttons -->
            <template v-slot:prevButton>
                <font-awesome-icon icon="fa-chevron-left" />
            </template>
            <template v-slot:nextButton>
                <font-awesome-icon icon="fa-chevron-right" />
            </template>
        </agile>
    </div>
</template>
<script>
import { defineComponent, ref, onMounted } from "vue";
import { VueAgile } from "vue-agile";

export default defineComponent({
    name: "BaseCarousel",
    components: {
        agile: VueAgile,
    },
    setup() {
        const main = ref(null);
        const thumbnails = ref(null);

        const options1 = {
            dots: false,
            fade: true,
            navButtons: false,
        };
        const options2 = {
            autoplay: true,
            centerMode: true,
            dots: false,
            navButtons: false,
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 5,
                    },
                },

                {
                    breakpoint: 1000,
                    settings: {
                        navButtons: true,
                    },
                },
            ],
        };
        let asNavFor1 = ref([]);
        let asNavFor2 = ref([]);

        const options = {
            navButtons: false,
            // autoplay: true,
            // infinite: true,
            initialSlide: 0,
            currentSlide: 0,
            // slidesToShow: 5,

            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        dots: false,
                    },
                },

                {
                    breakpoint: 900,
                    settings: {
                        navButtons: true,
                        dots: true,
                        infinite: false,
                    },
                },
            ],
        };

        const slides = [
            "/images/PR2_West Card20.png",
            "/images/PR2_East Card68.png",
            "/images/PR2_East Card69.png",
            "/images/PR2_East Card70.png",
            "/images/PR2_East Card71.png",
        ];

        onMounted(async () => {
            asNavFor1.value.push(thumbnails.value);
            asNavFor2.value.push(main.value);
        });

        const goToSlide = (index) => {
            thumbnails.value.goTo(index);
        };

        return {
            options,
            slides,
            options1,
            asNavFor1,
            asNavFor2,
            options2,
            main,
            thumbnails,
            goToSlide,
        };
    },
});
</script>

<style lang="scss" scoped>
@import url("https://unpkg.com/vue-agile/dist/VueAgile.css");
@import "./../../assets/colors.scss";

// .agile {
//   width: 25vw !important;

//   &__nav-button {
//     background: transparent;
//     border: none;
//     color: white;
//     cursor: pointer;
//     font-size: 24px;
//     height: 100%;
//     position: absolute;
//     top: 0;
//     transition-duration: 0.3s;
//     width: 80px;
//     &:hover {
//       background-color: rgba(black, 0.5);
//       opacity: 0.5;
//     }
//     &--prev {
//       left: 0;
//     }
//     &--next {
//       right: 0;
//     }
//   }
//   &__dots {
//     bottom: 10px;
//     left: 50%;
//     position: absolute;
//     transform: translateX(-50%);
//   }
//   &__dot {
//     margin: 0 10px;
//     button {
//       background-color: transparent;
//       border: 1px solid white;
//       border-radius: 50%;
//       cursor: pointer;
//       display: block;
//       height: 10px;
//       font-size: 0 !important;
//       line-height: 0;
//       margin: 0;
//       padding: 0;
//       transition-duration: 0.3s;
//       width: 10px;
//     }
//     &--current,
//     &:hover {
//       button {
//         background-color: white;
//       }
//     }
//   }
// }

// slides styles
// lindo
// .slide {
//   display: block;
//   object-fit: cover;
//   width: 10.5rem !important;
//   border-color: black;
//   height: auto;

//   border-width: 1px;
//   border-radius: 5px;
//   margin: 5px;

//   box-shadow: inset 0px 12px 27px 5px $sandColor;
// }

.main {
    margin-bottom: 5px;
}

.agile {
    &__nav-button {
        background: transparent;
        border: none;
        color: #ccc;
        cursor: pointer;
        font-size: 24px;
        transition-duration: 0.3s;

        .thumbnails & {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);

            &--prev {
                left: -45px;
            }
            &--next {
                right: -45px;
            }
        }
        &:hover {
            color: #888;
        }
    }

    &__dot {
        margin: 0 10px;

        button {
            background-color: #eee;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: block;
            height: 10px;
            font-size: 0;
            line-height: 0;
            margin: 0;
            padding: 0;
            transition-duration: 0.3s;
            width: 10px;
        }

        &--current,
        &:hover {
            button {
                background-color: #888;
            }
        }
    }
}

.carousel-container {
    display: flex;
    flex-flow: column;
}

.agile {
    display: flex;
    width: 30vw !important;
    img {
        max-width: 200px;
    }
}

.slide {
    display: flex;
    align-items: center !important;
    justify-content: center !important;
    color: #fff;

    &--thumbnail {
        cursor: pointer;
        height: 100px;
        padding: 0 5px;
        transition: opacity 0.3s;

        &:hover {
            opacity: 0.75;
        }
    }
    img {
        height: 100%;
        object-fit: cover;
        object-position: center;
        width: 100%;
    }
}
</style>
