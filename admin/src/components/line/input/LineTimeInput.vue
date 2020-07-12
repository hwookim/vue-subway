<template>
  <div class="flex mb-4">
    <each-time-input
      v-for="(time, index) in times"
      :key="index"
      :text="time.text"
      :time-type="time.timeType"
      @input-start-time="inputTime"
      @input-end-time="inputTime"
      @input-interval-time="inputTime"
    />
  </div>
</template>

<script>
import EachTimeInput from "./EachTimeInput";

export default {
  name: "lineTimeInput",
  components: { EachTimeInput },
  data() {
    return {
      times: [
        {
          text: "첫차 시간",
          timeType: "input-start-time",
        },
        {
          text: "막차 시간",
          timeType: "input-end-time",
        },
        {
          text: "간격",
          timeType: "input-interval-time",
        },
      ],
    };
  },
  methods: {
    inputTime(timeType, inputValue) {
      this.$emit(timeType, inputValue);
    },
  },
};
</script>
