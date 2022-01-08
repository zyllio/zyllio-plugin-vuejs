/* eslint-disable no-undef */
/// <reference types="@zyllio/zy-sdk" />

import App from './App.vue'

import { defineCustomElement } from 'vue'
import { RatingMetadata } from './metadata'

const customElement = defineCustomElement(App)

zySdk.services.registry.registerComponent(RatingMetadata, customElement)
