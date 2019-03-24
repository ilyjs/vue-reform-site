<template>
  <section class="is-medium hero is-light is-bold">
    <div class="hero-body">
      <div class="container">
        <div class="level">
          <div class="level-item has-text-centered">
            <img src="images/vue-reform-logo.png" width="351" height="161" alt="Vue Reform">
          </div>
        </div>

        <h2 class="subtitle has-text-centered">Form Creation and Rendering for Vue</h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import HelloBoiler from '~/components/helloboiler.vue'

@Component({
  components: {
    HelloBoiler
  }
})
export default class extends Vue {}
</script>
