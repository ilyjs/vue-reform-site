<template>
  <section class="is-medium hero is-light is-bold">
    <div class="hero-body">
      <div class="container">
        <div class="level">
          <div class="level-item has-text-centered">
            <img src="images/vue-reform-logo.png" width="351" height="161" alt="Vue Reform">
          </div>
        </div>

        <br>

        <h2 class="subtitle has-text-centered">
          <strong>Kickass Forms for Vue</strong>
        </h2>

        <h2 class="subtitle has-text-centered">
          Components to make working with forms in Vue
          <em>fun</em> and
          <em>easy</em>
        </h2>

        <div class="level">
          <div class="level-item has-text-centered">
            <a
              href="https://nodejs.org/api/documentation.html#documentation_stability_index"
              class="has-margin-right-5"
            >
              <img
                src="https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square"
                alt="API stability"
              >
            </a>
            <a href="https://circleci.com/gh/lesharris/vue-reform" class="has-margin-right-5">
              <img
                src="https://circleci.com/gh/lesharris/vue-reform.svg?style=svg"
                alt="Build Status"
              >
            </a>
            <a href="https://www.codefactor.io/repository/github/lesharris/vue-reform">
              <img
                src="https://www.codefactor.io/repository/github/lesharris/vue-reform/badge"
                alt="Code Style Checks"
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class extends Vue {}
</script>
