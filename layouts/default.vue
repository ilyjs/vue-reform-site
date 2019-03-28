<template>
  <div>
    <header class="header">
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
            @click="toggleNavMobile"
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

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Vue Reform</strong> by
          <a href="https://lesharris.com">Les Harris</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed
          <a
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          >CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import StructuredData from '../components/mixins/structured-data'

@Component({})
export default class extends mixins(StructuredData) {
  structuredData = {
    '@context': 'http://schema.org/',
    '@type': 'WebSite',
    name: 'Vue Reform',
    alternateName: 'vuereform',
    url: 'https://vuereform.dev'
  }

  toggleNavMobile() {
    const burgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    )

    if (Array.isArray(burgers)) {
      for (let item of burgers) {
        const target = document.getElementById(item.dataset.target)

        item.classList.toggle('is-active')

        if (target) {
          target.classList.toggle('is-active')
        }
      }
    }
  }
}
</script>

<style lang="scss">
</style>
