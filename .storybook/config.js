import { configure } from '@storybook/vue'

import Vue from 'vue'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'

import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from '@fortawesome/vue-fontawesome'

config.autoAddCss = false
library.add(fab, fal)

Vue.component('fa', FontAwesomeIcon)
Vue.component('fa-layers', FontAwesomeLayers)
Vue.component('fa-layers-text', FontAwesomeLayersText)

const req = require.context('../stories', true, /.stories.(j|t)s$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
