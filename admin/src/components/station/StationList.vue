<template>
  <div id="station-list" class="w-full">
    <station-item
      v-for="station in stations"
      :key="station.id"
      :station="station"
    />
  </div>
</template>

<script>
import StationItem from "./StationItem";

export default {
  name: "StationList",
  components: {
    StationItem,
  },
  computed: {
    stations() {
      return this.$store.state.stations;
    },
  },
};
</script>

<style>
#station-name {
  width: calc(100% - 61px);
}
</style>
