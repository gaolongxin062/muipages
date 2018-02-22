<template>
  <div id="app">
    <img src="../../assets/logo.png">
    <a href="group.html">班组管理</a>
  </div>
</template>

<script>
// import 'common/css/reset.css'
import Hello from '../../components/HelloWorld'

export default {
  name: 'app',
  components: {
    Hello
  }
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
