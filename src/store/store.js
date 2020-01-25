import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isNavOpen: false,
    points: [],
    positions: [],
    ids: [],
    currentID: 0
  },
  mutations: {
    toggleNav(state, id) {
      state.isNavOpen = !state.isNavOpen;
      if (id) {
        state.currentID = id;
      }
    },
    pushPoints: (state, dataPoint) => {
      state.points.push(dataPoint)
    },
    pushPositions: (state, data) => {
      state.positions.push(data)
    },
    pushIDs: (state, data) => {
      state.ids.push(data)
    }
  },
  getters: {
    getCurrentPoint: state => {
      return state.points.find((point) => point.ID === state.currentID);
    },
    getPositions: state => {
      return state.positions;
    },
    getIDs: state => {
      return state.ids;
    }
  }
})
