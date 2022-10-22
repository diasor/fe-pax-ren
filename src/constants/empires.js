import { COUNTRY_CODES, COUNTRY_NAMES } from "./enums";

export const ARAGON_NAME = `${COUNTRY_CODES.ARAGON}_E`;
export const BYZANTIUM_NAME = `${COUNTRY_CODES.BYZANTIUM}_E`;
export const ENGLAND_NAME = `${COUNTRY_CODES.ENGLAND}_E`;
export const FRANCE_NAME = `${COUNTRY_CODES.FRANCE}_E`;
export const HRE_NAME = `${COUNTRY_CODES.HRE}_E`;
export const HUNGARY_NAME = `${COUNTRY_CODES.HUNGARY}_E`;
export const MAMLUK_NAME = `${COUNTRY_CODES.MAMLUK}_E`;
export const OTTOMAN_NAME = `${COUNTRY_CODES.OTTOMAN}_E`;
export const PAPAL_STATE_NAME = `${COUNTRY_CODES.PAPAL_STATES}_E`;
export const PORTUGAL_NAME = `${COUNTRY_CODES.PORTUGAL}_E`;

export function empireByName(code) {
    switch (code) {
        case COUNTRY_NAMES.ARAGON:
            return ARAGON_NAME;
        case COUNTRY_NAMES.BYZANTIUM:
            return BYZANTIUM_NAME;
        case COUNTRY_NAMES.ENGLAND:
            return ENGLAND_NAME;
        case COUNTRY_NAMES.FRANCE:
            return FRANCE_NAME;
        case COUNTRY_NAMES.HRE:
            return HRE_NAME;
        case COUNTRY_NAMES.HUNGARY:
            return HUNGARY_NAME;
        case COUNTRY_NAMES.MAMLUK:
            return MAMLUK_NAME;
        case COUNTRY_NAMES.OTTOMAN:
            return OTTOMAN_NAME;
        case COUNTRY_NAMES.PAPAL_STATES:
            return PAPAL_STATE_NAME;
        case COUNTRY_NAMES.PORTUGAL:
            return PORTUGAL_NAME;
    }      
}

export const EMPIRE_FILES = [
    // England
    {
        id: ENGLAND_NAME,
        file: "Empire card1.png",
        name: "King Edward IV, House of York",
        government: "FEUDAL",
    },
    {
        id: ENGLAND_NAME,
        file: "Empire card2.png",
        name: "English Parliament",
        government: "REPUBLIC",
    },
    // France
    {
        id: FRANCE_NAME,
        file: "Empire card3.png",
        name: "Louis XI the Spider, House of Valois",
        government: "FEUDAL",
    },
    {
        id: FRANCE_NAME,
        file: "Empire card4.png",
        name: "States General of Burgundy",
        government: "REPUBLIC",
    },
    // Aragon
    {
        id: ARAGON_NAME,
        file: "Empire card5.png",
        name: "John the Faithless, King of Aragon",
        government: "FEUDAL",
    },
    {
        id: ARAGON_NAME,
        file: "Empire card6.png",
        name: "Golden Ambrosian Republic",
        government: "REPUBLIC",
    },
    // Papal States
    {
        id: PAPAL_STATE_NAME,
        file: "Empire card7.png",
        name: "Pope Julius II",
        government: "FEUDAL",
    },
    {
        id: PAPAL_STATE_NAME,
        file: "Empire card8.png",
        name: "Florentine Signoria",
        government: "REPUBLIC",
    },
    // Portugal
    {
        id: PORTUGAL_NAME,
        file: "Empire card9.png",
        name: "Henry the Navigator",
        government: "FEUDAL",
    },
    {
        id: PORTUGAL_NAME,
        file: "Empire card10.png",
        name: "Cortes Generales of Castile",
        government: "REPUBLIC",
    },
    // Holly Roman Empire
    {
        id: HRE_NAME,
        file: "Empire card11.png",
        name: "Frederick III, House of Habsburg",
        government: "FEUDAL",
    },
    {
        id: HRE_NAME,
        file: "Empire card12.png",
        name: "Reichstag Imperial Diet",
        government: "REPUBLIC",
    },
    // Hungary
    {
        id: HUNGARY_NAME,
        file: "Empire card13.png",
        name: "Matyas Corvinus, King of Hungary",
        government: "FEUDAL",
    },
    {
        id: HUNGARY_NAME,
        file: "Empire card14.png",
        name: "Polish Lithuanian Sejm",
        government: "REPUBLIC",
    },
    // Ottoman
    {
        id: OTTOMAN_NAME,
        file: "Empire card15.png",
        name: "Sultan Mehmed II the Conqueror",
        government: "FEUDAL",
    },
    {
        id: OTTOMAN_NAME,
        file: "Empire card16.png",
        name: "Ottoman Millet System",
        government: "REPUBLIC",
    },
    // Byzantium
    {
        id: BYZANTIUM_NAME,
        file: "Empire card17.png",
        name: "David Comnenus Basileus of Trebizond",
        government: "FEUDAL",
    },
    {
        id: BYZANTIUM_NAME,
        file: "Empire card18.png",
        name: "Confederation of White Sheep Turkomen",
        government: "REPUBLIC",
    },
    // Mamluk
    {
        id: MAMLUK_NAME,
        file: "Empire card19.png",
        name: "Qa'it Bay ot the Burji Dynasty",
        government: "FEUDAL",
    },
    {
        id: MAMLUK_NAME,
        file: "Empire card20.png",
        name: "Karaman Bylik",
        government: "REPUBLIC",
    },
];