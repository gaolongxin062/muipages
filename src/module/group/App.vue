<template>
  <div id="app">
    <router-view></router-view>
    <a href="word.html">词汇教学</a>
  </div>
</template>

<script>
// import 'common/css/reset.css'

export default {
  name: 'app'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
