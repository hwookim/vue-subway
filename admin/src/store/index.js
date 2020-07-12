import Vue from "vue";
import Vuex from "vuex";
import { MOCK_LINES } from "../utils/mock-data";
import subwayApi from "../api/subway";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isModalActive: false,
    stations: [],
    lines: [],
  },
  mutations: {
    TOGGLE_MODAL(state) {
      state.isModalActive = !state.isModalActive;
    },
    SET_STATION(state, stations) {
      state.stations = stations;
    },
    LOAD_LINE(state) {
      state.lines = MOCK_LINES;
    },
    ADD_LINE(state, line) {
      const newLine = {
        id: state.lineId++,
        ...line,
      };
      state.lines.push(newLine);
    },
    ADD_EDGE(state, edge) {
      const line = state.lines.find((line) => line.id === edge.lineId);
      const stationIndex =
        line.stations.findIndex((station) => station.id === edge.preStationId) +
        1;
      const station = state.stations.find(
        (station) => station.id === edge.nextStationId,
      );
      line.stations = [
        ...line.stations.slice(0, stationIndex),
        station,
        ...line.stations.slice(stationIndex),
      ];
    },
    DELETE_EDGE(state, { lineId, stationId }) {
      const line = state.lines.find((line) => line.id === lineId);
      line.stations = line.stations.filter(
        (station) => station.id !== stationId,
      );
    },
  },
  actions: {
    async LOAD_STATION(context) {
      const stations = await subwayApi.station.getAll();
      context.commit("SET_STATION", stations);
    },
    async ADD_STATION(context, name) {
      await subwayApi.station.create({ name });
      await context.dispatch("LOAD_STATION");
    },
    async DELETE_STATION(context, id) {
      await subwayApi.station.delete(id);
      await context.dispatch("LOAD_STATION");
    },
  },
  modules: {},
});
