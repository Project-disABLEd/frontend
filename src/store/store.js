import Vue from "vue";
import Vuex from "vuex";
import instance from "@/api";
import L from "leaflet";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isNavOpen: false,
    points: [],
    positions: [],
    ids: [],
    currentPoint: [],
    currentID: 0
  },
  mutations: {
    toggleNav(state, id) {
      state.isNavOpen = !state.isNavOpen;
      if (id) {
        state.currentID = id;
      }
    },
    setNav(state, payload) {
      state.isNavOpen = payload.value;
      if (payload.id && state.isNavOpen === true) {
        state.currentID = payload.id;
      }
    },
    pushPoints: (state, dataPoint) => {
      state.points.push(dataPoint);
    },
    pushPositions: (state, data) => {
      state.positions.push(data);
    },
    pushIDs: (state, data) => {
      state.ids.push(data);
    },
    setCurrentPoint: (state, data) => {
      state.currentPoint = data;
    }
  },
  getters: {
    getCurrentPoint: state => {
      return state.currentPoint;
    },
    getPositions: state => {
      return state.positions;
    },
    getIDs: state => {
      return state.ids;
    }
  },
  actions: {
    async apiInit(context) {
      let response = await instance.get(
        process.env.VUE_APP_HOSTNAME + "/points/",
        {
          params: {}
        }
      );
      const json = response.data;
      const count = Object.keys(response.data).length;
      json.forEach(point => context.commit("pushPoints", point));
      for (let i = 0; i < count; i++) {
        context.commit(
          "pushPositions",
          L.latLng(json[i].latitude, json[i].longitude)
        );
        context.commit("pushIDs", json[i].ID);
      }
    },
    async getCurrentPoint(context, id) {
      let currentID = id;
      console.log(currentID);
      let response = await instance.get(
        process.env.VUE_APP_HOSTNAME + "/points/" + currentID,
        {
          params: {}
        }
      );
      context.commit("setCurrentPoint", response.data);
    }
  }
});
