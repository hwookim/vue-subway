<template>
  <div class="mb-4">
    <label
      class="block text-gray-700 text-sm font-bold mb-2"
      for="subway-line-name"
    >
      노선 이름
    </label>
    <input
      id="subway-line-name"
      name="name"
      type="text"
      placeholder="노선 이름을 입력해주세요"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      v-model="inputValue"
      @keyup="inputName"
    />
  </div>
</template>

<script>
export default {
  name: "LineNameInput",
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    inputName() {
      this.$emit("input-name", this.inputValue);
    },
  },
};
</script>
