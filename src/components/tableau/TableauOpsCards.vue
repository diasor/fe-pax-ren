<template>
    <!-- main tableau grid -->
    <div class="card-grid" :style="cardGridStyle">
        <div
            v-if="!hideWest"
            class="card-west-gallery"
            :style="cardWestStyle"
        >
            <tableau-ops-market
                :key="`west_${banker}`"
                id="west"
                :slides="westCards"
                :width="carouselWidth"
                :showOneMarket="showOneMarket"
                :market="REGION.WEST"
                @toggleWest="toggleButtonWest"
            />
        </div>
        <div class="banker-container" v-if="!showOneMarket">
            <b-img
                :src="bankerData.image"
                rounded
                center
                class="object-center"
                width="260px"
            />
        </div>
        <div
            v-if="!hideEast"
            class="card-east-gallery"
            :style="cardEastStyle"
        >
            <tableau-ops-market
                :key="`east_${banker}`"
                id="east"
                :slides="eastCards"
                :width="carouselWidth"
                :showOneMarket="showOneMarket"
                :market="REGION.EAST"
                @toggleEast="toggleButtonEast"
            />
        </div>
    </div>
</template>

<script>
import { defineComponent, computed, ref, watch } from "vue";
import TableauOpsMarket from "./TableauOpsMarket.vue";
import { useStore } from "vuex";
import { useBanker } from "@/composables/banker";
import { REGION } from "@/constants/enums";

export default defineComponent({
    name: "TableauOpsCards",
    components: { TableauOpsMarket },
    props: {
        banker: {
            type: String,
            required: true,
        },
    },

    setup(props) {
        // fetch data
        const store = useStore();
        const bankerData = computed(() =>
            store.getters["bankers/getBanker"](props.banker)
        );

        let hideEast = ref(false);
        let hideWest = ref(false);

        const showOneMarket = computed(() => hideEast.value || hideWest.value);
        const carouselWidth = computed(() =>
            showOneMarket.value ? "90" : "37"
        );

        const currentBanker = computed(() => props.banker);

        watch(currentBanker, (newValue, oldValue) => {
            if (oldValue !== newValue) {
                hideEast.value = false;
                hideWest.value = false;
            }
        });
        // build west and east market sets
        const kingdoms = computed(() => store.getters["kingdoms/getKingdoms"]);
        const { builBankerMakets } = useBanker();
        const bankerMarkets = computed(() => {
            const markets = builBankerMakets(bankerData.value.full, kingdoms.value );
            return markets;
        });
        const westCards = computed(() => bankerMarkets.value.westMarket);
        const eastCards = computed(() => bankerMarkets.value.eastMarket);
        
        const toggleButtonWest = () => {
            hideEast.value = !hideEast.value;
        };

        const toggleButtonEast = () => {
            hideWest.value = !hideWest.value;
        };

        // dynamic styles
        const cardGridStyle = computed(() => {
            return {
                "grid-template-columns": showOneMarket.value
                    ? "1fr"
                    : "1fr 0.2fr 1fr",
            };
        });
        const cardWestStyle = computed(() => {
            if (hideEast.value) {
                return {
                    "justify-self": "center",
                };
            }
            return {
                "justify-self": "end !important",
            };
        });
        const cardEastStyle = computed(() => {
            if (hideWest.value) {
                return {
                    "justify-self": "center",
                };
            }
            return {
                "justify-self": "start",
            };
        });

        return {
            bankerData,
            eastCards,
            westCards,
            toggleButtonWest,
            toggleButtonEast,
            hideWest,
            hideEast,
            showOneMarket,
            cardGridStyle,
            cardWestStyle,
            carouselWidth,
            cardEastStyle,
            REGION,
        };
    },
});
</script>

<style lang="scss" scoped>
@import "./../../assets/colors.scss";
.card-grid {
    display: grid;
    grid-template-rows: 1fr;
    grid-column-gap: "0px";
    grid-row-gap: "0px";
    align-self: center;
    justify-content: center;
    padding: 0;
}

.card-west-gallery {
    grid-area: 1 / 1 / 2 / 2;
    align-self: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
}

.banker-container {
    grid-area: 1 / 2 / 2 / 3;
}

.card-east-gallery {
    grid-area: 1 / 3 / 2 / 4;
    align-self: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
}

.dropdown-divider {
    background-color: $navFontColor;
}
</style>

