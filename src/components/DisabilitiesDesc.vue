<template>
  <div class="disablilities desc">
    <section>
      <b-collapse class="card" aria-id="contentIdForA11y3">
        <div
          slot="trigger" 
          slot-scope="props"
          class="card-header"
          role="button"
          aria-controls="contentIdForA11y3">
          <a class="card-header-icon">
            <b-icon style="color:green;" v-if="levelOfSupport === 2" class="fas fa-thumbs-up"></b-icon>
            <b-icon style="color:gold;" v-if="levelOfSupport === 1" class="fas fa-exclamation-triangle"></b-icon>
            <b-icon style="color:grey;" v-if="levelOfSupport === 0" class="fas fa-question-circle"></b-icon>
            <b-icon style="color:red;" v-if="levelOfSupport === -1" class="fas fa-thumbs-down"></b-icon>
          </a>
          <p class="card-header-title">
            {{disability}}
          </p>
          <a class="card-header-icon">
            <b-icon class="fas fa-wheelchair"></b-icon>
          </a>
          <a v-if="!!desc" class="card-header-icon">
            <b-icon
              :icon="props.open ? 'menu-down' : 'menu-up'">
            </b-icon>
          </a>
          </div>
          <div v-if="!!desc" class="card-content">
            <div class="content">
              {{desc}}
            </div>
          </div>
      </b-collapse>
    </section>
  </div>
</template>

<script>
export default {
  name: "DisabilitiesDesc",
  props: {
    disability: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    },
    levelOfSupport: {
      type: Number,
      default: 0
    }
  }
}
</script>
