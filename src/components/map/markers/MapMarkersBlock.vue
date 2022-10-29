<template>
    <rect
        :id="props.id"
        :x="props.x"
        :y="props.y"
        fill="red"
        :opacity="opacity"
        :width="props.width"
        :height="BLOCK_HEIGHT"
    />
    <rect
        :id="endBlockXId"
        :x="endBlockWidth(props.x)"
        :y="props.y"
        fill="yellow"
        :opacity="opacity"
        :width="BLOCK_HEIGHT"
        :height="BLOCK_HEIGHT"
    />
    <rect
        :id="endBlockYId"
        :x="props.x"
        :y="endBlockHeight(props.y)"
        fill="blue"
        :opacity="opacity"
        :width="props.width"
        :height="BLOCK_HEIGHT"
    />
</template>

<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
    id: String,
    x: Number,
    y: Number,
    width: Number,
    height: Number,
    show: Boolean,
});

const BLOCK_HEIGHT = 50;
const opacity = computed(() => props.show ? "0.5" : "0" );
const endBlockXId = computed(() => `${props.id}-endX`);
const endBlockYId = computed(() => `${props.id}-endY`);
const endBlockWidth = (y) => y + props.width;
const endBlockHeight = (y) =>
    props.height
    ? props.y + props.height
    : y + props.width;
</script>
