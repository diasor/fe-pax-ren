<template>
    <div class="tooltip-container" data-testid="tooltip-container">
        <slot />
        <div class="tooltip">
            <span class="text" data-testid="tooltip-text">{{ information }}</span>
        </div>
    </div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
    text: String,
});

const information = computed(() => props.text || []);
</script>

<style lang="scss" scoped>
@import "./../../assets/colors.scss";

.tooltip-container {
    position: relative;
    display: inline-block;
}

.tooltip-container:hover .tooltip{
    opacity: 1;
}

.tooltip { 
    position: absolute;
    padding: 5px 0;
    width: 120px;
    bottom: 0;
    left: 130%;
    opacity: 0;
    transition: opacity 1s;
    z-index: 1;
    border-radius: 5px !important;
    font-family: "Lobster Two";
    color: $buttonColor !important;
    text-align: center;
    box-shadow: inset 0px 30px 50px 5px $sandColor;
}

.text::after {
    content: " ";
    position: absolute;
    top: 35%;
    left: -6%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent $sandColor  transparent transparent ;
    font-size: 1.1rem;
}
</style>
