<template>
    <div id="vassal-main-container">
        <div
            class="vassal-container"
            v-for="(vassal, index) in vassals"
            :key="`vassal_${index}`"
        >
            <div
                v-if="showButton(index)"
                class="vassal-button"
                :style="vassalButtonStyle(index, vassal)"
                @click.prevent="selectVassal(index)"
            />
            <b-img
                v-if="showVassalCard(index)"
                :style="vassalCardStyle(index)"
                :src="vassal"
                rounded
                fluid
                @click.prevent="hideVassal"
            />
        </div>
    </div>
</template>

<script>
import { defineComponent, ref, onMounted, computed, watch } from "vue";

export default defineComponent({
    name: "TableauOpsVassals",
    props: {
        cardId: {
            type: Number,
            default: -1,
        },
        vassals: {
            type: Array,
            default: () => [],
        },
        vassalsXPosition: {
            type: Number,
            default: 0,
        },
        vassalsFullXPosition: {
            type: Number,
            default: 0,
        },
        vassalsWidth: {
            type: Number,
            default: 0,
        },
        showOneMarket: {
            type: Boolean,
            default: false,
        },
    },

    setup(props) {
        let originalCardId = ref(props.cardId);
        let currentCardId = ref(-1);
        let defaultY = ref(0);
        onMounted(() => {
            const container = document.getElementById("vassal-main-container");
            defaultY.value = props.showOneMarket
                ? container.getBoundingClientRect().top - 50
                : container.getBoundingClientRect().top - 10;
        });

        watch(originalCardId, (originalCardId) => {
            console.log("changed original", originalCardId);
        });
        const buttonHeight = computed(() =>
            props.showOneMarket ? "55" : "40"
        );
        const heightIndex = computed(() => (props.showOneMarket ? "60" : "45"));

        const showButton = (index) => {
            currentCardId.value = props.cardId;
            return selected.value !== index || props.showOneMarket;
        };

        const showVassalCard = (index) => {
            return (
                currentCardId.value === props.cardId && selected.value === index
            );
        };

        const vassalPosition = (index) => {
            const numericCoordX = parseInt(props.vassalsXPosition, 10);
            const numericCoordY = parseInt(
                defaultY.value + index * heightIndex.value,
                10
            );
            const width = parseInt(props.vassalsWidth, 10);
            return {
                position: "fixed",
                left: `${numericCoordX}px !important`,
                top: `${numericCoordY}px !important`,
                width: `${width}px !important`,
            };
        };

        const vassalButtonStyle = (index, vassalImage) => {
            const position = vassalPosition(index);
            return {
                ...position,
                height: `${buttonHeight.value}px`,
                backgroundImage: `url("${vassalImage}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "start",
                border: "1px #Af9764 solid",
                borderRadius: "5px",
            };
        };

        const vassalCardStyle = (index) => {
            const position = vassalPosition(index);

            if (props.showOneMarket) {
                const numericCoordX = parseInt(props.vassalsFullXPosition, 10);
                const numericCoordY = parseInt(defaultY.value, 10);
                return {
                    ...position,
                    left: `${numericCoordX}px !important`,
                    top: `${numericCoordY}px !important`,
                    zIndex: "1000",
                };
            } else {
                return { ...position, zIndex: "1000" };
            }
        };

        let selected = ref(-1);
        const selectVassal = (index) => {
            selected.value = index;
        };
        const hideVassal = () => {
            selected.value = -1;
        };
        return {
            selected,
            selectVassal,
            hideVassal,
            vassalCardStyle,
            vassalButtonStyle,
            showButton,
            showVassalCard,
        };
    },
});
</script>
