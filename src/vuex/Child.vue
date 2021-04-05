<template>
  <div>
    <hr>
    Child counter : {{ $store.state.counter }} <br>
    <button>+</button>
    <button>-</button>

    <br />
    Child counter : {{ childCounter }}
  </div>
</template>

<script>
export default {
  name: "Child",
  computed: {
    childCounter() {
      return this.$store.getters.getCounter;
    }
  }
}
</script>

<style scoped>

</style>