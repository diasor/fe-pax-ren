export const markets = {
    namespaced: true,
    state: () => ({
        eastMarket: [],
        refreshEastMarket: false,
        westMarket: [],
        refreshWestMarket: false,
        freeEastMarketCards: 0,
        freeWestMarketCards: 0,
    }),

    getters: {
        getEastMarket: (state) => state.eastMarket,
        getWestMarket: (state) => state.westMarket,
        getRefreshWestMarket: (state) => state.refreshWestMarket,
        getRefreshEastMarket: (state) => state.refreshEastMarket,
    },

    mutations: {
        SET_MARKET(state, market) {
            if (market) {
                if (market.eastMarket) {
                    state.eastMarket = market.eastMarket;
                } else {
                    state.eastMarket = [];
                }
                if (market.westMarket) {
                    state.westMarket = market.westMarket;
                } else {
                    state.westMarket = [];
                }
                state.refreshEastMarket = true;
                state.refreshWestMarket = true;
                console.log("EAST M ", state.eastMarket);
                console.log("WEST M ", state.westMarket);
            }
        },
    },

    actions: {
        setMarket( { commit }, market ) {
            commit("SET_MARKET", market);
        },
    },
}