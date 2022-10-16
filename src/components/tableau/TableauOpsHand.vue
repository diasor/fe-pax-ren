<template>
    <base-carousel
        id="banker-hand-cards"
        class="mt-5 pl-8"
        :slides="bankerHandCards"
        width="90vw"
    />
</template>

<script>
import { defineComponent } from "vue";
import BaseCarousel from "@/components/generic/BaseCarousel.vue";

export default defineComponent({
    name: "TableauOpsHand",
    components: { BaseCarousel },
    props: {
        bankerHandCards: {
            type: Array,
            default: () => [],
        },
    },
});
</script>
