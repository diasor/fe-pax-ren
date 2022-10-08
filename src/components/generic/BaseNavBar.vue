<template>
    <b-nav id="pr-mainMenu" tabs fill>
        <b-nav-text class="mx-5 pt-3"><h3>Pax Renaissance</h3></b-nav-text>
        <b-nav-item class="mt-4" @click="newGame">New game</b-nav-item>
        <b-nav-item class="mt-4">Players</b-nav-item>

        <b-nav-item-dropdown
            id="my-nav-dropdown"
            text="My profile"
            toggle-class="nav-link-custom"
            class="mt-4"
            right
        >
            <b-dropdown-item>Edit my profile</b-dropdown-item>
            <b-dropdown-item>My past games</b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item>Log out</b-dropdown-item>
        </b-nav-item-dropdown>
    </b-nav>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
    name: "BaseNavBar",
    props: {
        selected: {
            type: [String, null],
            default: null,
        },
    },
    setup(props, context) {
        let selectedOption = props.selected ? ref(props.selected) : null;
        const store = useStore();
        const newGame = async () => {
            await store.dispatch("board/newGameBoard");
        };

        const showCard = (card) => context.emit("showCard", card);
        return {
            selectedOption,
            showCard,
            newGame,
        };
    },
};
</script>

<style lang="scss">
@import "./../../assets/colors.scss";

ul > li > h3 {
    font-family: "Mrs_Sheppards" !important;
    font-size: 3.3rem;
    color: $navFontColor !important;
}

ul > li > a,
button {
    font-family: "Permanent_Marker" !important;
    font-size: 1.4rem !important;
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

ul > li .dropdown-menu button {
    font-size: 0.8rem !important;
}
</style>
