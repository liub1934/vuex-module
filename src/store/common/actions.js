import * as types from "./mutation-types";
export default {
  commonAction: ({ commit }, params) => {
    commit(types.SET_MODULE, params.module);
    commit(types.SET_NAME, params.name);
  }
};
