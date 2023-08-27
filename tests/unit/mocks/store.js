import { createStore } from "vuex";
import { upperFirst } from "lodash";
import { board } from "@/store/modules/board";
import { kingdoms } from "@/store/modules/kingdoms";
import { markets } from "@/store/modules/markets";
import { borders } from "@/store/modules/borders";
import { bankers } from "@/store/modules/bankers";

export function mockStore() {
    return createStore({
        modules: {
            board,
            kingdoms,
            markets,
            borders,
            bankers,
        },
    });
}

export function mockSetBankerPlaying(store, bankerName) {
    const banker = store.getters["bankers/getBanker"](bankerName);
    const setBankerName = `bankers/set${upperFirst(bankerName)}`;
    store.dispatch(setBankerName, banker);
}

