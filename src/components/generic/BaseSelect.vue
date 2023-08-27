<template>
    <b-form-select
        v-model="selectedOption"
        :options="options"
        data-testid="select-option"
        @input="changeSelection(selectedOption)"
    />
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

const props = defineProps({
    options: {
        type: Array,
        default: () => [],
    },
    selected: {
        type: [String, null],
        default: null,
    },
});
const emit = defineEmits(["selectedOption"]);

let selectedOption = props.selected ? ref(props.selected) : null;

const changeSelection = (selectedValue) => {
    if (selectedValue) {
        emit("selectedOption", selectedValue);
    }
};
</script>
