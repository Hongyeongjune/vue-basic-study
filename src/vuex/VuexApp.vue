<template>
  <div id="vuex-app">
    Parent counter : {{ $store.state.counter }} <br />
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
    <button @click="changeCounter(10)">change</button>
    <child v-bind:num="counter"></child>

    <br />
    Parent counter : {{ getCounter }}
  </div>
</template>

<script>

import Child from "./Child";
import {mapActions, mapGetters, mapMutations} from "vuex";
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
    // addCounter() {
    //   this.$store.commit('addCounter');
    // },
    // subCounter() {
    //   this.$store.dispatch('subCounter')
    // },
    // changeCounter() {
    //   this.$store.commit('changeCounter', 10);
    // },
    ...mapMutations([
        'addCounter',
        'changeCounter'
    ]),
    ...mapActions([
        'subCounter'
    ])
  },
  computed: {
    ...mapGetters([
      'getCounter'
    ])
  }
}
</script>

<style>
#vuex-app {

}
</style>
