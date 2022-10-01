<template>
  <map-card :showCard="showBorder1" :card="border1Card" />
  <map-card :showCard="showBorder2" :card="border2Card" />
  <map-card :showCard="showBorder3" :card="border3Card" />
  <map-card :showCard="showBorder4" :card="border4Card" />
  <map-card :showCard="showBorder5" :card="border5Card" />
  <map-card :showCard="showBorder6" :card="border6Card" />
  <map-card :showCard="showBorder7" :card="border7Card" />
  <map-card :showCard="showBorder8" :card="border8Card" />
  <map-card :showCard="showBorder9" :card="border9Card" />
  <map-card :showCard="showBorder10" :card="border10Card" />
  <map-card :showCard="showBorder11" :card="border11Card" />
  <map-card :showCard="showBorder12" :card="border12Card" />
  <map-card :showCard="showBorder13" :card="border13Card" />
</template>
<script>
import { ref, computed, watch } from "vue";
import MapCard from "@/components/map/MapCard.vue";
import { useStore } from "vuex";
import { CARD_TYPE, CARD_POSITION } from "@/constants/enums";

export default {
  name: "MapCardBorders",
  components: { MapCard },
  setup() {
    const store = useStore();
    const border1 = computed(() => store.getters["borders/getBorder1"]);
    const border2 = computed(() => store.getters["borders/getBorder2"]);
    const border3 = computed(() => store.getters["borders/getBorder3"]);
    const border4 = computed(() => store.getters["borders/getBorder4"]);
    const border5 = computed(() => store.getters["borders/getBorder5"]);
    const border6 = computed(() => store.getters["borders/getBorder6"]);
    const border7 = computed(() => store.getters["borders/getBorder7"]);
    const border8 = computed(() => store.getters["borders/getBorder8"]);
    const border9 = computed(() => store.getters["borders/getBorder9"]);
    const border10 = computed(() => store.getters["borders/getBorder10"]);
    const border11 = computed(() => store.getters["borders/getBorder11"]);
    const border12 = computed(() => store.getters["borders/getBorder12"]);
    const border13 = computed(() => store.getters["borders/getBorder13"]);

    const refreshBorders = computed(
      () => store.getters["borders/getRefreshBorders"]
    );

    let showBorder1 = ref(false);
    let border1Card = ref({
      cardId: "",
      cardType: CARD_TYPE.BORDER,
      pieceId: "",
      cardPosition: CARD_POSITION.HORIZONTAL,
    });
    let showBorder2 = ref(false);
    let border2Card = ref({
      cardId: "",
      cardType: CARD_TYPE.BORDER,
      pieceId: "",
      cardPosition: CARD_POSITION.HORIZONTAL,
    });
    let showBorder3 = ref(false);
    let border3Card = ref({
      cardId: "",
      cardType: CARD_TYPE.BORDER,
      pieceId: "",
      cardPosition: CARD_POSITION.HORIZONTAL,
    });
    let showBorder4 = ref(false);
    let border4Card = ref({
      cardId: "",
      cardType: CARD_TYPE.BORDER,
      pieceId: "",
      cardPosition: CARD_POSITION.HORIZONTAL,
    });
    let showBorder5 = ref(false);
    let border5Card = ref({
      cardId: "",
      cardType: CARD_TYPE.BORDER,
      pieceId: "",
      cardPosition: CARD_POSITION.HORIZONTAL,
    });
    let showBorder6 = ref(false);
    let border6Card = ref({
      cardId: "",
      cardType: CARD_TYPE.BORDER,
      pieceId: "",
      cardPosition: CARD_POSITION.HORIZONTAL,
    });
    let showBorder7 = ref(false);
    let border7Card = ref({
      cardId: "",
      cardType: CARD_TYPE.BORDER,
      pieceId: "",
      cardPosition: CARD_POSITION.HORIZONTAL,
    });
    let showBorder8 = ref(false);
    let border8Card = ref({
      cardId: "",
      cardType: CARD_TYPE.BORDER,
      pieceId: "",
      cardPosition: CARD_POSITION.HORIZONTAL,
    });
    let showBorder9 = ref(false);
    let border9Card = ref({
      cardId: "",
      cardType: CARD_TYPE.BORDER,
      pieceId: "",
      cardPosition: CARD_POSITION.HORIZONTAL,
    });
    let showBorder10 = ref(false);
    let border10Card = ref({
      cardId: "",
      cardType: CARD_TYPE.BORDER,
      pieceId: "",
      cardPosition: CARD_POSITION.HORIZONTAL,
    });
    let showBorder11 = ref(false);
    let border11Card = ref({
      cardId: "",
      cardType: CARD_TYPE.BORDER,
      pieceId: "",
      cardPosition: CARD_POSITION.HORIZONTAL,
    });
    let showBorder12 = ref(false);
    let border12Card = ref({
      cardId: "",
      cardType: CARD_TYPE.BORDER,
      pieceId: "",
      cardPosition: CARD_POSITION.HORIZONTAL,
    });
    let showBorder13 = ref(false);
    let border13Card = ref({
      cardId: "",
      cardType: CARD_TYPE.BORDER,
      pieceId: "",
      cardPosition: CARD_POSITION.HORIZONTAL,
    });

    const isPirate = (pieceId) => pieceId.includes("PIRATE");
    const buildBorder = (border, position) => {
      const fullBorder = {
        ...border.value,
        cardId: border.value.borderName,
        pieceId: border.value.occupiedBy,
        cardType: CARD_TYPE.BORDER,
      };
      if (isPirate(border.value.occupiedBy)) {
        fullBorder.cardId = `${border.value.borderName}_PIRATE`;
        fullBorder.cardPosition = position;
        fullBorder.cardType = CARD_TYPE.PIRATE;
      }
      return fullBorder;
    };

    watch(refreshBorders, (refreshBorders) => {
      if (refreshBorders) {
        // border 1
        border1Card.value = buildBorder(border1, CARD_POSITION.VERTICAL);
        showBorder1.value = border1.value.occupiedBy !== "FREE";

        // border 2
        border2Card.value = buildBorder(border2, CARD_POSITION.HORIZONTAL);
        showBorder2.value = border2.value.occupiedBy !== "FREE";

        // border 3
        border3Card.value = buildBorder(border3, CARD_POSITION.VERTICAL);
        showBorder3.value = border3.value.occupiedBy !== "FREE";

        // border 4
        border4Card.value = buildBorder(border4, CARD_POSITION.HORIZONTAL);
        showBorder4.value = border4.value.occupiedBy !== "FREE";

        // border 5
        border5Card.value = buildBorder(border5, CARD_POSITION.VERTICAL);
        showBorder5.value = border5.value.occupiedBy !== "FREE";

        // border 6
        border6Card.value = buildBorder(border6, CARD_POSITION.HORIZONTAL);
        showBorder6.value = border6.value.occupiedBy !== "FREE";

        // border 7
        border7Card.value = buildBorder(border7, CARD_POSITION.VERTICAL);
        showBorder7.value = border7.value.occupiedBy !== "FREE";

        // border 8
        border8Card.value = buildBorder(border8, CARD_POSITION.HORIZONTAL);
        showBorder8.value = border8.value.occupiedBy !== "FREE";

        // border 9
        border9Card.value = buildBorder(border9, CARD_POSITION.HORIZONTAL);
        showBorder9.value = border9.value.occupiedBy !== "FREE";

        // border 10
        border10Card.value = buildBorder(border10, CARD_POSITION.VERTICAL);
        showBorder10.value = border10.value.occupiedBy !== "FREE";

        // border 11
        border11Card.value = buildBorder(border11, CARD_POSITION.VERTICAL);
        showBorder11.value = border11.value.occupiedBy !== "FREE";

        // border 12
        border12Card.value = buildBorder(border12, CARD_POSITION.VERTICAL);
        showBorder12.value = border12.value.occupiedBy !== "FREE";

        // border 13
        border13Card.value = buildBorder(border13, CARD_POSITION.VERTICAL);
        showBorder13.value = border13.value.occupiedBy !== "FREE";

        store.dispatch("borders/setRefreshBorders", false);
      }
    });

    return {
      showBorder1,
      showBorder2,
      showBorder3,
      showBorder4,
      showBorder5,
      showBorder6,
      showBorder7,
      showBorder8,
      showBorder9,
      showBorder10,
      showBorder11,
      showBorder12,
      showBorder13,
      border1Card,
      border2Card,
      border3Card,
      border4Card,
      border5Card,
      border6Card,
      border7Card,
      border8Card,
      border9Card,
      border10Card,
      border11Card,
      border12Card,
      border13Card,
    };
  },
};
</script>
