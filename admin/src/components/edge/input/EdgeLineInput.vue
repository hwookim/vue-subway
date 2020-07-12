<template>
  <div class="relative w-full mt-3 mb-6">
    <label class="block text-gray-700 text-sm font-bold mb-2">
      노선 선택
    </label>
    <div class="relative">
      <select
        id="line-select-options"
        class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        v-model="selected"
        @change="selectOption"
      >
        <edge-select-option v-for="line in lines" :key="line.id" :item="line" />
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
      >
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import EdgeSelectOption from "./EdgeSelectOption";

export default {
  name: "EdgeLineInput",
  components: { EdgeSelectOption },
  data() {
    return {
      selected: null,
    };
  },
  created() {
    this.$store.commit("LOAD_LINE");
  },
  computed: {
    lines() {
      return this.$store.state.lines;
    },
  },
  methods: {
    selectOption() {
      this.$emit("select-option", this.selected);
    },
  },
};
</script>
