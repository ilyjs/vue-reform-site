<template>
  <div>
    <section class="hero is-dark is-bold has-margin-top-10">
      <div class="hero-body">
        <div class="container">
          <div class="level">
            <div class="level-item has-text-centered">
              <img src="images/vue-reform-logo-dark.png" alt="Vue Reform" width="350" height="350">
            </div>
          </div>

          <br>

          <h1 class="title has-text-centered">
            <strong>Kickass Forms for Vue</strong>
          </h1>

          <h2 class="subtitle has-text-centered is-family-primary">
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
              <a
                href="https://www.codefactor.io/repository/github/lesharris/vue-reform"
                class="has-margin-right-5"
              >
                <img
                  src="https://www.codefactor.io/repository/github/lesharris/vue-reform/badge"
                  alt="Code Style Checks"
                >
              </a>
              <a href="https://github.com/lesharris/vue-reform">
                <img
                  alt="GitHub"
                  src="https://img.shields.io/github/license/lesharris/vue-reform.svg"
                >
              </a>
            </div>
          </div>
          <div class="level">
            <div class="level-item has-text-centered">
              <a
                href="https://github.com/lesharris/vue-reform"
                target="_blank"
                rel="noreferrer"
                class="button is-large is-primary has-margin-right-5"
              >
                <span class="icon is-medium">
                  <fa :icon="['fab', 'github']"/>
                </span>
                <span>Github</span>
              </a>
              <a
                href="https://docs.vuereform.dev"
                target="_blank"
                rel="noreferrer"
                class="button is-large is-success"
              >
                <span class="icon is-medium">
                  <fa :icon="['fal', 'book-spells']"/>
                </span>
                <span>Docs</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h1 class="title">Hi there!</h1>
        <p>
          Well look at you, you found us super early! This site will be mostly
          dormant until
          <a
            href="https://github.com/lesharris/vue-reform"
          >VueReform</a> is
          further along. Thanks for stopping by!
        </p>
      </div>
    </section>
    <section>
      <div class="container">
        <h1 class="title">Features</h1>
        <p>Lots of cool features here...</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class extends Vue {
  click() {
    console.log('clicked!')
  }
}
</script>
