<template>
    <div v-if="isEngland">
        <zoom-card-england-markers />
        <zoom-card-england />
    </div>
    <div v-if="isFrance">
        <zoom-card-france-markers />
        <zoom-card-france />
    </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import ZoomCardEnglandMarkers from "./ZoomCardEnglandMarkers.vue";
import ZoomCardFranceMarkers from "./ZoomCardFranceMarkers.vue";
import ZoomCardEngland from "./ZoomCardEngland.vue";
import ZoomCardFrance from "./ZoomCardFrance.vue";

const props = defineProps({
    cardId: String,
});

const isEngland = computed(() => props.cardId === "EN");
const isFrance = computed(() => props.cardId === "FR");

</script>
