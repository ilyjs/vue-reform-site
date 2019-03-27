import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'

@Component({})
export default class extends Vue {
  structuredData = {}
  get _structuredData() {
    return {
      type: 'application/ld+json',
      src: { ...this.structuredData }
    }
  }

  head() {
    return {
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: JSON.stringify(this._structuredData),
          type: 'application/ld+json'
        }
      ]
    }
  }
}
