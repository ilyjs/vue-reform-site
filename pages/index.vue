<template>
 <section class="section">
   <div class="container">
     <h1 class="title"><hello-boiler target="world"/></h1>
      <h2 class="subtitle">
        Looks like your boilerplate is up and running!
      </h2>
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
export default class extends Vue {

}
</script>
