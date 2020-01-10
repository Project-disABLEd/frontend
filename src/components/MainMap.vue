<template>
  <div>
    <l-map :zoom="zoom" :center="center" style="height: 100%">
      <l-tile-layer :url="url" :attribution="attribution" />
      <my-marker :position="markerpos" />
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";
import { latLng } from "leaflet";
import MyMarker from "./MyMarker.vue";
export default {
  name: "MainMap",
  components: {
    LMap,
    LTileLayer,
    MyMarker
  },
  data() {
    return {
      zoom: 12,
      center: latLng(50.06465, 19.94498),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      markerpos: latLng(50.025276, 19.939498)
    };
  }
};
</script>