<template>
    <div class="information-container" data-testid="information-container">
        <div class="information-icon" data-testid="information-image">
            <font-awesome-icon icon="fa-circle-info" @click.prevent="toggleInformation" />
        </div>
        <div v-show="showInformation" class="information-text" data-testid="information-text">
            {{ information }}
        </div>
    </div>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";

const props = defineProps({
    text: String,
});

let showInformation = ref(false);
const information = computed(() => props.text || []);
const toggleInformation = () => {
    showInformation.value = !showInformation.value;
};
</script>

<style lang="scss" scoped>
@import "./../../assets/colors.scss";

.information-container {
    display: flex;
    justify-content: flex-start !important;
    align-items: center;
    color: $buttonColor;
    cursor: pointer;
}
.information-icon {
    display: flex;
    padding: 5px 10px;
    padding-right: 0.5rem;
    font-size: 1.3rem;
}
.information-text {
    font-family: "Lobster Two";
    font-size: 1.1rem;
}
</style>
