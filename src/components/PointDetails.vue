<template>
  <div class="point details">
    <h1 class="title is-4">{{pointDetails.name}}</h1>
    <h2 class="subtitle is-6">{{pointDetails.address}}</h2>
    <p class="content">{{pointDetails.desc}}</p>
    <disabilities-desc :disability="wheelchair_accessibility" :desc="pointDetails.wheelchair_accessibility_desc" :levelOfSupport="pointDetails.wheelchair_accessibility"></disabilities-desc>
    <disabilities-desc :disability="toilets" :desc="pointDetails.toilets_desc" :levelOfSupport="pointDetails.toilets"></disabilities-desc>
    <disabilities-desc :disability="discounts" :desc="pointDetails.discounts_desc" :levelOfSupport="pointDetails.discounts"></disabilities-desc>
    <disabilities-desc :disability="guide_dog" :desc="pointDetails.guide_dog_desc" :levelOfSupport="pointDetails.guide_dog"></disabilities-desc>
    <disabilities-desc :disability="parking" :desc="pointDetails.parking_desc" :levelOfSupport="pointDetails.parking"></disabilities-desc>
    <disabilities-desc :disability="hearing_imp" :desc="pointDetails.hearing_imp_desc" :levelOfSupport="pointDetails.hearing_imp"></disabilities-desc>
    <disabilities-desc :disability="vision_imp" :desc="pointDetails.vision_imp_desc" :levelOfSupport="pointDetails.vision_imp"></disabilities-desc>
    <disabilities-desc :disability="mental_disorder" :desc="pointDetails.mental_disorder_desc" :levelOfSupport="pointDetails.mental_disorder"></disabilities-desc>
    <disabilities-desc :disability="staff" :desc="pointDetails.staff_desc" :levelOfSupport="pointDetails.staff"></disabilities-desc>
  </div>
</template>
<script>
import DisabilitiesDesc from "./DisabilitiesDesc.vue"

export default {
  name: "PointDetails",
  computed: {
    pointDetails() {
      return this.$store.getters.getCurrentPoint;
    }
  },
  components: {
    DisabilitiesDesc
  },
  data() {
    return { // TODO: translations
      wheelchair_accessibility: "Dostępność dla wózków",
      toilets: "Toalety dla niepełnosprawnych",
      discounts: "Zniżki dla niepełnosprawnych",
      guide_dog: "Wejście z psem przewodnikiem",
      parking: "Parking dla niepełnosprawnych",
      hearing_imp: "Dostępność dla niesłyszących",
      vision_imp: "Dostępność dla niewidomych",
      mental_disorder: "Dostępność dla osób z zaburzeniami psychicznymi",
      staff: "Obsługa przyjazna dla osób niepełnosprawnych"
    };
  },
};
</script>
<style>
</style>
