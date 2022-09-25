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
        navOpen: false,
        resumeGame: false,
    }),

    getters: {
        allVictories: (state) => state.victories,
        allConcessions: (state) => state.concessions,
        getKingdomByName: (state) => (name) => find(state.kingdoms, (kingdom) => kingdom.name === name),
        getRefreshVictories: (state) => state.refreshVictories,
        isNavOpen: (state) => state.navOpen,
        getResumeGame: (state) => state.resumeGame,
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
        SET_NAV_OPEN(state, isOpen) {
            state.navOpen = isOpen;
        },
        SET_REFRESH_VICTORIES(state, refresh) {
            state.refreshVictories = refresh;
        },
        SET_RESUME_GAME(state, resume) {
            state.resumeGame = resume;
        }
    },

    actions: {
        async newGameBoard({ commit, dispatch }) {
            // get mocked data
            console.log("NEW GAME");
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

            // borders
            await dispatch("borders/setBorders", data.borders, { root: true });

            // bankers
            await dispatch("bankers/setAllBankers", data.bankers, { root: true });
        },

        setNavOpen({ commit }, isOpen) {
            commit("SET_NAV_OPEN", isOpen);
        },

        setRefreshVictories({ commit }, refresh) {
            commit("SET_REFRESH_VICTORIES", refresh);
        },

        setResumeGame({ commit }, resume) {
            commit("SET_RESUME_GAME", resume);
        }
    },
}