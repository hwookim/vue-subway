<template>
  <div class="flex flex-wrap mb-10 w-full">
    <edge-station-selector :text="'이전역'" @select-option="selectPreStation" />
    <div
      class="w-2/12 h-12 text-center text-gray-800 flex justify-center items-center relative top-28px"
    >
      <span
        class="mdi mdi-arrow-left-right-bold relative bottom-6px text-lg"
      ></span>
    </div>
    <edge-station-selector
      :text="'대상역'"
      @select-option="selectNextStation"
    />
  </div>
</template>

<script>
import EdgeStationSelector from "./EdgeStationSelector";

export default {
  name: "EdgeStationInput",
  components: {
    EdgeStationSelector,
  },
  methods: {
    selectPreStation(stationId) {
      this.$emit("select-pre-station", stationId);
    },
    selectNextStation(stationId) {
      this.$emit("select-next-station", stationId);
    },
  },
};
</script>
