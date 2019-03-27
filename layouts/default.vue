<template>
  <div>
    <header>
      <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a
            class="navbar-item"
            href="https://vuereform.dev"
            aria-label="Go back to Vue Reform's homepage."
          >
            <h1 class="title">Vue Reform</h1>
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-main"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbar-main" class="navbar-menu">
          <div class="navbar-start">
            <a
              class="navbar-item"
              aria-label="Go to Vue Reform's documentation"
              href="https://docs.vuereform.dev"
            >Documentation</a>
          </div>
        </div>
      </nav>
    </header>

    <nuxt/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class extends Vue {
  webpageStructured = {
    type: 'application/ld+json',
    src: JSON.stringify({
      '@context': 'http://schema.org/',
      '@type': 'WebSite',
      name: 'Vue Reform',
      alternateName: 'VueReform',
      url: 'https://vuereform.dev'
    })
  }

  head() {
    return {
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: JSON.stringify(this.webpageStructured),
          type: 'application/ld+json'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.nav-brand {
  font-weight: bold;
}
</style>
