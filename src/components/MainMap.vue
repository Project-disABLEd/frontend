<template>
  <div>
    <l-map style="height: 100%; width: 100%" @click="setSidebar" :zoom="zoom" :center="center" :options="{zoomControl: false}">
      <l-control-zoom position="topright"></l-control-zoom>
      <l-tile-layer :url="url" :attribution="attribution" />
      <div v-for="(pos, ind) in markerPositions" :key="ind">
        <my-marker :position="pos" :id="IDs[ind]"/>
      </div>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LControlZoom } from "vue2-leaflet";
import { latLng } from "leaflet";
import MyMarker from "./MyMarker.vue";
export default {
  name: "MainMap",
  components: {
    LMap,
    LTileLayer,
    MyMarker,
    LControlZoom
  },
  data() {
    return {
      zoom: 12,
      center: latLng(50.06465, 19.94498),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    };
  },
  computed: {
    markerPositions() {
      return this.$store.getters.getPositions;
    },
    IDs() {
      return this.$store.getters.getIDs;
    }
  },
  methods: {
    setSidebar: function() {
      this.$store.commit('setNav', {id: undefined, value: false})
    }
  }
};
</script>