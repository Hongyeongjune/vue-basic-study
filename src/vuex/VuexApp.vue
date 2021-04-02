<template>
  <div id="vuex-app">
    Parent counter : {{ $store.state.counter }} <br />
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>

    <child v-bind:num="counter"></child>
  </div>
</template>

<script>

import Child from "./Child";
export default {
  name: 'VuexApp',
  components: {
    Child
  },
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    addCounter() {
      this.$store.state.counter++;
    },
    subCounter() {
      this.$store.state.counter--;
    }
  }
}
</script>

<style>
#vuex-app {

}
</style>
