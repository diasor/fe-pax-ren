<template>
    <div>
        <base-nav-bar @showCard="renderCard"/>
        <div id="pr-map" class="map-container">
            <img src="/images/PR2_board_plain.jpg" usemap="#pr-map" @click="imageClick "/>
            <map name="pr-map">
                <area v-for="area in kingdomMap" :key="area.title"
                    :id="area.id"
                    :alt="area.alt"
                    :title="area.title"
                    :coords="area.coords"
                    :shape="area.shape"
                    @click="doSomething(area)"
                >
            </map>
            <!-- <img v-if="showIslamico" src="/images/Map Card Islamic01.png" class="england" /> -->
            <img v-if="showIslamico" :src="`/images/${KINGDOMS_FILE[0].file}`" class="france" :style="franceDynamicClass" />
            <img v-if="showReformista" src="/images/Map Card Reformation01.png" class="england" />
            <img v-if="activateRenaissanceVictory" src="/images/PR2_Victorycards_active-01.png" class="renaissance-victory" />
        </div>
    </div>
</template>
<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { useMap } from "@/composables/map";
import BaseNavBar from "@/components/generic/BaseNavBar.vue";
import { KINGDOMS_FILE } from "@/constants/cards"; 

export default {
    name: "MapDashboard",
    components: {
        BaseNavBar,
    },
    setup(){
        let showIslamico = ref(false);
        let showReformista = ref(false);
        let activateRenaissanceVictory = ref(false);

        let originalXPer = ref(416/1189);
        // let originalYPer = ref(260/814);
        let originalYPer = ref(291/1251);
        let franceDynamicClass = ref({});


        /*
            x = 334
            width = 1440
            per = 23 (0.23%)

            newwidth = 1200
            per = 23
            x? = originalXPer * windowWidth
        */

        // const navBar = parseInt(document.getElementById('pr-mainMenu').offsetHeight, 10);
        // const getPageHeight = () => document.documentElement.scrollHeight;
        const getPageHeight = () => {
            return document.documentElement.getBoundingClientRect().height;
        };

        const getPageWidth = () => window.innerWidth;

        const { fullMap } = useMap();
        // const newx = parseInt(502 * window.innerWidth / 1440, 10);
        // const newy = parseInt(260 * window.innerHeight / 763, 10);
        const newx = parseInt(originalXPer.value * getPageWidth(), 10);
        const newy = parseInt(originalYPer.value * getPageHeight(), 10);
        let kingdomMap = ref(fullMap(newx, newy));
        const doSomething = (area) => {
            const coords = area.coords;
            const msg = `TITLE: ${area.title} => coords: ${coords} // Win Width: ${window.innerWidth}`;
            alert(msg);
            if (showIslamico.value) {
                showIslamico.value = false;
                showReformista.value = true;
            } else {
                showIslamico.value = true;
                showReformista.value = false;
            }
            if (area.title === "RenaissanceVictory") {
                activateRenaissanceVictory.value = true;
            }
        };

        const resizeScreen = (() => {
            const newx = parseInt(originalXPer.value * getPageWidth(), 10);
            const newy = parseInt(originalYPer.value * getPageHeight(), 10);
            // console.log(`===width: ${getPageWidth()} height ${getPageHeight()}`);
            // console.log(`NEW France X: ${newx} / Y: ${newy}`);
            kingdomMap.value = fullMap(newx, newy);
        });

        onMounted(() => {
            window.addEventListener("resize", resizeScreen);            
        });

        onUnmounted(() => {
            window.removeEventListener("resize", resizeScreen);
        });

        const imageClick = (e) => {
            // const X = e.pageX - e.target.offsetLeft;
            // const Y = e.pageY - e.target.offsetTop;
            const X = e.pageX;
            const Y = e.pageY;
            const coords = `X: ${X}, Y: ${Y}`;
            alert(coords);
        }

        const renderCard = (card) => {
            // console.log('card', card);
            if (card === 'france-islamic') {
                showIslamico.value = true;
                // console.log('RENDER ISLAMIC FRNACE');
                const mapAreaCoords = document.getElementById("france").coords;
                const coordX = mapAreaCoords.substring(0,3);
                const coordY = mapAreaCoords.substring(4,7);
                // console.log(`x: ${coordX} y: ${coordY}`);

                franceDynamicClass.value = {
                    top: `${coordY}px !important` ,
                    left: `${coordX}px !important`,
                    // width: `${width}px !important`,
                    width: "140px",
                    height: "auto",
                };
            }
        };

        return { franceDynamicClass, KINGDOMS_FILE, renderCard, showIslamico, showReformista, activateRenaissanceVictory, doSomething, imageClick, kingdomMap }
    },

};
</script>

<style lang="scss" svg>
.map-container {
    position: relative;
}

img {
    width: 100% !important;
    max-width: 100%;    
    height: auto;
    vertical-align: middle;  
}

.england {
    position: absolute;
    top: 257px;
    left: 331px;
    max-width: 145px;
    height: auto;
    border: 1px #2b2d2f solid;
    border-radius: 5px;
}

.france {
    position: absolute;
    // top: 257px;
    // left: 331px;
    max-width: 145px;
    height: auto;
    border: 1px #2b2d2f solid;
    border-radius: 5px;
}

.renaissance-victory {
    position: absolute;
    top: 128px;
    left: 140px;
    max-width: 124px;
    height: auto;
    border: 1px #2b2d2f solid;
    border-radius: 2px;
}
</style>
