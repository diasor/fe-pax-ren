<template>
  <div class="tableau-slides" :style="carouselStyle">
    <font-awesome-icon
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
        @click.prevent="goToSlide(index)"
      >
        <b-img rounded fluid :src="slide" alt="Image 1" />
      </div>
    </div>

    <font-awesome-icon
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

  setup(props) {
    const slideLengh = computed(() =>
      props.slides.length ? props.slides.length : -1
    );
    const previousCard = () => {
      if (slideLengh.value !== -1) {
        const firstId = `${props.id}-0`;
        let element = document.getElementById(firstId);
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    const nextCard = () => {
      if (slideLengh.value !== -1) {
        const lastIndex = props.slides.length - 1;
        const lastId = `${props.id}-${lastIndex}`;
        let element = document.getElementById(lastId);
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    const carouselStyle = computed(() => {
      return {
        width: props.width ? `${props.width}vw !important` : "35vw !important",
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
    return {
      previousCard,
      nextCard,
      carouselStyle,
      cardStyle,
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
    right: -15px;
  }
  &:hover {
    color: $navButtonHover;
  }
}
</style>
