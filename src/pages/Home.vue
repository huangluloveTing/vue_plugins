<!--  -->
<template>
    <page title="订单" showHeader>
        <bottomtab slot="bottom" @bottomClick='bottomClick'/>
        <div slot="body" class="home-body">
          <keep-alive>
            <router-view />
          </keep-alive>
        </div>
    </page>
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
    }
}
</script>
<style scoped>
  .home-body {
    padding-bottom: 55px;
  }
</style>