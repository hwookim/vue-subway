<template>
  <div id="line-input" class="modal-content text-left px-8 py-4">
    <div class="flex justify-center items-center pb-3 pt-3">
      <p class="text-2xl font-bold">노선 정보</p>
    </div>
    <form id="subway-line-create-form" class="mb-4">
      <line-name-input @input-name="inputName" />
      <line-time-input
        @input-start-time="inputStartTime"
        @input-end-time="inputEndTime"
        @input-interval-time="inputIntervalTime"
      />
      <line-color-input @select-color="selectColor" />
      <div class="action-container flex justify-end pt-4">
        <button
          class="modal-close px-4 bg-transparent p-3 rounded text-gray-600 hover:bg-gray-100 hover:text-gray-700 mr-2 text-sm"
          @click.prevent="closeModal"
        >
          취소
        </button>
        <button
          type="submit"
          id="submit-button"
          class="px-4 bg-yellow-500 hover:bg-yellow-400 hover:text-gray-700 text-gray-800 rounded text-white text-sm"
          @click.prevent="addLine"
        >
          확인
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import LineNameInput from "./LineNameInput";
import LineTimeInput from "./LineTimeInput";
import LineColorInput from "./LineColorInput";

export default {
  name: "LineInput",
  components: {
    LineColorInput,
    LineTimeInput,
    LineNameInput,
  },
  data() {
    return {
      lineName: "",
      startTime: "",
      endTime: "",
      intervalTime: "",
      bgColor: null,
    };
  },
  methods: {
    closeModal() {
      this.$store.commit("TOGGLE_MODAL");
    },
    inputName(name) {
      this.lineName = name;
    },
    inputStartTime(startTime) {
      this.startTime = startTime;
    },
    inputEndTime(endTime) {
      this.endTime = endTime;
    },
    inputIntervalTime(intervalTime) {
      this.intervalTime = intervalTime;
    },
    selectColor(color) {
      this.bgColor = color;
    },
    addLine() {
      const line = {
        name: this.lineName,
        startTime: this.startTime,
        endTime: this.endTime,
        intervalTime: this.intervalTime,
        bgColor: this.bgColor,
      };
      this.$store.commit("ADD_LINE", line);
      this.$store.commit("TOGGLE_MODAL");
    },
  },
};
</script>
