<template>
    <div class="backdrop-modal" @click="closeSidebarPanel" v-if="showPanel" />
    <slide-in-out entry="left" exit="left" :duration="800" appear>
        <div v-if="showPanel" class="tableau-container">
            <tableau-ops-header
                :name="bankerData.name"
                :shield="bankerData.shield"
                @closeTableau="closeTableau"
            />
            <b-tabs id="tableau-menu" class="mx-4" content-class="mt-3">
                <b-tab title="Tableau" active>
                    <base-information :text="cardInformation" class="information" />
                    <tableau-ops-cards :banker="banker" class="mt-0"/>
                </b-tab>
                <b-tab title="Hand">
                    <base-information :text="cardInformation" />
                    <tableau-ops-hand :bankerHandCards="bankerHandCards" />
                </b-tab>
                <b-tab title="Operations manual">
                    <tableau-ops-documentation :imageName="DOCUMENTATION.OPERATIONS" />
                </b-tab>
                <b-tab title="Table Battle manual">
                    <tableau-ops-documentation :imageName="DOCUMENTATION.BATTLE_TABLE" />
                </b-tab>
            </b-tabs>
        </div>
    </slide-in-out>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";
import { SlideInOut } from "vue3-transitions";
import TableauOpsHeader from "./TableauOpsHeader.vue";
import TableauOpsCards from "./TableauOpsCards.vue";
import TableauOpsHand from "./TableauOpsHand.vue";
import TableauOpsDocumentation from "./TableauOpsDocumentation.vue";
import BaseInformation from "@/components/generic/BaseInformation.vue";
import { useStore } from "vuex";
import { useBanker } from "@/composables/banker";
import { DOCUMENTATION } from "@/constants/enums";

const props = defineProps ({
    showPanel: Boolean,
    banker: String,
});

const emit = defineEmits(["closeTableau"]);

// fetch data
const store = useStore();
const bankerData = computed(() =>
    store.getters["bankers/getBanker"](props.banker)
);
const { buildHand } = useBanker();
const bankerHandCards = computed(() => {
    const hand = buildHand(bankerData.value.full.handCards);
    return hand;
});

const closeTableau = () => {
    emit("closeTableau", true);
};

const cardInformation = "Right click on a card to see all the possible actions on it.";

</script>

<style lang="scss" scoped>
@import "./../../assets/colors.scss";
.tableau-container {
    overflow-y: auto;
    background: url("./../../../public/images/card-background.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    left: 3%;
    top: 1%;
    width: 95.5vw;
    height: 98vh;
    z-index: 999;
    border-radius: 20px !important;

    display: flex;
    flex-flow: column;
    align-content: center;
    justify-content: flex-start;
    overflow: hidden;
}
</style>

<style lang="scss">
@import "./../../assets/colors.scss";
$navHeight: 2.2rem;
#tableau-menu .nav-tabs {
    height: $navHeight;
    border-color: $buttonColor !important;
}

#tableau-menu .nav-item .nav-link {
    height: $navHeight !important;
    min-width: 100px !important;
}

#tableau-menu .nav-item:not(:first-child) {
    padding-left: 1rem;
    padding-right: 0;
}

#tableau-menu a.nav-link, #tableau-menu button {
    font-family: "Lobster Two" !important;
    font-size: 1.2rem !important;
    color: $buttonColor !important;
    border-color: $buttonColor !important;
}

#tableau-menu .nav-item, #tableau-menu .nav-item button {
    background-color: transparent !important;
}

#tableau-menu .nav-tabs .nav-link.active{
    text-decoration: underline;
    text-decoration-color: $buttonColor !important;
}

.information {
    margin-left: -5px;
}
</style>

