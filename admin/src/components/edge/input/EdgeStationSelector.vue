<template>
  <div class="w-5/12 h-12 text-gray-800">
    <label class="block text-gray-700 text-sm font-bold mb-2">
      {{ text }}
    </label>
    <div class="relative">
      <select
        id="previous-select-options"
        class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        v-model="selected"
        @change="selectOption"
      >
        <edge-select-option
          v-for="station in stations"
          :key="station.id"
          :item="station"
        />
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
  name: "EdgeStationSelector",
  components: {
    EdgeSelectOption,
  },
  props: {
    text: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      selected: null,
    };
  },
  created() {
    this.$store.dispatch("LOAD_STATION");
  },
  computed: {
    stations() {
      return this.$store.state.stations;
    },
  },
  methods: {
    selectOption() {
      this.$emit("select-option", this.selected);
    },
  },
};
</script>
