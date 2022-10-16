<template>
    <div class="card-title">
        <div class="banker">
            <div class="banker__icon">
                <b-img
                    width="40px"
                    :src="shield"
                    :alt="title"
                />
            </div>
            <div class="banker__title">
                <label>{{ title }}</label>
            </div>
        </div>
        <div class="close" @click="closeTableau">
            <span class="close">+</span>
        </div>
    </div>
</template>
<script>
import { defineComponent, computed, } from "vue";

export default defineComponent({
    name: "TableauOpsHeader",
    props: {
        name: {
            type: String,
            default: "",
        },
        shield: {
            type: String,
            required: "",
        },
    },

    emits: ["closeTableau"],

    setup(props, context) {
        const title = computed(() => `${props.name}'s tableau overview`);
        const closeTableau = () => {
            context.emit("closeTableau", true);
        };
        return {
            title,
            closeTableau,
        };
    },
});
</script>

<style lang="scss" scoped>
@import "./../../assets/colors.scss";
.card-title {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 80px;
    font-family: "Lobster Two" !important;
}

.banker {
    display: flex;
    justify-content: space-between;
    width: 90%;

    &__icon {
        display: flex;
        justify-content: center;
        margin: auto 1rem;
        padding: 1rem 0;
    }

    &__title {
        display: flex;
        color: $buttonColor !important;
        font-size: 2.5rem !important;
        margin: 1rem auto;
    }
}

.close {
    display: flex;
    justify-content: flex-end;
    align-self: center;
    width: 10%;
    overflow: hidden;

    span {
        padding-right: 60px !important;
        font-size: 3rem;
        font-weight: 600;
        display: inline-block;
        transform: rotate(45deg);
        color: $buttonColor;
        cursor: pointer;
    }
}
</style>