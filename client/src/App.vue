<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
}

body {
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  height: 100vh;
}

.header-button {
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  border-radius: 1rem;
  font-weight: bold;
  color: white;
  background-color: #ffb300;
}

.fs { font-size: 1.3em; }
</style>
