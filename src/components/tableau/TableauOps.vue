<template>
    <!-- <b-container class="tableau-ops">
    <b-row align-v="center" cols="3">
      <b-col v-for="(slide, index) in slides" :key="index" >
        <b-img thumbnail rounded fluid :src="slide" width="180" alt="Image 1" />
      </b-col>
    </b-row>
  </b-container> -->
    <div class="tableau-ops">
        <div class="slide-container">
            <b-img
                v-for="(slide, index) in slides"
                :key="`${index}-ops`"
                thumbnail
                rounded
                fluid
                :src="slide"
                class="tableau-slide"
                alt="Image 1"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "TableauOps",
    setup() {
        const slides = [
            "/images/PR2_West Card20.png",
            "/images/Empire card15.png",
            "/images/PR2_East Card68.png",
            "/images/PR2_East Card69.png",
            "/images/PR2_East Card70.png",
            "/images/PR2_East Card71.png",
        ];

        return {
            slides,
        };
    },
};
</script>

<style lang="scss" scoped>
@import "./../../assets/colors.scss";

.tableau-ops {
    width: 40vw;
    display: flex;
    border: 5px green solid;
}

.slide-container {
    display: flex;
    overflow-y: scroll;
    border: 5px yellow solid;
}

.tableau-slide {
    // display: block;
    object-fit: cover;
    width: 10.5rem !important;
    height: auto;

    border-width: 1px;
    border-radius: 5px;
    margin: 5px;

    //   box-shadow: inset 0px 12px 27px 5px $sandColor;
}
</style>
