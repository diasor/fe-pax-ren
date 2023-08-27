import { shallowMount } from "@vue/test-utils";
import BaseModal from "@/components/generic/BaseModal.vue";

let wrapper = null;
const title = "Modal title";
const imageName = "image.jpg";
beforeEach(() => {
    wrapper = shallowMount(BaseModal, {
        props: {
            title,
            imageName,
            showModal: true,
        },
        global: {
            stubs: ['FontAwesomeIcon']
        }
    });
});

afterEach(() => {
    wrapper.unmount()
});

describe("Testing BaseModal Template", () => {
    it("should render the main container and the image, if renderModal is true", () => {
        const mainContainer = wrapper.find('[data-testid="modal-container"]');
        expect(mainContainer.exists()).toBeTruthy();

        const navImage = wrapper.find('[data-testid="modal-image"]');
        expect(navImage.exists()).toBeTruthy();
    });

    it("should show the modal title", () =>
        expect(wrapper.html()).toContain(title));
});

describe("Testing BaseModal Methods", () => {
    describe("Testing closeModal method", () => {
        it("should render the sideBar component", () => {
            expect(wrapper.vm.renderModal).toBeTruthy();
            wrapper.vm.closeModal();
            expect(wrapper.emitted('closeModal')).toBeTruthy();
            expect(wrapper.emitted('closeModal')).toHaveLength(1);
            expect(wrapper.vm.renderModal).toBeFalsy();
        });
    });
});
