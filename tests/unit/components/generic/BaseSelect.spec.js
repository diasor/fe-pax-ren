import { shallowMount } from "@vue/test-utils";
import BaseSelect from "@/components/generic/BaseSelect.vue";

let wrapper = null;
const options = ["option 1", "option 2", "option 3"]
const selected = "option 1";
beforeEach(() => {
    wrapper = shallowMount(BaseSelect, {
        props: {
            options,
            selected
        },
    });
});

afterEach(() => {
    wrapper.unmount()
});

describe("Testing BaseSelect Template", () => {
    it("should render the b-form-select", () => {
        const selectComponent = wrapper.find('[data-testid="select-option"]');
        expect(selectComponent.exists()).toBeTruthy();
    });
});

describe("Testing BaseSelect Methods", () => {
    describe("Testing changeSelection method", () => {
        it("should NOT emit the selectedOption event, if no option is sent", () => {
            wrapper.vm.changeSelection();
            expect(wrapper.emitted('selectedOption')).toBeFalsy();
        });

        it("should NOT emit the selectedOption event, if an empty option is sent", () => {
            wrapper.vm.changeSelection("");
            expect(wrapper.emitted('selectedOption')).toBeFalsy();
        });

        it("should emit the selectedOption event, if an option is sent", () => {
            wrapper.vm.changeSelection("first option");
            expect(wrapper.emitted('selectedOption')).toBeTruthy();
            expect(wrapper.emitted('selectedOption')).toHaveLength(1);
        });
    });
});