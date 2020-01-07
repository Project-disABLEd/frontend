<template>
  <l-marker :lat-lng="position" :draggable="false" @click="toggleSidebar"></l-marker>
</template>

<script>
import { LMarker } from "vue2-leaflet";
import { mutations } from "../store.js";
export default {
  name: "MyMarker",
  components: {
    LMarker
  },
  props: {
    text: {
      type: String,
      default: ""
    },
    position: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
      default: ""
    }
  },
  methods: {
    toggleSidebar: function() {
      mutations.toggleNav();
    }
  }
};
</script>
