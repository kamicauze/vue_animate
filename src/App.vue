<template>
  <div id="app">
    <home/>
  </div>
</template>

<script>
import home from './components/home.vue'

export default {
  name: 'app',
  components: {
    home
  }
}

</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
