import { shallowMount } from "@vue/test-utils";
import BaseSideMenu from "@/components/generic/BaseSideMenu.vue";
import { mockStore, mockSetBankerPlaying } from "./../../mocks/store.js";

let wrapper = null;
beforeEach(() => {
    wrapper = shallowMount(BaseSideMenu, {
        global: { 
            provide: { 
                store: mockStore(),
            },
        }
    });
});

afterEach(() => {
    wrapper.unmount()
});

describe("Testing BaseSideMenu Template", () => {
    it("should not render the main container and none of the banker's containers, if show is true and the bankers are undefined", async () => {
        const mainContainer = wrapper.find('[data-testid="floating-menu-container"]');
        expect(mainContainer.exists()).toBeTruthy();
        const fuggerContainer = wrapper.find('[data-testid="fugger-container"]');
        expect(fuggerContainer.exists()).toBeFalsy();
        const coeurContainer = wrapper.find('[data-testid="coeur-container"]');
        expect(coeurContainer.exists()).toBeFalsy();
        const mediciContainer = wrapper.find('[data-testid="medici-container"]');
        expect(mediciContainer.exists()).toBeFalsy();
        const marchionniContainer = wrapper.find('[data-testid="marchionni-container"]');
        expect(marchionniContainer.exists()).toBeFalsy();
    });

    it("should not render the main Fugger, if Fugger is playing", async () => {
        mockSetBankerPlaying(wrapper.vm.store, "fugger");
        await wrapper.vm.$nextTick();
        const fuggerContainer = wrapper.find('[data-testid="fugger-container"]');
        expect(fuggerContainer.exists()).toBeTruthy();
    });

    it("should not render the main Medici, if Medici is playing", async () => {
        mockSetBankerPlaying(wrapper.vm.store, "medici");
        await wrapper.vm.$nextTick();
        const mediciContainer = wrapper.find('[data-testid="medici-container"]');
        expect(mediciContainer.exists()).toBeTruthy();
    });

    it("should not render the main Coeur, if Coeur is playing", async () => {
        mockSetBankerPlaying(wrapper.vm.store, "coeur");
        await wrapper.vm.$nextTick();
        const coeurContainer = wrapper.find('[data-testid="coeur-container"]');
        expect(coeurContainer.exists()).toBeTruthy();
    });

    it("should not render the main Marchionni, if Marchionni is playing", async () => {
        mockSetBankerPlaying(wrapper.vm.store, "marchionni");
        await wrapper.vm.$nextTick();
        const marchionniContainer = wrapper.find('[data-testid="marchionni-container"]');
        expect(marchionniContainer.exists()).toBeTruthy();
    });
});

describe("Testing ContextMenu Computed properties", () => {
    describe("Testing showFugger computed", () => {
        it("should return false, if fugger is undefined", () =>
            expect(wrapper.vm.showFugger).toBeFalsy());

        it("should return true, if fugger is set", () => {
            mockSetBankerPlaying(wrapper.vm.store, "fugger");
            expect(wrapper.vm.showFugger).toBeTruthy();
        });
    });

    describe("Testing showMedici computed", () => {
        it("should return false, if Medici is undefined", () =>
            expect(wrapper.vm.showMedici).toBeFalsy());

        it("should return true, if Medici is set", () => {
            mockSetBankerPlaying(wrapper.vm.store, "medici");
            expect(wrapper.vm.showMedici).toBeTruthy();
        });
    });

    describe("Testing showCoeur computed", () => {
        it("should return false, if Coeur is undefined", () =>
            expect(wrapper.vm.showCoeur).toBeFalsy());

        it("should return true, if Coeur is set", () => {
            mockSetBankerPlaying(wrapper.vm.store, "coeur");
            expect(wrapper.vm.showCoeur).toBeTruthy();
        });
    });

    describe("Testing showMarchionni computed", () => {
        it("should return false, if Marchionni is undefined", () =>
            expect(wrapper.vm.showMarchionni).toBeFalsy());

        it("should return true, if Marchionni is set", () => {
            mockSetBankerPlaying(wrapper.vm.store, "marchionni");
            expect(wrapper.vm.showMarchionni).toBeTruthy();
        });
    });
});

describe("Testing BaseSideMenu Methods", () => {
    describe("Testing openTableau method", () => {
        it("should emit openTableau", () => {
            wrapper.vm.openTableau();
            expect(wrapper.emitted('openTableau')).toBeTruthy();
            expect(wrapper.emitted('openTableau')).toHaveLength(1);
        });
    });
});