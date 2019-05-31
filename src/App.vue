<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  beforeCreate() {
  },
  watch: {
    // '$route':{
    //   handler:function($new , $old) {
    //     console.log('router go ')
    //     console.log($new , $old)
    //   }
    // }
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
}
body {margin:0;}
</style>
