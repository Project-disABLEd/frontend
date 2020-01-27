<template>
  <div class="point details">
    {{pointDetails.name}}
  </div>
</template>
<script>
export default {
  name: "PointDetails",
  computed: {
    pointDetails() {
      return this.$store.getters.getCurrentPoint;
    }
  }
};
</script>
<style>
</style>
