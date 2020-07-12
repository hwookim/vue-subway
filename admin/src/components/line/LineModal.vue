<template>
  <div
    id="line-modal"
    class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center"
    :class="{ 'opacity-0 pointer-events-none': !isModalActive }"
  >
    <div
      class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
    ></div>
    <div
      class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
    >
      <line-input />
    </div>
  </div>
</template>

<script>
import LineInput from "./input/LineInput";
export default {
  name: "LineModal",
  components: { LineInput },
  computed: {
    isModalActive() {
      return this.$store.state.isModalActive;
    },
  },
  methods: {
    closeModal() {
      this.$store.commit("TOGGLE_MODAL");
    },
  },
};
</script>
