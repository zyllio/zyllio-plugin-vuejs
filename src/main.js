/* eslint-disable no-undef */
/// <reference types="@zyllio/zy-sdk" />

import App from './App.vue'

import { defineCustomElement } from 'vue'
import { CounterMetadata } from './metadata'

const customElement = defineCustomElement(App)

zySdk.services.registry.registerComponent(CounterMetadata, customElement)
