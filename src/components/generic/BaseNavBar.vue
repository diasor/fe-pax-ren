<template>
    <b-nav id="pr-main-menu" tabs fill data-testid="nav-bar-main">
        <b-nav-text class="mx-5 pt-3" data-testid="nav-bar-title"
            ><h3>Pax Renaissance</h3>
        </b-nav-text>
        <b-nav-item class="mt-4" data-testid="nav-bar-new-game" @click="newGame">
            New game
        </b-nav-item>
        <b-nav-item class="mt-4" data-testid="nav-bar-players">Players</b-nav-item>

        <b-nav-item-dropdown
            id="my-nav-dropdown"
            text="My profile"
            toggle-class="nav-link-custom"
            class="mt-4"
            right
            data-testid="nav-bar-profile"
        >
            <b-dropdown-item>Edit my profile</b-dropdown-item>
            <b-dropdown-item>My past games</b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item>Log out</b-dropdown-item>
        </b-nav-item-dropdown>
    </b-nav>
</template>

<script setup>
// import { defineProps } from "vue";
import { useStore } from "vuex";

// const props = defineProps({
//     selected: {
//         type: [String, null],
//         default: null,
//     },
// });
// const emit = defineEmits(["openTableau"]);

// let selectedOption = props.selected ? ref(props.selected) : null;
const store = useStore();
const newGame = async () => {
    await store.dispatch("board/newGameBoard");
};

// const showCard = (card) => emit("showCard", card);
</script>

<style lang="scss" scoped>
@import "./../../assets/colors.scss";

ul > li > h3 {
    font-family: "Mrs_Sheppards" !important;
    font-size: 3.3rem;
    color: $navFontColor !important;
}

.nav {
    background-image: url("./../../../public/images/PR2_board_bottom_wood.jpg");
    height: 5rem;
    background-repeat: no-repeat;
    background-size: cover;
}

ul {
    margin-bottom: -3px !important;
}

.dropdown-menu {
    background-image: url("./../../../public/images/PR2_board_bottom_wood.jpg");
}

.dropdown-divider {
    background-color: $navFontColor;
}
</style>

<style lang="scss">
@import "./../../assets/colors.scss";

#pr-main-menu a.nav-link, button {
    font-family: "Permanent_Marker" !important;
    font-size: 1.4rem !important;
    color: $navFontColor !important;
}
</style>

