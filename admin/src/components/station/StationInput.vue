<template>
  <div id="station-input" class="mb-4">
    <input
      class="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
      id="station-name"
      type="text"
      autocomplete="off"
      placeholder="역 이름을 추가해주세요."
      v-model="inputValue"
      @keypress.enter="addStation"
    />
    <button
      id="station-add-btn"
      class="inline-block text-sm bg-yellow-500 hover:bg-yellow-400 hover:text-gray-700 text-gray-800 font-bold py-2 px-4 rounded"
      @click="addStation"
    >
      추가
    </button>
  </div>
</template>

<script>
import { ERROR_MESSAGE } from "../../utils/constants";

export default {
  name: "StationInput",
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    validateName() {
      if (!this.inputValue) {
        alert(ERROR_MESSAGE.NOT_EMPTY);
        return true;
      }

      if (this.inputValue.includes(` `)) {
        alert(ERROR_MESSAGE.INCLUDE_SPACE);
        return true;
      }

      const hasNumber = /\d/g.test(this.inputValue);
      if (hasNumber) {
        alert(ERROR_MESSAGE.INCLUDE_NUMBER);
        return true;
      }

      const isExisting = this.$store.state.stations.some(
        (station) => station.name === this.inputValue,
      );
      if (isExisting) {
        alert(ERROR_MESSAGE.DUPLICATION);
        return true;
      }

      return false;
    },
    addStation() {
      if (this.validateName()) {
        return;
      }
      this.$store.commit("ADD_STATION", this.inputValue);
      this.inputValue = "";
    },
  },
};
</script>
