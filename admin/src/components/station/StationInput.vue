<template>
  <div id="station-input" class="mb-4">
    <input
      class="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
      id="station-name"
      type="text"
      autocomplete="off"
      placeholder="역 이름을 추가해주세요."
    />
    <button
      id="station-add-btn"
      class="inline-block text-sm bg-yellow-500 hover:bg-yellow-400 hover:text-gray-700 text-gray-800 font-bold py-2 px-4 rounded"
    >
      추가
    </button>
  </div>
</template>

<script>
export default {
  name: "StationInput",
};
</script>
