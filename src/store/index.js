import { createStore } from "vuex";
import { board } from "./modules/board";
import { kingdoms } from "./modules/kingdoms";
import { markets } from "./modules/markets";
import { borders } from "./modules/borders";
import { bankers } from "./modules/bankers";

const store = createStore({
    modules: {
        board,
        kingdoms,
        markets,
        borders,
        bankers,
    }
  })

export default store;