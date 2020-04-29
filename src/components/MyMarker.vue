<template>
  <l-marker @click="setSidebar" :lat-lng="position" :draggable="false"></l-marker>
</template>

<script>
import { LMarker } from "vue2-leaflet";
export default {
  name: "MyMarker",
  components: {
    LMarker
  },
  data(){
    return{
      loading: true
    }
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
    async setSidebar() {
      await this.$store.dispatch("getCurrentPoint", this.id);
      this.$store.commit('setNav', {id: this.id, value: true});
    }
  }
};
</script>
