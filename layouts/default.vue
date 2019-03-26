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
            <img src="/images/vue-reform-logo-nav.png" alt="Vue Reform" width="232" height="21">
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
            <a class="navbar-item" aria-label="Go to Vue Reform's homepage." href="/">Home</a>

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
  head() {
    return {
      script: [
        {
          type: 'application/ld+json',
          src: JSON.stringify({
            '@context': 'http://schema.org/',
            '@type': 'WebSite',
            name: 'Vue Reform',
            alternateName: 'VueReform',
            url: 'https://vuereform.dev'
          })
        }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
