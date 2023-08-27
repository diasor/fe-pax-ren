import { shallowMount } from "@vue/test-utils";
import ContextMenu from "@/components/generic/ContextMenu.vue";

let wrapper = null;
const itemList = [
    "element one",
    "element two",
];
beforeEach(() => {
    // render the component
    wrapper = shallowMount(ContextMenu, {
        props: {
            itemList,
        },
        global: {
            stubs: ['FontAwesomeIcon']
          }
    });
});

afterEach(() => {
    wrapper.unmount()
});

describe("Testing ContextMenu Template", () => {
    it("should not render the main container if show is true", async () => {
        const mainContainer = wrapper.find('[data-testid="context-menu-container"]');
        expect(mainContainer.exists()).toBeTruthy();
    });
});

describe("Testing ContextMenu Computed properties", () => {
    describe("Testing elements computed", () => {
        it("should render the sideBar component", () =>
            expect(wrapper.vm.elements).toEqual(itemList));
    });

    describe("Testing menuStyle computed", () => {
        it("should return an object with top and left with zero pixel", () => {
            const expectedStyle = {
                top: "0px",
                left: "0px",
            };
            expect(wrapper.vm.menuStyle).toEqual(expectedStyle);
        });

        it("should return an object with top and left with the values previously set", async () => {
            wrapper.vm.top = 200;
            wrapper.vm.left = 500;
            await wrapper.vm.$nextTick();

            const expectedStyle = {
                top: "200px",
                left: "500px",
            };
            expect(wrapper.vm.menuStyle).toEqual(expectedStyle);
        });
    });
});
