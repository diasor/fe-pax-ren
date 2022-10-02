<template>
  <div class="tableau-backdrop" @click="closeSidebarPanel" v-if="showPanel" />
  <slide-in-out entry="left" exit="left" :duration="800" appear>
    <div v-if="showPanel" class="tableau-container">
      <div class="card-title">
        <div class="banker">
          <div class="banker__icon">
            <b-img width="60px" :src="bankerData.shield" :alt="title" />
          </div>
          <div class="banker__title">
            <label>{{ title }}</label>
          </div>
        </div>
        <div class="close" @click="closeTableau">
          <span class="close">+</span>
        </div>
      </div>
      <!-- main tableau grid -->
      <div class="card-grid" :style="cardGridStyle">
        <div v-if="!hideWest" class="card-west-gallery" :style="cardWestStyle">
          <tableau-ops-market
            id="west"
            :slides="westCards"
            :width="carouselWidth"
            :showOneMarket="showOneMarket"
            @toggleWest="toggleButtonWest"
          />
        </div>
        <div class="banker-container" v-if="!showOneMarket">
          <b-img
            :src="bankerData.image"
            rounded
            center
            class="object-center"
            width="260px"
            :alt="title"
          />
        </div>
        <div v-if="!hideEast" class="card-east-gallery" :style="cardEastStyle">
          <tableau-ops-market
            id="east"
            :slides="eastCards"
            :width="carouselWidth"
            :showOneMarket="showOneMarket"
            @toggleEast="toggleButtonEast"
          />
        </div>
      </div>
    </div>
  </slide-in-out>
</template>

<script>
import { computed, ref } from "vue";
import { forEach } from "lodash";
import { SlideInOut } from "vue3-transitions";
import TableauOpsMarket from "./TableauOpsMarket.vue";
import { useStore } from "vuex";
import { useCard } from "@/composables/card";
import { CARD_TYPE, REGION } from "@/constants/enums";

export default {
  name: "TableauSlideBar",
  components: { SlideInOut, TableauOpsMarket },
  props: {
    showPanel: {
      type: Boolean,
      default: false,
    },
    banker: {
      type: String,
      required: true,
    },
  },

  emits: ["closeTableau"],

  setup(props, context) {
    const store = useStore();
    const bankerData = computed(() =>
      store.getters["bankers/getBanker"](props.banker)
    );
    const title = computed(() => `${bankerData.value.name}'s tableau ops`);

    let hideEast = ref(false);
    let hideWest = ref(false);

    const showOneMarket = computed(() => hideEast.value || hideWest.value);
    const carouselWidth = computed(() => (showOneMarket.value ? "85" : "37"));

    const { cardFile } = useCard();

    const westCards = computed(() =>
      buildCardSet(bankerData.value.full.westTableau, REGION.WEST)
    );

    const eastCards = computed(() =>
      buildCardSet(bankerData.value.full.eastTableau, REGION.EAST)
    );

    const buildCardSet = (tableau, cardRegion) => {
      let cards = [];
      forEach(tableau, (item) => {
        const cardType =
          item.cardType === "KINGDOM" ? CARD_TYPE.EMPIRE : item.cardType;
        const card = {
          cardId: item.cardId,
          cardType,
          cardRegion,
          cardName: item.cardName,
        };
        cards.push(cardFile(card));
      });

      return cards;
    };

    const toggleButtonWest = () => {
      hideEast.value = !hideEast.value;
    };

    const toggleButtonEast = () => {
      hideWest.value = !hideWest.value;
    };

    const closeTableau = () => {
      context.emit("closeTableau", true);
    };

    const cardGridStyle = computed(() => {
      return {
        "grid-template-columns": showOneMarket.value ? "1fr" : "1fr 0.2fr 1fr",
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

    return {
      title,
      bankerData,
      closeTableau,
      eastCards,
      westCards,
      toggleButtonWest,
      toggleButtonEast,
      hideWest,
      hideEast,
      showOneMarket,
      cardGridStyle,
      cardWestStyle,
      carouselWidth,
      cardEastStyle,
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
  font-family: "Lobster Two" !important;
}

.banker {
  display: flex;
  justify-content: space-between;
  width: 90%;

  &__icon {
    display: flex;
    justify-content: center;
    margin: auto 1rem;
    padding: 1rem 0;
  }

  &__title {
    display: flex;
    color: $buttonColor !important;
    font-size: 3rem !important;
    margin: 1rem auto;
  }
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
  display: grid;
  grid-template-rows: 1fr;
  grid-column-gap: "0px";
  grid-row-gap: "0px";
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
