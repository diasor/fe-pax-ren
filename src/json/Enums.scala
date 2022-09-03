package com.alvrod.paxren.model

enum CityName {
  case                                                                 // ENGLAND
    LONDON, BORDEAUX,
    // FRANCE
    BRUGES, PARIS, LYON,
    // HRE
    LUBECK, NOVGOROD, NURNBERG, VIENNA,
    // HUNGARY
    BUDA, VARNA,
    // BYZANTIUM
    TANA, CAFFA, TREBIZOND,
    // PORTUGAL
    TOLEDO, GRANADA, SPICE_ISLANDS,
    // ARAGON
    VALENCIA, ALGIERS, TIMBUKTU,
    // PAPAL_STATES
    VENICE, VENICE_2,                                                  // some cards allow to have 2 knights in Venice
    // OTTOMAN
    CONSTANTINOPLE, CONSTANTINOPLE_2, CONSTANTINOPLE_3, MODON, RHODES, // Constantinople has 3 locations
    // MAMLUK
    CYPRUS, CAIRO, RED_SEA
}



enum KingdomName {
  case ENGLAND, FRANCE, HRE, HUNGARY, BYZANTIUM,
    PORTUGAL, ARAGON, PAPAL_STATES, OTTOMAN, MAMLUK
}

enum LocationType {
  case KINGDOM, REGION, NONE // NONE is for Queens (look at suitors instead)
}

enum OneShotAction {
  case CORONATION, CONSPIRACY, PEASANT_REVOLT,
    TRADE_SHIFT_TIMBUKTU, TRADE_SHIFT_NOVGOROD,
    TRADE_SHIFT_SPICE_ISLANDS, TRADE_SHIFT_SPICE_ISLANDS_REQUIRING_DISCOVERY_PRESTIGE,
    TRADE_SHIFT_RED_SEA,
    TRADE_SHIFT_TANA, TRADE_SHIFT_TREBIZOND,
    CRUSADE, JIHAD, REFORMATION,
    APOSTASY_MUSLIM_CATHOLIC, APOSTASY_MUSLIM_REFORMIST,
    APOSTASY_CATHOLIC_REFORMIST
}

enum Piece {
  case CATHOLIC_PIRATE, MUSLIM_PIRATE, REFORMIST_PIRATE,
    CATHOLIC_ROOK, MUSLIM_ROOK, REFORMIST_ROOK,
    CATHOLIC_ROOK_FREE, MUSLIM_ROOK_FREE, REFORMIST_ROOK_FREE,
    CATHOLIC_KNIGHT, MUSLIM_KNIGHT, REFORMIST_KNIGHT,
    CATHOLIC_KNIGHT_FREE, MUSLIM_KNIGHT_FREE, REFORMIST_KNIGHT_FREE,
    CATHOLIC_BISHOP, MUSLIM_BISHOP, REFORMIST_BISHOP,
    MARCHIONNI_CONCESSION, FUGGER_CONCESSION, COEUR_CONCESSION, MEDICI_CONCESSION, GENERIC_CONCESSION, // For Agents
    BUSTED_TOKEN_EAST, BUSTED_TOKEN_WEST,
    FREE, INACTIVE                                                                                     // to help remember if Venice's Condottieri 2nd knight is in effect or not
}

enum PlayerAction {
  case PURCHASE, PLAY, SELL,
    TABLEAU_OPS_EAST, TABLEAU_OPS_WEST, TABLEAU_OPS_BOTH, // some card abilities allow this
    TRADE_FAIR_EAST, TRADE_FAIR_WEST, VICTORY
}

enum Prestige {
  case PATRONAGE, RENAISSANCE, DISCOVERY, MUSLIM, CATHOLIC, REFORMIST
}

enum TableauAction {
  case INQUISITOR_MUSLIM, INQUISITOR_CATHOLIC, INQUISITOR_REFORMIST,
    COMMERCE_EAST, COMMERCE_WEST,
    BEHEAD, TAX, SIEGE, VOTE_EAST, VOTE_WEST, CAMPAIGN,
    CORSAIR_MUSLIM, CORSAIR_CATHOLIC, CORSAIR_REFORMIST,
    REPRESS_CONCESSION, REPRESS_ROOK, REPRESS_KNIGHT,
    REPRESS_CONCESSION_ROOK, REPRESS_CONCESSION_KNIGHT, REPRESS_ROOK_KNIGHT,
    REPRESS_CONCESSION_ROOK_KNIGHT
}

enum MapType {
  case Map1450, Map1550
}

enum KingdomLocation {
  case THRONE,
    TABLEAU_MARCHIONNI_EAST, TABLEAU_MARCHIONNI_WEST,
    TABLEAU_COEUR_EAST, TABLEAU_COEUR_WEST,
    TABLEAU_MEDICI_EAST, TABLEAU_MEDICI_WEST,
    TABLEAU_FUGGER_EAST, TABLEAU_FUGGER_WEST,
}

enum Comet {
  case COMET_EAST_1, COMET_EAST_2, COMET_WEST_1, COMET_WEST_2
}

enum CardAbility {
  case SYNCRETISM,                   // Your cards are immune to silencing by Bishops
    SELL_FOUR_FLORINS,               // Sell this card for 4 instead of 2 florins (Ransom, Aztec Gold)
    POPULAR_REPRISALS,               // As an action, discard this card to launch a peasant revolt in her empire
    FORTIFICATIONS,                  // You may do "activate eastern ops" without expending an action
    ASTRONOMICAL_NAVIGATION,         // Your Patronage prestige counts as concessions in a globalization victory
    SECULAR_UNIVERSITY,              // This card counts as a Republic for a Renaissance victory
    PIRACY_IMMUNITY,                 // Your concessions cannot be killed by pirates (Imperial Arsenal, Ragusan Maritime Immunity)
    DOUBLE_OPS,                      // May do east & west ops in one action (Gritti Spies, Leo Africanus)
    GENOCIDE,                        // The card's Op can only be used on any east card with a green or red bishop token
    GLOBALIZATION_VICTORY_2_ACTIONS, // Global!!! Declaring globalization victory costs 2 actions, all players
    MAMLUK_GOLDEN_AGE,               // Your Patronage prestige counts as green Bishops towards your Holy victory
    SLAVE_SOLDIERS,                  // Each repressed token in Mamluk counts as a Knight in your East campaign
    JEWISH_BANKERS,                  // Each of your Patronage reduce the cost to run vote Ops by 1
    SULEYMAN_PATRONAGE,              // Green Pirates count both as red Bishops and red units when calculating religious supremacy
    HOLOCAUST,                       // This card's behead Op can only be used on any west card with a red or gold Bishop tokem
    HENRY_VIII,                      // Your coronation One-shot can claim Kings who are married or in an opponents Tableau
    KNIGHTS_OF_RHODES,               // In crusades, you may count ruling class gold Rooks as Knights
    CAPE_GOOD_HOPE,                  // Your concessions count 2x in Spice Islands trade fairs
    CONDOTTIERE,                     // Venice can hold 2 gold Knights instead of 1
    UNLIMITED_HAND_SIZE, COMMANDER_VENICE_GALLEYS, COUNTER_REFORMATION, MEDICI_CIPHERS_BROKEN,
    PATRONS_RENOWN, PATRONAGE_PRESTIGE_COUNTS_AS_RENAISSANCE_PRESTIGE, FREE_WESTERN_OPS, PRAGMATIC_TREACHERY,
    HOLY_VICTORY_2_ACTIONS, CARTOGRAPHY, IMPERIAL_VICTORY_2_ACTIONS, BUFFER_STATE, NATURE_OF_THINGS, APOSTASY_IMMUNITY,
    ENDING_SUBSISTENCE_FARMING
}

enum CardType {
  case COMET, KINGDOM, MARKET_CARD
}
