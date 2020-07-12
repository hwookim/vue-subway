<template>
  <div
    id="edge-modal"
    class="modal z-10 fixed w-full h-full top-0 left-0 flex items-center justify-center"
    :class="{ 'opacity-0 pointer-events-none': !isModalActive }"
  >
    <div
      class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
    ></div>
    <div
      class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
    >
      <div class="modal-content text-left px-8 py-4">
        <div class="flex justify-center items-center pb-3 pt-3">
          <p class="text-2xl font-bold">구간 추가</p>
        </div>

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
            >
              확인
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import EdgeLineInput from "./input/EdgeLineInput";
import EdgeStationInput from "./input/EdgeStationInput";
import EdgeInfoInput from "./input/EdgeInfoInput";
export default {
  name: "EdgeModal",
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
  computed: {
    isModalActive() {
      return this.$store.state.isModalActive;
    },
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
  },
};
</script>
