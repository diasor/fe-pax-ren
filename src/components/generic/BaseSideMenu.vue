<template>
    <nav class="floating-menu">
        <div
            v-if="showFugger"
            class="shield"
            @click.prevent="openTableau('fugger')"
        >
            <b-img
                width="30px"
                circle
                src="/images/PRen_Icon_Shield_Fugger_small.png"
                fluid
                alt="Fugger"
                v-b-popover.hover.right="'Show Fugger\'s full tableau overview.'"
            />
        </div>
        <div
            v-if="showCoeur"
            class="shield"
            @click.prevent="openTableau('coeur')"
        >
            <b-img
                width="30px"
                circle
                src="/images/PRen_Icon_Shield_Coeur_small.png"
                fluid
                alt="Coeur"
                v-b-popover.hover.right="'Show Coeur\'s full tableau overview.'"
            />
        </div>
        <div
            v-if="showMedici"
            class="shield"
            @click.prevent="openTableau('medici')"
        >
            <b-img
                width="30px"
                circle
                src="/images/PRen_Icon_Shield_Medici_small.png"
                fluid
                alt="Medici"
                v-b-popover.hover.right="'Show Medici\'s full tableau overview.'"
            />
        </div>
        <div
            v-if="showMarchionni"
            class="shield"
            @click.prevent="openTableau('marchionni')"
        >
            <b-img
                width="30px"
                circle
                src="/images/PRen_Icon_Shield_Marchionni_small.png"
                fluid
                alt="Marchionni"
                v-b-popover.hover.right="'Show Marchionni\'s full tableau overview.'"
            />
        </div>
    </nav>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
    name: "BaseSideMenu",

    emits: ["openTableau"],

    setup(_, context) {
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
            context.emit("openTableau", banker);
        };
        return {
            showFugger,
            showMedici,
            showCoeur,
            showMarchionni,
            openTableau,
        };
    },
});
</script>

<style lang="scss" scoped>
@import "./../../assets/colors.scss";

.floating-menu {
    margin-top: 14rem;
    font-family: sans-serif;
    padding-left: 3px;
    width: 130px;
    z-index: 100;
    position: fixed;
}

.shield {
    margin-top: 0.9rem;
    cursor: pointer;
}
</style>

<style lang="scss">
@import "./../../assets/colors.scss";
.popover {
    background-color: $sandColor !important;
    font-family: "Lobster Two" !important;
}
.popover-arrow::after  {
    border-right-color: $sandColor !important;
}
</style>
