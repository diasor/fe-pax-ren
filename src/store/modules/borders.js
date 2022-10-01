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
    border12: {}, // Papal States - Ottoman
    border13: {}, // Ottoman - Mamluk
    refreshBorders: false,
  }),

  getters: {
    getBorders: (state) => state,
    getRefreshBorders: (state) => state.refreshBorders,
    getBorder1: (state) => state.border1,
    getBorder2: (state) => state.border2,
    getBorder3: (state) => state.border3,
    getBorder4: (state) => state.border4,
    getBorder5: (state) => state.border5,
    getBorder6: (state) => state.border6,
    getBorder7: (state) => state.border7,
    getBorder8: (state) => state.border8,
    getBorder9: (state) => state.border9,
    getBorder10: (state) => state.border10,
    getBorder11: (state) => state.border11,
    getBorder12: (state) => state.border12,
    getBorder13: (state) => state.border13,
  },

  mutations: {
    SET_BORDER(state, { border, borderNumber }) {
      if (border) {
        const borderId = `border${borderNumber}`;
        state[borderId] = border;
      }
    },
    SET_REFRESH_BORDERS(state, refreshValue) {
      state.refreshBorders = refreshValue;
    },
  },

  actions: {
    setBorders({ commit }, borders) {
      forEach(borders, (itemBorder) => {
        const border = { ...itemBorder, borderName: "" };
        if (
          itemBorder.firstKingdom === KINGDOM_NAMES.ENGLAND &&
          itemBorder.secondKingdom === KINGDOM_NAMES.FRANCE
        ) {
          border.borderName = `${KINGDOM_NAMES.ENGLAND}-${KINGDOM_NAMES.FRANCE}`;
          commit("SET_BORDER", { border, borderNumber: "1" });
        } else if (
          itemBorder.firstKingdom === KINGDOM_NAMES.ENGLAND &&
          itemBorder.secondKingdom === KINGDOM_NAMES.PORTUGAL
        ) {
          border.borderName = `${KINGDOM_NAMES.ENGLAND}-${KINGDOM_NAMES.PORTUGAL}`;
          commit("SET_BORDER", { border, borderNumber: "2" });
        } else if (
          itemBorder.firstKingdom === KINGDOM_NAMES.FRANCE &&
          itemBorder.secondKingdom === KINGDOM_NAMES.HRE
        ) {
          border.borderName = `${KINGDOM_NAMES.FRANCE}-${KINGDOM_NAMES.HRE}`;
          commit("SET_BORDER", { border, borderNumber: "3" });
        } else if (
          itemBorder.firstKingdom === KINGDOM_NAMES.FRANCE &&
          itemBorder.secondKingdom === KINGDOM_NAMES.ARAGON
        ) {
          border.borderName = `${KINGDOM_NAMES.FRANCE}-${KINGDOM_NAMES.ARAGON}`;
          commit("SET_BORDER", { border, borderNumber: "4" });
        } else if (
          itemBorder.firstKingdom === KINGDOM_NAMES.HRE &&
          itemBorder.secondKingdom === KINGDOM_NAMES.HUNGARY
        ) {
          border.borderName = `${KINGDOM_NAMES.HRE}-${KINGDOM_NAMES.HUNGARY}`;
          commit("SET_BORDER", { border, borderNumber: "5" });
        } else if (
          itemBorder.firstKingdom === KINGDOM_NAMES.HRE &&
          itemBorder.secondKingdom === KINGDOM_NAMES.PAPAL_STATES
        ) {
          border.borderName = `${KINGDOM_NAMES.HRE}-${KINGDOM_NAMES.PAPAL_STATES}`;
          commit("SET_BORDER", { border, borderNumber: "6" });
        } else if (
          itemBorder.firstKingdom === KINGDOM_NAMES.HUNGARY &&
          itemBorder.secondKingdom === KINGDOM_NAMES.BYZANTIUM
        ) {
          border.borderName = `${KINGDOM_NAMES.HUNGARY}-${KINGDOM_NAMES.BYZANTIUM}`;
          commit("SET_BORDER", { border, borderNumber: "7" });
        } else if (
          itemBorder.firstKingdom === KINGDOM_NAMES.HUNGARY &&
          itemBorder.secondKingdom === KINGDOM_NAMES.OTTOMAN
        ) {
          border.borderName = `${KINGDOM_NAMES.HUNGARY}-${KINGDOM_NAMES.OTTOMAN}`;
          commit("SET_BORDER", { border, borderNumber: "8" });
        } else if (
          itemBorder.firstKingdom === KINGDOM_NAMES.BYZANTIUM &&
          itemBorder.secondKingdom === KINGDOM_NAMES.MAMLUK
        ) {
          border.borderName = `${KINGDOM_NAMES.BYZANTIUM}-${KINGDOM_NAMES.MAMLUK}`;
          commit("SET_BORDER", { border, borderNumber: "9" });
        } else if (
          itemBorder.firstKingdom === KINGDOM_NAMES.PORTUGAL &&
          itemBorder.secondKingdom === KINGDOM_NAMES.ARAGON
        ) {
          border.borderName = `${KINGDOM_NAMES.PORTUGAL}-${KINGDOM_NAMES.ARAGON}`;
          commit("SET_BORDER", { border, borderNumber: "10" });
        } else if (
          itemBorder.firstKingdom === KINGDOM_NAMES.ARAGON &&
          itemBorder.secondKingdom === KINGDOM_NAMES.PAPAL_STATES
        ) {
          border.borderName = `${KINGDOM_NAMES.ARAGON}-${KINGDOM_NAMES.PAPAL_STATES}`;
          commit("SET_BORDER", { border, borderNumber: "11" });
        } else if (
          itemBorder.firstKingdom === KINGDOM_NAMES.PAPAL_STATES &&
          itemBorder.secondKingdom === KINGDOM_NAMES.OTTOMAN
        ) {
          border.borderName = `${KINGDOM_NAMES.PAPAL_STATES}-${KINGDOM_NAMES.OTTOMAN}`;
          commit("SET_BORDER", { border, borderNumber: "12" });
        } else if (
          itemBorder.firstKingdom === KINGDOM_NAMES.OTTOMAN &&
          itemBorder.secondKingdom === KINGDOM_NAMES.MAMLUK
        ) {
          border.borderName = `${KINGDOM_NAMES.OTTOMAN}-${KINGDOM_NAMES.MAMLUK}`;
          commit("SET_BORDER", { border, borderNumber: "13" });
        }
        commit("SET_REFRESH_BORDERS", true);
      });
    },

    setRefreshBorders({ commit }, refresh) {
      commit("SET_REFRESH_BORDERS", refresh);
    },
  },
};
