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
      <div id="subway-line-color-select-container" class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="subway-line-color"
        >
          노선 색상
        </label>
        <input
          placeholder="색상을 선택해주세요"
          class="bg-gray-200 mb-4 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="subway-line-color"
          type="text"
          disabled
          v-model="selectedColor"
        />
      </div>
      <color-selector @select-color="selectColor" />

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
        >
          확인
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import ColorSelector from "./ColorSelector";
import LineNameInput from "./LineNameInput";
import LineTimeInput from "./LineTimeInput";

export default {
  name: "LineInput",
  components: {
    LineTimeInput,
    LineNameInput,
    ColorSelector,
  },
  data() {
    return {
      lineName: "",
      startTime: "",
      endTime: "",
      intervalTime: "",
      selectedColor: null,
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
      this.selectedColor = color;
    },
  },
};
</script>
