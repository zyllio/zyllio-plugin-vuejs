import { ref, defineCustomElement } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js'

import { CounterMetadata } from './metadata.js'

const CounterComponent = defineCustomElement({
  emits: ['changed'],
  setup(props) {

    const countProp = (isNaN(props.count)) ? 0 : props.count

    const count = ref(countProp)

    return { count }
  },
  props: {
    count: Number,
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
    <label>{{ text }}</label>
    <div class="container">    
      <div class="value" >{{ count }}</div>
      <button @click="decrement()">-</button>
      <button @click="increment()">+</button>
    </div> 
  `,
  styles: [`  
    :host {
      display: flex;
      flex-direction: column;
      color: var(--theme-text-color);
      font-size: 26px;
      padding: 10px;
    }  

    .container {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    label {
      font-size: 20px;
      font-weight: bold;
    }

    .value {
      font-size: 20px;
      min-width: 100px;
      flex-grow: 1;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: var(--background-color);
      color: var(--color);
      border: none;
      border-radius: 50%;
      font-size: 30px;
      cursor: pointer;
    }
  `]
})

zySdk.services.registry.registerComponent(CounterMetadata, CounterComponent)