<template>
    <div id="vassal-main-container">
        <div
            v-for="(vassal, index) in vassals"
            :key="`vassal_${index}`"
        >
            <div
                v-if="showButton(index)"
                :style="vassalButtonStyle(index, vassal)"
                @click.prevent="selectVassal(index)"
            />
            <b-img
                v-if="showVassalCard(index)"
                :src="vassal"
                rounded
                fluid
                :style="vassalCardStyle"
                @click.prevent="hideVassal"
            />
        </div>
    </div>
</template>

<script setup>
import { ref, computed, defineProps, onMounted } from "vue";
const props = defineProps({
    cardId: Number,
    vassals: Array,
    showOneMarket: Boolean,
});

let defaultY = ref(0);
let showVassalImage = ref(false);
onMounted(() => {
    const container = document.getElementById("vassal-main-container");
    defaultY.value = props.showOneMarket
        ? container.getBoundingClientRect().top - 50
        : container.getBoundingClientRect().top - 10;
});

const buttonHeight = computed(() =>
    props.showOneMarket ? "50" : "40"
);

const showButton = (index) => {
    return selected.value !== index || props.showOneMarket;
};

const showVassalCard = (index) => showVassalImage.value && selected.value === index;

const vassalButtonStyle = (index, vassalImage) => {
    const buttonName = vassalImage.slice(0, -4);
    return {
        height: `${buttonHeight.value}px`,
        marginBottom: "5px",
        backgroundImage: `url("${buttonName}-button.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "start",
        border: "1px #Af9764 solid",
        borderRadius: "5px",
    };
};

const vassalCardStyle = computed(() => {
    return {
        marginTop: props.showOneMarket ? "-54px" : "4px",
        marginBottom: "5px",
    };
});

let selected = ref(-1);
const selectVassal = (index) => {
    selected.value = index;
    showVassalImage.value = true;
};
const hideVassal = () => {
    selected.value = -1;
    showVassalImage.value = false;
};
</script>


    