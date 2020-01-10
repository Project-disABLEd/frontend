<template>
  <div>
    <component :is="currentView" id="full_div" />
    <sidebar>
      <!--- Put sidebar content here --->
    </sidebar>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import MainMap from "@/components/MainMap.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    MainMap,
    Sidebar
  },
  data() {
    return {
      currentView: "MainMap"
    };
  }
};
</script>

<style>
@import "../node_modules/leaflet/dist/leaflet.css";

.leaflet-fake-icon-image-2x {
  background-image: url(../node_modules/leaflet/dist/images/marker-icon-2x.png);
}
.leaflet-fake-icon-shadow {
  background-image: url(../node_modules/leaflet/dist/images/marker-shadow.png);
}
body {
  margin: 0px;
  font-family: Helvetica, Verdana, sans-serif;
}
#full_div {
  position: absolute;
  overflow-x: auto;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
