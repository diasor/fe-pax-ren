<template>
    <div v-show="show" class="context-menu"  :style="menuStyle" ref="context" tabindex="0" @blur="closeMenu">
        <div v-for="item in elements" :key="item.id" class="context-menu-item">
            <div class="context-menu-item__icon"><font-awesome-icon icon="fa-circle-arrow-right" /></div>
            <div class="context-menu-item__text">{{ item.id }}</div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, nextTick, defineExpose, defineProps } from "vue";
import { onClickOutside } from "@vueuse/core";

let top = ref(0);
let left = ref(0);
let show = ref(false);
let context = ref(null);

const props = defineProps({
    itemList: Array,
});

const elements = computed(() => props.itemList || []);

const menuStyle = computed(() => {
    return {
        "top": `${top.value}px`,
        "left": `${left.value}px`,
    };
});

const openMenu = async (event) => {
    // updates position of context menu 
    top.value = event.pageY || event.clientY;
    left.value = event.pageX || event.clientX;

    if (top.value > 0 && left.value > 0) {
        // make element focused 
        await nextTick(() => {
            context.value.focus();
            show.value = true;
        });
    }

};

onClickOutside(context, () => {
    if (show.value) {
        show.value = false;
        top.value = 0;
        left.value = 0;
    }
});

defineExpose({ openMenu });
</script>

<style lang="scss" scoped>
@import "./../../assets/colors.scss";

.context-menu {
    position: fixed;
    z-index: 999;
    outline: none;
    box-shadow: inset 0px 30px 50px 5px $sandColor;
    border-radius: 10px;
    display: flex;
    justify-content: flex-start !important;
    flex-direction: column;
    align-items: flex-start;
    color: $buttonColor;
    cursor: pointer;
}
.context-menu-item {
    display: flex;
    padding: 5px 10px;

    &__icon {
        padding-top: 3px;
        padding-right: 3px;
        font-size: 0.7rem;
    }

    &__text {
        font-family: "Lobster";
        font-size: 0.9rem;
    }
}
</style>
