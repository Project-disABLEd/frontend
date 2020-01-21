<template>
  <l-marker :lat-lng="position" :draggable="false" @click="toggleSidebar"></l-marker>
</template>

<script>
import { LMarker } from "vue2-leaflet";
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
      this.$store.commit('toggleNav')
    }
  }
};
</script>
