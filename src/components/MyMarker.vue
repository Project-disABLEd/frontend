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
    position: {
      type: Object,
      default: () => {}
    },
    id: {
      type: Number,
      default: 0
    }
  },
  methods: {
    toggleSidebar: function() {
      this.$store.commit('toggleNav', this.id)
    }
  }
};
</script>
