import Vue from "vue";
import Vuex from "vuex";
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
    SET_LINE(state, lines) {
      state.lines = lines;
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
    async LOAD_LINE(context) {
      const lines = await subwayApi.line.getAllDetail();
      context.commit("SET_LINE", lines);
    },
    async ADD_LINE(context, line) {
      await subwayApi.line.create(line);
      await context.dispatch("LOAD_LINE");
    },
    async DELETE_LINE(context, id) {
      await subwayApi.line.delete(id);
      await context.dispatch("LOAD_LINE");
    },
    async ADD_EDGE(context, { lineId, edge }) {
      await subwayApi.line.addEdge(lineId, edge);
      await context.dispatch("LOAD_LINE");
    },
    async DELETE_EDGE(context, { lineId, stationId }) {
      await subwayApi.line.deleteEdge(lineId, stationId);
      await context.dispatch("LOAD_LINE");
    },
  },
  modules: {},
});
