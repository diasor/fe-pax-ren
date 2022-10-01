<template>
  <div class="tableau-backdrop" @click="closeSidebarPanel" v-if="showPanel" />
  <slide-in-out entry="left" exit="left" :duration="800" appear>
    <div v-if="showPanel" class="tableau-container">
      <div class="card-title">
        <div class="title">
          <label>{{ title }}</label>
        </div>
        <div class="close" @click="closeTableau">
          <span class="close">+</span>
        </div>
      </div>
      <!-- main tableau grid -->
      <div class="card-grid" :style="cardGridStyle">
        <div v-if="!hideWest" class="card-west-gallery" :style="cardWestStyle">
          <base-carousel
            :slides="westCardSlides"
            carouselId="west"
            :width="carouselWidth"
          />
          <base-button
            :text="westButtonTitle"
            :color="westButtonColor"
            :fontColor="westFontColor"
            @clickButton="showWest"
          />
        </div>
        <div class="banker-container" v-if="!showOneMarket">
          <b-img
            :src="bankerImage"
            rounded
            center
            class="object-center"
            width="260px"
            :alt="title"
          />
        </div>
        <div v-if="!hideEast" class="card-east-gallery" :style="cardEastStyle">
          <base-carousel
            :slides="eastCardSlides"
            carouselId="east"
            :width="carouselWidth"
          />
          <base-button
            :text="eastButtonTitle"
            :color="eastButtonColor"
            :fontColor="eastFontColor"
            @clickButton="showEast"
          />
        </div>
      </div>
    </div>
  </slide-in-out>
</template>

<script>
import { computed, ref } from "vue";
import { SlideInOut } from "vue3-transitions";
import BaseCarousel from "@/components/generic/BaseCarousel.vue";
import BaseButton from "@/components/generic/BaseButton.vue";
import { useStore } from "vuex";

export default {
  name: "TableauSlideBar",
  components: { SlideInOut, BaseCarousel, BaseButton },
  props: {
    showPanel: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["closeTableau"],

  setup(_, context) {
    const bankerImage = "/images/PR2_punchout_playerboard_Blue.png";
    const westButtonColor = "#e9e7db";
    const westFontColor = "#4e4e49";
    const eastButtonColor = "#171717";
    const eastFontColor = "#c0c0c0";

    const store = useStore();
    const fugger = computed(() => store.getters["bankers/getFugger"]);
    const title = computed(() => `${fugger.value.name}'s tableau ops`);

    let hideEast = ref(false);
    let hideWest = ref(false);

    const showOneMarket = computed(() => hideEast.value || hideWest.value);

    const eastCardSlides = [
      "/images/PR2_East Card19.png",
      "/images/PR2_East Card21.png",
      "/images/PR2_East Card22.png",
      "/images/PR2_East Card23.png",
      "/images/PR2_East Card24.png",
    ];

    const westCardSlides = [
      "/images/PR2_West Card20.png",
      "/images/PR2_East Card68.png",
      "/images/PR2_East Card69.png",
      "/images/PR2_East Card70.png",
      "/images/PR2_East Card71.png",
    ];

    const closeTableau = () => {
      context.emit("closeTableau", true);
    };

    const eastButtonTitle = computed(() =>
      showOneMarket.value ? "Tableau" : "East"
    );
    const westButtonTitle = computed(() =>
      showOneMarket.value ? "Tableau" : "West"
    );
    const showWest = () => {
      hideEast.value = !hideEast.value;
    };

    const showEast = () => {
      hideWest.value = !hideWest.value;
    };

    const cardGridStyle = computed(() => {
      return {
        display: "grid",
        "grid-template-columns": showOneMarket.value ? "1fr" : "1fr 0.3fr 1fr",
        "grid-template-rows": "1fr",
        "grid-column-gap": "0px",
        "grid-row-gap": "0px",
      };
    });

    const cardWestStyle = computed(() => {
      if (hideEast.value) {
        return {
          "justify-self": "center",
        };
      }
      return {
        "justify-self": "end",
      };
    });

    const cardEastStyle = computed(() => {
      if (hideWest.value) {
        return {
          "justify-self": "center",
        };
      }
      return {
        "justify-self": "start",
      };
    });

    const carouselWidth = computed(() =>
      hideEast.value || hideWest.value ? "85" : "37"
    );

    return {
      bankerImage,
      fugger,
      title,
      closeTableau,
      eastCardSlides,
      westCardSlides,
      eastButtonColor,
      eastFontColor,
      westButtonColor,
      westFontColor,
      showWest,
      showEast,
      hideWest,
      hideEast,
      showOneMarket,
      cardGridStyle,
      cardWestStyle,
      carouselWidth,
      cardEastStyle,
      eastButtonTitle,
      westButtonTitle,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./../../assets/colors.scss";

.tableau-backdrop {
  background-color: $backdropColor;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.tableau-container {
  overflow-y: auto;
  background: url("./../../../public/images/card-background.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  left: 3%;
  top: 2%;
  width: 95vw;
  height: 98vh;
  z-index: 999;
  border-radius: 20px !important;

  display: flex;
  flex-flow: column;
  align-content: center;
  justify-content: flex-start;
}

.card-title {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  font-family: "Mrs_Sheppards" !important;
}

.title {
  display: flex;
  width: 90%;
  margin: 1rem auto;
  justify-content: center;
  color: $buttonColor !important;
  font-size: 3rem !important;
}

.close {
  display: flex;
  justify-content: flex-end;
  align-self: center;
  width: 10%;
  overflow: hidden;

  span {
    padding-right: 60px !important;
    font-size: 3rem;
    font-weight: 600;
    display: inline-block;
    transform: rotate(45deg);
    color: $buttonColor;
    cursor: pointer;
  }
}

.card-grid {
  align-self: center;
  justify-content: center;
  padding: 0;
}

.card-west-gallery {
  grid-area: 1 / 1 / 2 / 2;
  align-self: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
}

.banker-container {
  grid-area: 1 / 2 / 2 / 3;
}

.card-east-gallery {
  grid-area: 1 / 3 / 2 / 4;
  align-self: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
}
</style>
