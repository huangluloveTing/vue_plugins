<!--  -->
<template>
    <div>
      <bottomtab slot="bottom" @bottomClick='bottomClick'/>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
</template>

<script>

import api from '../api/api.js'

export default {
    data () {
      return {
        input:'',
        title:'首页',
      };
    },

    components: {
      
    },

    created () {
      console.log('home created')
    },
    mounted() {
    },
    computed: {
    },
    methods: {
      bottomClick(order) {
        console.log('click bottom tab')
        switch (order) {
          case '1':
            this.$router.push('cart')
            break;
          case '2':
            this.$router.push('shop')
            break;
          case '3':
            this.$router.push('terminal')
            break;
          case '4':
            this.$router.push('person')
            break;
          default:
            console.log('default')
            break;
        }
      }
    },
    beforeRouteEnter(to, from, next){
     console.log('home === router to ====') 
     console.log(to)
     console.log(from)
     next()
    }
}
</script>
<style scoped>
  .home-body {
    padding-bottom: 55px;
  }
</style>