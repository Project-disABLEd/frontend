import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isNavOpen: false
  },
  mutations: {
    toggleNav(state) {
      state.isNavOpen = !state.isNavOpen
    }
  }
})
