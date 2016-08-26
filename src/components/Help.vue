<template>
  <div class="container">
    <div class="row">
        <h1>Help</h1>
  {{msg}}
    </div>
</div>
</template>


<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello world!'
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
