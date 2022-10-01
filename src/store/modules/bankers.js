import { forEach } from "lodash";
import { BANKERS } from "@/constants/enums";

export const bankers = {
  namespaced: true,
  state: () => ({
    fugger: null,
    refreshFugger: false,
    marchionni: null,
    refreshMarchionni: false,
    coeur: null,
    refreshCoeur: false,
    medici: null,
    refreshMedici: false,
  }),

  getters: {
    // Fugger
    getFugger: (state) => state.fugger,
    getRefreshFugger: (state) => state.refreshFugger,
    isFuggerPlaying: (state) => state.fugger !== null,

    // Marchionni
    getMarchionni: (state) => state.marchionni,
    getRefreshMarchionni: (state) => state.refreshMarchionni,
    isMarchionniPlaying: (state) => state.marchionni !== null,

    // Couer
    getCoeur: (state) => state.coeur,
    getRefreshCoeur: (state) => state.refreshCoeur,
    isCoeurPlaying: (state) => state.coeur !== null,

    // Medici
    getMedici: (state) => state.medici,
    getRefreshMedici: (state) => state.refreshMedici,
    isMediciPlaying: (state) => state.medici !== null,
  },

  mutations: {
    SET_FUGGER(state, banker) {
      state.fugger = banker;
      state.refreshFugger = true;
    },

    SET_REFRESH_FUGGER(state, refresh) {
      state.refreshFugger = refresh;
    },

    SET_MARCHIONNI(state, banker) {
      state.marchionni = banker;
      state.refreshMarchionni = true;
    },

    SET_REFRESH_MARCHIONNI(state, refresh) {
      state.refreshMarchionni = refresh;
    },

    SET_COEUR(state, banker) {
      state.coeur = banker;
      state.refreshCoeur = true;
    },

    SET_REFRESH_COEUR(state, refresh) {
      state.refreshCoeur = refresh;
    },

    SET_MEDICI(state, banker) {
      state.medici = banker;
      state.refreshMedici = true;
    },

    SET_REFRESH_MEDICI(state, refresh) {
      state.refreshMedici = refresh;
    },
  },

  actions: {
    setAllBankers({ commit }, bankers) {
      forEach(bankers, (banker) => {
        switch (banker.name) {
          case BANKERS.FUGGER:
            commit("SET_FUGGER", banker);
            break;
          case BANKERS.MARCHIONNI:
            commit("SET_MARCHIONNI", banker);
            break;
          case BANKERS.COEUR:
            commit("SET_COEUR", banker);
            break;
          case BANKERS.MEDICI:
            commit("SET_MEIDICI", banker);
            break;
        }
      });
    },

    setFugger({ commit }, banker) {
      commit("SET_FUGGER", banker);
    },

    setRefreshFugger({ commit }, refresh) {
      commit("SET_REFRESH_FUGGER", refresh);
    },

    setMarchionni({ commit }, banker) {
      commit("SET_MARCHIONNI", banker);
    },

    setRefreshMarchionni({ commit }, refresh) {
      commit("SET_REFRESH_MARCHIONNI", refresh);
    },

    setCoeur({ commit }, banker) {
      commit("SET_COEUR", banker);
    },

    setRefreshCoeur({ commit }, refresh) {
      commit("SET_REFRESH_COEUR", refresh);
    },

    setMedici({ commit }, banker) {
      commit("SET_MEIDICI", banker);
    },

    setRefreshMedici({ commit }, refresh) {
      commit("SET_REFRESH_MEDICI", refresh);
    },
  },
};
