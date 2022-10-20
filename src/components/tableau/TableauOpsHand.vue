<template>
    <div class="mt-5 pl-8">
        <base-carousel
            id="banker-hand-cards"
            :slides="slides"
            width="90"
            align="center"
        />
    </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import BaseCarousel from "@/components/generic/BaseCarousel.vue";

const props = defineProps({
    bankerHandCards: Array,
});

const slides = computed(() => props.bankerHandCards);
</script>
