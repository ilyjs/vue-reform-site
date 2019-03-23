import { shallowMount } from '@vue/test-utils'
import HelloBoiler from '../components/helloboiler.vue'

describe('Card', () => {
  const targetProp: string = 'world'

  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(HelloBoiler, {
      propsData: {
        target: targetProp
      }
    })
  })

  test('is a Vue component', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  test('renders header correctly', () => {
    expect(wrapper.find('span').text()).toBe(`Hello, world!`)
  })
})
