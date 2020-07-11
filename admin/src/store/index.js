import Vue from "vue";
import Vuex from "vuex";
import { MOCK_STATIONS, MOCK_LINES } from "../utils/mock-data";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stations: MOCK_STATIONS,
    lines: MOCK_LINES,
  },
  mutations: {},
  actions: {},
  modules: {},
});
