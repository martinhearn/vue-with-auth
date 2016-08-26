<template>
  <div v-if="$auth.ready()" id="app">
    <section class="app-main">
      <div class="container is-fluid is-marginless app-content">
        <router-view
          class="animated"
          transition="fade"
          transition-mode="out-in"
          keep-alive>
        </router-view>
      </div>
    </section>
  </div>
  <div v-if="!$auth.ready()">
    Site is loading...
  </div>
</template>



<script>
require('../node_modules/bootstrap/dist/css/bootstrap.min.css')

export default {

}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
