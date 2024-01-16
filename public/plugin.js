import { ref, defineCustomElement } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js'
import { CounterMetadata } from './metadata.js'

const CounterComponent = defineCustomElement({
  emits: ['changed'],
  setup(props, ctx) {

    const count = ref(props.count)

    return { count }
  },
  props: {
    count: String,
    text: String
  },
  methods: {
    increment() {
      this.count++

      this.$emit('changed', { count: this.count })
    },
    decrement() {
      this.count--

      this.$emit('changed', { count: this.count })
    }
  },
  template: `
    {{ text }}: {{ count }} 

    <br>
    <button @click="increment()">
        Increment
    </button>
    <button @click="decrement()">
        Decrement
    </button>
    `,
  styles: [`  
    :host {
      display: flex;
      flex-direction: column;
      background-color: #9041a5;
      color: #fff;
      font-size: 26px;
      padding: 10px;
    }  
  `]
})

zySdk.services.registry.registerComponent(CounterMetadata, CounterComponent)