<template>
    <b-form-select
        v-model="selectedOption"
        :options="options"
        @input="changeSelection(selectedOption)"
    />
</template>

<script>
import { ref } from 'vue';

export default {
    name: "BaseSelect",
    props: {
        options: {
            type: Array,
            default: () => [],
        },
        selected: {
            type: [ String, null ],
            default: null,
        },
    },
    emits: ["selectedOption"],
    setup(props, context){
        let selectedOption = props.selected ? ref(props.selected) : null;

        const changeSelection = (selectedValue) => {
            if (selectedValue) {
                context.emit("selectedOption", selectedValue);
            }
        };
        return { selectedOption, changeSelection }
    },
};
</script>
