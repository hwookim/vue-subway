<template>
  <div class="subway-line-item border border-gray-200 py-2 px-4 text-gray-800">
    <span
      class="w-3 h-3 rounded-full inline-block mr-1"
      :class="line.bgColor"
    ></span>
    <span class="line-name">{{ line.name }}</span>
    <button
      class="hover:bg-gray-300 hover:text-gray-500 text-gray-300 px-1 rounded-full float-right"
    >
      <span class="mdi mdi-delete"></span>
    </button>
    <button
      class="hover:bg-gray-300 hover:text-gray-500 text-gray-300 px-1 rounded-full float-right"
    >
      <span class="mdi mdi-pencil"></span>
    </button>
  </div>
</template>

<script>
export default {
  name: "LineItem",
  props: {
    line: {
      type: Object,
      required: true,
    },
  },
};
</script>
