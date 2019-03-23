<template>
  <span>
    {{ helloMsg }}
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class HelloBoiler extends Vue {
  @Prop({}) target

  get helloMsg() {
    return `Hello, ${this.target}!`
  }
}
</script>
