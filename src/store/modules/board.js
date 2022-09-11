import { find } from "lodash";

export const board = {
    namespaced: true,
    state: () => ({
        victories: {
            isRenaissanceVictoryActive: false,
            isGlobalizationVictoryActive: false,
            isImperialVictoryActive: false,
            isHolyVictoryActive: false,
        },
        concessions: [],
        bankers: [],
        refreshVictories: false,
    }),

    getters: {
        allVictories: (state) => state.victories,
        allConcessions: (state) => state.concessions,
        getKingdomByName: (state) => (name) => find(state.kingdoms, (kingdom) => kingdom.name === name),
        getRefreshVictories: (state) => state.refreshVictories,
    },

    mutations: {
        SET_VICTORY_LIST(state, victories) {
            state.victories.isRenaissanceVictoryActive = victories.isRenaissanceVictoryActive;
            state.victories.isGlobalizationVictoryActive = victories.isGlobalizationVictoryActive;
            state.victories.isImperialVictoryActive = victories.isImperialVictoryActive;
            state.victories.isHolyVictoryActive = victories.isHolyVictoryActive;
            state.refreshVictories = true;
        },
        SET_CONCESSION_LIST(state, concessions) {
            state.concessions = [...concessions];
        },
        SET_BANKER_LIST(state, bankers) {
            state.bankers = [...bankers];
        },
    },

    actions: {
        async newGameBoard({ commit, dispatch }) {
            // get mocked data
            const game = await import("./../../json/fullGame.json");

            // kingdoms & pieces (cities)
            const data = game.Right.value;
            await dispatch("kingdoms/setAllKingdoms", data.kingdoms, { root: true })

            // victories
            const victories = {
                isRenaissanceVictoryActive: data.isRenaissanceVictoryActive,
                isGlobalizationVictoryActive: data.isGlobalizationVictoryActive,
                isImperialVictoryActive: data.isImperialVictoryActive,
                isHolyVictoryActive: data.isHolyVictoryActive,
            };
            commit("SET_VICTORY_LIST", victories);

            // markets
            await dispatch("markets/setMarket", data.market, { root: true });    
        },
    },
}