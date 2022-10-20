import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue3 } from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import contextmenu from "v-contextmenu";
import "v-contextmenu/dist/themes/default.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faUserSecret,
    faMagnifyingGlass,
    faMagnifyingGlassPlus,
    faChevronLeft,
    faChevronRight,
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleArrowRight,
    faArrowRight,
    faInfoCircle,
    faInfo,
} from "@fortawesome/free-solid-svg-icons";
import "./assets/general.scss";

library.add(
    faMagnifyingGlassPlus,
    faMagnifyingGlass,
    faUserSecret,
    faChevronLeft,
    faChevronRight,
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleArrowRight,
    faArrowRight,
    faInfoCircle,
    faInfo,
);

createApp(App)
    .use(store)
    .use(router)
    .use(BootstrapVue3)
    .use(contextmenu)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");
