<template>
    <div v-if="isEngland">
        <zoom-card-england-markers />
        <zoom-card-england />
    </div>
    <div v-if="isFrance">
        <zoom-card-france-markers />
        <zoom-card-france />
    </div>
    <div v-if="isHRE">
        <zoom-card-hre-markers />
        <zoom-card-hre />
    </div>
    <div v-if="isHungary">
        <zoom-card-hungary-markers />
        <zoom-card-hungary />
    </div>
    <div v-if="isByzantium">
        <zoom-card-byzantium-markers />
        <zoom-card-byzantium />
    </div>
    <div v-if="isPortugal">
        <zoom-card-portugal-markers />
        <zoom-card-portugal />
    </div>
    <div v-if="isAragon">
        <zoom-card-aragon-markers />
        <zoom-card-aragon />
    </div>
    <div v-if="isPapalStates">
        <zoom-card-papal-states-markers />
        <zoom-card-papal-states />
    </div>
    <div v-if="isOttoman">
        <zoom-card-ottoman-markers />
        <zoom-card-ottoman />
    </div>
    <div v-if="isMamluk">
        <zoom-card-mamluk-markers />
        <zoom-card-mamluk />
    </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import ZoomCardEnglandMarkers from "./ZoomCardEnglandMarkers.vue";
import ZoomCardFranceMarkers from "./ZoomCardFranceMarkers.vue";
import ZoomCardHreMarkers from "./ZoomCardHreMarkers.vue";
import ZoomCardHungaryMarkers from "./ZoomCardHungaryMarkers.vue";
import ZoomCardByzantiumMarkers from "./ZoomCardByzantiumMarkers.vue";
import ZoomCardPortugalMarkers from "./ZoomCardPortugalMarkers.vue";
import ZoomCardAragonMarkers from "./ZoomCardAragonMarkers.vue";
import ZoomCardPapalStatesMarkers from "./ZoomCardPapalStatesMarkers.vue";
import ZoomCardOttomanMarkers from "./ZoomCardOttomanMarkers.vue";
import ZoomCardMamlukMarkers from "./ZoomCardMamlukMarkers.vue";
import ZoomCardEngland from "./ZoomCardEngland.vue";
import ZoomCardFrance from "./ZoomCardFrance.vue";
import ZoomCardHre from "./ZoomCardHre.vue";
import ZoomCardHungary from "./ZoomCardHungary.vue";
import ZoomCardByzantium from "./ZoomCardByzantium.vue";
import ZoomCardPortugal from "./ZoomCardPortugal.vue";
import ZoomCardAragon from "./ZoomCardAragon.vue";
import ZoomCardPapalStates from "./ZoomCardPapalStates.vue";
import ZoomCardOttoman from "./ZoomCardOttoman.vue";
import ZoomCardMamluk from "./ZoomCardMamluk.vue";

const props = defineProps({
    cardId: String,
});

const isEngland = computed(() => props.cardId === "EN");
const isFrance = computed(() => props.cardId === "FR");
const isHRE = computed(() => props.cardId === "HRE");
const isHungary = computed(() => props.cardId === "HU");
const isByzantium = computed(() => props.cardId === "BY");
const isPortugal = computed(() => props.cardId === "PT");
const isAragon = computed(() => props.cardId === "AR");
const isPapalStates = computed(() => props.cardId === "PS");
const isOttoman = computed(() => props.cardId === "OT");
const isMamluk = computed(() => props.cardId === "ML");

</script>
