<template>
  <div class="sidebar">
    <div
      class="sidebar-backdrop"
      @click="closeSidebarPanel"
      v-if="isPanelOpen"
    />
    <slide-in-out entry="left" exit="left" :duration="800" appear>
      <div v-if="isPanelOpen" class="sidebar-panel">
        <label class="title">{{ title }}</label>
        <label class="text">{{ text }}</label>
        <div class="button" @click="closeSidebarPanel">{{ button }}</div>
      </div>
    </slide-in-out>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { SlideInOut } from "vue3-transitions";
import { useStore } from "vuex";

export default defineComponent({
  name: "SideBar",
  components: { SlideInOut },
  props: {
    title: {
      type: String,
      default: "Side bar",
    },
    text: {
      type: String,
      default: () => "Side bar",
    },
    button: {
      type: String,
      default: "Close",
    },
  },
  emits: ["closeBar"],
  setup(_, { emit }) {
    const store = useStore();
    const isPanelOpen = computed(() => store.getters["board/isNavOpen"]);

    const closeSidebarPanel = () => {
      store.dispatch("board/setNavOpen", false, { root: true });
      emit("closeBar", true);
    };

    return { isPanelOpen, closeSidebarPanel };
  },
});
</script>

<style lang="scss" scoped>
@import "./../../assets/colors.scss";

.sidebar-backdrop {
  background-color: $backdropColor;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar-panel {
  overflow-y: auto;
  background: url("./../../../public/images/empty-card-victorian.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  left: 0;
  top: 30%;
  width: 350px;
  height: 350px;
  z-index: 999;
  border-radius: 20px !important;

  .title {
    padding-left: 4rem;
    padding-top: 35px;
    font-family: "Mrs_Sheppards" !important;
    color: wheat !important;
    font-size: 2rem !important;
  }

  .text {
    font-family: "Mrs_Sheppards" !important;
    padding: 20px 50px 20px 50px;
    color: rgba(78, 56, 30, 255);
    font-size: 2rem;
  }

  .button {
    font-family: "Mrs_Sheppards" !important;
    font-size: 1.5rem;

    margin: 20px 40px 20px 100px;
    padding: 0.3rem 0.9rem;

    width: 100px;
    height: 50px;
    border-radius: 30px 20px 30px 20px;
    background-color: $buttonColor;
    color: wheat !important;
    cursor: pointer;
  }
}
</style>
