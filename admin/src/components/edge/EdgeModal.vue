<template>
  <div
    id="edge-modal"
    class="modal z-10 fixed w-full h-full top-0 left-0 flex items-center justify-center"
    :class="{ 'opacity-0 pointer-events-none': !isModalActive }"
  >
    <div
      class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
    ></div>
    <div
      class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
    >
      <div class="modal-content text-left px-8 py-4">
        <div class="flex justify-center items-center pb-3 pt-3">
          <p class="text-2xl font-bold">구간 추가</p>
        </div>

        <form class="mb-4">
          <edge-line-input @select-option="selectLine" />
          <div class="flex flex-wrap mb-10 w-full">
            <div class="w-5/12 h-12 text-gray-800">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                이전역
              </label>
              <div class="relative">
                <select
                  id="previous-select-options"
                  class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
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
            <div
              class="w-2/12 h-12 text-center text-gray-800 flex justify-center items-center relative top-28px"
            >
              <span
                class="mdi mdi-arrow-left-right-bold relative bottom-6px text-lg"
              ></span>
            </div>
            <div class="w-5/12 h-12 text-gray-800">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                대상역
              </label>
              <select
                id="next-station-select-options"
                class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
              </select>
            </div>
          </div>

          <div class="flex flex-wrap mb-10 w-full">
            <div class="w-5/12 h-12 text-gray-800">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                거리
              </label>
              <input
                class="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                id="distance"
                type="number"
                value="0"
              />
            </div>
            <div class="w-2/12 h-12 text-gray-800"></div>
            <div class="w-5/12 h-12 text-gray-800">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                연결 시간
              </label>
              <input
                class="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                id="duration"
                type="number"
                value="0"
              />
            </div>
          </div>

          <div class="flex justify-end pt-4">
            <button
              class="modal-close px-4 bg-transparent p-3 rounded text-gray-600 hover:bg-gray-100 hover:text-gray-700 mr-2 text-sm"
              @click.prevent="closeModal"
            >
              취소
            </button>
            <button
              type="submit"
              id="create-edge-button"
              class="px-4 bg-yellow-500 hover:bg-yellow-400 hover:text-gray-700 text-gray-800 rounded text-white text-sm"
            >
              확인
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import EdgeLineInput from "./input/EdgeLineInput";
export default {
  name: "EdgeModal",
  components: {
    EdgeLineInput,
  },
  data() {
    return {
      lineId: null,
    };
  },
  computed: {
    isModalActive() {
      return this.$store.state.isModalActive;
    },
  },
  methods: {
    closeModal() {
      this.$store.commit("TOGGLE_MODAL");
    },
    selectLine(lineId) {
      this.lineId = lineId;
    },
  },
};
</script>
