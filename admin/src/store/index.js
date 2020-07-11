import Vue from "vue";
import Vuex from "vuex";
import MOCK_STATIONS from "../utils/mock-data";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stations: MOCK_STATIONS,
  },
  mutations: {},
  actions: {},
  modules: {},
});
