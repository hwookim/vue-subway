<template>
  <div class="flex relative">
    <div id="slider-controls" class="hidden lg:block xl:block">
      <button
        data-controls="prev"
        aria-controls="customize"
        tabindex="-1"
        class="prev prev-btn top-50 z-10 absolute top-0 left-10px bg-white rounded-full h-8 w-8 text-base text-gray-600 hover:text-gray-400 focus:text-gray-400 -ml-6 focus:outline-none focus:shadow-outline"
      >
        <span class="block" style="transform: scale(-1);">&#x279c;</span>
      </button>
      <button
        aria-controls="customize"
        tabindex="-1"
        data-controls="next"
        class="next next-btn top-50 z-10 absolute top-0 right-10px bg-white rounded-full h-8 w-8 text-base text-gray-600 hover:text-gray-400 focus:text-gray-400 -mr-6 focus:outline-none focus:shadow-outline"
      >
        <span class="block" style="transform: scale(1);">&#x279c;</span>
      </button>
    </div>
    <div class="w-full h-full">
      <div class="subway-lines-slider">
        <edge-item v-for="line in lines" :key="line.id" :line="line" />
      </div>
    </div>
  </div>
</template>

<script>
import tns from "@/assets/lib/slider/tiny-slider";
import EdgeItem from "./EdgeItem";

export default {
  name: "EdgeList",
  components: {
    EdgeItem,
  },
  created() {
    this.$store.dispatch("LOAD_LINE");
  },
  mounted() {
    initSubwayLinesSlider();
  },
  computed: {
    lines() {
      return this.$store.state.lines;
    },
  },
};

const initSubwayLinesSlider = () => {
  tns({
    container: ".subway-lines-slider",
    loop: true,
    slideBy: "page",
    speed: 400,
    autoplayButtonOutput: false,
    mouseDrag: true,
    lazyload: true,
    controlsContainer: "#slider-controls",
    items: 1,
    edgePadding: 25,
  });
};
</script>

<style scoped>
@import "../../assets/lib/slider/tiny-slider.css";
.slider-list {
  height: calc(100vh - 275px);
}
</style>