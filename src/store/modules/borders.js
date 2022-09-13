import { forEach } from "lodash";
import { KINGDOM_NAMES } from "@/constants/enums";

export const borders = {
    namespaced: true,
    state: () => ({
        border1: {}, // England - France
        border2: {}, // England - Portugal
        border3: {}, // France - HRE
        border4: {}, // France - Aragon
        border5: {}, // HRE - Hungary
        border6: {}, // HRE - Papal States
        border7: {}, // Hungary - Byzantium
        border8: {}, // Hungary - Ottoman
        border9: {}, // Byzantium - Mamluk
        border10: {}, // Portugal - Aragon
        border11: {}, // Aragon - Papal States
        border12: {}, // Ottoman - Mamluk
        refreshBorders: false,
    }),

    getters: {
        getBorders: (state) => state,
        getRefreshBorders: (state) => state.refreshBorders,
    },

    mutations: {
        SET_BORDER(state, { border, borderNumber }) {
            if (border) {
                const borderName = `border${borderNumber}`;
                state[borderName] = border;
            }
        },
    },

    actions: {
        setBorders( { commit }, borders ) {
            forEach(borders, (border) => {
                if (border.firstKingdom === KINGDOM_NAMES.ENGLAND && border.secondKingdom === KINGDOM_NAMES.FRANCE) {
                    commit("SET_BORDER", { border, borderNumber: "1" });
                } else if (border.firstKingdom === KINGDOM_NAMES.ENGLAND && border.secondKingdom === KINGDOM_NAMES.PORTUGAL) {
                    commit("SET_BORDER", { border, borderNumber: "2" });
                } else if (border.firstKingdom === KINGDOM_NAMES.FRANCE && border.secondKingdom === KINGDOM_NAMES.HRE) {
                    commit("SET_BORDER", { border, borderNumber: "3" });
                } else if (border.firstKingdom === KINGDOM_NAMES.FRANCE && border.secondKingdom === KINGDOM_NAMES.ARAGON) {
                    commit("SET_BORDER", { border, borderNumber: "4" });
                } else if (border.firstKingdom === KINGDOM_NAMES.HRE && border.secondKingdom === KINGDOM_NAMES.HUNGARY) {
                    commit("SET_BORDER", { border, borderNumber: "5" });
                } else if (border.firstKingdom === KINGDOM_NAMES.HRE && border.secondKingdom === KINGDOM_NAMES.PAPAL_STATES) {
                    commit("SET_BORDER", { border, borderNumber: "6" });
                } else if (border.firstKingdom === KINGDOM_NAMES.HUNGARY && border.secondKingdom === KINGDOM_NAMES.BYZANTIUM) {
                    commit("SET_BORDER", { border, borderNumber: "7" });
                } else if (border.firstKingdom === KINGDOM_NAMES.HUNGARY && border.secondKingdom === KINGDOM_NAMES.OTTOMAN) {
                    commit("SET_BORDER", { border, borderNumber: "8" });
                } else if (border.firstKingdom === KINGDOM_NAMES.BYZANTIUM && border.secondKingdom === KINGDOM_NAMES.MAMLUK) {
                    commit("SET_BORDER", { border, borderNumber: "9" });
                } else if (border.firstKingdom === KINGDOM_NAMES.PORTUGAL && border.secondKingdom === KINGDOM_NAMES.ARAGON) {
                    commit("SET_BORDER", { border, borderNumber: "10" });
                } else if (border.firstKingdom === KINGDOM_NAMES.ARAGON && border.secondKingdom === KINGDOM_NAMES.PAPAL_STATES ) {
                    commit("SET_BORDER", { border, borderNumber: "11" });
                } else if (border.firstKingdom === KINGDOM_NAMES.OTTOMAN && border.secondKingdom === KINGDOM_NAMES.MAMLUK) {
                    commit("SET_BORDER", { border, borderNumber: "12" });
                }
            });
        },
    },
}