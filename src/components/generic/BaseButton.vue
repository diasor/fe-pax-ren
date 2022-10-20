<template>
    <div class="pr-button-container" @click.prevent="clickButton">
        <div :style="prButtonLeft" />

        <div :style="prButtonStyle">{{ text }}</div>

        <div :style="prButtonRight" />
    </div>
</template>
<script setup>
import { defineProps, defineEmits, computed } from "vue";
const props = defineProps({
    text: String,
    color: String,
    fontColor: String,
});

const emit = defineEmits(["clickButton"]);

const defaultBackgroundColor = "#95331c";
const defaultFontColor = "#D7C69D";
const lineHeight = "2rem";
const halfLineHeight = "1rem";
const backgroundColor = props.color !== null ? props.color : defaultBackgroundColor;
const prButtonStyle = computed(() => {
    return {
        display: "flex",
        "align-content": "center",
        "justify-content": "center",
        background: backgroundColor,
        border: "none",
        height: lineHeight,
        "line-height": lineHeight,
        "text-decoration": "none",
        width: "auto",
        padding: "0",
        "font-family": "Lobster Two",
        "font-size": "1.1rem",
        color: props.fontColor !== null
            ? props.fontColor
            : defaultFontColor,
    };
});

const prButtonRight = computed(() => {
    return {
        display: "flex",
        width: lineHeight,
        height: lineHeight,
        border: `${halfLineHeight} solid ${backgroundColor}`,
        "border-top-color": backgroundColor,
        "border-right-color": "transparent",
        "border-bottom-color": backgroundColor,
        "border-left-color": backgroundColor,
    };
});

const prButtonLeft = computed(() => {
    return {
        display: "flex",
        width: lineHeight,
        height: lineHeight,
        border: `${halfLineHeight} solid ${backgroundColor}`,
        "border-top-color": backgroundColor,
        "border-right-color": backgroundColor,
        "border-bottom-color": backgroundColor,
        "border-left-color": "transparent",
    };
});

const clickButton = () => {
    emit("clickButton");
};
</script>

<style lang="scss" scoped>
.pr-button-container {
    display: flex;
    background-color: inherit;
    margin: 0 5px;
    width: fit-content; 
}
</style>
