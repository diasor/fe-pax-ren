import { shallowMount } from "@vue/test-utils";
import BaseTooltip from "@/components/generic/BaseTooltip.vue";

let wrapper = null;
const text = "Tooltip text";
beforeEach(() => {
    // render the component
    wrapper = shallowMount(BaseTooltip, {
        props: {
            text,
        },
    });
});

afterEach(() => {
    wrapper.unmount()
});

describe("Testing BaseTooltip Template", () => {
    it("should render the BaseTooltip main container", async () => {
        const mainContainer = wrapper.find('[data-testid="tooltip-container"]');
        expect(mainContainer.exists()).toBeTruthy();
    });

    it("should render the tooltip text", () => {
        const tooltipText = wrapper.find('[data-testid="tooltip-text"]');
        expect(tooltipText.text()).toMatch(text);
    });
});

describe("Testing BaseTooltip Computed properties", () => {
    it("should render the sideBar component", () =>
        expect(wrapper.vm.information).toMatch(text));
});