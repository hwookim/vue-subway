<template>
  <div class="w-1/3 pr-2">
    <label class="block text-gray-700 text-sm font-bold mb-2">
      {{ text }}
      <input
        type="text"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        :placeholder="text"
        v-model="inputValue"
        @keyup="inputTime"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "eachTimeInput",
  props: {
    text: {
      type: String,
      required: true,
    },
    timeType: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    inputTime() {
      this.$emit(this.timeType, this.timeType, this.inputValue);
    },
  },
};
</script>
