<template>
  <div>
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
    <span v-for="(color, index) in colorData" :key="index">
      <button
        class="color-select-option button w-6 h-6 font-bold p-1 rounded"
        :class="[color.bgColor, color.hoverColor]"
        @click.prevent="selectColor(color.bgColor)"
      ></button>
      <br v-if="isNewLine(index)" />
    </span>
  </div>
</template>

<script>
import { LINE_COLOR_DATA } from "@/utils/color-data";

export default {
  name: "LineColorInput",
  data() {
    return {
      selectedColor: "",
    };
  },
  computed: {
    colorData() {
      return LINE_COLOR_DATA;
    },
  },
  methods: {
    isNewLine(index) {
      return (index + 1) % 7 === 0;
    },
    selectColor(color) {
      this.selectedColor = color;
      this.$emit("select-color", color);
    },
  },
};
</script>
