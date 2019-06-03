<template>
  <div id="app">
    <keep-alive>
    <router-view />
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  beforeCreate() {
  },
  watch: {
    '$route'(next , pre) {
      console.log('======= app router ========  ')
      console.log(next)
      console.log(pre)
    }
  },
  mounted(){
    console.log(this.$router)
    console.log(this.$route)
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
