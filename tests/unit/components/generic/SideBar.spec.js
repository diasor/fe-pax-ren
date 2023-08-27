import { shallowMount } from "@vue/test-utils";
import { SlideInOut } from "vue3-transitions";
import SideBar from "@/components/generic/SideBar.vue";
import { mockStore } from "./../../mocks/store.js";

let wrapper = null;
const title = "My side bar";
const text = "Something to show here";
const button = "Close";
const store = mockStore();
beforeEach(async () => {
    wrapper = shallowMount(SideBar, {
        props: {
            title,
            text,
            button,
        },
        global: { 
            provide: { 
                store: {
                    ...store,
                    board: {
                        ...store.board,
                        navOpen: true,
                    },
                }
            }
        }
    });
    await wrapper.vm.$nextTick();
  })

afterEach(() => {
    wrapper.unmount()
});

describe("Testing SideBar Template", () => {
    it("should render the sideBar component, if navOpen is true", async () => {
        // wrapper.vm.store.dispatch("board/setNavOpen", true, { root: true });
        const sideBarContainer = wrapper.find('[data-testid="side-bar-container"]');
        expect(sideBarContainer.exists()).toBeTruthy();
    });

    it("should render SlideInOut component", () => {
        expect(wrapper.findAllComponents(SlideInOut)).toHaveLength(1);
    });

    it("should render the side bar title, text and button after the 800ms transition is done", () => {
        setTimeout(() => {
            const sideBarTitle = wrapper.find('[data-testid="title"]');
            const sideBarText = wrapper.find('[data-testid="text"]');
            const sideBarButton = wrapper.find('[data-testid="button"]');
            expect(sideBarTitle).toMatch(title);
            expect(sideBarText).toMatch(text);
            expect(sideBarButton).toMatch(button);
        }, 900);
    });
    
    it("should render the sideBar component", async () => {
        const sideBarContainer = wrapper.find('[data-testid="side-bar-container"]');
        expect(sideBarContainer.exists()).toBeTruthy();
    });
});

describe("Testing SideBar Computed properties", () => {
    describe("Testing bankerData computed", () => {
        it("should true if navOpen is true",  () => {
            wrapper.vm.store.dispatch("board/setNavOpen", true, { root: true });
            expect(wrapper.vm.isPanelOpen).toBeTruthy();
        });

        it("should return false if navOpen false", () => {
            wrapper.vm.closeSidebarPanel();
            expect(wrapper.vm.isPanelOpen).toBeFalsy();
        });
    });
});

describe("Testing SideBar Methods", () => {
    describe("Testing closeSidebarPanel method", () => {
        it("emit closeBar and change navOpen to false", () => {
            wrapper.vm.closeSidebarPanel();
            expect(wrapper.emitted('closeBar')).toBeTruthy();
            expect(wrapper.emitted('closeBar')).toHaveLength(1);
            expect(wrapper.vm.isPanelOpen).toBeFalsy();
        });
    });
});