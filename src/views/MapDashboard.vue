<template>
    <div>
        <base-nav-bar />
        <div id="pr-map" class="map-container">
            <!-- all markers -->
            <map-markers :key="markersId" :showMarkers="!hideDashboard"  />
            
            <!-- all kingdoms -->
            <map-kingdoms  :showKingdoms="!hideDashboard" v-if="!hideDashboard"/>
        </div>
    </div>
    <side-bar title="Resizing in place" text="Resume game after resizing the screen." button="Resume" @closeBar="newGame"/>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted, watch, computed } from 'vue';
import BaseNavBar from "@/components/generic/BaseNavBar.vue";
import MapMarkers from "@/components/map/markers/MapMarkers.vue";
import MapKingdoms from '@/components/map/MapKingdoms.vue';
import SideBar from "@/components/generic/SideBar.vue";
import { useStore } from "vuex";

export default defineComponent({
    name: "MapDashboard",
    components: {
        BaseNavBar,
        MapMarkers,
        MapKingdoms,
        SideBar,
    },

    setup() {
        let hideDashboard = ref(false);
        let markersId = ref(0);
        let kingdomsId = ref(100);
        const store = useStore();
        const resumeGame = computed(() => store.getters["board/getResumeGame"]);
        const isNavOpen = computed(() => store.getters["board/isNavOpen"]);

        const resizeScreen = (async () => {
            await store.dispatch("board/setNavOpen", true, { root: true });
            hideDashboard.value = true;
        });
        
        const newGame = async () => {
            hideDashboard.value = true;
            store.dispatch("board/setResumeGame", true, { root: true });
        };

        onMounted(async () => {
            window.addEventListener("resize", resizeScreen);
        });

        watch(resumeGame, (resumeGame) => {
            if (resumeGame & !isNavOpen.value) {
                // if the user stopped resizing (isNavOpen is false) and requested to resume game
                // the game should be reloaded and both markers and kingdoms re mounted
                store.dispatch("board/newGameBoard");
                markersId.value = markersId.value + 1;
                kingdomsId.value = kingdomsId.value + 1;
                hideDashboard.value = false;
            }
        });

        onUnmounted(() => {
            window.removeEventListener("resize", resizeScreen);
        });

        return { hideDashboard, newGame, markersId, kingdomsId };
    }

});
</script>

<style lang="scss" scoped>
.map-container {
    position: relative;
}

image {
    width: 100% !important;
    max-width: 100%;    
    height: auto;
    vertical-align: middle;  
}
</style>
