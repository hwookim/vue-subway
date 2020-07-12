<template>
  <div id="lines" class="flex justify-center md:py-10 lg:py-10 app-container">
    <div class="max-w-md width-450px rounded bg-white shadow-lg p-6">
      <div>
        <div class="font-bold text-xl mb-4 relative w-full flex items-stretch">
          <div class="flex-1"></div>
          <div class="flex-1 text-center">노선 관리</div>
          <div class="flex-1 flex justify-end">
            <button
              id="subway-line-create-btn"
              class="modal-open bg-transparent bg-yellow-500 hover:bg-yellow-400 hover:text-gray-700 text-gray-800 text-sm px-3 py-1 rounded"
              @click="openModal"
            >
              노선 추가
            </button>
          </div>
        </div>
        <div class="lines-info flex flex-wrap mb-3 w-full">
          <line-info />
        </div>
        <line-list />
      </div>
    </div>
    <line-modal />
  </div>
</template>

<script>
import LineInfo from "../components/line/LineInfo";
import LineList from "../components/line/LineList";
import LineModal from "../components/line/LineModal";

export default {
  name: "Lines",
  components: {
    LineModal,
    LineList,
    LineInfo,
  },
  methods: {
    openModal() {
      this.$store.commit("TOGGLE_MODAL");
    },
  },
};
</script>
