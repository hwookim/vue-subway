import Vue from "vue";
import Vuex from "vuex";
import { MOCK_STATIONS, MOCK_LINES } from "../utils/mock-data";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stations: MOCK_STATIONS,
    stationId: 9,
    lines: MOCK_LINES,
    lineId: 4,
  },
  mutations: {
    ADD_STATION(state, name) {
      const station = {
        id: state.stationId++,
        name: name,
      };
      state.stations.push(station);
    },
  },
  actions: {},
  modules: {},
});
