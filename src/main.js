import App from './App.vue'

import { defineCustomElement } from 'vue'

const customElement = defineCustomElement(App)

customElements.define('my-vue-element', customElement)

