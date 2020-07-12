import Vue from "vue";
import Vuex from "vuex";
import { MOCK_STATIONS, MOCK_LINES } from "../utils/mock-data";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isModalActive: false,
    stations: [],
    stationId: 9,
    lines: [],
    lineId: 4,
  },
  mutations: {
    LOAD_STATION(state) {
      state.stations = MOCK_STATIONS;
    },
    ADD_STATION(state, name) {
      const station = {
        id: state.stationId++,
        name: name,
      };
      state.stations.push(station);
    },
    DELETE_STATION(state, id) {
      state.stations = state.stations.filter((station) => station.id !== id);
    },
    LOAD_LINE(state) {
      state.stations = MOCK_LINES;
    },
    TOGGLE_MODAL(state) {
      state.isModalActive = !state.isModalActive;
    },
  },
  actions: {},
  modules: {},
});
