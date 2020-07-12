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
            @click="openModal"
          >
            구간 추가
          </button>
        </div>
      </div>
      <edge-list />
    </div>
    <edge-modal />
  </div>
</template>

<script>
import EdgeModal from "../components/edge/EdgeModal";
import EdgeList from "../components/edge/EdgeList";
export default {
  name: "Edges",
  components: {
    EdgeList,
    EdgeModal,
  },
  methods: {
    openModal() {
      this.$store.commit("TOGGLE_MODAL");
    },
  },
};
</script>
