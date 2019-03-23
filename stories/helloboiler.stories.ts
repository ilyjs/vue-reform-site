import { storiesOf } from '@storybook/vue'

import HelloBoiler from '../components/helloboiler.vue'

storiesOf('HelloBoiler', module).add('default', () => ({
  components: {
    'hello-boiler': HelloBoiler
  },
  template: `<hello-boiler target="world" />`
}))
