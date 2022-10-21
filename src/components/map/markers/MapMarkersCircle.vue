<template>
    <circle
        :id="props.id"
        :cx="props.x"
        :cy="props.y"
        :r="RADIO"
        opacity="0"
        fill="red"
    />
    <rect
        :id="endBlockName"
        :x="endBlockX"
        :y="endBlockY"
        fill="yellow"
        opacity="0"
        :width="RADIO"
        :height="HEIGHT"
    />
</template>

<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
    id: String,
    x: Number,
    y: Number,
});

const RADIO = 34;
const HEIGHT = RADIO * 2;


const endBlockName = computed(() => `${props.id}-endX`);
const endBlockX = computed(() => props.x + RADIO);
const endBlockY = computed(() => props.y - RADIO);
</script>
