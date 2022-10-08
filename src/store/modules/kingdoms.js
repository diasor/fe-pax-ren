import { forEach, lowerCase, upperFirst, camelCase } from "lodash";

const defaultKingdom = {
    entityId: "",
    name: "",
    government: "FEUDAL",
    religion: "",
    cities: {},
    repressedPieces: [],
    location: "THRONE",
    marriedTo: null,
    vassalOf: null,
};

export const kingdoms = {
    namespaced: true,
    state: () => ({
        england: { ...defaultKingdom },
        refreshEngland: false,
        france: { ...defaultKingdom },
        refreshFrance: false,
        hre: { ...defaultKingdom },
        refreshHre: false,
        hungary: { ...defaultKingdom },
        refreshHungary: false,
        byzantium: { ...defaultKingdom },
        refreshByzantium: false,
        portugal: { ...defaultKingdom },
        refreshPortugal: false,
        aragon: { ...defaultKingdom },
        refreshAragon: false,
        papalStates: { ...defaultKingdom },
        refreshPapalStates: false,
        ottoman: { ...defaultKingdom },
        refreshOttoman: false,
        mamluk: { ...defaultKingdom },
        refreshMamluk: false,
    }),

    getters: {
        getEngland: (state) => state.england,
        getRefreshEngland: (state) => state.refreshEngland,
        getFrance: (state) => state.france,
        getRefreshFrance: (state) => state.refreshFrance,
        getHolyRomanEmpire: (state) => state.hre,
        getRefreshHRE: (state) => state.refreshHre,
        getHungary: (state) => state.hungary,
        getRefreshHungary: (state) => state.refreshHungary,
        getByzantium: (state) => state.byzantium,
        getRefreshByzantium: (state) => state.refreshByzantium,
        getPortugal: (state) => state.portugal,
        getRefreshPortugal: (state) => state.refreshPortugal,
        getAragon: (state) => state.aragon,
        getRefreshAragon: (state) => state.refreshAragon,
        getPapalStates: (state) => state.papalStates,
        getRefreshPapalStates: (state) => state.refreshPapalStates,
        getOttoman: (state) => state.ottoman,
        getRefreshOttoman: (state) => state.refreshOttoman,
        getMamluk: (state) => state.mamluk,
        getRefreshMamluk: (state) => state.refreshMamluk,
    },

    mutations: {
        SET_KINGDOM(state, kingdom) {
            const name = camelCase(lowerCase(kingdom.name));
            const refresh = `refresh${upperFirst(name)}`;

            if (name) {
                if (state[name]) {
                    state[name].entityId = kingdom.entityId;
                    state[name].name = kingdom.name;
                    state[name].government = kingdom.government;
                    state[name].religion = kingdom.religion;
                    state[name].cities = { ...kingdom.cities };
                    state[name].repressedPieces = {
                        ...kingdom.repressedPieces,
                    };
                    state[name].location = kingdom.location;
                    state[name].marriedTo = kingdom.marriedTo;
                    state[name].vassalOf = kingdom.vassalOf;
                    state[refresh] = true;
                }
            }
        },
        SET_REFRESH_KINGDOM(state, { kingdomName, refreshValue }) {
            const name = camelCase(lowerCase(kingdomName));
            const refresh = `refresh${upperFirst(name)}`;
            state[refresh] = refreshValue;
        },
    },

    actions: {
        setKingdom({ commit }, kingdom) {
            commit("SET_KINGDOM", kingdom);
        },

        setAllKingdoms({ commit }, kingdoms) {
            forEach(kingdoms, (kingdom) => {
                commit("SET_KINGDOM", kingdom);
            });
        },

        setRefreshKingdom({ commit }, refreshKingdom) {
            commit("SET_REFRESH_KINGDOM", refreshKingdom);
        },
    },
};
