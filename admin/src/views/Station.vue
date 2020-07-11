<template>
  <div id="station" class="flex justify-center md:py-10 lg:py-10 app-container">
    <div class="max-w-md width-450px rounded bg-white shadow-lg p-6">
      <div class="font-bold text-xl mb-3 text-center">지하철역 관리</div>
      <station-input />
      <div class="mt-5 flex station-list-container relative overflow-y-auto">
        <station-list />
      </div>
    </div>
  </div>
</template>

<script>
import StationInput from "../components/station/StationInput";
import StationList from "../components/station/StationList";

export default {
  name: "Station",
  components: {
    StationInput,
    StationList,
  },
};
</script>

<style>
.station-list-container {
  max-height: calc(100% - 100px);
}
</style>
