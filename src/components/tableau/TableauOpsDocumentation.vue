<template>
    <div class="tableau-ops-documentation">
        <img :src="documentationImange"  @click="openModal"/>
    </div>

    <tableau-ops-modal
        v-if="showModalDocumentation"
        :imageName="documentationImange"
        :showModal="showModalDocumentation"
        @closeModal="closeModal"
    />
</template>

<script setup>
import { defineProps, computed, ref } from "vue";
import TableauOpsModal from "./TableauOpsModal.vue";
import { find } from "lodash";
import { DOCUMENTATION_FILES } from "@/constants/cards";

const props = defineProps({
    imageName: String,
});
    
const documentationImange =  computed(() => {
    const doc = find(DOCUMENTATION_FILES, (iter) => iter.id === props.imageName);
    return `/images/${doc.file}`;
});

let showModalDocumentation = ref(false);
const openModal = () => {
    if (props.imageName) {
        showModalDocumentation.value = true;
    }
};
const closeModal = () => {
    showModalDocumentation.value = false;
};
</script>

<style lang="scss" scoped>
@import "./../../assets/colors.scss";
.tableau-ops-documentation {
    max-height: 78vh !important;
    display: flex;
    justify-content: center;

    > img {
        max-height: inherit;
        border-radius: 10px;
        cursor: url("~@/assets/images/magnifying-glass.svg"), auto !important;
    }
}

</style>


