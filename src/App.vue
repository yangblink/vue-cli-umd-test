<template>
  <div id="app">
  </div>
</template>

<script>
// var localumd = require('./umd')
/* eslint-disable */
import localumd from './umd.js'
import moduleumd from '../node_modules/umd.copy.js'
console.log('localumd', localumd);  // undefined
console.log('moduleumd', moduleumd); // some string

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
