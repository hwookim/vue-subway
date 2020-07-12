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
        <edge-input />
      </div>
    </div>
  </div>
</template>

<script>
import EdgeInput from "./input/EdgeInput";
export default {
  name: "EdgeModal",
  components: {
    EdgeInput,
  },
  computed: {
    isModalActive() {
      return this.$store.state.isModalActive;
    },
  },
};
</script>
