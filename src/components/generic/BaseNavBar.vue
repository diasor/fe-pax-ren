<template>
  <b-nav id="pr-mainMenu" tabs fill >
    <b-nav-text class="mx-5 pt-3"><h3>Pax Renaissance</h3></b-nav-text>
    <b-nav-item class="mt-4" @click="newGame">New game</b-nav-item>
    <!-- <b-nav-item class="mt-4">Other users</b-nav-item> -->
    <b-nav-item-dropdown
      id="actions-dropdown"
      text="West"
      toggle-class="nav-link-custom"
      class="mt-4"
      right
    >
        <!-- England -->
        <b-dropdown-item>England</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.ENGLAND, cardReligion: 'CATHOLIC', cardType: 'KINGDOM' })"> - Catholic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.ENGLAND, cardReligion: 'ISLAMIC', cardType: 'KINGDOM'})"> - Islamic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.ENGLAND, cardReligion: 'REFORMIST', cardType: 'KINGDOM'})"> - Reformist</b-dropdown-item>
        <b-dropdown-divider/>
        
        <!-- France -->
        <b-dropdown-item>France</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.FRANCE, cardReligion: 'CATHOLIC', cardType: 'KINGDOM'})"> - Catholic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.FRANCE, cardReligion: 'ISLAMIC', cardType: 'KINGDOM'})"> - Islamic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.FRANCE, cardReligion: 'REFORMIST', cardType: 'KINGDOM'})"> - Reformist</b-dropdown-item>
        <b-dropdown-divider/>
        
        <!-- Holy Roman Empire -->
        <b-dropdown-item>Holy Roman Empire</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.HOLY_ROMAN_EMPIRE, cardReligion: 'CATHOLIC', cardType: 'KINGDOM'})"> - Catholic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.HOLY_ROMAN_EMPIRE, cardReligion: 'ISLAMIC', cardType: 'KINGDOM'})"> - Islamic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.HOLY_ROMAN_EMPIRE, cardReligion: 'REFORMIST', cardType: 'KINGDOM'})"> - Reformist</b-dropdown-item>
        <b-dropdown-divider/>
        
        <!-- Portugal -->
        <b-dropdown-item>Portugal</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.PORTUGAL, cardReligion: 'CATHOLIC', cardType: 'KINGDOM'})"> - Catholic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.PORTUGAL, cardReligion: 'ISLAMIC', cardType: 'KINGDOM'})"> - Islamic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.PORTUGAL, cardReligion: 'REFORMIST', cardType: 'KINGDOM'})"> - Reformist</b-dropdown-item>
        <b-dropdown-divider/>
        
        <!-- Aragon -->
        <b-dropdown-item>Aragon</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.ARAGON, cardReligion: 'CATHOLIC', cardType: 'KINGDOM'})"> - Catholic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.ARAGON, cardReligion: 'ISLAMIC', cardType: 'KINGDOM'})"> - Islamic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.ARAGON, cardReligion: 'REFORMIST', cardType: 'KINGDOM'})"> - Reformist</b-dropdown-item>
        <b-dropdown-divider/>
        
         <!-- Papal States -->
        <b-dropdown-item>Papal States</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.PAPAL_STATES, cardReligion: 'CATHOLIC', cardType: 'KINGDOM'})"> - Catholic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.PAPAL_STATES, cardReligion: 'ISLAMIC', cardType: 'KINGDOM'})"> - Islamic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.PAPAL_STATES, cardReligion: 'REFORMIST', cardType: 'KINGDOM'})"> - Reformist</b-dropdown-item>
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
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.HUNGARY, cardReligion: 'CATHOLIC', cardType: 'KINGDOM'})"> - Catholic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.HUNGARY, cardReligion: 'ISLAMIC', cardType: 'KINGDOM'})"> - Islamic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.HUNGARY, cardReligion: 'REFORMIST', cardType: 'KINGDOM'})"> - Reformist</b-dropdown-item>
        <b-dropdown-divider/>
        
        <!-- Byzantium -->
        <b-dropdown-item>Byzantium</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.BYZANTIUM, cardReligion: 'CATHOLIC', cardType: 'KINGDOM'})"> - Catholic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.BYZANTIUM, cardReligion: 'ISLAMIC', cardType: 'KINGDOM'})"> - Islamic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.BYZANTIUM, cardReligion: 'REFORMIST', cardType: 'KINGDOM'})"> - Reformist</b-dropdown-item>
        <b-dropdown-divider/>

        <!-- Ottoman -->
        <b-dropdown-item>Ottoman</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.OTTOMAN, cardReligion: 'CATHOLIC', cardType: 'KINGDOM'})"> - Catholic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.OTTOMAN, cardReligion: 'ISLAMIC', cardType: 'KINGDOM'})"> - Islamic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.OTTOMAN, cardReligion: 'REFORMIST', cardType: 'KINGDOM'})"> - Reformist</b-dropdown-item>
        <b-dropdown-divider/>

        <!-- Mamluk -->
        <b-dropdown-item>Mamluk</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.MAMLUK, cardReligion: 'CATHOLIC', cardType: 'KINGDOM'})"> - Catholic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.MAMLUK, cardReligion: 'ISLAMIC', cardType: 'KINGDOM'})"> - Islamic</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: COUNTRY_CODES.MAMLUK, cardReligion: 'REFORMIST', cardType: 'KINGDOM'})"> - Reformist</b-dropdown-item>
    </b-nav-item-dropdown>
    <b-nav-item-dropdown
      id="actions-dropdown"
      text="Victory"
      toggle-class="nav-link-custom"
      class="mt-4"
      right
    >   
        <b-dropdown-item @click="showCard({ cardId: VICTORY_TYPE.RENAISSANCE, cardReligion: '', cardType: 'VICTORY' })">Renaissance Victory</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: VICTORY_TYPE.GLOBALIZATION, cardReligion: '', cardType: 'VICTORY' })">Globalization Victory</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: VICTORY_TYPE.IMPERIAL, cardReligion: '', cardType: 'VICTORY' })">Imperial Victory</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: VICTORY_TYPE.HOLY, cardReligion: '', cardType: 'VICTORY' })">Holy Victory</b-dropdown-item>
    </b-nav-item-dropdown>

    <b-nav-item-dropdown
      id="actions-dropdown"
      text="Pieces"
      toggle-class="nav-link-custom"
      class="mt-4"
      right
    >   
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.LONDON, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">London</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.BORDEAUX, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">Bordeaux</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.BRUGES, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">Bruges</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.PARIS, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">Paris </b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.LYON, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">Lyon </b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.LUBECK, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">Lubeck </b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.NOVGOROD, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">Novgorod </b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.NURNBERG, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">Nurnberg </b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.VIENNA, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">Vienna </b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.BUDA, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">Buda </b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.VARNA, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">Varna </b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.TANA, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">TANA </b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.CAFFA, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">Caffa </b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.TREBIZOND, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">Trebizond </b-dropdown-item>
    </b-nav-item-dropdown>

    <b-nav-item-dropdown
      id="actions-dropdown"
      text="Pieces 2"
      toggle-class="nav-link-custom"
      class="mt-4"
      right
      >
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.TOLEDO, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">Toledo </b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.GRANADA, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">Granada </b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.VALENCIA, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">Valencia </b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.TIMBUKTU, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">Timbuktu </b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.ALGIERS, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">Algiers </b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.VENICE, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">Venice </b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.VENICE_2, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">Venice 2 </b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.CONSTANTINOPLE, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">Constantinople </b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.CONSTANTINOPLE_2, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">Constantinople 2</b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.CONSTANTINOPLE_3, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">Constantinople 3 </b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.MODON, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">Modon </b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.RHODES, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">Rhodes </b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.CYPRUS, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">Cyprus </b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.CAIRO, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">CAiro </b-dropdown-item>
        <b-dropdown-item @click="showCard({ cardId: CITY_NAMES.RED_SEA, cardType: CARD_TYPE.PIECE, pieceId: PIECE_TYPE.MUSLIM_KNIGHT })">Red Sea </b-dropdown-item>
    </b-nav-item-dropdown>
    <!-- <b-nav-item-dropdown
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
    </b-nav-item-dropdown> -->
  </b-nav>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { COUNTRY_CODES, VICTORY_TYPE, CITY_NAMES, PIECE_TYPE, CARD_TYPE } from "@/constants/enums";

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
        const store = useStore();
        const newGame = async () => {
            await store.dispatch("board/newGameBoard");
        };

        const showCard = (card) => context.emit("showCard", card);
        return {
            selectedOption,
            changeSelection,
            showCard,
            COUNTRY_CODES,
            VICTORY_TYPE,
            CITY_NAMES,
            PIECE_TYPE,
            CARD_TYPE,
            newGame,
        };
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
