<template>
  <b-nav id="pr-mainMenu" tabs fill >
    <b-nav-text class="mx-5 pt-3"><h3>Pax Renaissance</h3></b-nav-text>
    <b-nav-item class="mt-4">New game</b-nav-item>
    <b-nav-item class="mt-4">Other users</b-nav-item>
    <b-nav-item-dropdown
      id="actions-dropdown"
      text="West"
      toggle-class="nav-link-custom"
      class="mt-4"
      right
    >
        <!-- England -->
        <b-dropdown-item>England</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.ENGLAND, religion: 'CATHOLIC'})"> - Catholic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.ENGLAND, religion: 'ISLAMIC'})"> - Islamic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.ENGLAND, religion: 'REFORMIST'})"> - Reformist</b-dropdown-item>
        <b-dropdown-divider/>
        
        <!-- France -->
        <b-dropdown-item>France</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.FRANCE, religion: 'CATHOLIC'})"> - Catholic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.FRANCE, religion: 'ISLAMIC'})"> - Islamic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.FRANCE, religion: 'REFORMIST'})"> - Reformist</b-dropdown-item>
        <b-dropdown-divider/>
        
        <!-- Holy Roman Empire -->
        <b-dropdown-item>Holy Roman Empire</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.HOLY_ROMAN_EMPIRE, religion: 'CATHOLIC'})"> - Catholic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.HOLY_ROMAN_EMPIRE, religion: 'ISLAMIC'})"> - Islamic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.HOLY_ROMAN_EMPIRE, religion: 'REFORMIST'})"> - Reformist</b-dropdown-item>
        <b-dropdown-divider/>
        
        <!-- Portugal -->
        <b-dropdown-item>Portugal</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.PORTUGAL, religion: 'CATHOLIC'})"> - Catholic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.PORTUGAL, religion: 'ISLAMIC'})"> - Islamic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.PORTUGAL, religion: 'REFORMIST'})"> - Reformist</b-dropdown-item>
        <b-dropdown-divider/>
        
        <!-- Aragon -->
        <b-dropdown-item>Aragon</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.ARAGON, religion: 'CATHOLIC'})"> - Catholic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.ARAGON, religion: 'ISLAMIC'})"> - Islamic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.ARAGON, religion: 'REFORMIST'})"> - Reformist</b-dropdown-item>
        <b-dropdown-divider/>
        
         <!-- Papal States -->
        <b-dropdown-item>Papal States</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.PAPAL_STATES, religion: 'CATHOLIC'})"> - Catholic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.PAPAL_STATES, religion: 'ISLAMIC'})"> - Islamic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.PAPAL_STATES, religion: 'REFORMIST'})"> - Reformist</b-dropdown-item>
        <b-dropdown-divider/>
    </b-nav-item-dropdown>


    <b-nav-item-dropdown
      id="actions-dropdown"
      text="East"
      toggle-class="nav-link-custom"
      class="mt-4"
      right
    > 
        <!-- Hungary -->
        <b-dropdown-item>Hungary</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.HUNGARY, religion: 'CATHOLIC'})"> - Catholic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.HUNGARY, religion: 'ISLAMIC'})"> - Islamic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.HUNGARY, religion: 'REFORMIST'})"> - Reformist</b-dropdown-item>
        <b-dropdown-divider/>
        
        <!-- Byzantium -->
        <b-dropdown-item>Byzantium</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.BYZANTIUM, religion: 'CATHOLIC'})"> - Catholic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.BYZANTIUM, religion: 'ISLAMIC'})"> - Islamic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.BYZANTIUM, religion: 'REFORMIST'})"> - Reformist</b-dropdown-item>
        <b-dropdown-divider/>

        <!-- Ottoman -->
        <b-dropdown-item>Ottoman</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.OTTOMAN, religion: 'CATHOLIC'})"> - Catholic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.OTTOMAN, religion: 'ISLAMIC'})"> - Islamic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.OTTOMAN, religion: 'REFORMIST'})"> - Reformist</b-dropdown-item>
        <b-dropdown-divider/>

        <!-- Mamluk -->
        <b-dropdown-item>Mamluk</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.MAMLUK, religion: 'CATHOLIC'})"> - Catholic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.MAMLUK, religion: 'ISLAMIC'})"> - Islamic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: COUNTRY_CODES.MAMLUK, religion: 'REFORMIST'})"> - Reformist</b-dropdown-item>
    </b-nav-item-dropdown>
    <b-nav-item-dropdown
      id="actions-dropdown"
      text="Victory"
      toggle-class="nav-link-custom"
      class="mt-4"
      right
    >   
        <b-dropdown-item @click="showCard({ id: VICTORY_TYPE.RENAISSANCE, religion: ''})">Renaissance Victory</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: VICTORY_TYPE.GLOBALIZATION, religion: ''})">Globalization Victory</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: VICTORY_TYPE.IMPERIAL, religion: ''})">Imperial Victory</b-dropdown-item>
        <b-dropdown-item @click="showCard({ id: VICTORY_TYPE.HOLY, religion: ''})">Holy Victory</b-dropdown-item>
    </b-nav-item-dropdown>
    <b-nav-item-dropdown
      id="my-nav-dropdown"
      text="My profile"
      toggle-class="nav-link-custom"
      class="mt-4"
      right
    >
      <b-dropdown-item>Edit my profile</b-dropdown-item>
      <b-dropdown-item>My past games</b-dropdown-item>
      <b-dropdown-divider/>
      <b-dropdown-item>Log out</b-dropdown-item>
    </b-nav-item-dropdown>
  </b-nav>
</template>
<script>
import { ref } from 'vue';
import { COUNTRY_CODES, VICTORY_TYPE } from "@/constants/enums";
export default {
    name: "BaseNavBar",
    props: {
        selected: {
            type: [ String, null ],
            default: null,
        },
    },
    emits: [ "selectedMenu", "showCard" ],
    setup(props, context){
        let selectedOption = props.selected ? ref(props.selected) : null;

        const changeSelection = (selectedValue) => {
            if (selectedValue) {
                context.emit("selectedMenu", selectedValue);
            }
        };

        const showCard = (card) => context.emit("showCard", card);
        return { selectedOption, changeSelection, showCard, COUNTRY_CODES, VICTORY_TYPE }
    },
};
</script>

<style lang="scss">
$navFontColor: #D7C69D;
ul > li > h3 {
    font-family: "Mrs_Sheppards" !important;
    font-size: 3.3rem;
    color: $navFontColor !important;
}

ul > li > a, button {
    font-family: "Permanent_Marker" !important;
    font-size: 1.4rem !important;
    color: $navFontColor !important;
}

.nav {
    background-image: url("./../../../public/images/PR2_board_bottom_wood.jpg");
    height: 5rem;
    background-repeat: no-repeat;
    background-size:cover;
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

ul > li .dropdown-menu  button {
    font-size: 0.8rem !important;
}
</style>
