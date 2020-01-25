<template>
  <div class="point details">
    <!--<h1></h1>
    <a :href="restaurants.url">{{restaurants.name}}</a> 
    Adres: {{restaurants.user_rating.aggregate_rating}} 
    Kuchnia:{{restaurants.cuisines}}-->
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
