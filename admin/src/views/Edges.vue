<template>
  <div id="edges" class="flex justify-center md:py-10 lg:py-10 app-container">
    <div class="max-w-md w-full lg:width-450px rounded bg-white shadow-lg p-6">
      <div class="font-bold text-xl mb-4 relative w-full flex items-stretch">
        <div class="flex-1"></div>
        <div class="flex-1 text-center">구간 관리</div>
        <div class="flex-1 flex justify-end">
          <button
            id="subway-line-add-btn"
            class="modal-open bg-transparent bg-yellow-500 hover:bg-yellow-400 hover:text-gray-700 text-gray-800 text-sm px-3 py-1 rounded"
          >
            구간 추가
          </button>
        </div>
      </div>
      <div class="flex relative">
        <div id="slider-controls" class="hidden lg:block xl:block">
          <button
            data-controls="prev"
            aria-controls="customize"
            tabindex="-1"
            class="prev prev-btn top-50 z-10 absolute top-0 left-10px bg-white rounded-full h-8 w-8 text-base text-gray-600 hover:text-gray-400 focus:text-gray-400 -ml-6 focus:outline-none focus:shadow-outline"
          >
            <span class="block" style="transform: scale(-1);">&#x279c;</span>
          </button>
          <button
            aria-controls="customize"
            tabindex="-1"
            data-controls="next"
            class="next next-btn top-50 z-10 absolute top-0 right-10px bg-white rounded-full h-8 w-8 text-base text-gray-600 hover:text-gray-400 focus:text-gray-400 -mr-6 focus:outline-none focus:shadow-outline"
          >
            <span class="block" style="transform: scale(1);">&#x279c;</span>
          </button>
        </div>
        <div class="w-full h-full">
          <div class="subway-lines-slider"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Edges",
};
</script>
