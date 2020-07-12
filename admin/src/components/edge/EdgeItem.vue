<template>
  <div class="subway-line-item inline-block w-1/2 px-2" :data-id="line.id">
    <div class="rounded-sm w-full slider-list">
      <div class="border lint-name px-4 py-1" :class="line.bgColor">
        {{ line.name }}
      </div>
      <div class="overflow-y-auto height-90">
        <station-item
          v-for="station in line.stations"
          :key="station.id"
          :station="station"
          :line-id="line.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import StationItem from "../station/StationItem";

export default {
  name: "EdgeItem",
  components: {
    StationItem,
  },
  props: {
    line: {
      type: Object,
      require: true,
    },
  },
};
</script>
