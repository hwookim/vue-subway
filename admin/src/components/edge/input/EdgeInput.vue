<template>
  <form class="mb-4">
    <edge-line-input @select-option="selectLine" />
    <edge-station-input
      @select-pre-station="selectPreStation"
      @select-next-station="selectNextStation"
    />
    <div class="flex flex-wrap mb-10 w-full">
      <edge-info-input
        :text="'거리'"
        :info-type="'distance'"
        @input-distance="inputDistance"
      />
      <div class="w-2/12 h-12 text-gray-800"></div>
      <edge-info-input
        :text="'연결 시간'"
        :info-type="'duration'"
        @input-duration="inputDuration"
      />
    </div>

    <div class="flex justify-end pt-4">
      <button
        class="modal-close px-4 bg-transparent p-3 rounded text-gray-600 hover:bg-gray-100 hover:text-gray-700 mr-2 text-sm"
        @click.prevent="closeModal"
      >
        취소
      </button>
      <button
        type="submit"
        id="create-edge-button"
        class="px-4 bg-yellow-500 hover:bg-yellow-400 hover:text-gray-700 text-gray-800 rounded text-white text-sm"
        @click.prevent="addEdge"
      >
        확인
      </button>
    </div>
  </form>
</template>

<script>
import EdgeLineInput from "./EdgeLineInput";
import EdgeStationInput from "./EdgeStationInput";
import EdgeInfoInput from "./EdgeInfoInput";

export default {
  name: "EdgeInput",
  components: {
    EdgeInfoInput,
    EdgeStationInput,
    EdgeLineInput,
  },
  data() {
    return {
      lineId: null,
      preStationId: null,
      nextStationId: null,
      distance: 0,
      duration: 0,
    };
  },
  methods: {
    closeModal() {
      this.$store.commit("TOGGLE_MODAL");
    },
    selectLine(lineId) {
      this.lineId = lineId;
    },
    selectPreStation(stationId) {
      this.preStationId = stationId;
    },
    selectNextStation(stationId) {
      this.nextStationId = stationId;
    },
    inputDistance(distance) {
      this.distance = distance;
    },
    inputDuration(duration) {
      this.duration = duration;
    },
    addEdge() {
      const edge = {
        lineId: this.lineId,
        preStationId: this.preStationId,
        nextStationId: this.nextStationId,
        distance: this.distance,
        duration: this.duration,
      };
      this.$store.commit("ADD_EDGE", edge);
      this.$store.commit("TOGGLE_MODAL");
    },
  },
};
</script>
