import { createStore } from "vuex";
import { board } from "./modules/board";
import { kingdoms } from "./modules/kingdoms";
import { markets } from "./modules/markets";
import { borders } from "./modules/borders";

const store = createStore({
    modules: {
        board,
        kingdoms,
        markets,
        borders,
    }
  })

export default store;