<template>
    <nav class="floating-menu" data-testid="floating-menu-container">
        <div
            v-if="showFugger"
            class="shield"
            data-testid="fugger-container"
            @click.prevent="openTableau('fugger')"
        >
            <base-tooltip :text="'Show Fugger\'s full tableau overview.'">
                <b-img
                    width="30px"
                    src="/images/PRen_Icon_Shield_Fugger_small.png"
                    alt="Fugger"
                />
            </base-tooltip>
        </div>
        <div
            v-if="showCoeur"
            class="shield"
            data-testid="coeur-container"
            @click.prevent="openTableau('coeur')"
        >
            <base-tooltip :text="'Show Coeur\'s full tableau overview.'">
                <b-img
                    width="30px"
                    src="/images/PRen_Icon_Shield_Coeur_small.png"
                    alt="Coeur"
                />
            </base-tooltip>
        </div>
        <div
            v-if="showMedici"
            class="shield"
            data-testid="medici-container"
            @click.prevent="openTableau('medici')"
        >
            <base-tooltip :text="'Show Coeur\'s full tableau overview.'">
                <b-img
                    width="30px"
                    src="/images/PRen_Icon_Shield_Medici_small.png"
                    alt="Medici"
                />
            </base-tooltip>
        </div>
        <div
            v-if="showMarchionni"
            class="shield"
            data-testid="marchionni-container"
            @click.prevent="openTableau('marchionni')"
        >
            <base-tooltip :text="'Show Coeur\'s full tableau overview.'">
                <b-img
                    width="30px"
                    src="/images/PRen_Icon_Shield_Marchionni_small.png"
                    alt="Marchionni"
                />
            </base-tooltip>
        </div>
    </nav>
</template>

<script setup>
import { defineEmits, computed } from "vue";
import BaseTooltip from "./BaseTooltip.vue";
import { useStore } from "vuex";

const emit = defineEmits(["openTableau"]);

const store = useStore();
const showFugger = computed(
    () => store.getters["bankers/isFuggerPlaying"]
);
const showMedici = computed(
    () => store.getters["bankers/isMediciPlaying"]
);
const showCoeur = computed(
    () => store.getters["bankers/isCoeurPlaying"]
);
const showMarchionni = computed(
    () => store.getters["bankers/isMarchionniPlaying"]
);

const openTableau = (banker) => {
    emit("openTableau", banker);
};
</script>

<style lang="scss" scoped>
@import "./../../assets/colors.scss";

.floating-menu {
    margin-top: 14rem;
    font-family: sans-serif;
    padding-left: 3px;
    width: 50px;
    z-index: 100;
    position: fixed;
}

.shield {
    margin-top: 0.9rem;
    cursor: pointer;
}
</style>

