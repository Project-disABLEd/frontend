<template>
  <div>
    <navbar></navbar>
    <main-map id="full_div"></main-map>
    <sidebar>
      <!--- Put sidebar content here --->
      <div style="text-align: right" @click="setSidebar">
        <b-icon icon="close" size="is-medium"></b-icon>
      </div>
      <point-details></point-details>
    </sidebar>
  </div>
</template>

<script>
import MainMap from "@/components/MainMap.vue";
import Sidebar from "@/components/Sidebar.vue";
import PointDetails from "@/components/PointDetails.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    MainMap,
    Sidebar,
    PointDetails,
    Navbar
  },
  data() {
    return {
      currentView: "MainMap"
    };
  },
  async created() {
    await this.$store.dispatch("apiInit");
  },
  methods: {
    setSidebar: function() {
      this.$store.commit("setNav", { id: undefined, value: false });
    }
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
  position: fixed;
  overflow-x: auto;
  overflow-y: hidden;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
navbar {
  z-index: 10;
}
</style>
