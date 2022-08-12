<template>
  <!-- Must not have a single node for some reason  -->
  <div class="counter" >Counter = {{ counter }}</div>
  <div></div>
</template>

<script>
/// <reference types="@zyllio/zy-sdk" />

export default {
  
  props: {
    dataValue: {
      type: String,
      required: true,
    },
  },
  computed: {
    counter() {
      const propertyValue = this.dataValue
      const parsed = JSON.parse(propertyValue)

      return parsed.value
    }
  }, 
  styles: [`
    .counter {
      width: 100%;
      height: 60px;
      font-size: 40px;
      color: var(--color);
    }  
  `]
};
</script>


<style scoped>
</style>
