<template>
  <div class="mt-5 flex subway-lines-container relative overflow-y-auto">
    <div id="subway-line-list" class="w-full">
      <line-item v-for="line in lines" :key="line.id" :line="line" />
    </div>
  </div>
</template>

<script>
import LineItem from "./LineItem";

export default {
  name: "LineList",
  components: {
    LineItem,
  },
  created() {
    this.$store.dispatch("LOAD_LINE");
  },
  computed: {
    lines() {
      return this.$store.state.lines;
    },
  },
};
</script>

<style>
.subway-lines-container {
  max-height: calc(100vh - 450px);
}
</style>
