<template>
  <!-- Must not have a single node for some reason  -->
  <div ref="root">ZYLLIO PLUGIN {{ counter }}</div>
  <div></div>
</template>

<script>
/// <reference types="@zyllio/zy-sdk" />

import { ref, onMounted } from "vue";

// function closestElement(selector, el = this) {
//   return (
//     (el && el != document && el != window && el.closest(selector)) ||
//     closestElement(selector, el.getRootNode().host)
//   );
// }

export default {
  name: "App",
  /* /!\ Required for CustomElement wrapper */
  props: {
    dataValue: {
      type: String,
      required: true,
    },
  },
  computed: {
    counter() {
        const propertyValue = this.dataValue
        console.log("propertyValue ", propertyValue);

        const parsed = JSON.parse(propertyValue)
 console.log("parsed ", parsed);

        return parsed.value
    }
  }, 
  
  setup() {
    const root = ref(null);

    onMounted(() => {
      // the DOM element will be assigned to the ref after initial render
      // console.log(root.value); // this is your $el

      // const rootElement = closestElement("custom-vuejs", root.value);

      // eslint-disable-next-line no-undef
      // const value = zySdk.services.component.getPropertyValueAsNumber(
      //   rootElement,
      //   "value"
      // );

      // console.log("value ", value);
    });

    return {
      root,
    };
  },
};
</script>

<style>
</style>
