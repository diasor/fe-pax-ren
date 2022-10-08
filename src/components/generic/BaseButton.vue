<template>
    <div class="pr-button-container" @click.prevent="clickButton">
        <div :style="prButtonLeft" />

        <div :style="prButtonStyle">{{ text }}</div>

        <div :style="prButtonRight" />
    </div>
</template>
<script>
import { computed } from "vue";

export default {
    name: "BaseButton",

    props: {
        text: {
            type: String,
            default: "",
        },
        color: {
            type: String,
            default: null,
        },
        fontColor: {
            type: String,
            default: null,
        },
    },

    emits: ["clickButton"],

    setup(props, context) {
        const defaultBackgroundColor = "#95331c";
        const defaultFontColor = "#D7C69D";
        const lineHeight = "2rem";
        const halfLineHeight = "1rem";
        const backgroundColor =
            props.color !== null ? props.color : defaultBackgroundColor;

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
                padding: "0 10px",
                "font-family": "Lobster Two",
                "font-size": "1.2rem",
                color:
                    props.fontColor !== null
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
            context.emit("clickButton");
        };
        return { prButtonStyle, prButtonRight, prButtonLeft, clickButton };
    },
};
</script>

<style lang="scss" scoped>
.pr-button-container {
    display: flex;
    background-color: inherit;
    margin: 5px;
}
</style>
