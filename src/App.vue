<template>
  <div id="view">
    <router-view />
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style lang="scss">
@font-face {
  font-family: "Mrs_Sheppards";
  src: local("Mrs_Sheppards"),
    url(./fonts/Mrs_Sheppards/MrsSheppards-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Lobster";
  src: local("Lobster"),
    url(./fonts/Lobster/Lobster-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Satisfy";
  src: local("Satisfy"),
    url(./fonts/Satisfy/Satisfy-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Permanent_Marker";
  src: local("Permanent_Marker"),
    url(./fonts/Permanent_Marker/PermanentMarker-Regular.ttf) format("truetype");
}
</style>
