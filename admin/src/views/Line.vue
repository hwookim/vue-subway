<template>
  <div id="line" class="flex justify-center md:py-10 lg:py-10 app-container">
    <div class="max-w-md width-450px rounded bg-white shadow-lg p-6">
      <div>
        <div class="font-bold text-xl mb-4 relative w-full flex items-stretch">
          <div class="flex-1"></div>
          <div class="flex-1 text-center">노선 관리</div>
          <div class="flex-1 flex justify-end">
            <button
              id="subway-line-create-btn"
              class="modal-open bg-transparent bg-yellow-500 hover:bg-yellow-400 hover:text-gray-700 text-gray-800 text-sm px-3 py-1 rounded"
            >
              노선 추가
            </button>
          </div>
        </div>
        <div class="lines-info flex flex-wrap mb-3 w-full">
          <div class="w-1/2 p-2 text-center text-gray-800 bg-gray-200">
            첫차 시간
          </div>
          <div class="w-1/2 p-2 text-center text-gray-800 bg-gray-100">
            05:00
          </div>
          <div class="w-1/2 p-2 text-center text-gray-800 bg-gray-200">
            막차 시간
          </div>
          <div class="w-1/2 p-2 text-center text-gray-800 bg-gray-100">
            23:30
          </div>
          <div class="w-1/2 p-2 text-center text-gray-800 bg-gray-200">
            간격
          </div>
          <div class="w-1/2 p-2 text-center text-gray-800 bg-gray-100">
            10분
          </div>
        </div>
      </div>
      <div class="mt-5 flex subway-lines-container relative overflow-y-auto">
        <div id="subway-line-list" class="w-full">
          <!--          {{#each lines}}-->
          <!--          <div class="subway-line-item border border-gray-200 py-2 px-4 text-gray-800" data-line-id="{{id}}">-->
          <!--            <span class="${line.bgColor} w-3 h-3 rounded-full inline-block mr-1"></span>-->
          <!--            <span class="line-name">{{name}}</span>-->
          <!--            <button class="hover:bg-gray-300 hover:text-gray-500 text-gray-300 px-1 rounded-full float-right">-->
          <!--              <span class="mdi mdi-delete"></span>-->
          <!--            </button>-->
          <!--            <button class="hover:bg-gray-300 hover:text-gray-500 text-gray-300 px-1 rounded-full float-right">-->
          <!--              <span class="mdi mdi-pencil"></span>-->
          <!--            </button>-->
          <!--          </div>-->
          <!--          {{/each}}-->
          <div
            class="subway-line-item border border-gray-200 py-2 px-4 text-gray-800"
          >
            <span
              class="${line.bgColor} w-3 h-3 rounded-full inline-block mr-1"
            ></span>
            <span class="line-name"></span>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Line",
};
</script>

<style>
.subway-lines-container {
  max-height: calc(100vh - 450px);
}
</style>