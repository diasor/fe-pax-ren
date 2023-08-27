import { shallowMount } from "@vue/test-utils";
import { SlideInOut } from "vue3-transitions";
import { createStore } from "vuex";
import TableauSideBar from "@/components/tableau/TableauSideBar.vue";
import TableauOpsHeader from "@/components/tableau/TableauOpsHeader.vue";
import TableauOpsCards from "@/components/tableau/TableauOpsCards.vue";
import TableauOpsHand from "@/components/tableau/TableauOpsHand.vue";
import TableauOpsDocumentation from "@/components/tableau/TableauOpsDocumentation.vue";
import { board } from "@/store/modules/board";
import { kingdoms } from "@/store/modules/kingdoms";
import { markets } from "@/store/modules/markets";
import { borders } from "@/store/modules/borders";
import { bankers } from "@/store/modules/bankers";

let wrapper = null;
beforeEach(async () => {
    // render the component
    wrapper = shallowMount(TableauSideBar, {
        props: {
            showPanel: true,
            banker: 'fugger',
        },
        global: { 
            provide: { 
                store: createStore({
                    modules: {
                        board,
                        kingdoms,
                        markets,
                        borders,
                        bankers,
                    },
                }),
            }
        }
    });
    await wrapper.vm.$nextTick();
  })

afterEach(() => {
    wrapper.unmount()
});

describe("Testing TableauSideBar Template", () => {
    it("should render SlideInOut component", () => {
        expect(wrapper.findAllComponents(SlideInOut)).toHaveLength(1);
    });
    
    it("should render TableauOpsHeader, TableauOpsCards, TableauOpsHand  and TableauOpsDocumentation component after the 800ms transition is done", () => {
        setTimeout(() => {
            expect(wrapper.findAllComponents(TableauOpsHeader)).toHaveLength(1);
            expect(wrapper.findAllComponents(TableauOpsCards)).toHaveLength(1);
            expect(wrapper.findAllComponents(TableauOpsHand)).toHaveLength(1);
            expect(wrapper.findAllComponents(TableauOpsDocumentation)).toHaveLength(1);
            expect(wrapper.vm.cardInformation).toMatch("Right click on a card to see all the possible actions on it.");
        }, 900);
    });
});

describe("Testing TableauSideBar Computed", () => {
    describe("Testing bankerData computed", () => {
        it("should return Fugger's data", async () => {
            const expectedBanker = {
                name: "Fugger",
                image: "/images/PR2_punchout_playerboard_Blue.png",
                shield: "/images/PRen_Icon_Shield_Fugger_small.png",
                full: {}
            };
            await wrapper.vm.$nextTick();
            expect(wrapper.vm.bankerData).toEqual(expectedBanker);
        });
    });
});

describe("Testing TableauSideBar Methods", () => {
    describe("Testing closeTableau method", () => {
        it("emit something", () => {
            wrapper.vm.closeTableau();
            expect(wrapper.emitted('closeTableau')).toBeTruthy();
            expect(wrapper.emitted('closeTableau')).toHaveLength(1);
        });
    });
});