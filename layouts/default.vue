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
import { Component, mixins } from 'nuxt-property-decorator'
import StructuredData from '../components/mixins/structured-data'

@Component({})
export default class extends mixins(StructuredData) {
  structuredData = {
    "@context": "http://schema.org/",
    "@type": "WebSite",
    "name": "Vue Reform",
    "alternateName": "vuereform",
    "url": "https://vuereform.dev"
  }
}
</script>

<style lang="scss">
.nav-brand {
  font-weight: bold;
}
</style>
