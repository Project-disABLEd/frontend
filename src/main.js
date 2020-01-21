import Vue from "vue";
import { store } from './store/store'
import { Icon } from "leaflet";
import App from "./App";
import "leaflet.icon.glyph";
import "leaflet/dist/leaflet.css";

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

new Vue({
  store,
  render: h => h(App),
}).$mount("#app");