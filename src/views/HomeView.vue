<template>
  <div class="home">
    <div class="mx-auto mt-3 w-50">
      <h1>Select East Card</h1>

      <base-select
        :selected="selectedCardId"
        :options="cards"
        @selectedOption="showModal"
      />
    </div>

    <base-modal
      v-if="showCard"
      :title="selectedCard.name"
      :imageName="selectedCard.file"
      :showModal="showCard"
      @closeModal="resetSelected"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { forEach, find } from "lodash";
import { EAST_CARDS } from "@/constants/cards";
import BaseSelect from "@/components/generic/BaseSelect.vue";
import BaseModal from "@/components/generic/BaseModal.vue";

export default {
  name: "HomeView",
  components: {
    BaseSelect,
    BaseModal,
  },
  setup() {
    let cards = ref([{ value: null, text: "(Select a card)" }]);
    let selectedCardId = ref(null);
    let selectedCard = ref({});
    let showCard = ref(false);
    let imageFullPath = ref("");

    forEach(EAST_CARDS, (card) => {
      cards.value.push({ value: card.id, text: card.name });
    });

    const showModal = (card) => {
      if (card) {
        selectedCard.value = find(EAST_CARDS, (iter) => iter.id === card);
        if (selectedCard.value) {
          showCard.value = true;
        }
      }
    };

    const resetSelected = () => {
      selectedCard.value = cards.value[0];
      selectedCardId.value = null;
      showCard.value = false;
    };

    return {
      selectedCardId,
      selectedCard,
      cards,
      showCard,
      imageFullPath,
      resetSelected,
      showModal,
    };
  },
};
</script>
