import { shallowMount } from "@vue/test-utils";
import BaseNavBar from "@/components/generic/BaseNavBar.vue";
import { mockStore } from "./../../mocks/store.js";

let wrapper = null;

beforeEach(() => {
    wrapper = shallowMount(BaseNavBar, {
        global: { 
            provide: { 
                store: mockStore(),
            }
        }
    });
});

afterEach(() => {
    wrapper.unmount()
});

describe("Testing BaseNavBar Template", () => {
    it("should render the b-nav-bar", () => {
        const navBar = wrapper.find('[data-testid="nav-bar-main"]');
        expect(navBar.exists()).toBeTruthy();
    });

    it("should render the nav-bar-title", () => {
        const navBarTitle = wrapper.find('[data-testid="nav-bar-title"]');
        expect(navBarTitle.exists()).toBeTruthy();
    });

    it("should render the nav-bar-new-game", () => {
        const navBarNewGame = wrapper.find('[data-testid="nav-bar-new-game"]');
        expect(navBarNewGame.exists()).toBeTruthy();
    });

    it("should render the nav-bar-player", () => {
        const navBarPlayers = wrapper.find('[data-testid="nav-bar-players"]');
        expect(navBarPlayers.exists()).toBeTruthy();
    });

    it("should render the nav-bar-profile", () => {
        const navBarProfile = wrapper.find('[data-testid="nav-bar-profile"]');
        expect(navBarProfile.exists()).toBeTruthy();
    });
});

describe.skip("Testing BaseNavBar Methods", () => {
    describe("Testing newGame method", () => {
        it("should emit the selectedOption event, if an option is sent", () => {
            wrapper.vm.newGame();
            const spyOnDispatch = jest.spyOn(wrapper.vm.store, 'dispatch');

            expect(spyOnDispatch).toHaveBeenCalled();
        });
    });
});