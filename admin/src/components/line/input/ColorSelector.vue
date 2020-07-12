<template>
  <div>
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
  name: "ColorSelector",
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
      this.$emit("select-color", color);
    },
  },
};
</script>
