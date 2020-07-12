<template>
  <div class="w-5/12 h-12 text-gray-800">
    <label class="block text-gray-700 text-sm font-bold mb-2">
      {{ text }}
    </label>
    <input
      class="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
      type="number"
      :id="infoType"
      v-model="inputValue"
      @keyup="inputInfo"
    />
  </div>
</template>

<script>
export default {
  name: "EdgeInfoInput",
  props: {
    text: {
      type: String,
      require: true,
    },
    infoType: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      inputValue: 0,
    };
  },
  methods: {
    inputInfo() {
      this.$emit("input-" + this.infoType, this.inputValue);
    },
  },
};
</script>
