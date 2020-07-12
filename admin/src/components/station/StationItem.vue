<template>
  <div
    id="station-item"
    class="list-item border border-gray-200 py-2 px-4 text-gray-800"
  >
    {{ station.name }}
    <button
      class="hover:bg-gray-300 hover:text-gray-500 text-gray-300 px-1 rounded-full float-right"
    >
      <span class="mdi mdi-delete" @click="deleteStation"></span>
    </button>
  </div>
</template>

<script>
export default {
  name: "StationItem",
  props: {
    station: {
      type: Object,
      required: true,
    },
    lineId: {
      type: Number,
      required: false,
    },
  },
  methods: {
    deleteStation() {
      if (!this.lineId) {
        this.$store.commit("DELETE_STATION", this.station.id);
      } else {
        this.$store.commit("DELETE_EDGE", {
          lineId: this.lineId,
          stationId: this.station.id,
        });
      }
    },
  },
};
</script>
