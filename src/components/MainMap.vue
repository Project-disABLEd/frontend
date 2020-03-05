<template>
  <div>
    <l-map
      @click="setSidebar"
      :zoom="zoom"
      :center="center"
      :options="{zoomControl: false}"
    >
      <l-control-zoom position="topright"></l-control-zoom>
      <l-tile-layer :url="url" :attribution="attribution" />
      <v-marker-cluster>
        <div v-for="(pos, ind) in markerPositions" :key="ind">
          <my-marker :position="pos" :id="IDs[ind]" />
        </div>
      </v-marker-cluster>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LControlZoom } from "vue2-leaflet";
import { latLng } from "leaflet";
import MyMarker from "./MyMarker.vue";
import Vue2LeafletMarkerCluster from "vue2-leaflet-markercluster";

export default {
  name: "MainMap",
  components: {
    LMap,
    LTileLayer,
    MyMarker,
    LControlZoom,
    "v-marker-cluster": Vue2LeafletMarkerCluster
  },
  data() {
    return {
      zoom: 12,
      center: latLng(50.06465, 19.94498),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
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
      this.$store.commit("setNav", { id: undefined, value: false });
    }
  }
};
</script>
<style>
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
</style>>