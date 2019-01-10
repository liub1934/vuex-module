import Vue from "vue";
import Vuex from "vuex";

import common from "./common";
import shop from "./shop";

import createLogger from "vuex/dist/logger";
Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";
export default new Vuex.Store({
  modules: {
    common,
    shop
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
