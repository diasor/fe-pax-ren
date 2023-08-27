import { shallowMount } from "@vue/test-utils";
import BaseInformation from "@/components/generic/BaseInformation.vue";

let wrapper = null;
const text = "Information to show";
beforeEach(() => {
    wrapper = shallowMount(BaseInformation, {
        props: {
            text,
        },
        global: {
            stubs: ['FontAwesomeIcon']
        },
    });
});

afterEach(() => {
    wrapper.unmount()
});

describe("Testing BaseInformation Template", () => {
    it("should render the main container and the image", () => {
        const mainContainer = wrapper.find('[data-testid="information-container"]');
        expect(mainContainer.exists()).toBeTruthy();

        const informationImage = wrapper.find('[data-testid="information-image"]');
        expect(informationImage.exists()).toBeTruthy();
    });

    it("should render the text container and the text, if showInformation is true", async () => {
        wrapper.vm.showInformation = true;
        await wrapper.vm.$nextTick();

        const informationText = wrapper.find('[data-testid="information-text"]');
        expect(informationText.exists()).toBeTruthy();
    });
});

describe("Testing BaseInformation Methods", () => {
    describe("Testing toggleInformation method", () => {
        it("should show showInformation to true, if it was false", () => {
            wrapper.vm.toggleInformation();
            expect(wrapper.vm.showInformation).toBeTruthy();
        });

        it("should show showInformation to false, if it was true", async () => {
            wrapper.vm.showInformation = true;
            await wrapper.vm.$nextTick();
            wrapper.vm.toggleInformation();
            expect(wrapper.vm.showInformation).toBeFalsy();
            expect(wrapper.html()).toContain(text);
        });
    });
});
